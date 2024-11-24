<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;
use YouTube\YouTubeDownloader;

class VideoProcessingController extends Controller
{
    public function processVideo(Request $request)
    {
        // Validação do link do YouTube
        $request->validate([
            'video_url' => 'required|url'
        ]);

        $videoUrl = $request->input('video_url');
        $client = new Client();

        try {
            // 1. Obter o link direto para o áudio usando YouTubeDownloader
            $downloader = new YouTubeDownloader();
            $downloadLinks = $downloader->getDownloadLinks($videoUrl);

            // Verifica se há formatos de áudio disponíveis
            $audioFormats = $downloadLinks->getAudioFormats();
            \Log::info('Audio formats:', $audioFormats);

            if (empty($audioFormats)) {
                throw new \Exception('Nenhum formato de áudio encontrado para este vídeo.');
            }


            // Obtém o primeiro formato disponível de áudio
            $audioLink = $audioFormats[0]->url ?? null;

            if (!$audioLink) {
                throw new \Exception('Não foi possível obter o link do áudio do vídeo.');
            }

            // 2. Enviar o link do áudio para a API de transcrição
            $transcriptionResponse = $client->post('https://api.assemblyai.com/v2/transcript', [
                'headers' => [
                    'authorization' => env('ASSEMBLYAI_API_KEY'),
                ],
                'json' => [
                    'audio_url' => $audioLink,
                ],
            ]);

            $transcriptionData = json_decode($transcriptionResponse->getBody(), true);
            $transcriptionId = $transcriptionData['id'];

            // 3. Aguardar a transcrição ser concluída
            $transcriptionText = '';
            $transcriptionStatus = 'processing';

            while ($transcriptionStatus === 'processing') {
                $statusResponse = $client->get("https://api.assemblyai.com/v2/transcript/{$transcriptionId}", [
                    'headers' => [
                        'authorization' => env('ASSEMBLYAI_API_KEY'),
                    ],
                ]);

                $statusData = json_decode($statusResponse->getBody(), true);
                $transcriptionStatus = $statusData['status'];

                if ($transcriptionStatus === 'completed') {
                    $transcriptionText = $statusData['text'];
                    break;
                } elseif ($transcriptionStatus === 'failed') {
                    throw new \Exception('A transcrição falhou: ' . ($statusData['error'] ?? 'Erro desconhecido'));
                }

                sleep(5); // Aguarde 5 segundos antes de verificar novamente
            }

            // 4. Gerar perguntas usando GPT-3.5
            if (!empty($transcriptionText)) {
                $gptResponse = $client->post('https://api.openai.com/v1/chat/completions', [
                    'headers' => [
                        'Authorization' => 'Bearer ' . env('OPENAI_API_KEY'),
                        'Content-Type' => 'application/json',
                    ],
                    'json' => [
                        'model' => 'gpt-3.5-turbo',
                        'messages' => [
                            [
                                'role' => 'user',
                                'content' => "Com base no seguinte texto, gere 5 perguntas com múltiplas escolhas e inclua as respostas corretas: {$transcriptionText}"
                            ]
                        ],
                        'max_tokens' => 300,
                    ],
                ]);

                $gptData = json_decode($gptResponse->getBody(), true);
                $questions = $gptData['choices'][0]['message']['content'];

                return response()->json([
                    'message' => 'Processamento concluído com sucesso!',
                    'transcription' => $transcriptionText,
                    'questions' => $questions,
                ], 200);
            } else {
                throw new \Exception('Nenhum texto de transcrição foi retornado.');
            }
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Erro durante o processamento',
                'error' => $e->getMessage(),
            ], 500);
        }
    }
}

<?php
namespace App\Http\Controllers;

use App\Models\Story;
use Illuminate\Http\Request;
use Exception;

class StoryController extends Controller
{


    public function index()
    {
        try {
            // Buscar todas as histórias com as perguntas relacionadas
            $stories = Story::with('questions')->get();

            // Formatar as histórias para o formato esperado pela interface
            $formattedStories = $stories->map(function ($story) {
                return [
                    'id' => $story->id,
                    'slug' => $story->slug,
                    'title' => $story->title,
                    'youtube_video_id' => $story->youtube_video_id,
                    'description' => $story->description,
                    'category' => $story->category,
                    'duration' => $story->duration,
                    'questions' => $story->questions->map(function ($question) {
                        return [
                            'story_id' => $question->story_id,
                            'question' => $question->question,
                            'options' => collect($question->options)->map(function ($option) {
                                return [
                                    'text' => $option['text'],
                                    'is_correct' => $option['is_correct'],
                                ];
                            })->toArray(),
                        ];
                    })->toArray(),
                ];
            });

            return response()->json(['data' => $formattedStories], 200);
        } catch (Exception $e) {
            return response()->json([
                'message' => 'Erro ao buscar as histórias',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    public function store(Request $request)
{
    // Validação dos dados enviados
    $validatedData = $request->validate([
        'slug' => 'required|string|unique:stories,slug',
        'title' => 'required|string',
        'youtube_video_id' => 'required|string', // Aceita inicialmente como string para URLs
        'description' => 'nullable|string',
        'category' => 'required|in:NEW,ANIMATED,EDUCATIONAL,MUSIC,CLASSIC,MODERN,RELIGIOUS,OTHER',
        'duration' => 'nullable|integer',
        'questions' => 'nullable|array',
        'questions.*.question' => 'required|string',
        'questions.*.options' => 'required|array|min:2',
        'questions.*.options.*.text' => 'required|string',
        'questions.*.options.*.is_correct' => 'required|boolean',
    ]);

    try {
        // Extrair o ID do vídeo do YouTube
        $youtubeId = $this->extractYoutubeId($validatedData['youtube_video_id']);
        if (!$youtubeId) {
            return response()->json([
                'message' => 'URL do vídeo do YouTube inválida.',
            ], 400);
        }

        // Criação da história
        $story = Story::create([
            'slug' => $validatedData['slug'],
            'title' => $validatedData['title'],
            'youtube_video_id' => $youtubeId, // Salva apenas o ID
            'description' => $validatedData['description'] ?? null,
            'category' => $validatedData['category'],
            'duration' => $validatedData['duration'] ?? null,
        ]);

        // Adicionar perguntas e respostas
        if (!empty($validatedData['questions'])) {
            foreach ($validatedData['questions'] as $questionData) {
                $story->questions()->create([
                    'question' => $questionData['question'],
                    'options' => $questionData['options'], // Armazena as opções como JSON
                ]);
            }
        }

        return response()->json([
            'message' => 'História adicionada com sucesso!',
            'data' => $story->load('questions'),
        ], 201);
    } catch (Exception $e) {
        return response()->json([
            'message' => 'Erro ao salvar a história',
            'error' => $e->getMessage(),
        ], 500);
    }
}

/**
 * Extrai o ID do vídeo de uma URL do YouTube.
 *
 * @param string $url
 * @return string|null
 */
private function extractYoutubeId(string $url): ?string
{
    // Regex para capturar o ID do vídeo do YouTube
    $pattern = '/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|embed|shorts|watch)|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/';

    if (preg_match($pattern, $url, $matches)) {
        return $matches[1];
    }

    return null;
}




    public function show($id)
{
    try {
        // Buscar a história com as perguntas e opções relacionadas
        $story = Story::with('questions')->findOrFail($id);

        // Formatar o retorno para coincidir com a interface esperada
        $formattedStory = [
            'id' => $story->id,
            'slug' => $story->slug,
            'title' => $story->title,
            'youtube_video_id' => $story->youtube_video_id,
            'description' => $story->description,
            'category' => $story->category,
            'duration' => $story->duration,
            'questions' => $story->questions->map(function ($question) {
                return [
                    'story_id' => $question->story_id,
                    'question' => $question->question,
                    'options' => collect($question->options)->map(function ($option) {
                        return [
                            'text' => $option['text'],
                            'is_correct' => $option['is_correct'],
                        ];
                    })->toArray(),
                ];
            }),
        ];

        return response()->json(['data' => $formattedStory], 200);
    } catch (ModelNotFoundException $e) {
        return response()->json(['message' => 'História não encontrada'], 404);
    } catch (Exception $e) {
        return response()->json(['message' => 'Erro ao buscar a história', 'error' => $e->getMessage()], 500);
    }
}

}


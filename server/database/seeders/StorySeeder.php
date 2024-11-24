<?php

// database/seeders/StorySeeder.php
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Story;
use App\Models\Question;
use App\Models\Option;

class StorySeeder extends Seeder
{
    public function run()
    {
        $stories = [
            [
                'slug' => 'chapeuzinho-vermelho',
                'title' => 'Chapeuzinho Vermelho',
                'youtube_video_id' => 'ImJ8C5gpshs',
                'description' => 'Uma história clássica sobre uma menina e um lobo.',
                'duration' => 742,
                'category' => 'ANIMATED',
                'questions' => [
                    [
                        'question' => 'Qual era a cor do chapéu da menina?',
                        'options' => [
                            ['text' => 'Vermelho', 'is_correct' => true],
                            ['text' => 'Azul', 'is_correct' => false],
                            ['text' => 'Verde', 'is_correct' => false],
                        ]
                    ],
                    [
                        'question' => 'Quem a Chapeuzinho Vermelho encontrou no caminho?',
                        'options' => [
                            ['text' => 'O lobo', 'is_correct' => true],
                            ['text' => 'A avó', 'is_correct' => false],
                            ['text' => 'O caçador', 'is_correct' => false],
                        ]
                    ],
                    [
                        'question' => 'O que o lobo fez com a avó?',
                        'options' => [
                            ['text' => 'Ele a engoliu', 'is_correct' => true],
                            ['text' => 'Ele a libertou', 'is_correct' => false],
                            ['text' => 'Ele a escondeu', 'is_correct' => false],
                        ]
                    ]
                ]
            ],
            [
                'slug' => 'o-gato-de-botas',
                'title' => 'O Gato de Botas',
                'youtube_video_id' => '9VZi9zI8Jso',
                'description' => 'A história do Gato que, com muita astúcia, consegue transformar a vida de seu dono.',
                'duration' => 812,
                'category' => 'CLASSIC',
                'questions' => [
                    [
                        'question' => 'O que o Gato de Botas fez para ajudar seu dono?',
                        'options' => [
                            ['text' => 'Ele o presenteou com riquezas', 'is_correct' => false],
                            ['text' => 'Enganou um ogro e conquistou terras', 'is_correct' => true],
                            ['text' => 'Construiu uma grande mansão', 'is_correct' => false],
                        ]
                    ],
                    [
                        'question' => 'Quem o Gato de Botas enganou?',
                        'options' => [
                            ['text' => 'Um leão', 'is_correct' => false],
                            ['text' => 'Um ogro', 'is_correct' => true],
                            ['text' => 'Um mercador', 'is_correct' => false],
                        ]
                    ],
                    [
                        'question' => 'O que o Gato de Botas usou para conquistar riquezas?',
                        'options' => [
                            ['text' => 'Inteligência', 'is_correct' => true],
                            ['text' => 'Força física', 'is_correct' => false],
                            ['text' => 'Magia', 'is_correct' => false],
                        ]
                    ]
                ]
            ],
            [
                'slug' => 'o-pastor-e-o-lobo',
                'title' => 'O Pastor e o Lobo',
                'youtube_video_id' => 'mScV9UxygH0',
                'description' => 'A fábula sobre a mentira e as consequências de não ser confiável.',
                'duration' => 435,
                'category' => 'CLASSIC',
                'questions' => [
                    [
                        'question' => 'O que o pastor fez quando estava entediado?',
                        'options' => [
                            ['text' => 'Ele mentiu dizendo que havia um lobo', 'is_correct' => true],
                            ['text' => 'Ele foi pescar', 'is_correct' => false],
                            ['text' => 'Ele foi para a cidade', 'is_correct' => false],
                        ]
                    ],
                    [
                        'question' => 'O que aconteceu quando o pastor chamou as pessoas novamente?',
                        'options' => [
                            ['text' => 'Ninguém acreditou nele', 'is_correct' => true],
                            ['text' => 'O lobo apareceu de verdade', 'is_correct' => false],
                            ['text' => 'Ele foi demitido', 'is_correct' => false],
                        ]
                    ],
                    [
                        'question' => 'Qual era a lição da história?',
                        'options' => [
                            ['text' => 'Mentir pode trazer sérias consequências', 'is_correct' => true],
                            ['text' => 'A honestidade é sempre recompensada', 'is_correct' => false],
                            ['text' => 'Sempre confiar nas pessoas', 'is_correct' => false],
                        ]
                    ]
                ]
            ],
            [
                'slug' => 'os-tres-porquinhos',
                'title' => 'Os Três Porquinhos',
                'youtube_video_id' => '9FzqNEh2sJM',
                'description' => 'Os três porquinhos constroem suas casas, mas um lobo ameaça destruí-las.',
                'duration' => 914,
                'category' => 'CLASSIC',
                'questions' => [
                    [
                        'question' => 'Qual material o primeiro porquinho usou para construir sua casa?',
                        'options' => [
                            ['text' => 'Palha', 'is_correct' => true],
                            ['text' => 'Madeira', 'is_correct' => false],
                            ['text' => 'Pedra', 'is_correct' => false],
                        ]
                    ],
                    [
                        'question' => 'Quem conseguiu resistir ao sopro do lobo?',
                        'options' => [
                            ['text' => 'O terceiro porquinho', 'is_correct' => true],
                            ['text' => 'O primeiro porquinho', 'is_correct' => false],
                            ['text' => 'O segundo porquinho', 'is_correct' => false],
                        ]
                    ],
                    [
                        'question' => 'O que o lobo fez para destruir a casa dos porquinhos?',
                        'options' => [
                            ['text' => 'Soprou', 'is_correct' => true],
                            ['text' => 'Queimou', 'is_correct' => false],
                            ['text' => 'Cavou', 'is_correct' => false],
                        ]
                    ]
                ]
            ],
            [
                'slug' => 'branca-de-neve',
                'title' => 'Branca de Neve',
                'youtube_video_id' => 'pE2iZy_y8MQ',
                'description' => 'A história da princesa que enfrenta a maldade da madrasta.',
                'duration' => 915,
                'category' => 'CLASSIC',
                'questions' => [
                    [
                        'question' => 'O que a madrasta de Branca de Neve queria fazer?',
                        'options' => [
                            ['text' => 'Matar Branca de Neve', 'is_correct' => true],
                            ['text' => 'Torná-la rainha', 'is_correct' => false],
                            ['text' => 'Ajudá-la a casar', 'is_correct' => false],
                        ]
                    ],
                    [
                        'question' => 'Quem ajudou Branca de Neve a escapar?',
                        'options' => [
                            ['text' => 'Os sete anões', 'is_correct' => true],
                            ['text' => 'O príncipe', 'is_correct' => false],
                            ['text' => 'A fada madrinha', 'is_correct' => false],
                        ]
                    ],
                    [
                        'question' => 'Qual foi o motivo da madrasta querer matar Branca de Neve?',
                        'options' => [
                            ['text' => 'Ela queria ser a mais bonita', 'is_correct' => true],
                            ['text' => 'Ela tinha inveja da bondade de Branca de Neve', 'is_correct' => false],
                            ['text' => 'Ela queria o reino inteiro', 'is_correct' => false],
                        ]
                    ]
                ]
            ],
        ];

        foreach ($stories as $storyData) {
            $story = Story::create([
                'slug' => $storyData['slug'],
                'title' => $storyData['title'],
                'youtube_video_id' => $storyData['youtube_video_id'],
                'description' => $storyData['description'],
                'duration' => $storyData['duration'],
                'category' => $storyData['category'],
            ]);

            foreach ($storyData['questions'] as $questionData) {
                $question = Question::create([
                    'story_id' => $story->id,
                    'question' => $questionData['question'],
                ]);

                foreach ($questionData['options'] as $optionData) {
                    Option::create([
                        'question_id' => $question->id,
                        'text' => $optionData['text'],
                        'is_correct' => $optionData['is_correct'],
                    ]);
                }
            }
        }
    }
}

import { Category, Story } from '@/types';

export const MOCK_DATA: Story[] = [
  {
    id: 1,
    slug: 'chapeuzinho-vermelho',
    title: 'Chapeuzinho Vermelho',
    youtube_video_id: 'ImJ8C5gpshs',
    description: 'Uma história clássica sobre uma menina e um lobo.',
    duration: 742,
    category: Category.EDUCATIONAL,
    questions: [
      {
        question: 'Qual era a cor do chapéu da menina?',
        options: [
          { text: 'Vermelho', is_correct: true },
          { text: 'Azul', is_correct: false },
          { text: 'Verde', is_correct: false },
        ],
      },
      {
        question: 'Para onde Chapeuzinho Vermelho estava indo?',
        options: [
          { text: 'Para a casa da avó', is_correct: true },
          { text: 'Para a escola', is_correct: false },
          { text: 'Para o mercado', is_correct: false },
        ],
      },
      {
        question: 'Quem Chapeuzinho encontrou na floresta?',
        options: [
          { text: 'O Lobo Mau', is_correct: true },
          { text: 'Um caçador', is_correct: false },
          { text: 'Um urso', is_correct: false },
        ],
      },
    ],
  },
  {
    id: 2,
    slug: 'os-tres-porquinhos',
    title: 'Os Três Porquinhos',
    youtube_video_id: 'mgSIYg-Astg',
    description: 'A história de três irmãos porquinhos enfrentando um lobo.',
    duration: 703,
    category: Category.CLASSIC,
    questions: [
      {
        question: 'O que usou o terceiro porquinho para construir sua casa?',
        options: [
          { text: 'Palha', is_correct: false },
          { text: 'Madeira', is_correct: false },
          { text: 'Tijolos', is_correct: true },
        ],
      },
      {
        question: 'Quantos porquinhos aparecem na história?',
        options: [
          { text: 'Dois', is_correct: false },
          { text: 'Três', is_correct: true },
          { text: 'Quatro', is_correct: false },
        ],
      },
      {
        question: 'Como o lobo tentou derrubar a casa de tijolos?',
        options: [
          { text: 'Com uma marreta', is_correct: false },
          { text: 'Soprando', is_correct: true },
          { text: 'Colocando fogo', is_correct: false },
        ],
      },
    ],
  },
];

export async function fetchStory(slugToFind: string): Promise<Story | null> {
  // simulando delay da API
  await new Promise((resolve) => setTimeout(resolve, 500));

  const foundStory = MOCK_DATA.find(({ slug }) => slug == slugToFind);

  return foundStory ?? null;
}

export async function fetchAllStories(): Promise<Story[]> {
  // simulando delay da API
  await new Promise((resolve) => setTimeout(resolve, 500));

  return MOCK_DATA;
}

export interface Story {
  id: string | number;
  slug: string;
  title: string;
  video_url: string;
  description?: string;
  duration?: number;
  category?: string;
  questions?: Question[];
}

export interface Question {
  story_id?: string | number;
  question: string;
  options: {
    text: string;
    is_correct: boolean;
  }[];
}

export enum Category {
  NEW = 'Novo',
  ANIMATED = 'Animado',
  EDUCATIONAL = 'Educacional',
  MUSIC = 'Música',
  CLASSIC = 'Clássico',
  MODERN = 'Moderno',
  OTHER = 'Outro',
}

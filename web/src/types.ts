export interface Story {
  id: string | number;
  slug: string;
  title: string;
  youtube_video_id: string;
  description?: string;
  category: Category;
  duration?: number;
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
  RELIGIOUS = 'Religioso',
  OTHER = 'Outro',
}

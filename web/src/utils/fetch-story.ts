import { Story } from '@/types';
import { MOCK_DATA } from './mock-data';

export async function fetchStory(slugToFind: string): Promise<Story | null> {
  // await sleep(300);

  const foundStory = MOCK_DATA.find(({ slug }) => slug == slugToFind);

  return foundStory ?? null;
}

export async function fetchHighlightedStories(): Promise<Story[]> {
  // await sleep(300);

  return MOCK_DATA.slice(0, 4);
}

export async function fetchAllStories(): Promise<Story[]> {
  // await sleep(300);

  return MOCK_DATA;
}

async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

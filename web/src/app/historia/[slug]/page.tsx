import { fetchAllStories, fetchStory } from '@/utils/fetch-story';
import { StoryScreen } from './story-screen';

type Params = {
  slug: string;
};

type Props = {
  params: Promise<Params>;
};

export async function generateStaticParams(): Promise<Params[]> {
  const allStories = await fetchAllStories();

  return allStories.map(({ slug }) => ({ slug }));
}

export default async function StoryPage({ params }: Props) {
  const { slug } = await params;

  const story = await fetchStory(slug);

  if (!story) return <h1>Historia nao encontrada</h1>;

  return <StoryScreen story={story} />;
}

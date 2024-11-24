'use client';

import { Story } from '@/types';
import { fetchStory } from '@/utils/fetch-story';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ErrorScreen } from './error-screen';
import { StoryScreen } from './story-screen';

export default function ContainerScreen() {
  const searchParams = useSearchParams();
  const storyQuery = searchParams.get('historia');

  const [story, setStory] = useState<Story | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!storyQuery) {
      setError('Há algo errado nesta URL, confira-a e tente novamente.');
      return;
    }

    fetchStory(storyQuery)
      .then((data) => {
        if (!data) {
          setError('História não encontrada, confira a URL e tente novamente.');
          return;
        }

        setStory(data);
      })
      .catch(() => setError('Erro ao buscar a história.'));
  }, [storyQuery]);

  if (error) {
    return <ErrorScreen message={error} />;
  }

  // TODO: mudar "carregando..." para componente skeleton
  return story ? <StoryScreen story={story} /> : <p>Carregando...</p>;
}

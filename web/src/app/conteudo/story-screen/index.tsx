import { Story } from '@/types';
import Link from 'next/link';

interface StoryScreenProps {
  story: Story;
}

export function StoryScreen({ story }: StoryScreenProps) {
  return (
    <>
      <section
        id="infos"
        className="container px-4 py-20 sm:px-6 md:py-12 lg:px-8"
      >
        <p className="mb-2">
          <Link href="/" className="text-blue-600 hover:underline">
            Voltar
          </Link>
        </p>
        <h1 className="block text-3xl font-bold text-neutral-800 lg:text-5xl">
          {story.title}
        </h1>
        <p>{story.description}</p>
      </section>

      <section id="video" className="container px-4 py-8 sm:px-6 lg:px-8">
        <p>[vídeo aqui...]</p>
      </section>

      <section id="perguntas" className="container px-4 py-8 sm:px-6 lg:px-8">
        <p>[questões aqui...]</p>
      </section>
    </>
  );
}

import { Story } from '@/types';
import Link from 'next/link';
import { VideoPlayer } from './video-player';
import { VideoPlayerControls } from './video-player copy';
import { QuestionsContainer } from './questions-container';

interface StoryScreenProps {
  story: Story;
}

export function StoryScreen({ story }: StoryScreenProps) {
  const { title, description, video_url, questions, category } = story;

  return (
    <>
      <section id="infos" className="container px-4 py-8">
        <p className="mb-2">
          <Link href="/" className="text-blue-600 hover:underline">
            Voltar
          </Link>
        </p>
        <h1 className="text-3xl lg:text-5xl">{title}</h1>
        <p>{description}</p>
      </section>

      <section
        id="video"
        className="container flex flex-col gap-4 px-4 py-4 md:gap-8 lg:flex-row lg:gap-10"
      >
        <VideoPlayer src={video_url} />
        <VideoPlayerControls />
      </section>

      {questions && questions.length > 0 && (
        <section id="perguntas" className="container px-4 py-8 pb-20">
          <h2 className="mb-2 text-2xl lg:text-3xl">
            Perguntas relacionadas à história
          </h2>
          <p className="mb-10">
            Responda a estas perguntas para testar o seu nível de entendimento
            na história <b>{title}</b>!
          </p>

          <QuestionsContainer questions={questions} />

          <p className="mt-6">
            <Link href="/" className="text-blue-600 hover:underline">
              Voltar para o início
            </Link>
          </p>
        </section>
      )}
    </>
  );
}

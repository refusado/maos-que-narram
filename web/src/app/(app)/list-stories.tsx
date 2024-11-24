import { Story } from '@/types';
import { Play } from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';

export interface ListItem {
  title: string;
  category: string;
  duration: string;
  imageUrl?: string;
  slug?: string;
}

export function ListStories({ items }: { items: Story[] }) {
  return (
    <>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(
          ({ title, category, duration, slug, youtube_video_id }, index) => (
            <Link
              href={`/conteudo?historia=${slug ?? 'sem-slug'}`}
              key={index}
              className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border bg-neutral-100 transition duration-300 hover:shadow-lg"
              title={`Ir para a historia ${title}`}
            >
              <div>
                <img
                  className="aspect-video w-full bg-neutral-300 object-cover object-center text-xs"
                  src={`https://img.youtube.com/vi/${youtube_video_id}/maxresdefault.jpg`}
                  alt={`Banner para a história ${title}`}
                />
                <div className="p-4">
                  <h4 className="mb-2.5 text-lg font-semibold">{title}</h4>
                  <p className="text-sm">{category}</p>
                </div>
              </div>
              <p className="p-4 text-right text-sm">{duration}</p>
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-neutral-900 bg-opacity-30 opacity-0 transition duration-300 group-hover:opacity-100">
                <Play className="size-16 rounded-full bg-neutral-800/40 p-4 text-neutral-100" />
              </div>
            </Link>
          ),
        )}
      </div>
    </>
  );
}

import Link from 'next/link';

export interface ListItem {
  title: string;
  category: string;
  duration: string;
  imageUrl?: string;
  slug?: string;
}

export function ListStories({ items }: { items: ListItem[] }) {
  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ title, category, duration, slug }, index) => (
          <Link
            href={`/conteudo?historia=${slug ?? 'sem-slug'}`}
            key={index}
            className="overflow-hidden rounded-xl border bg-neutral-100 transition duration-300 hover:shadow-lg"
          >
            <div className="aspect-video w-full bg-neutral-300" />
            <div className="p-4">
              <h4 className="mb-2 font-semibold">{title}</h4>
              <p className="text-sm">{category}</p>
              <p className="text-sm">{duration}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

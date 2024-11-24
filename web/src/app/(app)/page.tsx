import { Filters } from '@/components/filters';
import { Hero } from '@/components/hero';
import { ListStories, ListItem } from '@/components/list-stories';

const highlightedItems: ListItem[] = [
  {
    title: 'A Galinha Pintadinha e o Galo Carijó',
    category: 'Contação de Histórias',
    duration: '5 minutos',
  },
  {
    title: 'O Sítio do Pica-Pau Amarelo',
    category: 'Contação de Histórias',
    duration: '10 minutos',
  },
  {
    title: 'A Lenda do Curupira',
    category: 'Contação de Histórias',
    duration: '3 minutos',
  },
  {
    title: 'Chapeuzinho Vermelho no Sertão',
    category: 'Contação de Histórias',
    duration: '7 minutos',
  },
];

const allItems: ListItem[] = [
  {
    title: 'A Galinha Pintadinha e o Galo Carijó',
    category: 'Contação de Histórias',
    duration: '5 minutos',
  },
  {
    title: 'O Sítio do Pica-Pau Amarelo',
    category: 'Contação de Histórias',
    duration: '10 minutos',
  },
  {
    title: 'A Lenda do Curupira',
    category: 'Contação de Histórias',
    duration: '3 minutos',
  },
  {
    title: 'Chapeuzinho Vermelho no Sertão',
    category: 'Contação de Histórias',
    duration: '7 minutos',
  },
];

export default function HomePage() {
  return (
    <>
      <section
        id="inicio"
        className="container px-4 py-20 sm:px-6 md:py-12 lg:px-8"
      >
        <Hero />
      </section>

      <section id="destaques" className="container px-4 py-8 sm:px-6 lg:px-8">
        <h2 className="mb-4 text-5xl">Destaques</h2>
        <ListStories items={highlightedItems} />
      </section>

      <section id="todos" className="container px-4 py-8 pb-40 sm:px-6 lg:px-8">
        <h2 className="mb-4 text-5xl">Todas histórias</h2>
        <Filters />
        <ListStories items={allItems} />
      </section>
    </>
  );
}

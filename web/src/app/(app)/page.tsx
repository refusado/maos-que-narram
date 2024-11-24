import { CardsSections } from './cards-sections';
import { Hero } from './hero';

export default function HomePage() {
  return (
    <>
      <section id="inicio" className="container px-4 py-20 md:py-12">
        <Hero />
      </section>

      <CardsSections />
    </>
  );
}

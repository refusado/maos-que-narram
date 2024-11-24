import Link from 'next/link';

interface ErrorMessageProps {
  message: string;
}

export function ErrorScreen({ message }: ErrorMessageProps) {
  return (
    <>
      <section id="infos" className="container px-4 py-20 md:py-12">
        <p className="mb-2">
          <Link href="/" className="text-blue-600 hover:underline">
            Voltar
          </Link>
        </p>
        <h1 className="block text-3xl font-bold text-neutral-800 lg:text-5xl">
          Erro ao carregar historia :\
        </h1>
        <p>{message}</p>
      </section>
    </>
  );
}

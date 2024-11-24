import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between bg-white py-6 shadow">
      <div className="container px-4 sm:px-6 lg:px-8">
        <Link href="/">
          <h1 className="text-xl font-bold">Mãos que narram</h1>
        </Link>
      </div>
    </header>
  );
}

import type { Metadata } from 'next';
import { ABeeZee as DisplayFont } from 'next/font/google';
import { Lato as BodyFont } from 'next/font/google';

import './globals.css';
import '@vidstack/react/player/styles/base.css';
import PrelineScript from '@/components/preline-script';

import { Header } from '@/components/header';

const bodyFont = BodyFont({
  variable: '--font-body',
  weight: ['100', '300', '400', '700', '900'],
  subsets: ['latin'],
});

const displayFont = DisplayFont({
  variable: '--font-display',
  weight: ['400'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Mãos que Narram',
  description: 'Histórias infantis em Libras',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className={`${bodyFont.variable} ${displayFont.variable}`}>
      <body className="min-h-screen overflow-x-hidden overflow-y-scroll bg-neutral-200 text-neutral-900 antialiased">
        <Header />
        {children}
      </body>
      <PrelineScript />
    </html>
  );
}

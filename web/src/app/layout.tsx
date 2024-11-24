import { Baloo_2 as FontSans } from 'next/font/google';
import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/header';
import PrelineScript from '@/components/preline-script';

const fontSans = FontSans({
  variable: '--font-sans',
  weight: ['400', '800'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className={`${fontSans.variable}`}>
      <body className="min-h-screen overflow-x-hidden overflow-y-scroll bg-neutral-200 text-neutral-900 antialiased">
        <Header />
        {children}
      </body>
      <PrelineScript />
    </html>
  );
}

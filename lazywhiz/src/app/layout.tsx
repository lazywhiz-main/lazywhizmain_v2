import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '../components/layout/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'LazyWhiz',
  description: '決めることへの伴走をテーマに、プロダクトマネジメント、ブランディング、Web制作のサポートを提供するウェブサイトです。',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={inter.className + ' bg-white text-gray-900'}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
} 
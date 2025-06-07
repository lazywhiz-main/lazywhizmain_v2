import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '../components/layout/Header';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'LAZYWHIZ - がんばりすぎず、賢く生きる',
  description: '決断をサポートし、より良い選択へ導きます。ツールや思考のきっかけを提供し、あなたの「決める」を後押しします。',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID;

  return (
    <html lang="ja">
      <head>
        {GA_TRACKING_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              strategy="afterInteractive"
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_TRACKING_ID}');
                `,
              }}
            />
          </>
        )}
      </head>
      <body className={inter.className + ' bg-white text-gray-900'}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
} 
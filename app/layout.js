import '../styles/global.css';
import '../styles/variables.css';
import { Inter } from 'next/font/google';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import MainWrapper from '@/components/MainWrapper';
import { type } from 'os';

const inter = Inter({
  weight: ['500', '700'],
  subsets: ['latin'],
  preload: true,
});

export const metaData = {
  title: 'Roland Mehes | Portfolio',
  description: 'Junior developer portfolio built with Next.js',
  keywords: [
    'Roland Mehes',
    'Portfolio',
    'Web Developer',
    'Next.js',
    'Junior Developer',
  ],
  authors: [{ name: 'Roland Mehes' }],
  creator: 'Roland Mehes',
  locale: 'en_US',
  type: 'website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <MainWrapper>
          <Header />
          {children}
          <Footer />
        </MainWrapper>
      </body>
    </html>
  );
}

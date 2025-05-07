import '../styles/global.css';
import '../styles/variables.css';
import { Inter } from 'next/font/google';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import MainWrapper from '@/components/MainWrapper';

const inter = Inter({
  weight: ['500', '700'],
  subsets: ['latin'],
  preload: true,
});

export const metaData = {
  title: 'Roland Mehes | Portfolio',
  description: 'Junior developer portfolio built with Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <title>{metaData.title}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </head>
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

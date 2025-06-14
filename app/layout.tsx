import '../styles/global.css';
import '../styles/variables.css';

import Header from '@/components/Header';
import Footer from '@/components/Footer/Footer';
import { ThemeProvider } from '@/components/ThemeContext';

export const metadata = {
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <ThemeProvider>
          <Header />
          <main className="flex-grow"> {children}</main>
          {<Footer />}
        </ThemeProvider>
      </body>
    </html>
  );
}

import Header from '@/components/header/Header';
import './globals.sass';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import Footer from '@/components/footer/Footer';

const openSans = Open_Sans({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'Save...Or-Not',
  description: 'New Survive Game',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={openSans.className}>
        <div className='app'>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}

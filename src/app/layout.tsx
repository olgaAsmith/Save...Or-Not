import Header from '@/components/header/Header';
import './globals.sass';
import type { Metadata } from 'next';
import Footer from '@/components/footer/Footer';
import { openSans } from '@/utils/fonts';

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
      <body className={`${openSans.className}`}>
        <div className='app'>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}

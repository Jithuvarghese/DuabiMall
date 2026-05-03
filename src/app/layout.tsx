import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';
import SmoothScrollProvider from '../providers/SmoothScrollProvider';
import { Preloader } from '../components/shell/Preloader';

const display = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-display', weight: ['300', '400', '500', '600', '700'] });
const body = Inter({ subsets: ['latin'], variable: '--font-body' });

export const metadata: Metadata = {
  title: 'Dubai Mall Interactive Sales Deck',
  description: 'A cinematic interactive sales deck for Dubai Mall.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable} bg-deck-black text-white antialiased`}>
        <SmoothScrollProvider>
          <Preloader>{children}</Preloader>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}

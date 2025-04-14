import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/lib/CartContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SOLGOL - Futuristic Crypto-Inspired Merchandise',
  description: 'Shop the latest futuristic, crypto-inspired merchandise from SOLGOL. Apparel, accessories, and collectibles for the modern sports enthusiast.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        {children}
        <div id="toast" className="hidden fixed bottom-4 right-4 bg-green-600 text-white px-6 py-3 rounded-md shadow-lg z-50 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Item added to cart!
        </div>
      </body>
    </html>
  );
}

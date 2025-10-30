import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Entequeñate - Tequeños, Pastelitos y Postres Artesanales',
  description: 'Deléitate con nuestros tequeños dorados, pastelitos rellenos y postres artesanales. Fusión peruano-venezolana. Pide ahora por WhatsApp.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}

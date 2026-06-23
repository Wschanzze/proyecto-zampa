import type { Metadata, Viewport } from 'next';
import { ReactNode } from 'react';
import '../styles/tailwind.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Quesos Zampa — Quesería Artesanal de Oveja',
  description: 'Elaboración de quesos artesanales de oveja de la más alta calidad, con maduración tradicional y respeto por el bienestar animal. Desde 1984.',
  icons: {
    icon: [
      { url: '/zampaico.ico', type: 'image/x-icon' }
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
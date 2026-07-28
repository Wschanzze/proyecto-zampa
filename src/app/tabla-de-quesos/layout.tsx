import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Great_Vibes } from 'next/font/google';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-great-vibes',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Tabla de Quesos Zampa | Experiencia Gastronómica & Maridajes',
  description:
    'Guía interactiva para armar la tabla de quesos de oveja perfecta con la línea de Quesos Zampa: Camembert, Pecorino, Brie, Manchego, Provolone y Ahumado.',
  robots: {
    index: false,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#F8F5EE',
};

export default function TablaDeQuesosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${cormorant.variable} ${greatVibes.variable} font-sans`}>
      {children}
    </div>
  );
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dónde Comprar Quesos Zampa | Puntos de Venta',
  description: 'Encontrá los locales, salumerías, fiambrerías boutique y restaurantes que ofrecen Quesos de Oveja Zampa.',
  alternates: {
    canonical: '/encontranos',
  },
  openGraph: {
    title: 'Dónde Comprar Quesos Zampa | Puntos de Venta',
    description: 'Encontrá los locales y restaurantes donde adquirir quesos de oveja Zampa.',
    url: 'https://quesoszampa.com/encontranos',
  },
};

export default function EncontranosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dónde Comprar Quesos Zampa | Puntos de Venta',
  description: 'Encontrá los fijos, salumerías, fiambrerías boutique y restaurantes que ofrecen Quesos de Oveja Zampa Tandil.',
  alternates: {
    canonical: '/revendedores',
  },
  openGraph: {
    title: 'Dónde Comprar Quesos Zampa | Puntos de Venta y Revendedores',
    description: 'Encontrá los locales y restaurantes donde adquirir quesos de oveja Zampa.',
    url: 'https://quesoszampa.com.ar/revendedores',
  },
};

export default function RevendedoresLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

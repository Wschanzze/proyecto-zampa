import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Comunidad y Valor en Origen en Tandil',
  description: 'Nuestro compromiso con el arraigo rural, la ganadería pastoril regenerativa y el crecimiento cooperativo en Tandil.',
  alternates: {
    canonical: '/comunidad',
  },
  openGraph: {
    title: 'Comunidad y Valor en Origen en Tandil | Quesos Zampa',
    description: 'Producción artesanal sustentable y desarrollo comunitario en Tandil.',
    url: 'https://quesoszampa.com.ar/comunidad',
  },
};

export default function ComunidadLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

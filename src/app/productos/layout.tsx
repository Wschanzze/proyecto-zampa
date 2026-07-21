import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Catálogo de Quesos de Oveja Tandil',
  description: 'Explorá nuestro catálogo de quesos artesanales de leche de oveja: Pecorino Zampa, Queso Brie de oveja y especialidades pastoriles de Tandil.',
  alternates: {
    canonical: '/productos',
  },
  openGraph: {
    title: 'Catálogo de Quesos de Oveja Tandil | Quesos Zampa',
    description: 'Queso pecorino, queso brie y quesos artesanales de oveja producidos en Tandil.',
    url: 'https://quesoszampa.com.ar/productos',
  },
};

export default function ProductosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

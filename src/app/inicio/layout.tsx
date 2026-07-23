import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quesos Zampa | Quesos de Oveja en Tandil',
  description: 'Producimos quesos de oveja artesanales en Tandil. Leche noble de tambo pastoril ovino, maduración en cava y productos artesanales.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Quesos Zampa | Quesos de Oveja en Tandil',
    description: 'Quesos artesanales de oveja elaborados en Tandil, Buenos Aires.',
    url: 'https://quesoszampa.com',
  },
};


export default function InicioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

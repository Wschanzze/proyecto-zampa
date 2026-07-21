import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Elaboración de Quesos de Oveja en Tandil',
  description: 'Descubrí el proceso completo de elaboración artesanal de nuestros quesos de oveja Zampa en Tandil: desde la crianza pastoril hasta la maduración.',
  alternates: {
    canonical: '/elaboracion',
  },
  openGraph: {
    title: 'Elaboración de Quesos de Oveja en Tandil | Quesos Zampa',
    description: 'Proceso de elaboración artesanal de quesos de oveja en sistema pastoril en Tandil.',
    url: 'https://quesoszampa.com/elaboracion',
  },
};

export default function ElaboracionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

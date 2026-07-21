import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nuestra Historia y Tambo Ovino en Tandil',
  description: 'Conocé la historia de la familia Zampa, nuestro tambo ovino pastoril en Tandil y la tradición quesera artesanal.',
  alternates: {
    canonical: '/nuestra-historia',
  },
  openGraph: {
    title: 'Nuestra Historia y Tambo Ovino en Tandil | Quesos Zampa',
    description: 'La historia de la familia Zampa y la pasión por la elaboración de quesos de oveja en Tandil.',
    url: 'https://quesoszampa.com.ar/nuestra-historia',
  },
};

export default function HistoriaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

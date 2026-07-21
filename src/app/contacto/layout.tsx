import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacto y Ventas Directas Tandil',
  description: 'Ponete en contacto con Quesos Zampa en Tandil. Comprá quesos artesanales de oveja directamente desde la quesería.',
  alternates: {
    canonical: '/contacto',
  },
  openGraph: {
    title: 'Contacto y Ventas Directas Tandil | Quesos Zampa',
    description: 'Comunícate con Quesería Zampa en Tandil para consultas, compras directas y recorridos guiados.',
    url: 'https://quesoszampa.com/contacto',
  },
};

export default function ContactoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

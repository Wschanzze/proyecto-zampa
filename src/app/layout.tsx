import type { Metadata, Viewport } from 'next';
import { ReactNode } from 'react';
import '../styles/tailwind.css';
import JsonLd from '@/components/JsonLd';

const baseUrl = 'https://quesoszampa.com';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Quesos Zampa Tandil | Quesos de oveja — Tambo Pastoril',
  description: 'Elaboración artesanal de quesos de oveja de máxima calidad en Tandil, Buenos Aires. Queso pecorino, brie y variedades de tambo pastoril.',
  keywords: [
    'quesos de oveja tandil zampa',
    'quesos de oveja tandil',
    'quesos zampa',
    'tambo ovino tandil',
    'queso pecorino de oveja',
    'queso brie de oveja',
    'queseria artesanal tandil',
    'quesos pastoriles de oveja',
    'productos regionales tandil',
  ],
  authors: [{ name: 'Quesería Zampa', url: baseUrl }],
  creator: 'Quesería Zampa',
  publisher: 'Quesería Zampa',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Quesos Zampa Tandil | Quesos de oveja',
    description: 'Elaboración artesanal de quesos de oveja en Tandil. Sabores nobles de tambo pastoril.',
    url: baseUrl,
    siteName: 'Quesos Zampa',
    locale: 'es_AR',
    type: 'website',
    images: [
      {
        url: '/assets/Quesos%20Zampa/IMG_9816.JPG',
        width: 1200,
        height: 630,
        alt: 'Quesos Zampa — Elaboración de Queso de Oveja en Tandil',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quesos Zampa Tandil | Quesos de oveja',
    description: 'Quesería artesanal y tambo ovino pastoril en Tandil, Buenos Aires.',
    images: ['/assets/Quesos%20Zampa/IMG_9816.JPG'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
    <html lang="es">
      <body>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
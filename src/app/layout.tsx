import type { Metadata, Viewport } from 'next';
import { ReactNode } from 'react';
import '../styles/tailwind.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Cultivar — Drought-Resistant Grain Research Institute',
  description: 'Four decades of field-proven cultivar development for semi-arid landscapes. Licensing, trial seed, and soil restoration protocols for extension officers, agronomists, and cooperatives.',
  icons: {
    icon: [
      { url: '/assets/images/app_logo.png', type: 'image/x-icon' }
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
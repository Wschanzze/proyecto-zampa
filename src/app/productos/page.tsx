'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CultivarGrid from '@/app/home/components/CultivarGrid';
import FloatingPill from '@/app/home/components/FloatingPill';

export default function ProductosPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <div className="pt-20">
        <CultivarGrid />
      </div>
      <Footer />
      <FloatingPill />
    </div>
  );
}

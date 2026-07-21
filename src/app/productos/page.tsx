'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CultivarGrid from '@/app/inicio/components/CultivarGrid';
// import ProductTimeMachine from '@/app/productos/components/ProductTimeMachine';
import FloatingPill from '@/app/inicio/components/FloatingPill';

export default function ProductosPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      
      {/* HERO SECTION */}
      <header className="products-hero">
        <img 
          src="/assets/Quesos Zampa/07B73847-614E-4FDC-B7AF-F639064C64CB.jpg" 
          alt="Nuestros Productos - Quesos Zampa" 
          className="products-hero-bg" 
        />
        <div className="products-hero-overlay"></div>
        <div className="products-hero-content">
          <p className="hero-subtitle">NUESTRA QUESERÍA</p>
          <h1 className="hero-title font-light uppercase">Nuestros Productos</h1>
          <p className="hero-description">
            Descubrí nuestra variedad de quesos artesanales elaborados con leche 100% de oveja de pastoreo. Una selección de autor madurada lentamente con paciencia y esmero.
          </p>
        </div>
      </header>

      <CultivarGrid />
      {/* <ProductTimeMachine /> */}
      <Footer />
      <FloatingPill />
    </div>
  );
}

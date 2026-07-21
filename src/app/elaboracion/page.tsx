'use client';
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingPill from '@/app/inicio/components/FloatingPill';
import RecipesPairings from '@/components/RecipesPairings';
import CtaSection from '@/app/inicio/components/CtaSection';
import TamboGallery from './components/TamboGallery';
import DocumentarySection from '@/components/DocumentarySection';
import AppImage from '@/components/ui/AppImage';

export default function ElaboracionPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />

      {/* HERO SECTION */}
      <header className="products-hero">
        <AppImage 
          src="/assets/Quesos Zampa/IMG_9816.JPG" 
          alt="Elaboración - Quesería Zampa" 
          fill
          priority
          sizes="100vw"
          className="products-hero-bg object-cover" 
        />
        <div className="products-hero-overlay"></div>
        <div className="products-hero-content">
          <p className="hero-subtitle">NUESTRO PROCESO</p>
          <h1 className="hero-title font-light uppercase">Elaboración</h1>
          <p className="hero-description">
            El arte de transformar la leche más pura en quesos extraordinarios. Conocé nuestra sala de elaboración diaria, el cuidado de la materia prima y las técnicas culinarias que nos definen.
          </p>
        </div>
      </header>

      {/* DOCUMENTARY SECTION */}
      <DocumentarySection />

      {/* TAMBO GALLERY SECTION */}
      <TamboGallery />

      {/* RECIPES & PAIRINGS SECTION */}
      <RecipesPairings />

      {/* CTA SECTION */}
      <CtaSection />

      <Footer />
      <FloatingPill />
    </div>
  );
}

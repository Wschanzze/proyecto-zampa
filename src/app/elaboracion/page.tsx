'use client';
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingPill from '@/app/home/components/FloatingPill';
import RecipesPairings from '@/components/RecipesPairings';
import CtaSection from '@/app/home/components/CtaSection';
import TamboGallery from './components/TamboGallery';

export default function ElaboracionPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />

      {/* HERO SECTION */}
      <header className="products-hero">
        <img 
          src="/assets/Quesos Zampa/IMG_9816.JPG" 
          alt="Elaboración - Quesería Zampa" 
          className="products-hero-bg" 
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

      {/* TAMBO GALLERY SECTION (NEW) */}
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

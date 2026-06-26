'use client';
import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

export default function HeroSection() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = [headlineRef?.current, subRef?.current, cardRef?.current];
    elements?.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = '0';
      el.style.transform = 'translateY(28px)';
      setTimeout(() => {
        if (!el) return;
        el.style.transition = 'opacity 0.9s cubic-bezier(0.23,1,0.32,1), transform 0.9s cubic-bezier(0.23,1,0.32,1)';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 300 + i * 180);
    });
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <AppImage
          src="/assets/Quesos%20Zampa/IMG_1134.jpg"
          alt="Paisaje de las pasturas y el establecimiento Quesos Zampa en Napaleofú al atardecer"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Overlays for text readability */}
      <div className="absolute inset-0 z-0 bg-charcoal/35" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-charcoal via-transparent to-charcoal/50" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto w-full px-6 lg:px-12 pt-32 pb-24 flex flex-col items-center text-center">
        {/* Season badge */}
        <div className="inline-flex items-center gap-2 mb-8 border border-wheat/30 bg-charcoal/40 backdrop-blur-md px-5 py-2.5 rounded-full shadow-2xl">
          <span className="w-2 h-2 rounded-full bg-wheat animate-pulse flex-shrink-0" />
          <span className="text-xs font-medium text-cream tracking-[0.2em] uppercase">
            Temporada 2026 Abierta
          </span>
        </div>

        <h1
          ref={headlineRef}
          className="font-fraunces text-6xl lg:text-8xl font-light leading-tight text-cream mb-6 drop-shadow-2xl">
          Tambo Ovino Familiar.<br />
          Quesos Artesanales.<br />
          <em className="font-light italic text-wheat-light">
            Pasión de Origen.
          </em>
        </h1>

        <p
          ref={subRef}
          className="text-lg lg:text-xl font-light text-limestone-soft/90 leading-relaxed max-w-2xl mb-12 drop-shadow-md">
          En Quesos Zampa elaboramos quesos artesanales de oveja de la más alta calidad, cuidando a nuestro rebaño en pasturas naturales cerca de Napaleofú, donde el respeto por la tierra define el carácter de cada pieza.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-5">
          <a
            href="#cultivars"
            className="flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-wheat text-charcoal font-semibold text-sm hover:bg-wheat-light transition-all duration-300 shadow-[0_0_20px_rgba(201,168,76,0.3)] hover:shadow-[0_0_30px_rgba(201,168,76,0.5)] hover:-translate-y-1 tracking-widest uppercase">
            Explorar Variedades
          </a>
          <a
            href="#timeline"
            className="flex items-center justify-center gap-2 h-14 px-8 rounded-full border border-cream/50 bg-transparent text-cream font-medium text-sm hover:bg-cream/10 transition-all duration-300 backdrop-blur-sm tracking-widest uppercase">
            Nuestra Historia
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-wheat-light/70">Descubrir</span>
        <Icon name="ArrowDownIcon" size={16} className="text-wheat-light/70" />
      </div>

      {/* Wheat-gold divider */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-wheat to-transparent z-10 opacity-60" />
    </section>);

}

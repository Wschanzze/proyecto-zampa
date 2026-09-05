'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Icon from '@/components/ui/AppIcon';
import { trackEvent } from '@/lib/posthog';

export default function CtaSection() {
  return (
    <section className="relative w-full overflow-hidden py-20 lg:py-28 px-6 lg:px-12 flex flex-col items-center justify-center text-center">
      <Image 
        src="/assets/Quesos Zampa/nuevas/1fbee0f4-70ba-4ef6-851a-3e32056a9edb.jpg" 
        alt="Del Campo a tu Mesa - Quesos Zampa" 
        fill
        className="object-cover"
        sizes="100vw"
        priority
      />
      {/* Overlays for dark text readability */}
      <div className="absolute inset-0 bg-black/65 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent z-10" />
      
      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-[0.06em] uppercase leading-tight">
          DEL CAMPO A TU MESA.<br />
          SABOR ARTESANAL DE OVEJA.
        </h2>
        
        <p className="text-base md:text-lg lg:text-xl font-light text-white/80 leading-relaxed max-w-2xl mx-auto">
          Cada una de nuestras piezas gourmet se elabora de lunes a lunes con leche de oveja fresca del mismo día, garantizando la máxima pureza, trazabilidad y bienestar animal.
        </p>
        
        <Link 
          href="/productos" 
          onClick={() => trackEvent('cta_catalog_click', { location: 'home_cta_banner' })}
          className="flex items-center justify-center gap-2 sm:gap-3 h-12 sm:h-14 rounded-full bg-white text-charcoal font-bold text-[10px] sm:text-xs hover:bg-white/90 hover:scale-[1.02] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.3)] tracking-[0.15em] uppercase px-8 mt-2"
        >
          <Icon name="SparklesIcon" size={16} variant="solid" className="sm:w-5 sm:h-5 text-charcoal/90" />
          <span>Explorar Catálogo</span>
        </Link>
      </div>
    </section>
  );
}

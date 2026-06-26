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
        {/* Top small label from image */}
        <p className="text-xs md:text-sm font-semibold tracking-[0.3em] text-white uppercase mb-6 drop-shadow-md">
          De Tandil para tu Mesa | 100% Pastoril
        </p>

        <h1
          ref={headlineRef}
          className="font-fraunces text-6xl md:text-8xl lg:text-[100px] font-semibold leading-[1.05] text-white mb-6 uppercase tracking-wider drop-shadow-2xl">
          Quesos Únicos
        </h1>

        {/* Bottom small label from image */}
        <div className="flex items-center gap-4 justify-center text-xs md:text-sm font-medium text-white/80 tracking-[0.2em] uppercase mb-8 drop-shadow-md">
          <span>100% Pastoril</span>
          <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
          <span>Leche A2</span>
        </div>

        <p
          ref={subRef}
          className="text-base md:text-lg lg:text-xl font-light text-white leading-relaxed max-w-2xl mb-12 drop-shadow-md">
          En Napaleofú, Buenos Aires, criamos nuestro rebaño de ovejas frisonas y elaboramos quesos premium con leche fresca del día. Un proceso 100% familiar, de nuestras pasturas a la cava de maduración.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-5">
          <a
            href="#cultivars"
            className="flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-white text-charcoal font-semibold text-sm hover:bg-white/90 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:-translate-y-1 tracking-widest uppercase">
            <Icon name="SparklesIcon" size={16} variant="solid" />
            Ver Variedades
          </a>
          <a
            href="https://www.instagram.com/quesos_zampa"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 h-14 px-8 rounded-full border border-white bg-transparent text-white font-medium text-sm hover:bg-white/10 transition-all duration-300 backdrop-blur-sm tracking-widest uppercase">
            <Icon name="ChatBubbleLeftRightIcon" size={16} variant="outline" />
            Contacto Directo
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

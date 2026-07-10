'use client';
import React, { useEffect, useRef, useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const heroImages = [
  {
    src: '/assets/Quesos%20Zampa/IMG_1134.jpg',
    alt: 'Paisaje de las pasturas y el establecimiento Quesos Zampa en Napaleofú al atardecer'
  },
  {
    src: '/assets/Quesos%20Zampa/IMG_9858.JPG',
    alt: 'Hormas de quesos artesanales Zampa madurando en la cava familiar'
  },
  {
    src: '/assets/Quesos%20Zampa/IMG_9816.JPG',
    alt: 'Proceso de elaboración artesanal de quesos Zampa'
  },
  {
    src: '/assets/Quesos%20Zampa/68C50477-1C39-48B6-86FE-640DEDCA65B1.jpg',
    alt: 'Detalle de quesos de oveja madurados listos para consumo'
  }
];

const heroTitles = [
  { line1: 'Quesos', line2: 'con Pasión de Origen' },
  { line1: 'Elaboramos', line2: 'nuestros quesos' },
  { line1: 'Criamos', line2: 'nuestras ovejas' }
];

export default function HeroSection() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [titleIdx, setTitleIdx] = useState(0);

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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      const el = headlineRef.current;
      if (el) {
        // Smooth slide out (upward)
        el.style.transition = 'opacity 0.6s cubic-bezier(0.23,1,0.32,1), transform 0.6s cubic-bezier(0.23,1,0.32,1)';
        el.style.opacity = '0';
        el.style.transform = 'translateY(-15px)';
        
        setTimeout(() => {
          setTitleIdx((prev) => (prev + 1) % heroTitles.length);
          // Position it below for the slide-in animation without transitioning
          el.style.transition = 'none';
          el.style.transform = 'translateY(15px)';
          // Force layout reflow
          el.getBoundingClientRect();
          // Smooth slide in (from below)
          el.style.transition = 'opacity 0.6s cubic-bezier(0.23,1,0.32,1), transform 0.6s cubic-bezier(0.23,1,0.32,1)';
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }, 600);
      }
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center">
      {/* Background Images Carousel with smooth Ken Burns transition */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, idx) => (
          <div
            key={image.src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentIdx ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <AppImage
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-[6000ms] ease-out"
              style={{
                transform: idx === currentIdx ? 'scale(1)' : 'scale(1.05)'
              }}
              priority={idx === 0}
            />
          </div>
        ))}
      </div>

      {/* Overlays for text readability */}
      <div className="absolute inset-0 z-0 bg-charcoal/35" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-charcoal via-transparent to-charcoal/50" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto w-full px-6 lg:px-12 pt-32 pb-24 flex flex-col items-center text-center">
        {/* Top small label */}
        <p className="text-xs md:text-sm font-semibold tracking-[0.3em] text-white uppercase mb-6 drop-shadow-md">
          DE TANDIL A TU MESA | 100% PASTORIL
        </p>

        <h1
          ref={headlineRef}
          className="font-fraunces text-4xl sm:text-6xl md:text-8xl lg:text-[90px] font-light leading-[1.1] text-white mb-8 uppercase tracking-[0.06em] drop-shadow-2xl">
          {heroTitles[titleIdx].line1}<br />
          {heroTitles[titleIdx].line2}
        </h1>

        <p
          ref={subRef}
          className="text-base md:text-lg lg:text-xl font-light text-white leading-relaxed max-w-2xl mb-12 drop-shadow-md">
          Criamos ovejas frisonas en pasturas naturales y elaboramos quesos premium. Un proceso 100% familiar.
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
      
      {/* Scroll indicator - Centered, pure white, adjusted height */}
      <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/80">Descubrir</span>
        <Icon name="ArrowDownIcon" size={16} className="text-white" />
      </div>

      {/* Wheat-gold divider */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-wheat to-transparent z-10 opacity-60" />
    </section>);

}

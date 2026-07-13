'use client';
import React, { useEffect, useRef, useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const heroImages = [
  {
    src: '/assets/Quesos%20Zampa/07B73847-614E-4FDC-B7AF-F639064C64CB.jpg',
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
  { line1: 'Elaboramos', line2: 'Nuestros Quesos' },
  { line1: 'Criamos', line2: 'Nuestras Ovejas' }
];

export default function HeroSection() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLDivElement>(null);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [titleIdx, setTitleIdx] = useState(0);

  // Initial load animation
  useEffect(() => {
    const elements = [headlineRef?.current, subRef?.current];
    elements?.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      setTimeout(() => {
        if (!el) return;
        el.style.transition = 'opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1), transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 300 + i * 150);
    });
  }, []);

  // Image rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Title rotation
  useEffect(() => {
    const timer = setInterval(() => {
      const el = headlineRef.current;
      if (el) {
        // Slide out up
        el.style.transition = 'opacity 0.8s cubic-bezier(0.5, 0, 0, 1), transform 0.8s cubic-bezier(0.5, 0, 0, 1)';
        el.style.opacity = '0';
        el.style.transform = 'translateY(-20px)';
        
        setTimeout(() => {
          setTitleIdx((prev) => (prev + 1) % heroTitles.length);
          // Set below
          el.style.transition = 'none';
          el.style.transform = 'translateY(20px)';
          el.getBoundingClientRect(); // reflow
          // Slide in from bottom
          el.style.transition = 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }, 800);
      }
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[680px] lg:h-[90vh] lg:min-h-[750px] lg:max-h-[900px] w-full overflow-hidden flex items-center">
      {/* Background Images */}
      <div className="absolute inset-0 w-full h-full z-0">
        {heroImages.map((image, idx) => (
          <div
            key={image.src}
            className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
              idx === currentIdx ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <AppImage
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-[10000ms] ease-out"
              style={{
                transform: idx === currentIdx ? 'scale(1)' : 'scale(1.08)'
              }}
              priority={idx === 0}
            />
          </div>
        ))}
        {/* Soft elegant gradients - localized to where text will be */}
        <div className="absolute inset-0 bg-black/25 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-transparent z-10 pointer-events-none hidden lg:block" />
      </div>

      {/* Hero Content (Full Width Column Flow) */}
      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 pt-28 lg:pt-36 pb-16 lg:pb-20">
        <div className="max-w-4xl flex flex-col gap-6 sm:gap-8">
          
          {/* Subtitle */}
          <div className="flex items-center gap-3 sm:gap-4 opacity-90">
            <span className="w-8 sm:w-16 h-[1px] bg-white"></span>
            <p className="text-[10px] sm:text-xs font-bold tracking-[0.4em] text-white uppercase drop-shadow-md">
              De Tandil a tu Mesa
            </p>
          </div>

          {/* Title Area */}
          <div className="min-h-[120px] sm:min-h-[160px] lg:min-h-[200px] flex flex-col justify-center">
            <h1
              ref={headlineRef}
              className="font-urbanist text-white drop-shadow-2xl font-light uppercase">
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-[75px] xl:text-[85px] font-light uppercase tracking-tight leading-[1]">
                {heroTitles[titleIdx].line1}
              </span>
              <span className="block mt-2 sm:mt-3 lg:mt-4 text-5xl sm:text-6xl md:text-7xl lg:text-[75px] xl:text-[85px] font-light uppercase tracking-tight leading-[1]">
                {heroTitles[titleIdx].line2}
              </span>
            </h1>
          </div>

          {/* Description & CTAs (Glassmorphic box underneath) */}
          <div 
            ref={subRef}
            className="w-full max-w-3xl bg-black/30 backdrop-blur-xl border border-white/10 p-6 sm:p-8 lg:p-10 rounded-[2rem] sm:rounded-[2.5rem] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.6)] mt-2"
          >
            <p className="text-sm sm:text-base lg:text-lg font-light text-white/90 leading-relaxed mb-6 sm:mb-8 max-w-2xl">
              Criamos ovejas frisonas en pasturas naturales y elaboramos quesos premium. Un proceso 100% familiar que respeta los tiempos de la tierra y el verdadero sabor artesanal.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#cultivars"
                className="flex items-center justify-center gap-2 sm:gap-3 h-12 sm:h-14 rounded-full bg-white text-charcoal font-bold text-[10px] sm:text-xs hover:bg-white/90 hover:scale-[1.02] transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.15)] tracking-[0.15em] uppercase px-8 sm:w-auto">
                <Icon name="SparklesIcon" size={16} variant="solid" className="sm:w-5 sm:h-5" />
                <span>Variedades</span>
              </a>
              <a
                href="https://wa.me/5491132554757?text=%C2%A1Hola!%20Te%20escribo%20desde%20el%20sitio%20web%20de%20Quesos%20Zampa.%20Me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 sm:gap-3 h-12 sm:h-14 rounded-full border border-white/30 bg-white/5 text-white font-bold text-[10px] sm:text-xs hover:bg-white/15 hover:border-white/60 transition-all duration-300 tracking-[0.15em] uppercase px-8 sm:w-auto">
                <Icon name="WhatsApp" size={16} className="sm:w-5 sm:h-5" />
                <span>Contacto</span>
              </a>
            </div>
          </div>

        </div>
      </div>
      
      {/* Scroll indicator - Visible on mobile and desktop */}
      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-12 lg:right-12 z-20 flex flex-col items-center gap-2 sm:gap-3 animate-bounce opacity-80">
        <span className="text-[8px] sm:text-[9px] font-medium uppercase tracking-[0.4em] text-white [writing-mode:vertical-rl] rotate-180 mb-1 sm:mb-2">Conoce</span>
        <div className="w-[1px] h-8 sm:h-12 bg-gradient-to-b from-white to-transparent" />
      </div>

    </section>
  );
}

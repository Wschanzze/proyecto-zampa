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
    <section className="relative h-[100dvh] lg:h-screen lg:min-h-[700px] lg:max-h-[950px] w-full overflow-hidden flex items-end">
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent z-10 pointer-events-none hidden lg:block" />
      </div>

      {/* Hero Content (Asymmetric Layout) */}
      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 pb-8 sm:pb-12 lg:pb-20 pt-20 sm:pt-28 lg:pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-16 items-end">
          
          {/* Left Column: Massive Title (takes 7 columns) */}
          <div className="lg:col-span-7 flex flex-col justify-end">
            <div className="mb-3 sm:mb-4 lg:mb-6 flex items-center gap-3 sm:gap-4">
              <span className="w-8 sm:w-12 h-[1px] bg-white/60"></span>
              <p className="text-[9px] sm:text-xs font-semibold tracking-[0.4em] text-white/90 uppercase drop-shadow-md">
                De Tandil a tu Mesa
              </p>
            </div>

            <div className="min-h-[90px] sm:min-h-[140px] lg:min-h-[220px] flex items-end">
              <h1
                ref={headlineRef}
                className="font-fraunces text-4xl sm:text-6xl md:text-7xl lg:text-[85px] xl:text-[95px] font-light leading-[1.05] text-white uppercase tracking-wide drop-shadow-2xl">
                {heroTitles[titleIdx].line1}<br />
                <span className="text-white/90 italic font-medium">{heroTitles[titleIdx].line2}</span>
              </h1>
            </div>
          </div>

          {/* Right Column: Description & CTAs (takes 5 columns) */}
          <div 
            ref={subRef}
            className="lg:col-span-5 flex flex-col lg:pb-2 w-full"
          >
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 sm:p-8 lg:p-10 rounded-[1.8rem] sm:rounded-[2rem] shadow-2xl">
              <p className="text-xs sm:text-sm lg:text-base font-light text-white/90 leading-relaxed mb-6 sm:mb-8">
                Criamos ovejas frisonas en pasturas naturales y elaboramos quesos premium. Un proceso 100% familiar que respeta los tiempos de la tierra y el verdadero sabor artesanal.
              </p>

              <div className="grid grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3 sm:flex sm:flex-row lg:flex-col xl:flex-row">
                <a
                  href="#cultivars"
                  className="flex items-center justify-center gap-2 sm:gap-3 h-11 sm:h-14 rounded-full bg-white text-charcoal font-bold text-[10px] sm:text-xs hover:bg-white/90 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] tracking-[0.1em] sm:tracking-[0.15em] uppercase w-full">
                  <Icon name="SparklesIcon" size={14} variant="solid" className="sm:w-4 sm:h-4" />
                  <span>Variedades</span>
                </a>
                <a
                  href="https://www.instagram.com/quesos_zampa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 sm:gap-3 h-11 sm:h-14 rounded-full border border-white/40 bg-white/5 text-white font-bold text-[10px] sm:text-xs hover:bg-white/20 hover:border-white transition-all duration-300 tracking-[0.1em] sm:tracking-[0.15em] uppercase w-full">
                  <Icon name="ChatBubbleLeftRightIcon" size={14} variant="outline" className="sm:w-4 sm:h-4" />
                  <span>Contacto</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Scroll indicator - Hidden on mobile, visible on desktop */}
      <div className="absolute bottom-6 right-6 lg:bottom-12 lg:right-12 z-20 hidden sm:flex flex-col items-center gap-3 animate-bounce opacity-80">
        <span className="text-[9px] font-medium uppercase tracking-[0.4em] text-white [writing-mode:vertical-rl] rotate-180 mb-2">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
      </div>

    </section>
  );
}

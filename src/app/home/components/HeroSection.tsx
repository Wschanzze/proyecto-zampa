'use client';
import React, { useEffect, useRef, useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface HeroSlide {
  id: number;
  label: string;
  line1: string;
  line2: string;
  image: string;
  alt: string;
  desc: string;
}

const heroSlides: HeroSlide[] = [
  {
    id: 1,
    label: 'Origen',
    line1: 'Quesos',
    line2: 'con Pasión de Origen',
    image: '/assets/Quesos%20Zampa/07B73847-614E-4FDC-B7AF-F639064C64CB.jpg',
    alt: 'Paisaje de las pasturas y el establecimiento Quesos Zampa en Napaleofú al atardecer',
    desc: 'Criamos ovejas frisonas en pasturas naturales y elaboramos quesos premium. Un proceso 100% familiar que respeta los tiempos de la tierra y el verdadero sabor artesanal.'
  },
  {
    id: 2,
    label: 'Elaboración',
    line1: 'Elaboramos',
    line2: 'Nuestros Quesos',
    image: '/assets/Quesos%20Zampa/IMG_9816.JPG',
    alt: 'Proceso de elaboración artesanal de quesos Zampa',
    desc: 'En nuestra quesería transformamos diariamente la leche fresca en hormas únicas. Cuidado de autor, higiene rigurosa y pasión en cada etapa del proceso.'
  },
  {
    id: 3,
    label: 'La Cava',
    line1: 'Añejamos',
    line2: 'con Calma y Tiempo',
    image: '/assets/Quesos%20Zampa/IMG_9858.JPG',
    alt: 'Hormas de quesos artesanales Zampa madurando en la cava familiar',
    desc: 'Nuestros quesos maduran lentamente en una cava familiar controlada, donde adquieren el carácter, picor e intensidad de sabor que nos distinguen.'
  },
  {
    id: 4,
    label: 'El Tambo',
    line1: 'Criamos',
    line2: 'Nuestras Ovejas',
    image: '/assets/Quesos%20Zampa/68C50477-1C39-48B6-86FE-640DEDCA65B1.jpg',
    alt: 'Detalle de quesos de oveja madurados listos para consumo',
    desc: 'Criamos nuestras ovejas bajo un sistema pastoril sustentable en el corazón de Napaleofú. Su libre pastoreo garantiza una leche de altísima calidad.'
  }
];

export default function HeroSection() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLDivElement>(null);
  const [currentIdx, setCurrentIdx] = useState(0);

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

  // Slide transition handler with animations
  const goToSlide = (idx: number) => {
    if (idx === currentIdx) return;
    
    const titleEl = headlineRef.current;
    const descEl = subRef.current;
    
    if (titleEl) {
      titleEl.style.transition = 'opacity 0.4s cubic-bezier(0.5, 0, 0, 1), transform 0.4s cubic-bezier(0.5, 0, 0, 1)';
      titleEl.style.opacity = '0';
      titleEl.style.transform = 'translateY(-15px)';
    }
    if (descEl) {
      descEl.style.transition = 'opacity 0.4s cubic-bezier(0.5, 0, 0, 1), transform 0.4s cubic-bezier(0.5, 0, 0, 1)';
      descEl.style.opacity = '0';
      descEl.style.transform = 'translateY(15px)';
    }
    
    setTimeout(() => {
      setCurrentIdx(idx);
      
      if (titleEl) {
        titleEl.style.transition = 'none';
        titleEl.style.transform = 'translateY(15px)';
        titleEl.getBoundingClientRect(); // trigger reflow
        titleEl.style.transition = 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
        titleEl.style.opacity = '1';
        titleEl.style.transform = 'translateY(0)';
      }
      if (descEl) {
        descEl.style.transition = 'none';
        descEl.style.transform = 'translateY(-15px)';
        descEl.getBoundingClientRect(); // trigger reflow
        descEl.style.transition = 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
        descEl.style.opacity = '1';
        descEl.style.transform = 'translateY(0)';
      }
    }, 400);
  };

  // Auto rotation interval (triggers goToSlide for a clean transition)
  useEffect(() => {
    const timer = setInterval(() => {
      const nextIdx = (currentIdx + 1) % heroSlides.length;
      goToSlide(nextIdx);
    }, 7000);
    return () => clearInterval(timer);
  }, [currentIdx]);

  return (
    <section className="relative h-[100dvh] lg:h-screen lg:min-h-[700px] lg:max-h-[950px] w-full overflow-hidden flex items-center bg-charcoal">
      {/* Background Images */}
      <div className="absolute inset-0 w-full h-full z-0">
        {heroSlides.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
              idx === currentIdx ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <AppImage
              src={slide.image}
              alt={slide.alt}
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

      {/* Right Side Vertical Navigation (Reference Style) */}
      <div className="absolute right-4 sm:right-8 lg:right-16 top-[40%] sm:top-[38%] lg:top-[40%] -translate-y-1/2 z-30 hidden md:flex flex-col items-end gap-3 sm:gap-4 select-none">
        {heroSlides.map((slide, idx) => {
          const isActive = currentIdx === idx;
          return (
            <button
              key={slide.id}
              onClick={() => goToSlide(idx)}
              className="group flex items-center justify-end gap-3 sm:gap-4 text-right cursor-pointer py-1.5 focus:outline-none"
            >
              <span className={`text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase transition-all duration-300 ${
                isActive 
                  ? 'text-white font-bold opacity-100 drop-shadow-md' 
                  : 'text-white/40 hover:text-white/80 opacity-100 drop-shadow-sm'
              }`}>
                {slide.label}
              </span>
              <span className={`h-[1px] bg-white transition-all duration-500 ${
                isActive 
                  ? 'w-10 sm:w-16 bg-white' 
                  : 'w-4 sm:w-6 bg-white/20 group-hover:w-8 group-hover:bg-white/45'
              }`} />
            </button>
          );
        })}
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
                {heroSlides[currentIdx].line1}
              </span>
              <span className="block mt-2 sm:mt-3 lg:mt-4 text-5xl sm:text-6xl md:text-7xl lg:text-[75px] xl:text-[85px] font-light uppercase tracking-tight leading-[1]">
                {heroSlides[currentIdx].line2}
              </span>
            </h1>
          </div>

          {/* Description & CTAs (Clean borderless transparent flow) */}
          <div 
            ref={subRef}
            className="w-full max-w-3xl flex flex-col gap-6 sm:gap-8 mt-2"
          >
            <p className="text-sm sm:text-base lg:text-lg font-light text-white/95 leading-relaxed max-w-2xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
              {heroSlides[currentIdx].desc}
            </p>

            {/* 
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/productos"
                className="flex items-center justify-center gap-2 sm:gap-3 h-12 sm:h-14 rounded-full bg-white text-charcoal font-bold text-[10px] sm:text-xs hover:bg-white/90 hover:scale-[1.02] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.25)] tracking-[0.15em] uppercase px-8 sm:w-auto">
                <Icon name="SparklesIcon" size={16} variant="solid" className="sm:w-5 sm:h-5" />
                <span>Variedades</span>
              </a>
              <a
                href="https://wa.me/5491132554757?text=%C2%A1Hola!%20Te%20escribo%20desde%20el%20sitio%20web%20de%20Quesos%20Zampa.%20Me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n."
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 sm:gap-3 h-12 sm:h-14 rounded-full border border-white/35 bg-black/15 backdrop-blur-sm text-white font-bold text-[10px] sm:text-xs hover:bg-[#25D366] hover:border-[#25D366] hover:scale-[1.02] transition-all duration-300 tracking-[0.15em] uppercase px-8 sm:w-auto shadow-[0_4px_20px_rgba(0,0,0,0.25)]">
                <Icon name="WhatsApp" size={18} className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                <span>Escribinos por WhatsApp</span>
              </a>
            </div>
            */}
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

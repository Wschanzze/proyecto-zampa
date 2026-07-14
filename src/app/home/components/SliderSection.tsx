'use client';
import { useState, useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Slide {
  id: number;
  subtitle: string;
  title: string;
  excerpt: string;
  image: string;
  href: string;
}

const slides: Slide[] = [
  {
    id: 1,
    subtitle: 'RECORRIDO GUIADO',
    title: 'Conocé nuestro <span class="font-fraunces italic lowercase font-normal text-white">tambo</span>',
    excerpt: 'Vení a Napaleofú a conocer el proceso desde el inicio. Caminá entre nuestras pasturas y observá el ordeñe diario de nuestras ovejas frisonas en un entorno natural único.',
    image: '/assets/Quesos%20Zampa/BAB4C1FD-5368-4434-ADE4-498A3AE4D8C6.jpg',
    href: 'https://wa.me/5491132554757?text=%C2%A1Hola!%20Me%20gustar%C3%ADa%20coordinar/reservar%20un%20recorrido%20guiado%20para%20conocer%20el%20tambo%20en%20Napaleof%C3%BA.',
  },
  {
    id: 2,
    subtitle: 'ALIMENTACIÓN NATURAL',
    title: 'Sistema <span class="font-fraunces italic lowercase font-normal text-white">pastoril</span>',
    excerpt: 'Nuestras ovejas pastan libremente en las pasturas de Napaleofú bajo un esquema de pastoreo rotativo. Esta alimentación natural y el respeto por el bienestar animal son la clave para obtener una leche de oveja de altísima calidad.',
    image: '/assets/Quesos%20Zampa/nuevas/a15ed077-6d9c-4c40-891b-b17af3cbac6c.jpg',
    href: '/nuestra-historia',
  },
  {
    id: 3,
    subtitle: 'DE LA PASTURA A LA CAVA',
    title: 'Ciclo completo de <span class="font-fraunces italic lowercase font-normal text-white">elaboración</span>',
    excerpt: 'Controlamos con absoluta dedicación cada etapa del proceso: desde el ordeñe higiénico y la elaboración manual de cada pieza, hasta la maduración controlada en nuestra cava de Tandil, garantizando un queso honesto y con carácter real.',
    image: '/assets/Quesos%20Zampa/07B73847-614E-4FDC-B7AF-F639064C64CB.jpg',
    href: '/nuestra-historia',
  },
];

export default function SliderSection() {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);

  // Auto-progress bar animation (does not pause on hover)
  useEffect(() => {
    setProgress(0);
    const intervalTime = 50; // update progress every 50ms for smoother animation
    const totalTime = 7000;
    const steps = totalTime / intervalTime;
    let stepCount = 0;

    const timer = setInterval(() => {
      stepCount++;
      setProgress((stepCount / steps) * 100);
      if (stepCount >= steps) {
        setCurrent((prev) => (prev + 1) % slides.length);
        setProgress(0);
        stepCount = 0;
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [current]);

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
    setProgress(0);
  };

  return (
    <section 
      className="relative min-h-[700px] h-screen max-h-[900px] w-full overflow-hidden bg-black flex items-end justify-center lg:justify-start"
    >
      {/* Full Bleed Background Images */}
      <div className="absolute inset-0 w-full h-full z-0">
        {slides.map((slide, idx) => {
          const isActive = current === idx;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              {slide.image.endsWith('.mp4') ? (
                <video
                  src={slide.image}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className={`w-full h-full object-cover ${isActive ? 'scale-105 transition-transform duration-[20s] ease-linear' : ''}`}
                />
              ) : (
                <AppImage
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className={`object-cover ${isActive ? 'animate-ken-burns' : ''}`}
                  priority={idx === 0}
                />
              )}
            </div>
          );
        })}
        {/* Dark overlays for high-contrast legibility */}
        <div className="absolute inset-0 bg-black/35 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent z-10 pointer-events-none hidden lg:block" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 pointer-events-none" />
      </div>

      {/* Floating Content Wrapper */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-12 pb-16 lg:pb-24 flex justify-start items-end h-full pt-28">
        <div className="w-full lg:max-w-2xl text-left flex flex-col relative min-h-[320px] md:min-h-[290px]">
          {slides.map((slide, idx) => {
            const isActive = current === idx;
            return (
              <div
                key={slide.id}
                className={`absolute bottom-0 left-0 w-full transition-all duration-1000 ease-in-out flex flex-col gap-4 lg:gap-6 ${
                  isActive 
                    ? 'opacity-100 translate-y-0 relative z-10' 
                    : 'opacity-0 translate-y-8 absolute pointer-events-none'
                }`}
              >
                {/* Subtitle */}
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
                  {slide.subtitle}
                </span>

                {/* Title */}
                <h2 
                  className="text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-tight uppercase tracking-wide"
                  dangerouslySetInnerHTML={{ __html: slide.title }}
                />

                {/* Excerpt */}
                <p className="text-sm sm:text-base text-white/80 font-light max-w-lg leading-relaxed mt-2">
                  {slide.excerpt}
                </p>

                {/* Underlined Link Style CTA */}
                <div className="mt-4">
                  <a
                    href={slide.href}
                    target={slide.href.startsWith('http') ? "_blank" : undefined}
                    rel={slide.href.startsWith('http') ? "noopener noreferrer" : undefined}
                    className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-white border-b border-[#C9A84C] pb-1 hover:text-[#C9A84C] hover:border-white transition-all duration-300"
                  >
                    MAS INFO
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Minimalist Progress Line at the very bottom edge of the section */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 z-20">
        <div 
          className="h-full bg-[#C9A84C] transition-all duration-100 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Floating Side Navigation Arrows (Minimalist & Professional) */}
      <button
        onClick={handlePrev}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/20 hover:bg-white backdrop-blur-md flex items-center justify-center border border-white/20 hover:border-white shadow-lg text-white hover:text-charcoal transition-all duration-300 hover:scale-105 group"
        aria-label="Anterior"
      >
        <Icon name="ArrowLeftIcon" size={20} className="transition-transform duration-300 group-hover:-translate-x-0.5" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/20 hover:bg-white backdrop-blur-md flex items-center justify-center border border-white/20 hover:border-white shadow-lg text-white hover:text-charcoal transition-all duration-300 hover:scale-105 group"
        aria-label="Siguiente"
      >
        <Icon name="ArrowRightIcon" size={20} className="transition-transform duration-300 group-hover:translate-x-0.5" />
      </button>
    </section>
  );
}

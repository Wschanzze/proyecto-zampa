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
}

const slides: Slide[] = [
  {
    id: 1,
    subtitle: 'Recorrido Guiado',
    title: 'Conocé Nuestro Tambo',
    excerpt: 'Vení a Napaleofú a conocer el proceso desde el inicio. Caminá entre nuestras pasturas y observá el ordeñe diario de nuestras ovejas frisonas en un entorno natural único.',
    image: '/assets/Quesos%20Zampa/BAB4C1FD-5368-4434-ADE4-498A3AE4D8C6.jpg',
  },
  {
    id: 2,
    subtitle: 'Alimentación Natural',
    title: 'Sistema Pastoril',
    excerpt: 'Nuestras ovejas pastan libremente en las pasturas de Napaleofú bajo un esquema de pastoreo rotativo. Esta alimentación natural y el respeto por el bienestar animal son la clave para obtener una leche de oveja de altísima calidad.',
    image: '/assets/Quesos%20Zampa/nuevas/a15ed077-6d9c-4c40-891b-b17af3cbac6c.jpg',
  },
  {
    id: 3,
    subtitle: 'De la Pastura a la Cava',
    title: 'Ciclo Completo de Elaboración',
    excerpt: 'Controlamos con absoluta dedicación cada etapa del proceso: desde el ordeñe higiénico y la elaboración manual de cada pieza, hasta la maduración controlada en nuestra cava de Tandil, garantizando un queso honesto y con carácter real.',
    image: '/assets/Quesos%20Zampa/07B73847-614E-4FDC-B7AF-F639064C64CB.jpg',
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
        {/* Subtle shadow overlay only at the very bottom and left for text legibility edge cases */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent z-10 pointer-events-none hidden lg:block" />
      </div>

      {/* Glassmorphic Floating Content Card */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pb-12 lg:pb-20 pt-20 flex justify-start h-full items-end">
        
        <div className="w-full lg:max-w-xl xl:max-w-2xl bg-white/80 backdrop-blur-xl border border-white/50 shadow-2xl rounded-[2.5rem] p-8 lg:p-12 transition-all duration-500 hover:bg-white/90 relative overflow-hidden">
          
          {/* Dynamic Content */}
          <div className="relative min-h-[220px] lg:min-h-[190px]">
            {slides.map((slide, idx) => {
              const isActive = current === idx;
              return (
                <div
                  key={slide.id}
                  className={`absolute top-0 left-0 w-full transition-all duration-700 ease-in-out flex flex-col gap-4 lg:gap-5 ${
                    isActive 
                      ? 'opacity-100 translate-y-0 relative z-10' 
                      : 'opacity-0 translate-y-4 absolute pointer-events-none'
                  }`}
                >
                  {/* Category */}
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-teal-dark">
                      {slide.subtitle}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-charcoal leading-tight uppercase tracking-wide">
                    {slide.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-sm sm:text-base text-charcoal/85 leading-relaxed font-light max-w-lg">
                    {slide.excerpt}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Minimalist Progress Line at the very bottom edge of the card */}
          <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-charcoal/5">
            <div 
              className="h-full bg-teal transition-all duration-100 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
          
        </div>
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

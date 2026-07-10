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
  buttonText: string;
  href: string;
}

const slides: Slide[] = [
  {
    id: 1,
    subtitle: 'Recorrido Guiado',
    title: 'Conocé Nuestro Tambo',
    excerpt: 'Vení a Napaleofú a conocer el proceso desde el inicio. Caminá entre nuestras pasturas y observá el ordeñe diario de nuestras ovejas frisonas en un entorno natural único.',
    image: '/assets/Quesos%20Zampa/BAB4C1FD-5368-4434-ADE4-498A3AE4D8C6.jpg',
    buttonText: 'Reservar Visita',
    href: 'https://wa.me/5491132554757?text=%C2%A1Hola!%20Me%20gustar%C3%ADa%20coordinar/reservar%20un%20recorrido%20guiado%20para%20conocer%20el%20tambo%20en%20Napaleof%C3%BA.',
  },
  {
    id: 2,
    subtitle: 'Maridaje & Cata',
    title: 'Experiencias de Cata',
    excerpt: 'Participá de nuestros talleres sensoriales. Degustá nuestras 6 variedades de queso de oveja junto a una cuidada selección de vinos boutique de Tandil y la región.',
    image: '/assets/Quesos%20Zampa/07B73847-614E-4FDC-B7AF-F639064C64CB.jpg',
    buttonText: 'Reservar Experiencia',
    href: 'https://wa.me/5491132554757?text=%C2%A1Hola!%20Me%20interesa%20participar%20de%20las%20experiencias%20de%20cata%20y%20maridaje%20de%20Quesos%20Zampa.',
  },
  {
    id: 3,
    subtitle: 'Bienestar Animal',
    title: 'Sistema Pastoril',
    excerpt: 'En Zampa, nuestras ovejas se alimentan mediante un sistema pastoril. Este enfoque respeta el bienestar animal y los ciclos naturales, permitiéndoles pastar al aire libre durante todo el año.',
    image: '/assets/Quesos%20Zampa/IMG_1145.mp4',
    buttonText: 'Descubrí más',
    href: '/nuestra-historia',
  },
];

export default function SliderSection() {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);

  // Auto-progress bar animation
  useEffect(() => {
    if (isHovered) return;
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
  }, [isHovered, current]);

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
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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
        
        <div className="w-full lg:max-w-xl xl:max-w-2xl bg-white/70 backdrop-blur-xl border border-white/40 shadow-2xl rounded-[2.5rem] p-8 lg:p-12 transition-all duration-500 hover:bg-white/80">
          
          {/* Dynamic Content */}
          <div className="relative min-h-[220px] lg:min-h-[200px]">
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

                  {/* Button */}
                  <a
                    href={slide.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-charcoal hover:text-teal transition-colors duration-300 mt-2 w-fit"
                  >
                    <span>{slide.buttonText}</span>
                    <span className="flex items-center justify-center w-9 h-9 rounded-full bg-white shadow-sm border border-charcoal/10 group-hover:border-teal/30 group-hover:shadow-md transition-all duration-300">
                      <Icon name="ArrowRightIcon" size={14} className="text-charcoal group-hover:text-teal transition-all duration-300 group-hover:translate-x-0.5" />
                    </span>
                  </a>
                </div>
              );
            })}
          </div>

          {/* Navigation Controls inside the card */}
          <div className="mt-8 pt-6 border-t border-charcoal/10 flex flex-col gap-5">
            <div className="flex items-center justify-between">
              
              {/* Pagination */}
              <div className="flex items-center gap-2">
                <span className="text-2xl italic text-teal font-medium">0{current + 1}</span>
                <span className="text-sm font-light text-charcoal/40">/ 0{slides.length}</span>
              </div>

              {/* Arrow Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full bg-white shadow-sm border border-charcoal/10 hover:border-teal/50 flex items-center justify-center transition-all duration-300 group"
                  aria-label="Anterior"
                >
                  <Icon name="ArrowLeftIcon" size={16} className="text-charcoal group-hover:text-teal transition-all duration-300 group-hover:-translate-x-0.5" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full bg-white shadow-sm border border-charcoal/10 hover:border-teal/50 flex items-center justify-center transition-all duration-300 group"
                  aria-label="Siguiente"
                >
                  <Icon name="ArrowRightIcon" size={16} className="text-charcoal group-hover:text-teal transition-all duration-300 group-hover:translate-x-0.5" />
                </button>
              </div>
            </div>

            {/* Time Progress Bar */}
            <div className="w-full h-1 bg-charcoal/5 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-teal to-teal-light transition-all duration-100 ease-linear"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

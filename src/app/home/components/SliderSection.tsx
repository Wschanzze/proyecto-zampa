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
    image: '/assets/Quesos%20Zampa/IMG_1034.jpg',
    buttonText: 'Reservar Visita',
    href: 'https://www.instagram.com/quesos_zampa',
  },
  {
    id: 2,
    subtitle: 'Maridaje & Cata',
    title: 'Experiencias de Cata',
    excerpt: 'Participá de nuestros talleres sensoriales. Degustá nuestras 6 variedades de queso de oveja junto a una cuidada selección de vinos boutique de Tandil y la región.',
    image: '/assets/Quesos%20Zampa/tipos%20de%20quesos.jpg',
    buttonText: 'Reservar Experiencia',
    href: 'https://www.instagram.com/quesos_zampa',
  },
  {
    id: 3,
    subtitle: 'Sabor Añejado',
    title: 'Secretos de la Cava',
    excerpt: 'Adentrate en nuestra cava subterránea de maduración. Descubrí de la mano de nuestros expertos cómo el Pecorino adquiere su carácter único tras 9 a 12 meses de guarda paciente.',
    image: '/assets/Quesos%20Zampa/IMG_9824.JPG',
    buttonText: 'Conocer Más',
    href: 'https://www.instagram.com/quesos_zampa',
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
      className="relative py-20 lg:py-28 w-full overflow-hidden bg-gray-soft text-charcoal flex items-center border-b border-charcoal/5"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background soft decoration */}
      <div className="absolute top-0 right-0 w-[40%] h-[100%] bg-gradient-to-l from-white/30 to-transparent pointer-events-none z-0" />
      
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Columna Izquierda: Información (span 5 en lg) - Orden 2 en móvil para quedar abajo de la imagen */}
          <div className="order-2 lg:order-1 lg:col-span-5 flex flex-col justify-between min-h-[460px] relative z-10">
            {/* Slide Info (with transitions) */}
            <div className="relative flex-grow min-h-[300px]">
              {slides.map((slide, idx) => {
                const isActive = current === idx;
                return (
                  <div
                    key={slide.id}
                    className={`transition-all duration-700 ease-in-out flex flex-col gap-6 ${
                      isActive 
                        ? 'opacity-100 translate-y-0 relative z-10' 
                        : 'opacity-0 translate-y-8 absolute pointer-events-none'
                    }`}
                  >
                    {/* Contador y Categoría */}
                    <div className="flex items-center gap-4">
                      <span className="font-fraunces text-2xl italic text-teal/80">
                        0{idx + 1}
                      </span>
                      <div className="h-px w-8 bg-teal/40" />
                      <span className="text-xs font-semibold uppercase tracking-[0.25em] text-teal">
                        {slide.subtitle}
                      </span>
                    </div>

                    {/* Título */}
                    <h2 className="font-fraunces text-4xl md:text-5xl lg:text-6xl font-light text-umber-dark leading-[1.1] uppercase tracking-[0.03em]">
                      {slide.title}
                    </h2>

                    {/* Descripción */}
                    <p className="text-sm md:text-base text-charcoal/80 leading-relaxed font-light max-w-md">
                      {slide.excerpt}
                    </p>

                    {/* Botón */}
                    <a
                      href={slide.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-4 text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-charcoal hover:text-teal transition-colors duration-300 mt-4 w-fit"
                    >
                      <span>{slide.buttonText}</span>
                      <span className="flex items-center justify-center w-11 h-11 rounded-full border border-charcoal/20 group-hover:border-teal/50 bg-white/40 group-hover:bg-white transition-all duration-300 shadow-sm">
                        <Icon name="ArrowRightIcon" size={14} className="text-charcoal group-hover:text-teal transition-all duration-300 group-hover:translate-x-1" />
                      </span>
                    </a>
                  </div>
                );
              })}
            </div>

            {/* Controles de Navegación e Indicador de Progreso en la base */}
            <div className="mt-8 flex flex-col gap-6 border-t border-charcoal/10 pt-6">
              <div className="flex items-center justify-between">
                {/* Botones Flechas */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={handlePrev}
                    className="w-12 h-12 rounded-full border border-charcoal/20 hover:border-teal hover:bg-white flex items-center justify-center transition-all duration-300 group shadow-sm bg-white/50"
                    aria-label="Anterior"
                  >
                    <Icon name="ArrowLeftIcon" size={16} className="text-charcoal group-hover:text-teal transition-all duration-300 group-hover:-translate-x-0.5" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="w-12 h-12 rounded-full border border-charcoal/20 hover:border-teal hover:bg-white flex items-center justify-center transition-all duration-300 group shadow-sm bg-white/50"
                    aria-label="Siguiente"
                  >
                    <Icon name="ArrowRightIcon" size={16} className="text-charcoal group-hover:text-teal transition-all duration-300 group-hover:translate-x-0.5" />
                  </button>
                </div>

                {/* Contador total */}
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-charcoal/50">
                  <span className="text-charcoal font-bold">0{current + 1}</span> / 0{slides.length}
                </span>
              </div>

              {/* Barra de progreso de time */}
              <div className="w-full h-[2px] bg-charcoal/10 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-teal transition-all duration-100 ease-linear"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>

          {/* Columna Derecha: Imagen Destacada (span 7 en lg) - Orden 1 en móvil para quedar arriba */}
          <div className="order-1 lg:order-2 lg:col-span-7 w-full">
            <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[1.3] w-full rounded-[2.5rem] overflow-hidden shadow-2xl bg-white border border-teal/5">
              {slides.map((slide, idx) => {
                const isActive = current === idx;
                return (
                  <div
                    key={slide.id}
                    className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                      isActive 
                        ? 'opacity-100 scale-100 z-10' 
                        : 'opacity-0 scale-105 pointer-events-none'
                    }`}
                  >
                    <AppImage
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className={`object-cover ${isActive ? 'animate-ken-burns' : ''}`}
                      priority={idx === 0}
                    />
                    
                    {/* Degradado sutil en bordes para realzar la imagen */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                  </div>
                );
              })}

              {/* Badge Flotante Glassmorphic */}
              <div className="absolute top-6 left-6 z-20 bg-white/70 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/40 shadow-md">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-teal-dark flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
                  Quesos Zampa Experiencia
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

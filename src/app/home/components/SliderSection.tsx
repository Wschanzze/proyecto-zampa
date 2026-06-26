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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[600px] lg:min-h-[750px] w-full overflow-hidden bg-charcoal text-white flex items-center">
      {/* Background blurred layers */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              current === idx ? 'opacity-25' : 'opacity-0 pointer-events-none'
            }`}
          >
            <AppImage
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover filter blur-[12px] scale-105"
            />
          </div>
        ))}
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-charcoal/70 z-10" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-6 lg:px-12 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Slide Content */}
        <div className="lg:col-span-6 flex flex-col justify-center min-h-[300px] relative">
          {slides.map((slide, idx) => (
            <div
              key={slide.id}
              className={`transition-all duration-1000 ease-in-out flex flex-col gap-5 ${
                current === idx 
                  ? 'opacity-100 translate-x-0 relative z-10' 
                  : 'opacity-0 -translate-x-12 absolute pointer-events-none'
              }`}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-wheat">
                {slide.subtitle}
              </span>
              <h2 className="font-fraunces text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-white uppercase tracking-wider">
                {slide.title}
              </h2>
              <p className="text-base md:text-lg font-light text-white/80 leading-relaxed max-w-xl">
                {slide.excerpt}
              </p>
              <a
                href={slide.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-wheat text-charcoal font-semibold text-sm hover:bg-wheat-light transition-all duration-300 w-fit uppercase tracking-widest mt-4 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <Icon name="ChatBubbleLeftRightIcon" size={16} variant="outline" />
                {slide.buttonText}
              </a>
            </div>
          ))}
        </div>

        {/* Right Column: Image display */}
        <div className="lg:col-span-6 flex justify-center items-center relative">
          <div className="w-full max-w-[540px] aspect-[4/3] md:aspect-[16/10] rounded-[40px] overflow-hidden shadow-2xl relative border border-white/10 bg-charcoal-light">
            {slides.map((slide, idx) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  current === idx 
                    ? 'opacity-100 scale-100 z-10' 
                    : 'opacity-0 scale-95 pointer-events-none'
                }`}
              >
                <AppImage
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide Navigation dots */}
      <div className="absolute right-6 lg:right-12 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-4">
        {slides.map((slide, idx) => (
          <button
            key={slide.id}
            onClick={() => setCurrent(idx)}
            className="flex items-center justify-end group py-2"
            aria-label={`Ir al slide ${idx + 1}`}
          >
            <span className={`text-xs uppercase tracking-[0.2em] text-white mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
              current === idx ? 'opacity-100 font-semibold text-wheat' : ''
            }`}>
              {slide.subtitle}
            </span>
            <div className={`w-3.5 h-3.5 rounded-full border border-white/60 transition-all duration-300 flex items-center justify-center ${
              current === idx ? 'border-wheat scale-110' : 'hover:border-white'
            }`}>
              <div className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                current === idx ? 'bg-wheat' : 'bg-transparent'
              }`} />
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

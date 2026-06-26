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
    <section className="relative min-h-[600px] lg:min-h-[750px] w-full overflow-hidden bg-gray-soft text-charcoal flex items-center">
      {/* Background Slides (Full screen bleed) */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              current === idx ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <AppImage
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover opacity-20"
              priority={idx === 0}
            />
          </div>
        ))}
        {/* Light overlay for readability */}
        <div className="absolute inset-0 bg-gray-soft/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-soft via-transparent to-gray-soft/40 z-10" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-6 lg:px-12 py-24 flex items-center">
        <div className="max-w-2xl w-full min-h-[320px] relative">
          {slides.map((slide, idx) => (
            <div
              key={slide.id}
              className={`transition-all duration-1000 ease-in-out flex flex-col gap-6 ${
                current === idx 
                  ? 'opacity-100 translate-x-0 relative z-10' 
                  : 'opacity-0 -translate-x-12 absolute pointer-events-none'
              }`}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-teal">
                {slide.subtitle}
              </span>
              <h2 className="font-fraunces text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] text-umber-dark uppercase tracking-wider">
                {slide.title}
              </h2>
              <p className="text-sm md:text-base lg:text-lg font-light text-charcoal/90 leading-relaxed max-w-xl">
                {slide.excerpt}
              </p>
              
              {/* Premium Button: Text + arrow inside circle */}
              <a
                href={slide.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-4 text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-charcoal hover:text-teal transition-colors duration-300 mt-4 w-fit"
              >
                <span>{slide.buttonText}</span>
                <span className="flex items-center justify-center w-10 h-10 rounded-full border border-charcoal/30 group-hover:border-teal transition-colors duration-300">
                  <Icon name="ArrowRightIcon" size={14} className="text-charcoal group-hover:text-teal transition-all duration-300 group-hover:translate-x-1" />
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Numbered slide indicators */}
      <div className="absolute right-6 lg:right-16 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-6">
        {slides.map((slide, idx) => (
          <button
            key={slide.id}
            onClick={() => setCurrent(idx)}
            className="flex items-center justify-end text-right group py-2 focus:outline-none"
            aria-label={`Ir al slide ${idx + 1}`}
          >
            <span className={`text-xs uppercase tracking-[0.2em] text-charcoal/70 mr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:inline-block`}>
              {slide.subtitle}
            </span>
            <div className="flex items-center gap-3">
              {current === idx && <div className="w-8 h-px bg-teal transition-all duration-500" />}
              <span className={`font-fraunces text-sm md:text-base transition-all duration-300 ${
                current === idx ? 'text-teal font-semibold scale-110' : 'text-charcoal/40 hover:text-charcoal/80'
              }`}>
                0{idx + 1}
              </span>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

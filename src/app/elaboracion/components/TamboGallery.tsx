'use client';
import React, { useState, useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';
import AppIcon from '@/components/ui/AppIcon';

const galleryImages = [
  { src: '/assets/Quesos Zampa/elaboracion/14.jpg', alt: 'Proceso de elaboración' },
  { src: '/assets/Quesos Zampa/elaboracion/16.jpg', alt: 'Ordeñe de ovejas' },
  { src: '/assets/Quesos Zampa/elaboracion/12.jpg', alt: 'Crianza en tambo' },
  { src: '/assets/Quesos Zampa/elaboracion/10.jpg', alt: 'Elaboración artesanal' },
  { src: '/assets/Quesos Zampa/elaboracion/2.jpg', alt: 'Quesería Zampa' },
  { src: '/assets/Quesos Zampa/elaboracion/15.jpg', alt: 'Cuidado de ovejas' },
];

export default function TamboGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Bloquear el scroll cuando el lightbox está abierto
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedIndex]);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % galleryImages.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  return (
    <>
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="mb-12 text-center md:text-left">
          <p className="text-xs font-medium uppercase tracking-widest text-teal mb-3">EL ORIGEN</p>
          <h2 className="text-3xl md:text-4xl font-light uppercase tracking-wide text-charcoal mb-4">
            Pasión de Origen
          </h2>
          <p className="text-umber-light font-light max-w-3xl text-base md:text-lg leading-relaxed">
            Nuestra historia y nuestros quesos nacen en el campo. Realizamos el proceso completo, desde la crianza de nuestras ovejas en un sistema pastoril natural y el ordeñe diario, hasta la elaboración cuidadosa en nuestra quesería. Cada etapa refleja nuestro compromiso, logrando así un queso de oveja con verdadera pasión de origen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px] md:auto-rows-[300px]">
          
          {/* Item 1: Large Image - Spans 2 cols & 2 rows on desktop */}
          <div 
            className="md:col-span-2 md:row-span-2 relative rounded-xl overflow-hidden shadow-md group cursor-pointer bg-black"
            onClick={() => setSelectedIndex(0)}
          >
            <AppImage 
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>

          {/* Item 2: Image - Top Right */}
          <div 
            className="relative rounded-xl overflow-hidden shadow-md group cursor-pointer bg-black"
            onClick={() => setSelectedIndex(1)}
          >
             <AppImage 
                src={galleryImages[1].src}
                alt={galleryImages[1].alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
             />
             <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>

          {/* Item 3: Image - Middle Right */}
          <div 
            className="relative rounded-xl overflow-hidden shadow-md group cursor-pointer bg-black"
            onClick={() => setSelectedIndex(2)}
          >
            <AppImage 
              src={galleryImages[2].src}
              alt={galleryImages[2].alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>

          {/* Item 4: Image - Bottom Left */}
          <div 
            className="relative rounded-xl overflow-hidden shadow-md group cursor-pointer bg-black"
            onClick={() => setSelectedIndex(3)}
          >
            <AppImage 
              src={galleryImages[3].src}
              alt={galleryImages[3].alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>

          {/* Item 5: Image - Bottom Middle */}
          <div 
            className="relative rounded-xl overflow-hidden shadow-md group cursor-pointer bg-black"
            onClick={() => setSelectedIndex(4)}
          >
            <AppImage 
              src={galleryImages[4].src}
              alt={galleryImages[4].alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>

          {/* Item 6: Image - Bottom Right */}
          <div 
            className="relative rounded-xl overflow-hidden shadow-md group cursor-pointer bg-black"
            onClick={() => setSelectedIndex(5)}
          >
            <AppImage 
              src={galleryImages[5].src}
              alt={galleryImages[5].alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>

        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {selectedIndex !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          {/* Botón de cierre */}
          <button 
            className="absolute top-6 right-6 z-50 text-white/70 hover:text-white transition-colors bg-black/50 hover:bg-black/80 rounded-full p-2"
            onClick={closeLightbox}
            aria-label="Cerrar galería"
          >
            <AppIcon name="XMarkIcon" size={24} />
          </button>

          {/* Navegación anterior */}
          <button 
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 text-white/70 hover:text-white transition-colors bg-black/50 hover:bg-black/80 rounded-full p-3 hidden md:block"
            onClick={handlePrev}
            aria-label="Imagen anterior"
          >
            <AppIcon name="ChevronLeftIcon" size={32} />
          </button>

          {/* Imagen principal (Lightbox) */}
          <div className="relative w-full max-w-6xl h-[80vh] px-4 md:px-16" onClick={(e) => e.stopPropagation()}>
            <div className="relative w-full h-full">
              <AppImage 
                src={galleryImages[selectedIndex].src}
                alt={galleryImages[selectedIndex].alt}
                fill
                className="object-contain"
              />
            </div>
            <p className="text-center text-white/70 mt-4 text-sm font-light tracking-wide uppercase">
              {galleryImages[selectedIndex].alt} ({selectedIndex + 1} / {galleryImages.length})
            </p>
          </div>

          {/* Navegación siguiente */}
          <button 
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 text-white/70 hover:text-white transition-colors bg-black/50 hover:bg-black/80 rounded-full p-3 hidden md:block"
            onClick={handleNext}
            aria-label="Imagen siguiente"
          >
            <AppIcon name="ChevronRightIcon" size={32} />
          </button>
        </div>
      )}
    </>
  );
}

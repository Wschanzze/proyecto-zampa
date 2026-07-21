import React from 'react';
import AppImage from '@/components/ui/AppImage';

export default function TamboGallery() {
  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="mb-12 text-center md:text-left">
        <p className="text-xs font-medium uppercase tracking-widest text-teal mb-3">EL ORIGEN</p>
        <h2 className="text-3xl md:text-4xl font-light uppercase tracking-wide text-charcoal mb-4">
          Elaboración en el Tambo
        </h2>
        <p className="text-umber-light font-light max-w-2xl text-base md:text-lg leading-relaxed">
          Nuestra historia y nuestros quesos nacen aquí, en el campo. El cuidado de nuestras ovejas y el ordeñe diario son los primeros pasos para lograr una materia prima de calidad excepcional.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px] md:auto-rows-[300px]">
        
        {/* Item 1: Large Video - Spans 2 cols & 2 rows on desktop */}
        <div className="md:col-span-2 md:row-span-2 relative rounded-xl overflow-hidden shadow-md group bg-black">
          <video 
            src="/assets/Quesos Zampa/fotos instagram/proceso_tambo.mp4"
            autoPlay loop muted playsInline
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>

        {/* Item 2: Image - Top Right */}
        <div className="relative rounded-xl overflow-hidden shadow-md group">
           <AppImage 
              src="/assets/Quesos Zampa/fotos instagram/familia-carpa.jpg"
              alt="Familia Zampa"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
           />
        </div>

        {/* Item 3: Video - Middle Right */}
        <div className="relative rounded-xl overflow-hidden shadow-md group bg-black">
          <video 
            src="/assets/Quesos Zampa/fotos instagram/ovejas_ordeñe.mp4"
            autoPlay loop muted playsInline
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Item 4: Video - Bottom Left */}
        <div className="relative rounded-xl overflow-hidden shadow-md group bg-black">
          <video 
            src="/assets/Quesos Zampa/fotos instagram/video-carpa.mp4"
            autoPlay loop muted playsInline
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Item 5: Video - Bottom Middle & Right (Spans 2 cols) */}
        <div className="md:col-span-2 relative rounded-xl overflow-hidden shadow-md group bg-black">
          <video 
            src="/assets/Quesos Zampa/fotos instagram/pecorino-prueba.mp4"
            autoPlay loop muted playsInline
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

      </div>
    </section>
  );
}

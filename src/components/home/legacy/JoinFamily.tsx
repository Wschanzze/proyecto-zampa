import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Icon from '@/components/ui/AppIcon';

const JoinFamily = () => {
  return (
    <section className="py-12 md:py-16 px-6 lg:px-12 bg-[#FAF8F5] flex justify-center items-center">
      <div 
        className="relative w-full max-w-7xl overflow-hidden rounded-[32px] md:rounded-[40px] py-20 md:py-28 px-6 lg:px-12 flex flex-col items-center justify-center shadow-2xl"
      >
        <Image 
          src="/assets/Quesos Zampa/6de54990-a007-4692-8898-b1dda1296784.jpg" 
          alt="Quesos en maduración" 
          fill
          className="object-cover"
          sizes="(max-width: 1280px) 100vw, 1280px"
          priority
        />
        {/* Overlays for dark text readability */}
        <div className="absolute inset-0 bg-black/65 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent z-10" />
        
        {/* Reseller Call to Action */}
        <div className="relative z-20 max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60">DESCUBRÍ NUESTROS PUNTOS DE VENTA</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-[0.06em] uppercase leading-tight">
            DÓNDE ENCONTRAR NUESTROS QUESOS
          </h2>
          <p className="text-base md:text-lg lg:text-xl font-light text-white/80 leading-relaxed max-w-2xl mx-auto">
            ¿Buscás nuestros quesos en tu ciudad? Conocé los exclusivos locales, salumerías boutique y restaurantes que ofrecen Quesos Zampa.
          </p>
          
          <Link 
            href="/encontranos" 
            className="flex items-center justify-center gap-2 sm:gap-3 h-12 sm:h-14 rounded-full bg-white text-charcoal font-bold text-[10px] sm:text-xs hover:bg-white/90 hover:scale-[1.02] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.3)] tracking-[0.15em] uppercase px-8 mt-4"
          >
            <Icon name="MapPinIcon" size={16} variant="solid" className="sm:w-5 sm:h-5 text-charcoal/90" />
            <span>Ver Puntos de Venta</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JoinFamily;

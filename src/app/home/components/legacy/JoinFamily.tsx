import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Icon from '@/components/ui/AppIcon';

const JoinFamily = () => {
  return (
    <section className="relative min-h-[400px] md:min-h-[480px] w-full overflow-hidden flex items-center justify-center py-16 px-6 lg:px-12">
      <Image 
        src="/assets/Quesos Zampa/6de54990-a007-4692-8898-b1dda1296784.jpg" 
        alt="Quesos en maduración" 
        fill
        className="object-cover"
        sizes="100vw"
      />
      {/* Overlays for dark text readability */}
      <div className="absolute inset-0 bg-black/60 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
      
      <div className="relative z-20 max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-[0.06em] uppercase">EL VALOR DE LO ARTESANAL</h2>
        <p className="text-base md:text-lg lg:text-xl font-light text-white/80 leading-relaxed max-w-2xl mx-auto">
          <span className="desktop-text-only">
            Integramos todo el proceso de elaboración: desde la cría y ordeñe de nuestras ovejas en los pastos de Napaleofú, hasta la maduración perfecta de cada horma. Te invitamos a probar un queso con identidad y carácter real.
          </span>
          <span className="mobile-text-only">
            Integramos todo el proceso de elaboración en Napaleofú para lograr un queso premium de oveja con identidad y carácter real.
          </span>
        </p>
        
        <Link 
          href="/productos" 
          className="flex items-center justify-center gap-2 sm:gap-3 h-12 sm:h-14 rounded-full bg-white text-charcoal font-bold text-[10px] sm:text-xs hover:bg-white/90 hover:scale-[1.02] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.25)] tracking-[0.15em] uppercase px-8 mt-4"
        >
          <Icon name="SparklesIcon" size={16} variant="solid" className="sm:w-5 sm:h-5 text-charcoal/90" />
          <span>CONOCÉ NUESTROS QUESOS</span>
        </Link>
      </div>
      <h1 className="absolute right-12 bottom-12 text-8xl md:text-9xl font-light text-white/5 uppercase select-none tracking-tighter leading-none hidden lg:block text-right">
        ZAMPA<br />QUESOS<br />TANDIL
      </h1>
    </section>
  );
};

export default JoinFamily;

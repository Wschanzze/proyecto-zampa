import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const JoinFamily = () => {
  return (
    <section className="relative min-h-[500px] md:min-h-[600px] w-full overflow-hidden flex items-center justify-center py-24 px-6 lg:px-12">
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
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-wheat-light">EL VALOR DE LO ARTESANAL</span>
        <h2 className="font-fraunces text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-[0.06em] uppercase">SABORES ÚNICOS DESDE EL TAMBO</h2>
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
          className="inline-flex items-center justify-center h-14 px-8 rounded-2xl bg-teal text-cream font-medium text-base hover:bg-teal-light transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 mt-4 tracking-widest uppercase"
          style={{ boxShadow: '0 8px 32px rgba(46,93,90,0.3)' }}
        >
          PROBAR NUESTROS QUESOS
        </Link>
      </div>
      <h1 className="absolute right-12 bottom-12 font-fraunces text-8xl md:text-9xl font-bold text-white/5 uppercase select-none tracking-tighter leading-none hidden lg:block text-right">
        ZAMPA<br />QUESOS<br />TANDIL
      </h1>
    </section>
  );
};

export default JoinFamily;

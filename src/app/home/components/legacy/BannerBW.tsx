import React from 'react';
import Image from 'next/image';

const BannerBW = () => {
  return (
    <section className="relative min-h-[400px] md:min-h-[480px] w-full overflow-hidden flex items-center justify-center py-16 px-6 lg:px-12">
      <Image 
        src="/assets/Quesos Zampa/IMG_0019.JPG" 
        alt="Trabajo en el tambo" 
        fill
        className="object-cover transition-transform duration-10000 hover:scale-105"
        sizes="100vw"
      />
      {/* Overlays for premium contrast and readability */}
      <div className="absolute inset-0 bg-black/60 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
      
      {/* Content wrapper */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12 text-center md:text-left">
        <div className="flex flex-col gap-2">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-wheat-light">Tradición Familiar</span>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-light text-white uppercase tracking-[0.06em] leading-tight">
            Quesos de Oveja <br className="hidden md:block" />de Autor
          </h3>
        </div>
        
        {/* Elegant vertical divider for desktop, horizontal for mobile */}
        <div className="w-16 h-[1px] md:w-[1px] md:h-24 bg-wheat/30 z-20" />
        
        <div className="flex flex-col gap-2 md:items-end text-center md:text-right">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-wheat-light">Compromiso</span>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-light text-white uppercase tracking-[0.06em] leading-tight">
            Sistema Pastoril <br className="hidden md:block" />100% en Libertad
          </h3>
        </div>
      </div>
      
      <h1 className="absolute right-8 bottom-6 text-7xl md:text-8xl font-light text-white/5 uppercase select-none tracking-tighter leading-none hidden lg:block text-right">
        ZAMPA<br />QUESOS<br />TANDIL
      </h1>
    </section>
  );
};

export default BannerBW;

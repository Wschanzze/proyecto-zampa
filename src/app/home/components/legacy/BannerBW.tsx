import React from 'react';
import Image from 'next/image';

const BannerBW = () => {
  return (
    <section className="relative h-[280px] md:h-[350px] w-full overflow-hidden flex items-center justify-center border-y border-wheat/20">
      <Image 
        src="/assets/Quesos Zampa/IMG_0019.JPG" 
        alt="Trabajo en el tambo" 
        fill
        className="object-cover transition-transform duration-10000 hover:scale-105"
        sizes="100vw"
      />
      {/* Overlays for premium contrast and readability */}
      <div className="absolute inset-0 bg-charcoal/60 z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/45 z-10" />
      
      {/* Content wrapper */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-12 text-center md:text-left">
        <div className="flex flex-col gap-2">
          <span className="text-[10px] font-bold tracking-[0.3em] text-wheat-light/80 uppercase">Tradición Familiar</span>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-light text-white uppercase tracking-[0.06em] leading-tight">
            Quesos de Oveja <br className="hidden md:block" />de Autor
          </h3>
        </div>
        
        {/* Elegant vertical divider for desktop, horizontal for mobile */}
        <div className="w-16 h-[1px] md:w-[1px] md:h-20 bg-wheat/30" />
        
        <div className="flex flex-col gap-2 md:items-end text-center md:text-right">
          <span className="text-[10px] font-bold tracking-[0.3em] text-wheat-light/80 uppercase">Compromiso</span>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-light text-white uppercase tracking-[0.06em] leading-tight">
            Sistema Pastoril <br className="hidden md:block" />100% en Libertad
          </h3>
        </div>
      </div>
    </section>
  );
};

export default BannerBW;

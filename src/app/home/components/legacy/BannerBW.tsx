import React from 'react';
import Image from 'next/image';

const BannerBW = () => {
  return (
    <section className="relative h-[300px] md:h-[400px] w-full overflow-hidden flex items-center justify-center">
      <Image 
        src="/assets/Quesos Zampa/IMG_0019.JPG" 
        alt="Trabajo en el tambo" 
        fill
        className="object-cover"
        sizes="100vw"
      />
      {/* Overlays for text readability */}
      <div className="absolute inset-0 bg-black/45 z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30 z-10" />
      
      {/* Content wrapper */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        <h3 className="font-fraunces text-3xl md:text-5xl font-semibold text-white uppercase tracking-wider leading-tight">
          Quesos de Oveja<br />de Autor
        </h3>
        <div className="h-px w-16 bg-wheat/60 md:hidden" />
        <h3 className="font-fraunces text-3xl md:text-5xl font-semibold text-white md:text-right uppercase tracking-wider leading-tight">
          Sistema Pastoril<br />100% en Libertad
        </h3>
      </div>
    </section>
  );
};

export default BannerBW;

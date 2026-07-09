import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const IntroStatement = () => {
  return (
    <section className="bg-white py-24 lg:py-32 border-b border-wheat/20 overflow-hidden flex items-center justify-center relative">
      <div className="intro-statement-container max-w-5xl mx-auto w-full px-6 text-center flex flex-col items-center gap-6 relative z-10">
        <h2 className="font-fraunces text-4xl md:text-5xl lg:text-6xl font-semibold text-charcoal tracking-wide leading-tight uppercase">
          Frescura y naturalidad<br />
          son los principios de nuestra producción
        </h2>
        <p className="text-base md:text-lg lg:text-xl font-light text-charcoal/80 leading-relaxed max-w-3xl mx-auto">
          Desde el pastoreo libre de nuestras ovejas en las pasturas de Tandil hasta la maduración en nuestra cava. Cada horma se elabora manualmente con paciencia, respetando los tiempos de la naturaleza para lograr un queso premium y honesto.
        </p>
        <Link 
          href="/nuestra-historia" 
          className="inline-flex items-center justify-center h-14 px-8 rounded-2xl bg-teal text-cream font-medium text-base hover:bg-teal-light transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 mt-4 tracking-widest uppercase"
          style={{ boxShadow: '0 8px 32px rgba(46,93,90,0.2)' }}
        >
          Conocé nuestra historia
        </Link>
      </div>
      <Image 
        src="/assets/Quesos Zampa/ovejas_render.png" 
        alt="Ovejas en Napaleofú" 
        width={1200}
        height={300}
        className="statement-watermark absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-auto max-h-[280px] object-contain opacity-40 pointer-events-none z-0" 
      />
    </section>
  );
};

export default IntroStatement;

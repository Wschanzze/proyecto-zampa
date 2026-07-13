import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Icon from '@/components/ui/AppIcon';

const IntroStatement = () => {
  return (
    <section className="bg-white pt-28 pb-48 md:pb-56 lg:pt-36 lg:pb-64 border-b border-wheat/20 overflow-hidden flex items-center justify-center relative">
      <div className="intro-statement-container max-w-5xl mx-auto w-full px-6 text-center flex flex-col items-center gap-6 relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-charcoal tracking-[0.06em] leading-snug uppercase">
          Frescura y naturalidad<br />
          son los principios de nuestra producción
        </h2>
        <p className="text-base md:text-lg lg:text-xl font-light text-charcoal/80 leading-relaxed max-w-3xl mx-auto">
          Desde el pastoreo libre de nuestras ovejas en las pasturas de Tandil hasta la maduración en nuestra cava. Cada horma se elabora manualmente con paciencia, respetando los tiempos de la naturaleza para lograr un queso premium y honesto.
        </p>
        <Link 
          href="/nuestra-historia" 
          className="group inline-flex items-center justify-center gap-2 h-12 sm:h-14 px-8 rounded-full bg-white text-charcoal border border-charcoal/10 font-bold text-[10px] sm:text-xs hover:bg-white/90 hover:scale-[1.02] transition-all duration-300 shadow-md hover:shadow-lg mt-8 tracking-[0.15em] uppercase"
        >
          <span>Conocé nuestra historia</span>
          <Icon name="ArrowRightIcon" size={14} className="text-charcoal transition-transform duration-300 group-hover:translate-x-0.5" />
        </Link>
      </div>
      <Image 
        src="/assets/Quesos Zampa/ovejas_render.png" 
        alt="Ovejas en Napaleofú" 
        width={1400}
        height={400}
        className="statement-watermark absolute -bottom-6 md:-bottom-10 lg:-bottom-12 left-1/2 -translate-x-1/2 w-[110%] lg:w-full max-w-8xl h-auto max-h-[320px] md:max-h-[380px] lg:max-h-[440px] object-contain opacity-40 pointer-events-none z-0" 
      />
    </section>
  );
};

export default IntroStatement;

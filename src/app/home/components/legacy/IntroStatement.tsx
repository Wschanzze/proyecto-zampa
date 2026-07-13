'use client';

import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const IntroStatement = () => {
  return (
    <section className="bg-white py-24 lg:py-32 border-b border-wheat/20 overflow-hidden flex items-center justify-center relative">
      {/* Atmospheric radial gradient */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-40">
        <div 
          className="absolute top-1/2 left-1/4 w-[500px] h-[500px] -translate-y-1/2 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)',
            filter: 'blur(50px)'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Premium Copy */}
          <div className="lg:col-span-6 flex flex-col gap-6 items-start text-left">
            {/* Values badge */}
            <div className="inline-flex items-center gap-2 border border-teal/10 bg-teal/5 px-4 py-2 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
              <span className="text-[10px] font-semibold text-teal tracking-[0.2em] uppercase">
                Nuestros Principios
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-light text-charcoal tracking-[0.04em] leading-tight uppercase">
              Frescura y naturalidad<br />
              desde el origen
            </h2>

            <div className="w-12 h-[1px] bg-wheat/60 my-1" />

            <p className="text-base md:text-lg font-light text-charcoal/80 leading-relaxed max-w-xl">
              Desde el pastoreo libre de nuestras ovejas en las pasturas de Tandil hasta la maduración en nuestra cava. Cada horma se elabora manualmente con paciencia, respetando los tiempos de la naturaleza para lograr un queso premium y honesto.
            </p>

            <Link 
              href="/nuestra-historia" 
              className="group inline-flex items-center justify-center gap-2 h-12 sm:h-14 px-8 rounded-full bg-white text-charcoal border border-charcoal/10 font-bold text-[10px] sm:text-xs hover:bg-white/90 hover:scale-[1.02] transition-all duration-300 shadow-md hover:shadow-lg mt-2 tracking-[0.15em] uppercase"
            >
              <span>Conocé nuestra historia</span>
              <Icon name="ArrowRightIcon" size={14} className="text-charcoal transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Right Column: Premium Video Frame */}
          <div className="lg:col-span-6 w-full relative">
            {/* Decorative background outline frame */}
            <div className="absolute -inset-2 rounded-[36px] border border-wheat/30 translate-x-3 translate-y-3 pointer-events-none z-0" />
            
            {/* Video container */}
            <div className="relative w-full aspect-[4/3] sm:aspect-video lg:aspect-[4/3] rounded-[32px] overflow-hidden shadow-2xl border-4 border-white z-10 bg-cream">
              <video
                src="/assets/Quesos Zampa/IMG_1145.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
              {/* Subtle elegant shadow gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default IntroStatement;

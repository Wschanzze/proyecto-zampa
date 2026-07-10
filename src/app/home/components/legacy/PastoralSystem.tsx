"use client";

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const PastoralSystem = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.play().catch(error => {
        console.log("Autoplay prevented on mobile:", error);
      });
    }
  }, []);

  return (
    <section className="pastoral-system relative py-24 lg:py-40 bg-white overflow-hidden border-t border-wheat/20">
      
      {/* Massive subtle watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[18vw] font-black text-limestone-soft/40 uppercase tracking-tighter whitespace-nowrap z-0 pointer-events-none select-none">
        NATURAL
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Premium Arch Video */}
          <div className="lg:col-span-5 relative order-2 lg:order-1 mt-12 lg:mt-0">
            {/* Soft glow behind the video */}
            <div className="absolute inset-0 bg-wheat/30 blur-[80px] rounded-full transform scale-110 -z-10 opacity-70"></div>
            
            <div className="relative aspect-[3/4] w-full max-w-[420px] mx-auto rounded-t-full rounded-b-[2.5rem] overflow-hidden shadow-[0_40px_80px_-20px_rgba(107,66,38,0.25)] border-[6px] border-white/80">
              <video 
                ref={videoRef}
                src="/assets/Quesos Zampa/IMG_1145.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-[20s] ease-linear"
              />
              {/* Subtle inner shadow for depth */}
              <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.15)] pointer-events-none rounded-t-full rounded-b-[2.5rem]"></div>
            </div>
            
            {/* Floating glass badge */}
            <div className="absolute bottom-12 -right-2 lg:-right-12 glass-stone p-4 rounded-2xl shadow-2xl border border-white/60 flex items-center gap-4 animate-float bg-white/70 backdrop-blur-md">
              <div className="w-12 h-12 rounded-full bg-teal text-white flex items-center justify-center shadow-inner">
                <Icon name="SparklesIcon" size={20} variant="outline" />
              </div>
              <div className="pr-2">
                <p className="text-sm font-semibold text-charcoal tracking-wide uppercase">100% Libre</p>
                <p className="text-xs text-umber-light font-light">Crianza Natural</p>
              </div>
            </div>
          </div>
          
          {/* Right Column: Editorial Text */}
          <div className="lg:col-span-7 flex flex-col gap-8 order-1 lg:order-2 lg:pl-10">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 mb-2">
                 <div className="h-px w-12 bg-teal/60" />
                 <span className="text-xs font-bold uppercase tracking-[0.3em] text-teal">Bienestar Animal</span>
              </div>
              
              <h2 className="text-5xl md:text-6xl lg:text-[5.5rem] font-light text-charcoal leading-[1.05] uppercase tracking-[0.02em]">
                Sistema<br />Pastoril
              </h2>
            </div>
            
            <div className="w-full max-w-md h-px bg-gradient-to-r from-wheat to-transparent my-2" />
            
            <div className="flex flex-col gap-6 max-w-lg">
              <p className="text-lg md:text-xl font-light text-charcoal/80 leading-relaxed">
                En Zampa, nuestras ovejas se alimentan mediante un sistema pastoril en los fértiles campos de Napaleofú. Este enfoque respeta el bienestar animal y los ciclos naturales, permitiéndoles pastar al aire libre durante todo el año.
              </p>
              <p className="text-lg md:text-xl font-light text-charcoal/80 leading-relaxed">
                La alimentación natural y libre de estrés no solo asegura una vida más saludable para nuestro rebaño, sino que se refleja directamente en la calidad y el sabor excepcional de nuestra leche, dando lugar a quesos con un carácter único y auténtico.
              </p>
            </div>
            
            <Link 
              href="/nuestra-historia" 
              className="inline-flex items-center justify-center gap-3 h-16 px-10 rounded-2xl bg-limestone-soft border border-umber/30 text-umber font-medium text-base hover:bg-umber hover:text-white hover:border-umber transition-all duration-300 shadow-xl hover:-translate-y-1 mt-6 self-start tracking-widest uppercase group"
            >
              Descubrí más
              <Icon name="ArrowRightIcon" size={18} variant="outline" className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default PastoralSystem;

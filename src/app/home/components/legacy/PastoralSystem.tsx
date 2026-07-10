"use client";

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';

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
    <section className="pastoral-system py-32 lg:py-48 bg-limestone-soft relative overflow-hidden border-t border-b border-umber/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          {/* Left Column: Copy */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-umber/80">Criadas en Libertad</span>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-light text-charcoal leading-tight uppercase tracking-[0.05em]">
                Sistema <br className="hidden lg:block"/>Pastoril
              </h3>
            </div>
            
            <div className="flex flex-col gap-5">
              <p className="text-base md:text-lg lg:text-xl font-light text-charcoal/80 leading-relaxed">
                En Zampa, nuestras ovejas se alimentan mediante un sistema pastoril en los fértiles campos de Napaleofú. Este enfoque respeta el bienestar animal y los ciclos naturales, permitiéndoles pastar al aire libre durante todo el año.
              </p>
              <p className="text-base md:text-lg lg:text-xl font-light text-charcoal/80 leading-relaxed">
                <span className="desktop-text-only">
                  La alimentación natural y libre de estrés no solo asegura una vida más saludable para nuestro rebaño, sino que se refleja directamente en la calidad y el sabor excepcional de nuestra leche, dando lugar a quesos con un carácter único y auténtico.
                </span>
                <span className="mobile-text-only">
                  Esta alimentación libre de estrés se refleja en la calidad y sabor de nuestra leche, logrando quesos con un carácter único.
                </span>
              </p>
            </div>
            
            <Link 
              href="/nuestra-historia" 
              className="inline-flex items-center justify-center h-14 px-10 rounded-2xl bg-limestone-soft border border-umber/30 text-umber font-semibold text-sm hover:bg-umber hover:text-white hover:border-umber transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 mt-4 self-start tracking-[0.15em] uppercase"
              style={{ boxShadow: '0 8px 32px rgba(107,66,38,0.12)' }}
            >
              Descubrí más
            </Link>
          </div>

          {/* Right Column: Video */}
          <div className="lg:col-span-6 relative">
            {/* Decorative background blur to make it feel premium */}
            <div className="absolute inset-0 bg-wheat/20 blur-[100px] rounded-full transform scale-110 -z-10 opacity-60"></div>
            
            <div className="relative aspect-[4/5] lg:aspect-[3/4] w-full max-w-[500px] mx-auto rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-[0_20px_60px_-15px_rgba(107,66,38,0.3)] border border-white/50">
              <video 
                ref={videoRef}
                src="/assets/Quesos Zampa/IMG_1145.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-[20s] ease-linear"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PastoralSystem;

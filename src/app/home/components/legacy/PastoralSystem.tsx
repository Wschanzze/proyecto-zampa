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
    <section className="pastoral-system py-24 lg:py-32 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Copy */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-teal">CRIADAS EN LIBERTAD</span>
            <h3 className="font-fraunces text-4xl md:text-5xl font-light text-umber-dark leading-tight uppercase tracking-[0.06em]">Sistema Pastoril</h3>
            <p className="text-base md:text-lg font-light text-charcoal/80 leading-relaxed">
              En Zampa, nuestras ovejas se alimentan mediante un sistema pastoril en los fértiles campos de Napaleofú. Este enfoque respeta el bienestar animal y los ciclos naturales, permitiéndoles pastar al aire libre durante todo el año.
            </p>
            <p className="text-base md:text-lg font-light text-charcoal/80 leading-relaxed">
              <span className="desktop-text-only">
                La alimentación natural y libre de estrés no solo asegura una vida más saludable para nuestro rebaño, sino que se refleja directamente en la calidad y el sabor excepcional de nuestra leche, dando lugar a quesos con un carácter único y auténtico.
              </span>
              <span className="mobile-text-only">
                Esta alimentación libre de estrés se refleja en la calidad y sabor de nuestra leche, logrando quesos con un carácter único.
              </span>
            </p>
            <Link 
              href="/nuestra-historia" 
              className="inline-flex items-center justify-center h-14 px-8 rounded-2xl bg-teal text-cream font-medium text-base hover:bg-teal-light transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 mt-2 self-start tracking-widest uppercase"
              style={{ boxShadow: '0 8px 32px rgba(46,93,90,0.2)' }}
            >
              DESCUBRE MÁS
            </Link>
          </div>

          {/* Right Column: Video */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[3/4] w-full max-w-[480px] mx-auto rounded-[32px] overflow-hidden shadow-2xl border border-teal/5">
              <video 
                ref={videoRef}
                src="/assets/Quesos Zampa/IMG_1145.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PastoralSystem;

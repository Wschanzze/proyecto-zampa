"use client";

import React, { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/AppIcon';

export default function LegacyVisitSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleLeaveReview = () => {
    window.open('https://g.page/r/CZQDdzpztPFvEAI/review', '_blank', 'noopener,noreferrer');
  };

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-white text-charcoal relative overflow-hidden flex flex-col items-center justify-center">
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Texts */}
          <div className={`lg:col-span-6 flex flex-col gap-6 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-teal">Tu opinión nos inspira</span>
            
            <h2 className="text-4xl md:text-5xl font-light text-charcoal leading-tight uppercase">
              ¿PROBASTE NUESTROS QUESOS?<br />
              ¡DÉJANOS TU RESEÑA EN GOOGLE!
            </h2>

            <p className="text-sm md:text-base text-charcoal/70 font-light leading-relaxed">
              Tu experiencia en nuestro establecimiento y con nuestras variedades de queso de oveja nos ayuda a seguir perfeccionando nuestra tradición artesanal en Tandil.
            </p>
            
            <button
              onClick={handleLeaveReview}
              className="group flex items-center justify-center gap-2 sm:gap-3 h-12 sm:h-14 rounded-full bg-white text-charcoal border border-charcoal/15 hover:bg-[#4285F4] hover:text-white hover:border-[#4285F4] hover:scale-[1.02] transition-all duration-300 shadow-md hover:shadow-lg mt-2 self-start tracking-[0.15em] uppercase px-8 font-semibold text-xs sm:text-sm"
            >
              <Icon name="Google" size={18} className="w-5 h-5 text-charcoal transition-transform duration-300 group-hover:scale-110 group-hover:text-white" />
              <span>Dejar reseña en Google</span>
            </button>
          </div>

          {/* Right Column: YouTube Video Embed */}
          <div className={`lg:col-span-6 transition-all duration-1000 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="relative w-full aspect-video rounded-[32px] overflow-hidden shadow-2xl border border-teal/5">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube-nocookie.com/embed/qnO8U5v48u4?autoplay=0&rel=0&controls=1"
                title="Quesos Zampa - Tambo Ovino Familiar"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

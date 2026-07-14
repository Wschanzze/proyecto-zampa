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

  const handleBookExperience = () => {
    const message = "¡Hola! Me pongo en contacto desde su sitio web porque me gustaría recibir información para reservar una visita y conocer el Tambo Zampa.";
    window.open(`https://wa.me/5491132554757?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-white text-charcoal relative overflow-hidden flex flex-col items-center justify-center border-b border-wheat/10">
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Texts */}
          <div className={`lg:col-span-6 flex flex-col gap-6 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-teal">Establecimiento Zampa</span>
            </div>
            
            <h2 className="font-fraunces text-4xl md:text-5xl font-semibold text-charcoal leading-[1.15] uppercase tracking-wide">
              Vení a descubrir la <span className="text-highlight font-light normal-case">tradición quesera</span>
            </h2>

            <div className="w-12 h-px bg-wheat"></div>

            <p className="text-base md:text-lg font-light text-charcoal/80 leading-relaxed max-w-xl">
              Te invitamos a vivir una experiencia de campo única en nuestro tambo de Napaleofú. Recorré las pasturas ovinas, presenciá el ordeñe diario y aprendé cómo elaboramos y maduramos artesanalmente cada uno de nuestros quesos de autor.
            </p>
            
            <button
              onClick={handleBookExperience}
              className="group flex items-center justify-center gap-3 h-12 sm:h-14 rounded-full bg-charcoal text-white hover:bg-[#25D366] hover:scale-[1.02] transition-all duration-300 shadow-md hover:shadow-lg mt-4 self-start tracking-[0.15em] uppercase px-8 border border-transparent"
            >
              <Icon name="WhatsApp" size={18} className="w-5 h-5 text-white transition-transform duration-300 group-hover:scale-110" />
              <span>Reserva tu experiencia</span>
            </button>
          </div>

          {/* Right Column: YouTube Video Embed */}
          <div className={`lg:col-span-6 transition-all duration-1000 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="relative w-full aspect-video rounded-[32px] overflow-hidden shadow-2xl border border-teal/5 bg-charcoal/5 group">
              <iframe
                className="absolute top-0 left-0 w-full h-full z-10"
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

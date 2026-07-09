"use client";

import React, { useEffect, useRef, useState } from 'react';

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
    <section ref={sectionRef} className="py-24 lg:py-32 bg-white text-charcoal relative overflow-hidden flex flex-col items-center justify-center">
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Texts */}
          <div className={`lg:col-span-6 flex flex-col gap-6 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-teal">Establecimiento Zampa</span>
            
            <h2 className="font-fraunces text-4xl md:text-5xl font-semibold text-umber-dark leading-tight">
              UN VIAJE PARA DESCUBRIR LA TRADICIÓN QUESERA.<br />
              ¡VEN A VISITARNOS!
            </h2>
            
            <button
              onClick={handleBookExperience}
              className="inline-flex items-center justify-center h-14 px-8 rounded-2xl bg-teal text-cream font-medium text-base hover:bg-teal-light transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 mt-2 self-start tracking-widest uppercase"
              style={{ boxShadow: '0 8px 32px rgba(46,93,90,0.2)' }}
            >
              Reserva tu experiencia 
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

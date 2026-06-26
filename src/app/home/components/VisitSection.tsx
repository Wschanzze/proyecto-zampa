'use client';
import { useEffect, useRef, useState } from 'react';

export default function VisitSection() {
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

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-white text-charcoal relative overflow-hidden flex flex-col items-center justify-center">
      <div className="max-w-5xl mx-auto w-full px-6 lg:px-12 text-center">
        
        {/* Texts */}
        <div className={`transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-umber-light mb-6">Establecimiento Zampa</p>
          
          <h2 className="font-fraunces text-5xl lg:text-7xl font-light text-umber-dark leading-tight mb-16 mx-auto max-w-4xl">
            UN VIAJE PARA DESCUBRIR LA TRADICIÓN QUESERA.<br />
            ¡VEN A VISITARNOS!
          </h2>
          
          <a
            href="https://www.instagram.com/quesos_zampa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 text-sm font-semibold uppercase tracking-[0.2em] text-umber hover:text-teal transition-colors duration-300 group mb-20"
          >
            Reserva tu experiencia 
            <div className="w-12 h-px bg-umber group-hover:bg-teal transition-colors duration-300" />
          </a>
        </div>

        {/* YouTube Video Embed */}
        <div className={`relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl transition-all duration-1000 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/-Zb6oeexldo?autoplay=0&rel=0&controls=1"
            title="Quesos Zampa - Tambo Ovino Familiar"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

      </div>
    </section>
  );
}

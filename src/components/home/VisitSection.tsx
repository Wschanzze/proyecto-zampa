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
    <section ref={sectionRef} className="py-24 lg:py-32 bg-[#FAF8F5] text-charcoal relative overflow-hidden flex flex-col items-center justify-center">
      <div className="max-w-5xl mx-auto w-full px-6 lg:px-12 text-center">
        
        {/* Texts */}
        <div className={`transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-umber-light mb-6">Tu opinión nos inspira</p>
          
          <h2 className="text-4xl lg:text-6xl font-light text-charcoal leading-tight tracking-[0.06em] mb-6 mx-auto max-w-4xl uppercase">
            ¿PROBASTE NUESTROS QUESOS?<br />
            ¡DÉJANOS TU RESEÑA EN GOOGLE!
          </h2>

          <p className="text-base text-charcoal/70 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
            Tu experiencia en nuestro establecimiento y con nuestras variedades de queso de oveja nos ayuda a seguir perfeccionando nuestra tradición artesanal en Tandil.
          </p>
          
          <a
            href="https://g.page/r/CZQDdzpztPFvEAI/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-umber hover:text-teal transition-colors duration-300 group mb-16"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
            </svg>
            Dejar reseña en Google 
            <div className="w-12 h-px bg-umber group-hover:bg-teal transition-colors duration-300" />
          </a>
        </div>

        {/* YouTube Video Embed */}
        <div className={`relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl transition-all duration-1000 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube-nocookie.com/embed/qnO8U5v48u4?autoplay=0&rel=0&controls=1"
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

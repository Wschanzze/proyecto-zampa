'use client';
import { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

export default function CtaSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {if (entry.isIntersecting) setVisible(true);},
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 lg:py-32 px-6 lg:px-12 bg-gray-soft overflow-hidden">
      
      {/* Wheat rule top */}
      <div className="wheat-rule mb-16 relative z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Content */}
          <div className={`lg:col-span-7 flex flex-col items-start text-left transition-all duration-800 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-xs font-semibold uppercase tracking-widest text-teal mb-4">El Legado Continúa</p>

            <h2 className="font-fraunces text-4xl md:text-5xl font-semibold text-umber-dark leading-tight mb-6">
              Del Campo a tu Mesa.<br />
              <em className="font-light italic text-teal">Sabor Artesanal de Oveja.</em>
            </h2>

            <p className="text-base md:text-lg font-light text-charcoal/80 leading-relaxed max-w-xl mb-8">
              Cada una de nuestras piezas gourmet se elabora de lunes a lunes con leche de oveja fresca del mismo día, garantizando la máxima pureza, trazabilidad y bienestar animal.
            </p>

            {/* Evidence strip */}
            <div className="flex items-center gap-6 flex-wrap mb-8">
              {[
                { icon: 'BeakerIcon', text: '6 Variedades de Queso' },
                { icon: 'GlobeAltIcon', text: 'Origen y Trazabilidad' },
                { icon: 'ShieldCheckIcon', text: 'Procesos Integrados' }
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-sm font-medium text-umber">
                  <Icon name={item.icon as any} size={16} variant="outline" className="text-teal" />
                  {item.text}
                </div>
              ))}
            </div>

            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6 w-full sm:w-auto">
              <a
                href="#cultivars"
                className="flex items-center justify-center gap-3 h-14 px-8 rounded-2xl bg-teal text-cream font-medium text-base hover:bg-teal-light transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 group"
                style={{ boxShadow: '0 8px 32px rgba(46,93,90,0.2)' }}
              >
                <Icon name="SparklesIcon" size={18} variant="outline" />
                Explorar Catálogo
                <Icon name="ArrowRightIcon" size={16} variant="outline" className="group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </div>

            <p className="text-xs text-charcoal/60 font-light">
              Distribuidores y comercios interesados pueden{' '}
              <a 
                href="https://www.instagram.com/quesos_zampa" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="teal-link font-medium"
              >
                contactarnos directamente
              </a>{' '}
              para consultas comerciales.
            </p>
          </div>

          {/* Right Side: Large Beautiful Image */}
          <div className={`lg:col-span-5 w-full transition-all duration-1000 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="relative aspect-[4/3] lg:aspect-[1.1] rounded-[32px] overflow-hidden shadow-2xl group border border-teal/10">
              <AppImage 
                src="/assets/Quesos%20Zampa/IMG_1900.jpg" 
                alt="Vista panorámica de la quesería Zampa y pasturas al atardecer"
                fill
                className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

        </div>
      </div>

      {/* Wheat rule bottom */}
      <div className="wheat-rule mt-16 relative z-10" />
    </section>);

}

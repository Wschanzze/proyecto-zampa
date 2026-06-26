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
      className="relative py-24 lg:py-36 px-6 lg:px-12 bg-limestone overflow-hidden">
      
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <AppImage
          src="/assets/images/footer.png"
          alt="Vista panorámica de la quesería Zampa y pasturas al atardecer"
          fill
          className="w-full h-full object-cover opacity-15"
          priority />
        
        <div className="absolute inset-0 bg-gradient-to-b from-limestone via-limestone/80 to-limestone" />
      </div>

      {/* Wheat rule */}
      <div className="wheat-rule mb-16 relative z-10" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div
          className={`transition-all duration-800 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ transitionDuration: '0.8s' }}>
          
          <p className="text-xs font-medium uppercase tracking-widest text-teal mb-5">El Legado Continúa</p>

          <h2 className="font-fraunces text-5xl lg:text-6xl font-semibold text-umber-dark leading-tight mb-7">
            Del Campo a tu Mesa.<br />
            <em className="font-light italic">Sabor Artesanal de Oveja.</em>
          </h2>

          <p className="text-xl font-light text-umber-light leading-relaxed max-w-2xl mx-auto mb-10">
            Cada una de nuestras piezas gourmet se elabora de lunes a lunes con leche de oveja fresca del mismo día, garantizando la máxima pureza, trazabilidad y bienestar animal.
          </p>

          {/* Evidence strip */}
          <div className="flex items-center justify-center gap-8 flex-wrap mb-12">
            {[
            { icon: 'BeakerIcon', text: '6 Variedades de Queso' },
            { icon: 'GlobeAltIcon', text: 'Origen y Trazabilidad' },
            { icon: 'ShieldCheckIcon', text: 'Procesos Integrados' }].
            map((item) =>
            <div key={item.text} className="flex items-center gap-2 text-sm font-medium text-umber">
                <Icon name={item.icon as any} size={16} variant="outline" className="text-teal" />
                {item.text}
              </div>
            )}
          </div>

          {/* Primary CTA — full-width button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a
              href="#cultivars"
              className="flex items-center justify-center gap-3 h-16 px-12 rounded-2xl bg-teal text-cream font-medium text-lg hover:bg-teal-light transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 group"
              style={{ boxShadow: '0 16px 48px rgba(46,93,90,0.32)' }}>
              
              <Icon name="SparklesIcon" size={20} variant="outline" />
              Explorar Catálogo
              <Icon name="ArrowRightIcon" size={18} variant="outline" className="group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </div>

          <p className="text-sm text-umber-light font-light">
            Distribuidores y comercios interesados pueden{' '}
            <a href="#" className="teal-link font-medium">contactarnos directamente</a> para consultas comerciales.
          </p>
        </div>
      </div>

      {/* Wheat rule */}
      <div className="wheat-rule mt-16 relative z-10" />
    </section>);

}

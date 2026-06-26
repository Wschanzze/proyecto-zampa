'use client';
import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

export default function HeritageSection() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = [headlineRef?.current, subRef?.current, cardRef?.current];
    elements?.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = '0';
      el.style.transform = 'translateY(28px)';
      setTimeout(() => {
        if (!el) return;
        el.style.transition = 'opacity 0.9s cubic-bezier(0.23,1,0.32,1), transform 0.9s cubic-bezier(0.23,1,0.32,1)';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 300 + i * 180);
    });
  }, []);

  return (
    <section id="heritage" className="relative py-24 lg:py-32 bg-gray-soft overflow-hidden flex items-center grain-overlay">
      {/* Atmospheric gradient background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute top-0 right-0 w-2/3 h-full opacity-30"
          style={{
            background: 'radial-gradient(ellipse at 80% 30%, rgba(201,168,76,0.18) 0%, transparent 60%)'
          }} />
        
        <div
          className="absolute bottom-0 left-0 w-1/2 h-1/2 opacity-20"
          style={{
            background: 'radial-gradient(ellipse at 20% 80%, rgba(46,93,90,0.15) 0%, transparent 55%)'
          }} />
        
      </div>
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left: Copy */}
          <div className="lg:col-span-5 flex flex-col gap-7">
            {/* Season badge */}
            <div className="inline-flex items-center gap-2 self-start border border-wheat/50 bg-cream px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-teal animate-pulse flex-shrink-0" />
              <span className="text-xs font-medium text-teal tracking-widest uppercase">
                Temporada 2026 Abierta
              </span>
            </div>

            <h2
              ref={headlineRef}
              className="font-fraunces text-5xl lg:text-6xl font-semibold leading-[1.05] text-umber-dark">
              
              La Esencia del<br />
              Tambo Familiar.<br />
              <em className="font-light italic text-umber" style={{ fontStyle: 'italic' }}>
                Sabor de Origen.
              </em>
            </h2>

            <p
              ref={subRef}
              className="text-lg font-light text-umber-light leading-relaxed max-w-md">
              
              En Quesos Zampa elaboramos quesos artesanales en Napaleofú, controlando todo el proceso desde la siembra de nuestras pasturas y el ordeñe diario, hasta la maduración en cava a solo 100 metros del tambo.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <a
                href="#cultivars"
                className="flex items-center justify-center gap-2 h-14 px-8 rounded-2xl bg-teal text-cream font-medium text-base hover:bg-teal-light transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                style={{ boxShadow: '0 8px 32px rgba(46,93,90,0.28)' }}>
                
                <Icon name="SparklesIcon" size={18} variant="outline" />
                Explorar Variedades
              </a>
              <a
                href="#timeline"
                className="flex items-center justify-center gap-2 h-14 px-8 rounded-2xl border border-wheat/60 bg-limestone text-umber font-medium text-base hover:bg-wheat-muted hover:border-wheat transition-all duration-300 group">
                
                <Icon name="ClockIcon" size={18} variant="outline" className="group-hover:text-teal transition-colors" />
                Nuestra Historia
              </a>
            </div>

            {/* Social proof strip */}
            <div className="pt-5 border-t border-wheat/30 flex items-center gap-6 flex-wrap">
              <div className="flex -space-x-3">
                {[
                'https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg?auto=compress&w=64&h=64&fit=crop',
                'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&w=64&h=64&fit=crop',
                'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&w=64&h=64&fit=crop']?.
                map((src, i) =>
                <div key={i} className="w-10 h-10 rounded-full border-2 border-limestone-soft overflow-hidden flex-shrink-0">
                    <AppImage src={src} alt={`Customer ${i + 1}`} width={40} height={40} className="w-full h-full object-cover" />
                  </div>
                )}
                <div className="w-10 h-10 rounded-full border-2 border-limestone-soft bg-wheat-muted flex items-center justify-center text-xs font-semibold text-umber flex-shrink-0">
                  +500
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1 text-wheat">
                  {[1, 2, 3, 4, 5]?.map((s) =>
                  <svg key={s} className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  )}
                </div>
                <p className="text-xs text-umber-light mt-0.5 font-light">Elegido por los amantes del buen queso artesanal</p>
              </div>
            </div>
          </div>

          {/* Right: Asymmetric photo grid */}
          <div className="w-full mt-12 lg:mt-0 lg:col-span-7 relative">
            <div className="hero-photo-grid">
              {/* Main tall image — researcher hands inspecting grain */}
              <div className="photo-main rounded-5xl overflow-hidden relative group shadow-2xl img-zoom">
                <AppImage
                  src="/assets/Quesos%20Zampa/IMG_9821.JPG"
                  alt="Proceso de elaboración artesanal de queso de oveja Zampa"
                  fill
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                
                <div className="absolute inset-0 bg-gradient-to-t from-umber-dark/50 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 text-cream">
                  <p className="text-xs font-medium uppercase tracking-widest text-wheat-light mb-1">Crianza y Cuidado</p>
                  <h3 className="font-fraunces text-lg font-medium">Lote Z-47</h3>
                </div>
              </div>

              {/* Top wide — golden-hour trial rows */}
              <div className="photo-top-wide rounded-5xl overflow-hidden relative group shadow-2xl img-zoom">
                <AppImage
                  src="/assets/Quesos%20Zampa/IMG_2809.jpg"
                  alt="Maduración en cava de los quesos de oveja Zampa"
                  fill
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                
                <div className="absolute inset-0 bg-gradient-to-t from-umber-dark/40 via-transparent to-transparent" />
                <div className="absolute top-4 right-4 glass-dark px-3 py-1.5 rounded-full flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-wheat animate-pulse" />
                  <span className="text-xs font-medium text-cream">Productos Orgánicos</span>
                </div>
              </div>

              {/* Bottom left — close-up grain */}
              <div className="photo-bottom-left rounded-5xl overflow-hidden relative group shadow-2xl img-zoom">
                <AppImage
                  src="/assets/Quesos%20Zampa/IMG_9858.JPG"
                  alt="Detalle de los quesos artesanales en Napaleofú"
                  fill
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                
              </div>

              {/* Circular spinning element */}
              <div className="photo-circular-element flex items-center justify-center relative">
                <div className="relative w-32 h-32 flex items-center justify-center">
                  <svg className="w-full h-full absolute animate-spin-slow" viewBox="0 0 100 100">
                    <path id="hero-curve" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                    <text className="text-[7px] uppercase font-bold tracking-widest" fill="#C9A84C">
                      <textPath href="#hero-curve">
                        · Quesos de Oveja · Sabor de Origen · Desde 2018 ·
                      </textPath>
                    </text>
                  </svg>
                  <a
                    href="#cultivars"
                    className="w-16 h-16 rounded-full bg-teal flex items-center justify-center hover:bg-teal-light transition-all duration-300 shadow-lg z-10 hover:scale-110"
                    aria-label="Explorar catálogo">
                    
                    <Icon name="ArrowUpRightIcon" size={22} variant="outline" className="text-cream" />
                  </a>
                </div>
              </div>
            </div>

            {/* Floating trial card */}
            <div
              ref={cardRef}
              className="absolute top-[38%] right-[-28px] glass-stone p-5 rounded-3xl w-64 shadow-2xl animate-float border border-wheat/30 hidden lg:block">
              
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-medium uppercase tracking-wide text-umber-light">Queso del Mes</span>
                <Icon name="EllipsisHorizontalIcon" size={16} variant="outline" className="text-umber-light" />
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-wheat-muted text-teal flex-shrink-0">
                  <Icon name="SparklesIcon" size={18} variant="outline" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-umber-dark">Pecorino Zampa</p>
                  <p className="text-xs text-umber-light">Maduración: 6 a 12 meses</p>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl border border-wheat/30 bg-cream">
                <span className="text-xs text-umber-light">Sabor Intenso</span>
                <span className="text-sm font-semibold text-teal">100% Oveja</span>
              </div>
              <div className="mt-3 flex items-center gap-2 text-xs font-medium px-2 py-1 rounded-md text-teal bg-teal/10 w-max">
                <Icon name="CheckCircleIcon" size={12} variant="outline" />
                Stock Limitado
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Wheat-gold divider */}
      <div className="absolute bottom-0 left-0 right-0 wheat-rule z-10" />
    </section>
  );
}

'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const IntroStatement = () => {
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = [badgeRef.current, titleRef.current, descRef.current, ctaRef.current, visualRef.current];
    elements.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      setTimeout(() => {
        if (!el) return;
        el.style.transition = 'opacity 0.9s cubic-bezier(0.23,1,0.32,1), transform 0.9s cubic-bezier(0.23,1,0.32,1)';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 200 + i * 120);
    });
  }, []);

  return (
    <section className="bg-white py-24 lg:py-32 border-b border-wheat/20 overflow-hidden flex items-center justify-center relative grain-overlay">
      {/* Background atmospheric gradient */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div 
          className="absolute top-1/2 right-1/4 w-[600px] h-[600px] -translate-y-1/2 rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 65%)',
            filter: 'blur(60px)'
          }}
        />
        <div 
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(46,93,90,0.1) 0%, transparent 60%)',
            filter: 'blur(40px)'
          }}
        />
      </div>

      {/* Engraved watermark image in the background */}
      <div className="absolute bottom-0 right-0 w-[30%] max-w-[320px] opacity-[0.08] pointer-events-none z-0 mix-blend-multiply">
        <img 
          src="/assets/Quesos Zampa/ovejas_render.png" 
          alt="Zampa Sheep Engraving Watermark" 
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Premium Copy */}
          <div className="lg:col-span-5 flex flex-col gap-6 items-start text-left">
            {/* Season Badge */}
            <div 
              ref={badgeRef}
              className="inline-flex items-center gap-2 border border-wheat/40 bg-cream px-4 py-2 rounded-full"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
              <span className="text-[10px] font-semibold text-teal tracking-[0.2em] uppercase">
                Tambo Ovino Tandil
              </span>
            </div>

            <h2 
              ref={titleRef}
              className="text-4xl md:text-5xl font-light text-charcoal tracking-[0.04em] leading-tight uppercase"
            >
              Frescura y naturalidad<br />
              desde el origen
            </h2>

            <div className="w-12 h-[1px] bg-wheat/60 my-1" />

            <p 
              ref={descRef}
              className="text-lg font-light text-umber-light leading-relaxed max-w-md"
            >
              Desde el pastoreo libre de nuestras ovejas en las pasturas de Tandil hasta la maduración en nuestra cava. Cada horma se elabora manualmente con paciencia, respetando los tiempos de la naturaleza para lograr un queso premium y honesto.
            </p>

            <Link 
              ref={ctaRef}
              href="/nuestra-historia" 
              className="group inline-flex items-center justify-center gap-2 h-12 sm:h-14 px-8 rounded-full bg-white text-charcoal border border-charcoal/10 font-bold text-[10px] sm:text-xs hover:bg-white/90 hover:scale-[1.02] transition-all duration-300 shadow-md hover:shadow-lg mt-2 tracking-[0.15em] uppercase"
            >
              <span>Conocé nuestra historia</span>
              <Icon name="ArrowRightIcon" size={14} className="text-charcoal transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Right Column: Premium Asymmetric Grid Composition */}
          <div 
            ref={visualRef}
            className="lg:col-span-7 w-full relative flex items-center justify-center py-6 sm:py-12"
          >
            {/* Outer offset frame */}
            <div className="absolute inset-0 max-w-[85%] mx-auto rounded-[48px] border border-wheat/20 translate-x-4 translate-y-4 pointer-events-none z-0" />
            
            {/* Visual grid container */}
            <div className="relative w-full max-w-[90%] sm:max-w-[80%] aspect-[4/5] sm:aspect-square flex items-center justify-center z-10">
              
              {/* 1. Main tall video player frame */}
              <div className="w-[72%] h-[88%] rounded-5xl overflow-hidden relative shadow-2xl border-4 border-white bg-cream group z-10">
                <video
                  src="/assets/Quesos Zampa/IMG_1145.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-5 left-5 text-white">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-wheat-light mb-0.5">Napaleofú</p>
                  <h3 className="text-base font-light uppercase tracking-wide">Ordeñe Diario</h3>
                </div>
              </div>

              {/* 2. Overlapping smaller picture frame (Sheep grazing) */}
              <div className="absolute bottom-[6%] left-[-8%] w-[48%] aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white z-20 group img-zoom">
                <AppImage
                  src="/assets/Quesos Zampa/IMG_8715.jpg"
                  alt="Pastoreo de ovejas frisón en Napaleofú"
                  fill
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* 3. Spinning circular text stamp */}
              <div className="absolute top-[2%] left-[4%] z-20 flex items-center justify-center">
                <div className="relative w-28 h-28 flex items-center justify-center">
                  <svg className="w-full h-full absolute animate-spin-slow" viewBox="0 0 100 100">
                    <path id="tambo-curve" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                    <text className="text-[7.5px] uppercase font-bold tracking-widest" fill="#C9A84C">
                      <textPath href="#tambo-curve">
                        · Tambo Ovino Zampa · Sabor de Campo ·
                      </textPath>
                    </text>
                  </svg>
                  <div className="w-12 h-12 rounded-full bg-cream shadow-md border border-wheat/20 flex items-center justify-center text-teal">
                    <Icon name="SparklesIcon" size={16} variant="outline" />
                  </div>
                </div>
              </div>

              {/* 4. Floating Info Card (System specifications) */}
              <div className="absolute top-[16%] right-[-10%] glass-stone p-4 rounded-2xl w-48 shadow-xl border border-wheat/30 z-20 animate-float hidden sm:block">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-semibold uppercase tracking-wide text-umber-light">Alimentación</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
                </div>
                <p className="text-sm font-semibold text-charcoal mb-0.5">Sistema Pastoril</p>
                <p className="text-[11px] text-umber-light leading-relaxed">Libre pastoreo todo el año bajo los ciclos de la naturaleza.</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default IntroStatement;

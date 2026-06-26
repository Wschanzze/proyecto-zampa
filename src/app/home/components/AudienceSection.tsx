'use client';
import { useEffect, useRef, useState } from 'react';
import AppImage from '@/components/ui/AppImage';

export default function AudienceSection() {
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
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 lg:py-32 bg-cream px-6 lg:px-12 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`transition-all duration-1000 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-teal" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">
              Propósito & Destinatarios
            </span>
          </div>

          <h2 className="font-fraunces text-4xl md:text-5xl lg:text-6xl font-light text-umber-dark leading-tight max-w-3xl">
            El sabor del origen<br />
            encuentra a quienes buscan <em className="font-normal italic text-teal">lo extraordinario.</em>
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-12">
          {/* Card 1: Tambo Familiar (Left - Large) */}
          <div
            className={`lg:col-span-7 rounded-[32px] overflow-hidden relative min-h-[460px] lg:min-h-[580px] flex flex-col justify-end p-8 md:p-12 group shadow-xl transition-all duration-1000 delay-100 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            {/* Background image */}
            <AppImage
              src="/assets/Quesos%20Zampa/IMG_1900.jpg"
              alt="Establecimiento Zampa y pasturas en Napaleofú al atardecer"
              fill
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent z-10" />

            {/* Content */}
            <div className="relative z-20">
              <span className="inline-block bg-teal text-cream px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">
                Tambo Familiar
              </span>
              <h3 className="font-fraunces text-3xl md:text-4xl font-medium text-white leading-tight">
                Elaboración de lunes a lunes con leche fresca.
              </h3>
              <p className="text-sm text-white/80 font-light leading-relaxed mt-4 mb-8 max-w-xl">
                En Napaleofú, controlamos cada etapa sin intermediarios. La leche del ordeñe diario se traslada a la quesería a solo 100 metros del tambo, garantizando frescura y trazabilidad absoluta en cada horma.
              </p>
              <a
                href="#timeline"
                className="inline-flex items-center justify-center h-12 px-8 rounded-2xl bg-white text-charcoal hover:bg-[#FAF7F0] text-sm font-semibold tracking-wider transition-all duration-300 shadow-md"
              >
                Nuestra Historia
              </a>
            </div>
          </div>

          {/* Right Stack */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Card 2: Gourmet Experiences (Right Top) */}
            <div
              className={`rounded-[32px] overflow-hidden relative h-[270px] lg:h-[278px] flex flex-col justify-end p-8 group shadow-xl transition-all duration-1000 delay-200 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              {/* Background image */}
              <AppImage
                src="/assets/Quesos%20Zampa/tipos%20de%20quesos.jpg"
                alt="Degustación gourmet de quesos Zampa"
                fill
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent z-10" />

              {/* Content */}
              <div className="relative z-20">
                <span className="inline-block bg-teal text-cream px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest mb-3">
                  Experiencias Gourmet
                </span>
                <h3 className="font-fraunces text-xl md:text-2xl font-medium text-white leading-snug">
                  Variedades de oveja diseñadas para los paladares más exigentes.
                </h3>
              </div>
            </div>

            {/* Card 3: Cava & Aging (Right Bottom) */}
            <div
              className={`rounded-[32px] overflow-hidden relative h-[270px] lg:h-[278px] flex flex-col justify-end p-8 group shadow-xl transition-all duration-1000 delay-300 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              {/* Background image */}
              <AppImage
                src="/assets/Quesos%20Zampa/IMG_9824.JPG"
                alt="Quesos de oveja madurando en la cava familiar Zampa"
                fill
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent z-10" />

              {/* Content */}
              <div className="relative z-20">
                <span className="inline-block bg-teal text-cream px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest mb-3">
                  Maduración en Cava
                </span>
                <h3 className="font-fraunces text-xl md:text-2xl font-medium text-white leading-snug">
                  Cuidado artesanal y maduraciones prolongadas de 9 a 12 meses.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

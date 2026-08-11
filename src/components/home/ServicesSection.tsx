'use client';
import React, { useEffect, useRef, useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import AppIcon from '@/components/ui/AppIcon';

export default function ServicesSection() {
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

  const handleServiceClick = (type: 'campo' | 'universitarios' | 'educativas') => {
    let message = "";
    if (type === 'campo') {
      message = "¡Hola! Me pongo en contacto desde su sitio web porque me interesa recibir información sobre la visita guiada al tambo ovino y conocer el proceso de producción.";
    } else if (type === 'universitarios') {
      message = "¡Hola! Me pongo en contacto porque me interesa conocer más sobre los proyectos, actividades y prácticas universitarias de Veterinaria en el Tambo Zampa.";
    } else if (type === 'educativas') {
      message = "¡Hola! Me interesa coordinar una visita educativa o experiencia institucional para escuelas/instituciones en el Tambo Zampa.";
    }
    window.open(`https://wa.me/5491132554757?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section
      ref={sectionRef}
      className="py-24 lg:py-32 bg-white px-6 lg:px-12 relative overflow-hidden grain-overlay"
    >
      {/* Background radial highlights for premium look */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute top-0 left-0 w-1/2 h-1/2 opacity-20"
          style={{
            background: 'radial-gradient(ellipse at 10% 20%, rgba(46,93,90,0.12) 0%, transparent 60%)'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div
          className={`transition-all duration-1000 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-teal" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">
              Nuestros Servicios
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-charcoal leading-tight max-w-3xl uppercase tracking-[0.06em] font-fraunces mb-16">
            Viví la experiencia <br />
            y <em className="font-normal italic text-teal">vení a visitarnos.</em>
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Card 1: Conocé nuestro campo (Left - Large) */}
          <div
            onClick={() => handleServiceClick('campo')}
            className={`lg:col-span-7 rounded-[32px] overflow-hidden relative min-h-[460px] lg:min-h-[600px] flex flex-col justify-end p-8 md:p-12 group shadow-xl border border-charcoal/5 cursor-pointer transition-all duration-1000 delay-100 hover:scale-[1.005] hover:shadow-2xl ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            {/* Background image */}
            <AppImage
              src="/assets/Quesos%20Zampa/IMG_1034.jpg"
              alt="Ovejas frisonas en pasturas en el Tambo Zampa"
              fill
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent z-10" />

            {/* Content */}
            <div className="relative z-20">
              <span className="inline-block bg-limestone-soft border border-umber/30 text-umber px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">
                Experiencias de Campo
              </span>
              <h3 className="text-3xl md:text-4xl font-light text-white leading-tight uppercase font-fraunces mb-4">
                Conocé nuestro campo
              </h3>
              <p className="text-sm md:text-base text-white/80 font-light leading-relaxed mb-8 max-w-xl">
                Visita guiada por el tambo ovino y todo el proceso de producción.
              </p>
              
              <div className="inline-flex items-center gap-3 text-sm font-semibold tracking-wider text-white uppercase group-hover:text-wheat transition-colors duration-300">
                <span>Reservar Visita Guiada</span>
                <AppIcon name="WhatsApp" size={18} className="w-5 h-5 text-white group-hover:text-wheat group-hover:scale-110 transition-all duration-300" />
              </div>
            </div>
          </div>

          {/* Right Column Stack */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            {/* Card 2: Proyectos Universitarios (Right Top - Cream Solid) */}
            <div
              onClick={() => handleServiceClick('universitarios')}
              className={`rounded-[32px] p-8 md:p-10 flex flex-col justify-between min-h-[210px] lg:h-[286px] bg-[#FAF8F5] border border-limestone/50 group cursor-pointer shadow-lg hover:shadow-xl transition-all duration-1000 delay-200 hover:scale-[1.005] hover:bg-[#F2EDE0] ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-umber-light">
                    02. Universidad
                  </span>
                  <AppIcon name="AcademicCapIcon" size={24} className="text-teal group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl md:text-3xl font-light text-teal leading-tight uppercase font-fraunces mb-3">
                  Proyectos universitarios
                </h3>
                <p className="text-sm text-charcoal/80 font-light leading-relaxed max-w-sm">
                  Actividades y prácticas de estudiantes, especialmente de Veterinaria.
                </p>
              </div>

              <div className="inline-flex items-center gap-3 text-xs font-semibold tracking-wider text-teal uppercase group-hover:text-umber transition-colors duration-300 mt-6">
                <span>Coordinar prácticas</span>
                <AppIcon name="WhatsApp" size={16} className="text-teal group-hover:text-umber transition-all duration-300" />
              </div>
            </div>

            {/* Card 3: Visitas Educativas (Right Bottom - Green Solid) */}
            <div
              onClick={() => handleServiceClick('educativas')}
              className={`rounded-[32px] p-8 md:p-10 flex flex-col justify-between min-h-[210px] lg:h-[286px] bg-teal group cursor-pointer shadow-lg hover:shadow-xl transition-all duration-1000 delay-300 hover:scale-[1.005] hover:bg-teal-dark ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-wheat-muted">
                    03. Educación
                  </span>
                  <AppIcon name="BookOpenIcon" size={24} className="text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl md:text-3xl font-light text-white leading-tight uppercase font-fraunces mb-3">
                  Visitas educativas
                </h3>
                <p className="text-sm text-white/80 font-light leading-relaxed max-w-sm">
                  Experiencias para escuelas e instituciones.
                </p>
              </div>

              <div className="inline-flex items-center gap-3 text-xs font-semibold tracking-wider text-white uppercase group-hover:text-wheat-muted transition-colors duration-300 mt-6">
                <span>Agendar visita escolar</span>
                <AppIcon name="WhatsApp" size={16} className="text-white group-hover:text-wheat-muted transition-all duration-300" />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

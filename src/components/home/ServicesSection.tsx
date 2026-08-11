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
      className="py-24 lg:py-32 bg-[#FAF8F5] relative overflow-hidden grain-overlay"
    >
      {/* Background radial highlights for visual depth */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute top-0 right-0 w-2/3 h-full opacity-20"
          style={{
            background: 'radial-gradient(ellipse at 80% 20%, rgba(201,168,76,0.1) 0%, transparent 60%)'
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-1/2 h-1/2 opacity-15"
          style={{
            background: 'radial-gradient(ellipse at 20% 80%, rgba(46,93,90,0.08) 0%, transparent 55%)'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 px-6 lg:px-12">
        
        {/* Header in 2-column layout (inspired by the reference) */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 transition-all duration-1000 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-teal" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">
                Nuestros Servicios
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-charcoal leading-tight uppercase font-fraunces tracking-[0.06em]">
              Donde el origen <br />
              <em className="font-normal italic text-teal">se hace tradición.</em>
            </h2>
          </div>

          <div className="lg:col-span-4 lg:mb-2">
            <p className="text-sm md:text-base text-charcoal/80 font-light leading-relaxed max-w-md">
              El tambo y la quesería abren sus puertas. Queremos que conozcas cómo criamos a nuestras ovejas frisonas, el ordeñe diario y el cuidado artesanal de cada horma.
            </p>
          </div>
        </div>

        {/* Bento Grid (inspired by the 5-card layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Card 1: Conocé nuestro campo (Row 1 Left - Large Image Card) */}
          <div
            onClick={() => handleServiceClick('campo')}
            className={`col-span-1 md:col-span-2 lg:col-span-8 rounded-[2rem] overflow-hidden relative h-[320px] md:h-[420px] group shadow-xl border border-charcoal/5 cursor-pointer transition-all duration-1000 delay-100 hover:scale-[1.005] hover:shadow-2xl ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            {/* Background image */}
            <AppImage
              src="/assets/Quesos%20Zampa/IMG_1034.jpg"
              alt="Ovejas frisonas lecheras en pasturas de Napaleofú"
              fill
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent z-10" />

            {/* Content */}
            <div className="relative z-20 h-full w-full p-8 md:p-10 flex flex-col justify-end text-left">
              <div>
                <span className="inline-block bg-limestone-soft/90 border border-umber/20 text-umber px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest mb-4">
                  01. Tambo Ovino
                </span>
                <h3 className="text-2xl md:text-3xl font-light text-white leading-tight uppercase font-fraunces mb-3">
                  Conocé nuestro campo
                </h3>
                <p className="text-xs md:text-sm text-white/80 font-light leading-relaxed max-w-xl mb-6">
                  Visita guiada por el tambo ovino y todo el proceso de producción.
                </p>
                
                <div className="inline-flex items-center gap-3 text-xs font-semibold tracking-wider text-white uppercase group-hover:text-wheat transition-colors duration-300">
                  <span>Reservar Visita Guiada</span>
                  <AppIcon name="WhatsApp" size={16} className="text-white group-hover:text-wheat group-hover:scale-110 transition-all duration-300" />
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Visitas educativas (Row 1 Right - Solid Green Card) */}
          <div
            onClick={() => handleServiceClick('educativas')}
            className={`col-span-1 md:col-span-2 lg:col-span-4 rounded-[2rem] p-8 md:p-10 bg-teal text-white flex flex-col justify-between group cursor-pointer shadow-xl hover:scale-[1.005] hover:bg-teal-dark transition-all duration-1000 delay-200 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="text-[10px] font-bold uppercase tracking-widest text-wheat-muted">
                  03. Educación
                </span>
                <AppIcon name="BookOpenIcon" size={24} className="text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl md:text-3xl font-light font-fraunces uppercase leading-tight mb-3">
                Visitas educativas
              </h3>
              <p className="text-xs md:text-sm text-white/80 font-light leading-relaxed">
                Experiencias para escuelas e instituciones.
              </p>
            </div>

            <div className="inline-flex items-center gap-3 text-xs font-semibold tracking-wider text-white uppercase group-hover:text-wheat-muted transition-colors duration-300 mt-8">
              <span>Agendar visita</span>
              <AppIcon name="WhatsApp" size={16} className="text-white group-hover:text-wheat-muted transition-all duration-300" />
            </div>
          </div>

          {/* Card 3: Image Decorator 1 (Row 2 Left - Square Image Card) */}
          <div
            className={`col-span-1 md:col-span-1 lg:col-span-4 rounded-[2rem] overflow-hidden relative h-[250px] md:h-[300px] shadow-lg border border-charcoal/5 transition-all duration-1000 delay-300 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <AppImage
              src="/assets/Quesos%20Zampa/elaboracion/15.jpg"
              alt="Cuidado de ovejas en el tambo Zampa"
              fill
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/10 z-10 pointer-events-none" />
          </div>

          {/* Card 4: Proyectos universitarios (Row 2 Center - Solid Brown Quote Card) */}
          <div
            onClick={() => handleServiceClick('universitarios')}
            className={`col-span-1 md:col-span-1 lg:col-span-4 rounded-[2rem] p-8 bg-umber text-white flex flex-col justify-between text-center group cursor-pointer shadow-lg hover:scale-[1.005] hover:bg-umber-dark transition-all duration-1000 delay-400 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="flex justify-center mt-2">
              <AppIcon name="AcademicCapIcon" size={24} className="text-[#E8D49A] group-hover:scale-110 transition-transform duration-300" />
            </div>

            <div className="my-auto px-2">
              <p className="font-fraunces text-sm md:text-base italic leading-relaxed text-white/95">
                “Actividades y prácticas de estudiantes, especialmente de Veterinaria.”
              </p>
            </div>

            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#E8D49A] block mb-1">
                02. Universidad
              </span>
              <span className="text-[9px] font-semibold text-white/50 tracking-wider uppercase block">
                Prácticas profesionales
              </span>
            </div>
          </div>

          {/* Card 5: Image Decorator 2 (Row 2 Right - Square Image Card) */}
          <div
            className={`col-span-1 md:col-span-2 lg:col-span-4 rounded-[2rem] overflow-hidden relative h-[250px] md:h-[300px] shadow-lg border border-charcoal/5 transition-all duration-1000 delay-500 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <AppImage
              src="/assets/Quesos%20Zampa/elaboracion/16.jpg"
              alt="Ordeñe de ovejas en el tambo Zampa"
              fill
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/10 z-10 pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
}

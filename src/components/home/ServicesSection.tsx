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

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-charcoal leading-tight uppercase tracking-[0.06em]">
              Donde el origen <br />
              se hace tradición.
            </h2>
          </div>

          <div className="lg:col-span-4 lg:mb-2">
            <p className="text-sm md:text-base text-charcoal/80 font-light leading-relaxed max-w-md">
              El tambo y la quesería abren sus puertas. Queremos que conozcas cómo criamos a nuestras ovejas frisonas, el ordeñe diario y el cuidado artesanal de cada horma.
            </p>
          </div>
        </div>

        {/* Bento Grid: Experiencia Inmersiva (Cinematográfica) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Card 1: Conocé nuestro campo (col-span-8) */}
          <div
            onClick={() => handleServiceClick('campo')}
            className={`col-span-1 lg:col-span-8 rounded-[2.5rem] overflow-hidden relative h-[380px] lg:h-[450px] group shadow-xl border border-charcoal/5 cursor-pointer transition-all duration-1000 delay-100 hover:scale-[1.005] hover:shadow-2xl ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <AppImage
              src="/assets/Quesos%20Zampa/IMG_1034.jpg"
              alt="Ovejas frisonas lecheras en pasturas de Napaleofú"
              fill
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent z-10" />

            <div className="relative z-20 h-full w-full p-8 md:p-10 flex flex-col justify-end text-left">
              <div>
                <span className="inline-block bg-white/10 border border-white/20 text-white px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest mb-4 backdrop-blur-sm">
                  01. Tambo Ovino
                </span>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-white leading-tight uppercase mb-3">
                  Conocé nuestro campo
                </h3>
                <p className="text-xs md:text-sm text-white/80 font-light leading-relaxed max-w-xl mb-6">
                  Una visita guiada exclusiva por nuestro tambo ovino para conocer el libre pastoreo de las ovejas frisonas y todo el proceso artesanal de producción.
                </p>
                
                <div className="inline-flex items-center gap-3 text-xs font-semibold tracking-wider text-white uppercase group-hover:text-[#E8D49A] transition-colors duration-300">
                  <span>Reservar Visita Guiada</span>
                  <AppIcon name="WhatsApp" size={16} className="text-white group-hover:text-[#E8D49A] group-hover:scale-110 transition-all duration-300" />
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Visitas educativas (col-span-4) */}
          <div
            onClick={() => handleServiceClick('educativas')}
            className={`col-span-1 lg:col-span-4 rounded-[2.5rem] overflow-hidden relative h-[380px] lg:h-[450px] group shadow-xl border border-charcoal/5 cursor-pointer transition-all duration-1000 delay-200 hover:scale-[1.005] hover:shadow-2xl ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <AppImage
              src="/assets/Quesos%20Zampa/elaboracion/10.jpg"
              alt="Proceso de curado y elaboración artesanal de queso"
              fill
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent z-10" />

            <div className="relative z-20 h-full w-full p-8 md:p-10 flex flex-col justify-end text-left">
              <div>
                <span className="inline-block bg-white/10 border border-white/20 text-white px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest mb-4 backdrop-blur-sm">
                  02. Educación
                </span>
                <h3 className="text-2xl md:text-3xl font-light text-white leading-tight uppercase mb-3">
                  Visitas educativas
                </h3>
                <p className="text-xs md:text-sm text-white/80 font-light leading-relaxed mb-6">
                  Experiencias didácticas y talleres pensados para escuelas e instituciones que quieran conectar con la vida rural.
                </p>
                
                <div className="inline-flex items-center gap-3 text-xs font-semibold tracking-wider text-white uppercase group-hover:text-[#E8D49A] transition-colors duration-300">
                  <span>Agendar Visita</span>
                  <AppIcon name="WhatsApp" size={16} className="text-white group-hover:text-[#E8D49A] group-hover:scale-110 transition-all duration-300" />
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Proyectos universitarios (col-span-12) */}
          <div
            onClick={() => handleServiceClick('universitarios')}
            className={`col-span-1 lg:col-span-12 rounded-[2.5rem] overflow-hidden relative h-[280px] lg:h-[320px] group shadow-xl border border-charcoal/5 cursor-pointer transition-all duration-1000 delay-300 hover:scale-[1.005] hover:shadow-2xl ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <AppImage
              src="/assets/Quesos%20Zampa/elaboracion/16.jpg"
              alt="Prácticas de veterinaria y cuidado ovino en Tambo Zampa"
              fill
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent z-10" />

            <div className="relative z-20 h-full w-full p-8 md:p-10 flex flex-col justify-end text-left">
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                <div className="max-w-2xl">
                  <span className="inline-block bg-white/10 border border-white/20 text-white px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest mb-4 backdrop-blur-sm">
                    03. Universidad
                  </span>
                  <h3 className="text-2xl md:text-3xl font-light text-white leading-tight uppercase mb-3">
                    Proyectos universitarios
                  </h3>
                  <p className="text-xs md:text-sm text-white/80 font-light leading-relaxed">
                    Espacio abierto para la realización de prácticas profesionales, proyectos de investigación y pasantías académicas, con especial foco en ciencias veterinarias y producción agropecuaria sustentable.
                  </p>
                </div>
                
                <div className="inline-flex items-center gap-3 text-xs font-semibold tracking-wider text-white uppercase group-hover:text-[#E8D49A] transition-colors duration-300 flex-shrink-0">
                  <span>Coordinar Prácticas</span>
                  <AppIcon name="WhatsApp" size={16} className="text-white group-hover:text-[#E8D49A] group-hover:scale-110 transition-all duration-300" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

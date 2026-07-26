import React from 'react';
import Image from 'next/image';

const Introduction = () => {
  return (
    <section className="intro-section py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal mb-3">FILOSOFÍA ZAMPA</p>
          <h2 className="text-4xl md:text-5xl font-light text-charcoal leading-tight uppercase">Nuestra Vocación</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-square w-full max-w-[500px] mx-auto rounded-[32px] overflow-hidden shadow-2xl border border-teal/5">
              <Image 
                src="/assets/Quesos Zampa/imagen_lapis.jfif" 
                alt="Filosofía Zampa y Sistema Pastoril" 
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute bottom-6 left-6 right-6 z-20 bg-teal/95 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-xl flex items-center gap-4">
                <span className="text-4xl font-semibold text-wheat-light">100%</span>
                <span className="text-xs font-bold text-cream uppercase tracking-widest leading-snug">Control de Calidad en Cava</span>
              </div>
            </div>
          </div>

          {/* Right Column: Philosophy items */}
          <div className="lg:col-span-6 flex flex-col gap-10">
            <div className="philosophy-item flex gap-6 items-start">
              <span className="text-4xl font-light text-teal/40 leading-none">01</span>
              <div>
                <h3 className="text-2xl font-light text-charcoal mb-3 uppercase">Integración Vertical: Del Pasto al Mostrador</h3>
                <p className="text-sm md:text-base font-light text-charcoal/80 leading-relaxed">
                  <span className="desktop-text-only">
                    Zampa funciona bajo un modelo de cadena completa: criamos nuestras propias ovejas, producimos la leche, elaboramos los quesos y los comercializamos directamente. Sin intermediarios. Este modelo, sumamente exigente, nos permite un control absoluto sobre la calidad de nuestros productos en cada paso del proceso.
                  </span>
                  <span className="mobile-text-only">
                    Criamos nuestras ovejas, producimos la leche y elaboramos nuestros quesos directamente sin intermediarios, garantizando un control absoluto de calidad en cada paso.
                  </span>
                </p>
              </div>
            </div>

            <div className="philosophy-item flex gap-6 items-start">
              <span className="text-4xl font-light text-teal/40 leading-none">02</span>
              <div>
                <h3 className="text-2xl font-light text-charcoal mb-3 uppercase">Materia Prima Noble: El Secreto de la Oveja</h3>
                <p className="text-sm md:text-base font-light text-charcoal/80 leading-relaxed">
                  <span className="desktop-text-only">
                    La leche de oveja supera a la vacuna en concentración de grasas y proteínas. Esto se traduce en quesos con sabores más pronunciados, texturas más ricas y una cremosidad inigualable. Aprovechamos este rendimiento único elaborando nuestros quesos con leche fresca del mismo día, preservando intactas sus propiedades organolépticas naturales.
                  </span>
                  <span className="mobile-text-only">
                    La leche de oveja ofrece sabores más pronunciados, texturas más ricas y mayor cremosidad. Elaboramos nuestros quesos el mismo día del ordeñe para preservar su frescura.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;

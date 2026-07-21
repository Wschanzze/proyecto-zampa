'use client';
import React, { useEffect, useRef, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingPill from '@/app/home/components/FloatingPill';
import Icon from '@/components/ui/AppIcon';
import AppIcon from '@/components/ui/AppIcon';

interface Location {
  name: string;
  instagram: string;
  city: string;
  address: string;
}

const locations: Location[] = [
  { name: 'Don Cosme', instagram: 'picadasdoncosme', city: '', address: '' },
  { name: 'Dinas Salumería', instagram: 'dinas.salumeria.bahiablanca', city: 'Bahía Blanca', address: 'Colón 407 (Ingeniero White)' },
  { name: 'Dinas Salumería - Las Dinas', instagram: 'dinas.salumeria', city: 'San Isidro / Martínez', address: 'Alvear 434 (Martínez) / Cosme Beccar 239 (San Isidro)' },
  { name: 'Maja Jamonería', instagram: 'maja_jamoneria', city: 'Buenos Aires', address: 'Av. Monroe 2586 (C1428BLP)' },
  { name: 'Época de Quesos', instagram: 'epocadequesos', city: 'Tandil', address: '14 de Julio 604' },
  { name: 'Don Rosendo', instagram: 'donrosendotandil', city: 'Tandil', address: 'Av. Rivadavia 2 / Payró 871' },
  { name: 'Jamón Jamón', instagram: 'jamonjamon', city: '', address: '' },
  { name: 'Almacén 1249', instagram: 'almacen1249', city: '', address: '' },
  { name: 'Manchego', instagram: 'manchego.ar', city: '', address: '' },
  { name: 'Bocado Salumería', instagram: 'bocadosalumeria', city: 'Azul', address: 'Burgos 872' },
  { name: 'Cositasería 1687', instagram: 'cositaseria1687', city: '', address: '' },
];

export default function EncontranosPage() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF8F5] font-urbanist">
      <Header />

      {/* HERO SECTION */}
      <header className="products-hero h-[60vh] md:h-[70vh] flex flex-col justify-center relative overflow-hidden">
        <img 
          src="/assets/Quesos Zampa/IMG_9858.JPG" 
          alt="Dónde encontrarnos - Quesos Zampa" 
          className="absolute inset-0 w-full h-full object-cover scale-105" 
        />
        <div className="absolute inset-0 bg-charcoal/40 backdrop-blur-[2px]"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white mt-16 md:mt-24">
          <p className="text-[10px] md:text-xs font-bold tracking-[0.25em] text-[#C9A84C] uppercase mb-4 animate-fade-in">Puntos de Venta</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light uppercase tracking-wide mb-6 text-shadow-sm animate-fade-in-up">Descubrí nuestros quesos</h1>
          <p className="text-sm md:text-lg font-light text-white/90 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-100">
            Encontrá los exclusivos locales, salumerías boutique y restaurantes que ofrecen nuestras piezas de autor.
          </p>
        </div>
      </header>

      <section ref={sectionRef} className="pt-24 lg:pt-32 pb-24 lg:pb-32 px-6 lg:px-12 relative overflow-hidden">
        
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div
            className={`mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <p className="text-xs font-medium uppercase tracking-widest text-teal mb-3">Dónde Encontrarnos</p>
            <h2 className="text-4xl lg:text-5xl font-light text-charcoal leading-tight max-w-2xl uppercase tracking-[0.06em]">
              Puntos de Venta,<br />
              <em className="font-light italic">Llevamos el origen a tu mesa.</em>
            </h2>
            <p className="mt-5 text-umber-light font-light text-lg max-w-xl leading-relaxed">
              Encontrá los exclusivos locales, salumerías boutique y restaurantes que ofrecen nuestras piezas de autor. Hacé clic para visitar sus perfiles.
            </p>
          </div>

          {/* Table Header Labels for Desktop */}
          <div className="hidden md:grid grid-cols-12 gap-6 px-4 pb-3 border-b border-wheat/40 text-xs font-bold tracking-widest text-teal uppercase">
            <div className="col-span-5">Empresa</div>
            <div className="col-span-3">Instagram</div>
            <div className="col-span-3">Localidad</div>
            <div className="col-span-1 text-right"></div>
          </div>

          {/* Locations list modeled after Timeline with updated column order */}
          <div className="space-y-0">
            {locations.map((loc, i) => (
              <div key={i} className="timeline-item border-b border-wheat/25 last:border-b-0">
                <a
                  href={`https://instagram.com/${loc.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 py-6 items-center text-left group hover:bg-limestone-soft/60 rounded-xl px-4 -mx-4 transition-colors duration-200"
                >
                  
                  {/* 1. Nombre de la Empresa y Dirección */}
                  <div className="md:col-span-5 flex flex-col justify-center">
                    <h3 className="text-lg sm:text-xl font-light text-charcoal group-hover:text-teal transition-colors duration-200 uppercase truncate">
                      {loc.name}
                    </h3>
                    {loc.address && (
                      <p className="text-xs sm:text-sm text-umber-light font-light mt-0.5 leading-relaxed truncate">
                        {loc.address}
                      </p>
                    )}
                  </div>

                  {/* 2. Instagram */}
                  <div className="md:col-span-3 flex items-center">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium tracking-wide bg-wheat-muted/60 text-umber group-hover:bg-teal group-hover:text-white border border-wheat/30 transition-colors duration-200">
                      <AppIcon name="Instagram" size={13} />
                      @{loc.instagram}
                    </span>
                  </div>

                  {/* 3. Localidad */}
                  <div className="md:col-span-3 flex items-center">
                    {loc.city ? (
                      <span className="text-xs sm:text-sm font-medium text-charcoal/80 uppercase tracking-wider flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal shrink-0" />
                        {loc.city}
                      </span>
                    ) : (
                      <span className="hidden md:inline-block"></span>
                    )}
                  </div>

                  {/* 4. Flecha de enlace */}
                  <div className="md:col-span-1 hidden md:flex justify-end items-center transition-transform duration-300 group-hover:translate-x-1">
                    <Icon name="ArrowRightIcon" size={20} variant="outline" className="text-teal" />
                  </div>
                </a>
              </div>
            ))}
          </div>

          {/* Contact CTA below the list */}
          <div className="mt-20 lg:mt-32 pt-16 border-t border-wheat/25 text-center max-w-3xl mx-auto">
            <h4 className="text-2xl font-light text-charcoal uppercase tracking-wide mb-4">¿Querés sumar nuestros quesos a tu propuesta?</h4>
            <p className="text-sm text-umber-light font-light mb-8 leading-relaxed">
              Si tenés un restaurante de autor, fiambrería o almacén gourmet, contactanos para conocer nuestras opciones de distribución.
            </p>
            <a 
              href={`https://wa.me/5491132554757?text=${encodeURIComponent('Hola! Me interesa vender quesos Zampa en mi local.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 h-12 rounded-full bg-charcoal text-white font-bold text-xs hover:bg-teal hover:scale-[1.02] transition-all duration-300 shadow-md tracking-[0.15em] uppercase px-8"
            >
              Contactanos por WhatsApp
            </a>
          </div>

        </div>
      </section>

      <Footer />
      <FloatingPill />
    </div>
  );
}

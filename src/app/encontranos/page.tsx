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

          {/* Locations list modeled after Timeline */}
          <div className="space-y-0">
            {locations.map((loc, i) => (
              <div key={i} className="timeline-item border-b border-wheat/25 last:border-b-0">
                <a
                  href={`https://instagram.com/${loc.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-start gap-3 sm:gap-6 py-7 text-left group hover:bg-limestone-soft/60 rounded-xl px-4 -mx-4 transition-colors duration-200"
                >
                  
                  {/* Pin + City / Tag */}
                  <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0 w-32 sm:w-48">
                    <div className="w-2 h-2 rounded-full bg-teal shrink-0" />
                    <span className="text-sm sm:text-base font-semibold text-charcoal uppercase tracking-wider">
                      {loc.city ? loc.city : 'Venta Directa'}
                    </span>
                  </div>

                  {/* Badge */}
                  <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest bg-wheat-muted text-umber border border-wheat/30 self-center flex-shrink-0 uppercase">
                    <AppIcon name="Instagram" size={12} />
                    @{loc.instagram}
                  </span>

                  {/* Title & Address */}
                  <div className="flex-1 min-w-0 flex flex-col justify-center">
                    <h3 className="text-lg sm:text-xl font-light text-charcoal group-hover:text-teal transition-colors duration-200 uppercase truncate">
                      {loc.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-umber-light font-light mt-1 leading-relaxed line-clamp-1">
                      {loc.address ? loc.address : 'Tienda Online / Contacto por Instagram'}
                    </p>
                  </div>

                  {/* Arrow Icon */}
                  <div className="flex-shrink-0 self-center transition-transform duration-300 group-hover:translate-x-1">
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

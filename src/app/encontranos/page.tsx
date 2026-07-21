'use client';
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingPill from '@/app/home/components/FloatingPill';
import AppIcon from '@/components/ui/AppIcon';
import { MapPinIcon } from '@heroicons/react/24/outline';

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
  return (
    <div className="min-h-screen bg-cream font-urbanist">
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

      {/* LOCATIONS GRID */}
      <section className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {locations.map((loc, idx) => (
            <div 
              key={idx}
              className="group bg-white border border-charcoal/5 rounded-2xl p-6 lg:p-8 flex flex-col justify-between shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <h3 className="text-xl md:text-2xl font-light text-charcoal uppercase tracking-wide mb-4 group-hover:text-[#C9A84C] transition-colors">{loc.name}</h3>
                
                {loc.city && loc.address ? (
                  <div className="flex flex-col gap-3 mb-6">
                    <div className="flex items-start gap-2 text-charcoal/70">
                      <MapPinIcon className="w-5 h-5 flex-shrink-0 text-[#C9A84C] mt-0.5" />
                      <div>
                        <p className="text-[11px] font-bold tracking-widest uppercase mb-1">{loc.city}</p>
                        <p className="text-sm font-light leading-relaxed">{loc.address}</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col gap-3 mb-6">
                     <p className="text-xs text-charcoal/50 font-light italic">Tienda Online / Venta Directa</p>
                  </div>
                )}
              </div>

              <a 
                href={`https://instagram.com/${loc.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-charcoal/5 hover:bg-charcoal text-charcoal hover:text-white px-4 py-3 rounded-xl transition-colors duration-300 font-semibold text-xs tracking-wider uppercase group-hover:shadow-md"
              >
                <AppIcon name="Instagram" size={16} />
                <span>@{loc.instagram}</span>
              </a>
            </div>
          ))}
        </div>
        
        {/* Contact CTA */}
        <div className="mt-20 lg:mt-28 bg-limestone-soft/40 border border-[#C9A84C]/20 rounded-3xl p-8 lg:p-12 text-center max-w-4xl mx-auto">
           <h4 className="text-2xl font-light text-charcoal uppercase tracking-wide mb-4">¿Querés vender nuestros quesos?</h4>
           <p className="text-sm text-charcoal/70 font-light mb-8 max-w-xl mx-auto leading-relaxed">
             Si tenés un restaurante de autor, una fiambrería boutique o red de distribución y querés sumar los quesos Zampa a tu propuesta, contactanos directamente.
           </p>
           <a 
            href={`https://wa.me/5491132554757?text=${encodeURIComponent('Hola! Me interesa vender quesos Zampa en mi local.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#C9A84C] hover:bg-[#b09240] text-white px-8 py-4 rounded-full transition-colors duration-300 font-bold text-[10px] sm:text-xs tracking-[0.2em] uppercase shadow-lg hover:shadow-xl"
           >
             Contactanos
           </a>
        </div>
      </section>

      <Footer />
      <FloatingPill />
    </div>
  );
}

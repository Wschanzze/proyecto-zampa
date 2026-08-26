'use client';
import React, { useEffect, useRef, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingPill from '@/components/home/FloatingPill';
import Icon from '@/components/ui/AppIcon';
import AppIcon from '@/components/ui/AppIcon';

interface Location {
  name: string;
  instagram: string;
  city: string;
  address: string;
}

const locations: Location[] = [
  { name: 'Don Cosme', instagram: 'picadasdoncosme', city: 'Cdad. Autónoma de Buenos Aires', address: 'Av. Córdoba 6317, C1427 BZD, Cdad. Autónoma de Buenos Aires' },
  { name: 'Dinas Salumería Bahía Blanca', instagram: 'dinas.salumeria.bahiablanca', city: 'Bahía Blanca', address: 'Colón 407' },
  { name: 'Dinas Salumería - Las Dinas', instagram: 'dinas.salumeria', city: 'Martínez / San Isidro', address: 'Alvear 434 (Martínez) y Cosme Beccar 249 (San Isidro)' },
  { name: 'Maja Jamonería', instagram: 'maja_jamoneria', city: 'Buenos Aires', address: 'Av. Monroe 2586, C1428BLP, Buenos Aires' },
  { name: 'Época de Quesos', instagram: 'epocadequesos', city: 'Tandil', address: '14 de Julio 604, Tandil' },
  { name: 'Don Rosendo Tandil', instagram: 'donrosendotandil', city: 'Tandil', address: 'Av. Rivadavia 2 / Payró 871, Tandil' },
  { name: 'Jamón Jamón', instagram: 'jamonjamon', city: 'Almagro', address: 'Barrio de Almagro' },
  { name: 'Almacén 1249', instagram: 'almacen1249', city: 'Cdad. Autónoma de Buenos Aires', address: 'Cdad. Autónoma de Buenos Aires' },
  { name: 'Manchego', instagram: 'manchego.ar', city: 'Funes, Santa Fe', address: 'Funes, provincia de Santa Fe' },
  { name: 'Bocado Salumería', instagram: 'bocadosalumeria', city: 'Azul', address: 'Burgos 872, Azul' },
  { name: 'Cositasería 1687', instagram: 'cositaseria1687', city: 'Olivos', address: 'Villate 1687, Olivos' },
  { name: 'Las Kikascs', instagram: 'las_kikascs', city: 'Coronel Suárez', address: 'Av. San Martín & Av. 12 de Octubre, Coronel Suárez' },
  { name: 'La Providencia Tandil', instagram: 'laprovidenciatandil', city: 'Tandil', address: '' },
  { name: 'Mujica Almacén', instagram: 'mujicaalmacen', city: 'Mar de las Pampas', address: 'Av. El Lucero 518, Mar de las Pampas' },
  { name: 'La Quesería BRC', instagram: 'laqueseriabrc', city: 'Bariloche', address: '' },
  { name: 'Syquet Tandil', instagram: 'syquet.tandil', city: 'Tandil', address: '' },
  { name: 'Almacén Serrano Tandil', instagram: 'almacenserranotandil', city: 'Tandil', address: '' },
  { name: 'Grimod Tienda de Sabores', instagram: 'grimod.tiendadesabores', city: 'Tandil', address: 'Hipólito Yrigoyen 1097, Tandil' },
  { name: 'La Pulpería MDP', instagram: 'la_pulperiamdp', city: 'Mar del Plata', address: '' },
  { name: 'Boro Casa Gourmet', instagram: 'borocasagourmet', city: 'Córdoba', address: 'Félix Frías 130 / 134 Local 3, Córdoba' },
  { name: 'La Casa del Ratón Berazategui', instagram: 'lacasadelratonberazategui', city: 'Berazategui', address: 'Av. 21 N° 3917 / 3942, Berazategui' },
  { name: 'Tannini Cava', instagram: 'tannini.cava', city: 'San Carlos de Bariloche', address: 'Palacios 149, San Carlos de Bariloche' },
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

      {/* HERO SECTION STANDARD */}
      <header className="products-hero h-[60vh] md:h-[70vh] flex flex-col justify-center relative overflow-hidden">
        <img 
          src="/assets/Quesos Zampa/IMG_9858.JPG" 
          alt="Dónde encontrarnos - Quesos Zampa" 
          className="absolute inset-0 w-full h-full object-cover scale-105" 
        />
        <div className="absolute inset-0 bg-charcoal/40 backdrop-blur-[2px]"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white mt-16 md:mt-24">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light uppercase tracking-wide mb-6 text-shadow-sm animate-fade-in-up">Descubrí nuestros quesos</h1>
          <p className="text-sm md:text-lg font-light text-white/90 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-100">
            Encontrá los exclusivos locales, salumerías boutique y restaurantes que ofrecen nuestras piezas de autor.
          </p>
        </div>
      </header>

      <section ref={sectionRef} className="pt-20 lg:pt-28 pb-24 lg:pb-32 px-6 lg:px-12 relative overflow-hidden">
        
        <div className="max-w-6xl mx-auto">



          {/* Header del apartado */}
          <div
            className={`mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <h2 className="text-4xl lg:text-5xl font-light text-charcoal leading-tight max-w-3xl uppercase tracking-[0.06em]">
              Dónde Encontrar Zampa,<br />
              <em className="font-light italic">De la cava a las mejores fiambrerías del país.</em>
            </h2>
            <p className="mt-5 text-umber-light font-light text-lg max-w-2xl leading-relaxed">
              Explorá la lista detallada de comercios y emprendimientos afiliados. Hacé clic en cualquier local para ingresar a su canal oficial de Instagram.
            </p>
          </div>

          {/* Table Header Labels for Desktop */}
          <div className="hidden md:grid grid-cols-12 gap-6 px-4 pb-3 border-b border-wheat/40 text-xs font-bold tracking-widest text-[#6B4226] uppercase">
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
                    <h3 className="text-lg sm:text-xl font-light text-charcoal group-hover:text-[#6B4226] transition-colors duration-200 uppercase truncate">
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
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium tracking-wide bg-[#6B4226] text-white border border-[#6B4226] group-hover:bg-[#F2EDE0] group-hover:text-[#6B4226] group-hover:border-[#6B4226]/30 transition-all duration-300 shadow-sm">
                      <AppIcon name="Instagram" size={13} />
                      @{loc.instagram}
                    </span>
                  </div>

                  {/* 3. Localidad */}
                  <div className="md:col-span-3 flex items-center">
                    {loc.city ? (
                      <span className="text-xs sm:text-sm font-medium text-charcoal/80 uppercase tracking-wider flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#6B4226] shrink-0" />
                        {loc.city}
                      </span>
                    ) : (
                      <span className="hidden md:inline-block"></span>
                    )}
                  </div>

                  {/* 4. Flecha de enlace */}
                  <div className="md:col-span-1 hidden md:flex justify-end items-center transition-transform duration-300 group-hover:translate-x-1">
                    <Icon name="ArrowRightIcon" size={20} variant="outline" className="text-[#6B4226]" />
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Banner (Full Width, Styled like JoinFamily) */}
      <section className="relative w-full overflow-hidden py-20 lg:py-28 px-6 lg:px-12 flex flex-col items-center justify-center text-center">
        <img 
          src="/assets/Quesos Zampa/nuevas/1fbee0f4-70ba-4ef6-851a-3e32056a9edb.jpg" 
          alt="Quesos Zampa Venta Mayorista" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlays for dark text readability */}
        <div className="absolute inset-0 bg-black/65 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent z-10" />
        
        {/* Reseller Call to Action Content */}
        <div className="relative z-20 max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-[0.06em] uppercase leading-tight">
            ¿QUERÉS SUMAR NUESTROS QUESOS A TU PROPUESTA?
          </h2>
          <p className="text-base md:text-lg lg:text-xl font-light text-white/80 leading-relaxed max-w-2xl mx-auto">
            Si tenés un restaurante de autor, fiambrería o almacén gourmet, contactanos para conocer nuestras opciones de distribución.
          </p>
          
          <a 
            href={`https://wa.me/5491132554757?text=${encodeURIComponent('Hola! Me interesa vender quesos Zampa en mi local.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 sm:gap-3 h-12 sm:h-14 rounded-full bg-white text-charcoal font-bold text-[10px] sm:text-xs hover:bg-white/90 hover:scale-[1.02] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.3)] tracking-[0.15em] uppercase px-8 mt-4"
          >
            <AppIcon name="whatsapp" size={18} className="text-charcoal" />
            <span>Contactanos por WhatsApp</span>
          </a>
        </div>
      </section>

      <Footer />
      <FloatingPill />
    </div>
  );
}

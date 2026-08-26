'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Icon from '@/components/ui/AppIcon';
import AppIcon from '@/components/ui/AppIcon';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#18130F] text-white/80 border-t border-white/10 pt-16 pb-12 px-6 lg:px-12 font-urbanist relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-12 relative z-10">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand & Slogan (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start gap-5">
            <Link href="/" className="inline-block relative w-[140px] h-[62px]">
              <Image 
                src="/assets/Quesos Zampa/logo blanco.png" 
                alt="Quesos Zampa Logo" 
                fill
                className="object-contain object-left" 
                sizes="140px"
              />
            </Link>
            
            <p className="text-sm font-light text-white/70 leading-relaxed max-w-sm">
              Quesería artesanal y tambo ovino pastoril. Elaboración dedicada de quesos de autor 100% con leche pasteurizada de oveja.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm mt-1">
              <span className="w-2 h-2 rounded-full bg-[#DFC070] animate-pulse shrink-0" />
              <span className="text-[10px] font-semibold tracking-widest text-white/90 uppercase">
                100% Leche A2 de Oveja • Tandil
              </span>
            </div>
          </div>

          {/* Column 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="text-xs font-bold tracking-[0.2em] text-white/40 uppercase">Navegación</h4>
            <ul className="flex flex-col gap-2.5 text-sm font-light text-white/75">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
              </li>
              <li>
                <Link href="/nuestra-historia" className="hover:text-white transition-colors">Nuestra Historia</Link>
              </li>
              <li>
                <Link href="/productos" className="hover:text-white transition-colors">Productos</Link>
              </li>
              <li>
                <Link href="/elaboracion" className="hover:text-white transition-colors">Elaboración & Calidad</Link>
              </li>
              <li>
                <Link href="/encontranos" className="hover:text-white transition-colors">Puntos de Venta</Link>
              </li>
              <li>
                <Link href="/tabla-de-quesos" className="hover:text-white transition-colors">Tabla de Quesos</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Product Varieties (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="text-xs font-bold tracking-[0.2em] text-white/40 uppercase">Variedades de Autor</h4>
            <ul className="flex flex-col gap-2.5 text-sm font-light text-white/75">
              <li>
                <Link href="/productos" className="hover:text-white transition-colors">Pecorino Zampa</Link>
              </li>
              <li>
                <Link href="/productos" className="hover:text-white transition-colors">Queso Ahumado</Link>
              </li>
              <li>
                <Link href="/productos" className="hover:text-white transition-colors">Queso al Orégano</Link>
              </li>
              <li>
                <Link href="/productos" className="hover:text-white transition-colors">Manchego Zampa</Link>
              </li>
              <li>
                <Link href="/productos" className="hover:text-white transition-colors">Camembert de Oveja</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Socials (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="text-xs font-bold tracking-[0.2em] text-white/40 uppercase">Contacto & Ubicación</h4>
            
            <div className="flex flex-col gap-3 text-sm font-light text-white/75">
              <div className="flex items-start gap-2.5">
                <Icon name="MapPinIcon" size={16} variant="outline" className="text-white/60 shrink-0 mt-0.5" />
                <span>Tandil, Buenos Aires, Argentina</span>
              </div>
              
              <a 
                href="https://wa.me/5491132554757?text=%C2%A1Hola!%20Te%20contacto%20desde%20la%20web%20de%20Quesos%20Zampa."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-white/80 hover:text-white transition-colors group"
              >
                <AppIcon name="whatsapp" size={16} className="text-white/60 group-hover:text-white shrink-0" />
                <span>+54 9 11 3255-4757</span>
              </a>

              <a 
                href="https://www.instagram.com/quesos.zampa/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-white/80 hover:text-white transition-colors group"
              >
                <AppIcon name="Instagram" size={16} className="text-white/60 group-hover:text-white shrink-0" />
                <span>@quesos.zampa</span>
              </a>
            </div>

            <div className="pt-2">
              <a 
                href="https://wa.me/5491132554757?text=%C2%A1Hola!%20Me%20interesa%20vender%20Quesos%20Zampa%20en%20mi%20local."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 hover:bg-white hover:text-charcoal hover:border-white text-xs font-semibold tracking-wider uppercase transition-all duration-300 shadow-sm"
              >
                <span>Ventas Mayoristas</span>
                <Icon name="ArrowRightIcon" size={12} variant="outline" />
              </a>
            </div>
          </div>

        </div>

        {/* Local SEO Keywords Note */}
        <div className="text-center">
          <p className="text-xs text-white/40 font-light leading-relaxed max-w-4xl mx-auto">
            <strong className="font-semibold text-white/60">Quesos Zampa Tandil</strong> — Quesería Artesanal y Tambo Ovino Pastoril. Producción limitada de quesos de oveja en Tandil, Buenos Aires, Argentina.
          </p>
        </div>

        {/* Footer Bottom Bar: Copyright & Firm */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/5 text-xs text-white/50 font-light">
          <p>© {year} Quesos Zampa. Todos los derechos reservados.</p>
          
          <a
            href="https://www.notanother.company/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-white transition-colors"
          >
            <span>Creado por</span>
            <span className="text-white font-semibold">Not another consultora</span>
            <img
              src="/assets/images/Gemini_Generated_Image_b89zf1b89zf1b89z__1_-removebg-preview.png"
              alt="Not another logo"
              className="w-4 h-4 object-contain opacity-80"
            />
          </a>
        </div>

      </div>
    </footer>
  );
}
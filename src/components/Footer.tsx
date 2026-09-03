'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Icon from '@/components/ui/AppIcon';
import AppIcon from '@/components/ui/AppIcon';
import { trackWhatsAppClick } from '@/lib/posthog';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#18130F] text-white/80 border-t border-white/10 pt-16 pb-12 px-6 lg:px-12 font-urbanist relative overflow-hidden">
      {/* Background Logo Watermark */}
      <div className="absolute right-[-3%] bottom-[-5%] sm:right-6 sm:bottom-0 pointer-events-none select-none z-0 opacity-[0.035]">
        <div className="relative w-[300px] sm:w-[480px] md:w-[620px] aspect-[2.27/1]">
          <Image
            src="/assets/Quesos Zampa/logo blanco.png"
            alt="Quesos Zampa Watermark"
            fill
            className="object-contain object-right-bottom"
            sizes="(max-width: 640px) 300px, 620px"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col gap-10 relative z-10">
        
        {/* Main 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-10 border-b border-white/10">
          
          {/* Column 1: Brand & Slogan (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-start gap-4">
            <Link href="/" className="inline-block relative w-[140px] h-[62px]">
              <Image 
                src="/assets/Quesos Zampa/logo blanco.png" 
                alt="Quesos Zampa Logo" 
                fill
                className="object-contain object-left" 
                sizes="140px"
              />
            </Link>
            
            <p className="text-sm font-light text-white/70 leading-relaxed max-w-md">
              Quesería artesanal y tambo ovino pastoril. Elaboración dedicada de quesos de autor 100% con leche pasteurizada de oveja.
            </p>
          </div>

          {/* Column 2: Navigation Links (4 cols, split in 2 clean sub-columns) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <h4 className="text-xs font-bold tracking-[0.2em] text-white/40 uppercase">Navegación</h4>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2.5 text-sm font-light text-white/75">
              <ul className="flex flex-col gap-2.5">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
                </li>
                <li>
                  <Link href="/nuestra-historia" className="hover:text-white transition-colors">Nuestra Historia</Link>
                </li>
                <li>
                  <Link href="/productos" className="hover:text-white transition-colors">Productos</Link>
                </li>
              </ul>
              <ul className="flex flex-col gap-2.5">
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
          </div>

          {/* Column 3: Contact & Socials (3 cols) */}
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
                onClick={() => trackWhatsAppClick('footer_direct_phone')}
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
                onClick={() => trackWhatsAppClick('footer_wholesale_button')}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 hover:bg-white hover:text-charcoal hover:border-white text-xs font-semibold tracking-wider uppercase transition-all duration-300 shadow-sm"
              >
                <span>Ventas Mayoristas</span>
                <Icon name="ArrowRightIcon" size={12} variant="outline" />
              </a>
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar: Copyright & Firm */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50 font-light">
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
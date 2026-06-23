'use client';
import { useState, useEffect } from 'react';
import AppLogo from '@/components/ui/AppLogo';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'nav-blur py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-center gap-4 lg:gap-8">
        {/* Left: Nav links (INICIO, PRODUCTOS, NUESTRA HISTORIA) */}
        <div className="hidden lg:flex items-center gap-6 lg:gap-8 justify-end">
          {[
            { label: 'INICIO', href: '#' },
            { label: 'PRODUCTOS', href: '#cultivars' },
            { label: 'NUESTRA HISTORIA', href: '#timeline' },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs font-bold text-umber-dark hover:text-teal transition-colors duration-200 tracking-widest"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Center: Logo (No text, larger and centered) */}
        <div className="flex justify-center items-center flex-shrink-0 mx-2 lg:mx-4">
          <AppLogo
            src="/IMG_1960(1).png"
            size={scrolled ? 80 : 110}
            className="text-umber transition-all duration-500 hover:scale-105"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          />
        </div>

        {/* Right: Nav links (ELABORACIÓN, COMUNIDAD, REVENDEDORES, CONTACTO) */}
        <div className="hidden lg:flex items-center gap-6 lg:gap-8 justify-start">
          {[
            { label: 'ELABORACIÓN', href: '#about' },
            { label: 'COMUNIDAD', href: '#impact' },
            { label: 'REVENDEDORES', href: '#about' },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs font-bold text-umber-dark hover:text-teal transition-colors duration-200 tracking-widest"
            >
              {item.label}
            </a>
          ))}
          {/* Contact button */}
          <a
            href="#about"
            className="text-xs font-bold text-umber-dark border border-umber-dark/60 px-4 py-2 rounded-md hover:bg-umber-dark hover:text-cream transition-all duration-300 tracking-widest"
          >
            CONTACTO
          </a>
        </div>
      </div>
    </nav>
  );
}
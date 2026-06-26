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
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative flex items-center justify-center min-h-[80px]">
        {/* Left: Nav links (NUESTRA HISTORIA, NUESTROS QUESOS) */}
        <div className="hidden lg:flex items-center gap-6 lg:gap-10 mr-4 lg:mr-8">
          {[
            { label: 'NUESTRA HISTORIA', href: '#timeline' },
            { label: 'NUESTROS QUESOS', href: '#cultivars' },
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
        <div className="flex justify-center items-center flex-shrink-0 z-10">
          <AppLogo
            src="/IMG_1960(1).png"
            size={scrolled ? 90 : 140}
            className="text-umber transition-all duration-500 hover:scale-105 cursor-pointer drop-shadow-md"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          />
        </div>

        {/* Right: Nav links (CALIDAD, NOSOTROS) */}
        <div className="hidden lg:flex items-center gap-6 lg:gap-10 ml-4 lg:ml-8">
          {[
            { label: 'CALIDAD', href: '#about' },
            { label: 'NOSOTROS', href: '#impact' },
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

        {/* Right Edge: Contact button */}
        <div className="absolute right-6 lg:right-12 hidden lg:block">
          <a
            href="https://www.instagram.com/quesos_zampa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-umber-dark border border-umber-dark/60 px-5 py-2.5 rounded hover:bg-umber-dark hover:text-cream transition-all duration-300 tracking-widest"
          >
            CONTACTO
          </a>
        </div>
      </div>
    </nav>
  );
}
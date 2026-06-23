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
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-center lg:grid lg:grid-cols-3 lg:items-center">
        {/* Left: Nav links (Nuestra Historia, Nuestros Quesos) */}
        <div className="hidden lg:flex items-center gap-10 justify-start">
          {[
            { label: 'Nuestra Historia', href: '#timeline' },
            { label: 'Nuestros Quesos', href: '#cultivars' },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-umber-light hover:text-teal transition-colors duration-200 tracking-wide"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Center: Logo (No text, larger and centered) */}
        <div className="flex justify-center items-center w-full lg:w-auto lg:col-span-1">
          <AppLogo
            src="/IMG_1960(1).png"
            size={scrolled ? 70 : 90}
            className="text-umber transition-all duration-500 hover:scale-105"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          />
        </div>

        {/* Right: Nav links (Calidad, Nosotros) */}
        <div className="hidden lg:flex items-center gap-10 justify-end">
          {[
            { label: 'Calidad', href: '#impact' },
            { label: 'Nosotros', href: '#about' },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-umber-light hover:text-teal transition-colors duration-200 tracking-wide"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
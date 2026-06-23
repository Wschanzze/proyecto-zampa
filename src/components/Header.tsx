'use client';
import { useState, useEffect } from 'react';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

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
        scrolled ? 'nav-blur py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <AppLogo
            src="/IMG_1960(1).png"
            size={36}
            text="Quesos Zampa"
            className="text-umber"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          />
        </div>

        {/* Nav links */}
        <div className="hidden lg:flex items-center gap-10">
          {[
            { label: 'Nuestra Historia', href: '#timeline' },
            { label: 'Nuestros Quesos', href: '#cultivars' },
            { label: 'Calidad', href: '#impact' },
            { label: 'Nosotros', href: '#about' },
          ]?.map((item) => (
            <a
              key={item?.label}
              href={item?.href}
              className="text-sm font-medium text-umber-light hover:text-teal transition-colors duration-200 tracking-wide"
            >
              {item?.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#cultivars"
          className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-teal text-cream hover:bg-teal-light transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
        >
          <Icon name="SparklesIcon" size={16} variant="outline" />
          Explorar Variedades
        </a>
      </div>
    </nav>
  );
}
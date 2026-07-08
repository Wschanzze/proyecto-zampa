'use client';
import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import AppLogo from '@/components/ui/AppLogo';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = () => {
    if (pathname === '/home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      router.push('/home');
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'nav-blur py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative flex items-center justify-center min-h-[80px]">
        {/* Left: Nav links (NUESTRA HISTORIA, PRODUCTOS, ELABORACIÓN) */}
        <div className="hidden lg:flex items-center gap-6 lg:gap-10 mr-4 lg:mr-8">
          {[
            { label: 'NUESTRA HISTORIA', href: '/nuestra-historia' },
            { label: 'PRODUCTOS', href: '/productos' },
            { label: 'ELABORACIÓN', href: '/elaboracion' },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-xs font-bold transition-colors duration-300 tracking-widest ${
                scrolled ? 'text-umber-dark hover:text-teal' : 'text-cream hover:text-wheat-light'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Center: Logo */}
        <div className="flex justify-center items-center flex-shrink-0 z-10">
          <AppLogo
            src="/IMG_1960(1).png"
            size={scrolled ? 90 : 140}
            className="text-umber transition-all duration-500 hover:scale-105 cursor-pointer drop-shadow-md"
            onClick={handleLogoClick}
          />
        </div>

        {/* Right: Nav links (COMUNIDAD, REVENDEDORES) */}
        <div className="hidden lg:flex items-center gap-6 lg:gap-10 ml-4 lg:ml-8">
          {[
            { label: 'COMUNIDAD', href: '/comunidad' },
            { label: 'REVENDEDORES', href: '/revendedores' },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-xs font-bold transition-colors duration-300 tracking-widest ${
                scrolled ? 'text-umber-dark hover:text-teal' : 'text-cream hover:text-wheat-light'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right Edge: Contact button */}
        <div className="absolute right-6 lg:right-12 hidden lg:block">
          <a
            href="/contacto"
            className={`text-xs font-bold border px-5 py-2.5 rounded transition-all duration-300 tracking-widest ${
              scrolled 
                ? 'text-umber-dark border-umber-dark/60 hover:bg-umber-dark hover:text-cream' 
                : 'text-cream border-cream/50 hover:bg-cream hover:text-charcoal'
            }`}
          >
            CONTACTO
          </a>
        </div>
      </div>
    </nav>
  );
}
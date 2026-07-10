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
      style={{ position: 'fixed', top: 0, left: 0, right: 0 }}
      className={`w-full z-50 transition-all duration-500 ${
        scrolled ? 'nav-blur py-2 shadow-sm' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative flex items-center min-h-[80px]">
        {/* Left/Center Logo Container */}
        <div 
          className={`absolute top-1/2 -translate-y-1/2 transition-all duration-500 z-30 ${
            scrolled 
              ? 'left-1/2 -translate-x-1/2 lg:left-12 lg:translate-x-0' 
              : 'left-1/2 -translate-x-1/2'
          }`}
        >
          <AppLogo
            src="/IMG_1960(1).png"
            size={scrolled ? 75 : 120}
            className="text-umber transition-all duration-500 hover:scale-105 cursor-pointer drop-shadow-md"
            onClick={handleLogoClick}
          />
        </div>

        {/* Right Nav Links Container (only visible when scrolled) */}
        <div 
          className={`hidden lg:flex items-center gap-8 lg:gap-10 ml-auto transition-all duration-500 ${
            scrolled 
              ? 'opacity-100 pointer-events-auto translate-x-0' 
              : 'opacity-0 pointer-events-none translate-x-8'
          }`}
        >
          {[
            { label: 'NUESTRA HISTORIA', href: '/nuestra-historia' },
            { label: 'PRODUCTOS', href: '/productos' },
            { label: 'ELABORACIÓN', href: '/elaboracion' },
            { label: 'COMUNIDAD', href: '/comunidad' },
            { label: 'REVENDEDORES', href: '/revendedores' },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs font-bold transition-colors duration-300 tracking-widest text-umber-dark hover:text-teal"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
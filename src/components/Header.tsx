'use client';
import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import AppLogo from '@/components/ui/AppLogo';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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
    <>
      <nav
        style={{ position: 'fixed', top: 0, left: 0, right: 0 }}
        className={`w-full z-50 transition-all duration-500 ${
          scrolled ? 'nav-blur py-2 shadow-sm' : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative flex items-center justify-center min-h-[80px]">
          {/* Centered Group Container */}
          <div className="flex items-center gap-6 lg:gap-10 transition-all duration-500">
            {/* Logo */}
            <div className="flex-shrink-0 transition-all duration-500">
              <AppLogo
                src="/IMG_1960(1).png"
                size={scrolled ? 75 : 120}
                className="text-umber transition-all duration-500 hover:scale-105 cursor-pointer drop-shadow-md"
                onClick={handleLogoClick}
              />
            </div>

            {/* Links Container (expands on scroll) */}
            <div 
              className={`hidden lg:flex items-center gap-6 lg:gap-8 transition-all duration-500 ease-in-out overflow-hidden ${
                scrolled 
                  ? 'opacity-100 max-w-[900px] pointer-events-auto translate-x-0' 
                  : 'opacity-0 max-w-0 pointer-events-none -translate-x-6'
              }`}
            >
              {[
                { label: 'PRODUCTOS', href: '/productos' },
                { label: 'NUESTRA HISTORIA', href: '/nuestra-historia' },
                { label: 'ELABORACIÓN', href: '/elaboracion' },
                { label: 'COMUNIDAD', href: '/comunidad' },
                { label: 'DÓNDE ENCONTRARNOS', href: '/encontranos' },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-xs font-bold transition-colors duration-300 tracking-widest text-umber-dark hover:text-teal whitespace-nowrap"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Burger Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`absolute right-6 lg:hidden z-50 p-2 rounded-full focus:outline-none transition-colors duration-300 ${
              scrolled ? 'text-umber-dark hover:bg-charcoal/5' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-500 ease-in-out ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          onClick={() => setMenuOpen(false)}
          className="absolute inset-0 bg-charcoal/40 backdrop-blur-md transition-opacity duration-500"
        />

        {/* Drawer Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-[80%] max-w-[320px] bg-[#FAF8F5] shadow-2xl p-8 flex flex-col justify-between transition-transform duration-500 ease-out transform ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col gap-8">
            {/* Header inside drawer */}
            <div className="flex items-center justify-between border-b border-wheat/20 pb-4">
              <AppLogo
                src="/IMG_1960(1).png"
                size={70}
                className="text-umber cursor-pointer"
                onClick={() => {
                  setMenuOpen(false);
                  handleLogoClick();
                }}
              />
              <button
                onClick={() => setMenuOpen(false)}
                className="p-2 rounded-full text-umber-dark hover:bg-charcoal/5 focus:outline-none transition-colors"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Vertical Menu Links */}
            <nav className="flex flex-col gap-6 mt-4">
              {[
                { label: 'PRODUCTOS', href: '/productos' },
                { label: 'NUESTRA HISTORIA', href: '/nuestra-historia' },
                { label: 'ELABORACIÓN', href: '/elaboracion' },
                { label: 'COMUNIDAD', href: '/comunidad' },
                { label: 'DÓNDE ENCONTRARNOS', href: '/encontranos' },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-bold tracking-widest text-umber-dark hover:text-teal transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Footer inside drawer */}
          <div className="text-[10px] text-umber-light/80 font-medium tracking-[0.2em] uppercase border-t border-wheat/20 pt-4">
            Quesos Zampa · Napaleofú
          </div>
        </div>
      </div>
    </>
  );
}
'use client';
import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

export default function FloatingPill() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <a
      href="https://wa.me/5491132554757?text=%C2%A1Hola!%20Te%20escribo%20desde%20el%20sitio%20web%20de%20Quesos%20Zampa.%20Me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 lg:bottom-8 lg:right-8 z-50 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white flex items-center justify-center shadow-[0_8px_24px_rgba(37,211,102,0.3)] hover:shadow-[0_12px_32px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-95 transition-all duration-300"
      style={{
        opacity: show ? 1 : 0,
        transform: show ? 'translateY(0)' : 'translateY(16px)',
        pointerEvents: show ? 'auto' : 'none',
        transition: 'opacity 0.4s ease, transform 0.4s cubic-bezier(0.23,1,0.32,1), background 0.3s ease, box-shadow 0.3s ease, transform 0.2s ease',
      }}
      aria-label="Contactar por WhatsApp"
    >
      <Icon name="WhatsApp" size={28} />
    </a>
  );
}

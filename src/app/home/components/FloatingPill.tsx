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
      href="https://www.instagram.com/quesos_zampa"
      target="_blank"
      rel="noopener noreferrer"
      className="floating-pill"
      style={{
        opacity: show ? 1 : 0,
        transform: show ? 'translateY(0)' : 'translateY(16px)',
        pointerEvents: show ? 'auto' : 'none',
        transition: 'opacity 0.4s ease, transform 0.4s cubic-bezier(0.23,1,0.32,1), background 0.3s ease, box-shadow 0.3s ease',
      }}
      aria-label="Contactar por Instagram"
    >
      <Icon name="ChatBubbleLeftRightIcon" size={15} variant="outline" />
      Contacto @quesos_zampa
    </a>
  );
}

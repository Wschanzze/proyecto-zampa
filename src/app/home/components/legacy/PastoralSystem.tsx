"use client";

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import DecoratedTitle from '@/components/ui/DecoratedTitle';

const PastoralSystem = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.play().catch(error => {
        console.log("Autoplay prevented on mobile:", error);
      });
    }
  }, []);

  return (
    <section className="pastoral-system">
      <div className="split-editorial">
        <div className="split-text-side">
          <p className="story-subtitle">CRIADAS EN LIBERTAD</p>
          <DecoratedTitle className="editorial-title" tag="h3">Sistema Pastoril</DecoratedTitle>
          <p>En Zampa, nuestras ovejas se alimentan mediante un sistema pastoril en los fértiles campos de Napaleofú. Este enfoque respeta el bienestar animal y los ciclos naturales, permitiéndoles pastar al aire libre durante todo el año.</p>
          <p>
            <span className="desktop-text-only">La alimentación natural y libre de estrés no solo asegura una vida más saludable para nuestro rebaño, sino que se refleja directamente en la calidad y el sabor excepcional de nuestra leche, dando lugar a quesos con un carácter único y auténtico.</span>
            <span className="mobile-text-only">Esta alimentación libre de estrés se refleja en la calidad y sabor de nuestra leche, logrando quesos con un carácter único.</span>
          </p>
          <Link href="/nuestra-historia" className="btn btn-primary" style={{ marginTop: '1rem' }}>DESCUBRE MÁS</Link>
        </div>
        <div className="split-image-side">
          <video 
            ref={videoRef}
            src="/assets/Quesos Zampa/IMG_1145.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline
          />
        </div>
      </div>
    </section>
  );
};

export default PastoralSystem;

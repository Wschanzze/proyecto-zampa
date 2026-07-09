"use client";

import React, { useEffect, useRef, useState } from 'react';

export default function LegacyVisitSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleBookExperience = () => {
    const message = "¡Hola! Me pongo en contacto desde su sitio web porque me gustaría recibir información para reservar una visita y conocer el Tambo Zampa.";
    window.open(`https://wa.me/5491132554757?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section ref={sectionRef} className="visit-section">
      <div className="visit-container">
        
        {/* Texts */}
        <div className={`visit-content transition-reveal ${visible ? 'reveal-active' : ''}`}>
          <p className="visit-pretitle">Establecimiento Zampa</p>
          
          <h2 className="visit-title">
            UN VIAJE PARA DESCUBRIR LA TRADICIÓN QUESERA.<br />
            ¡VEN A VISITARNOS!
          </h2>
          
          <button
            onClick={handleBookExperience}
            className="visit-link-btn"
          >
            Reserva tu experiencia 
            <div className="visit-link-line" />
          </button>
        </div>

        {/* YouTube Video Embed */}
        <div className={`visit-video-wrapper transition-reveal delay-300 ${visible ? 'reveal-active' : ''}`}>
          <iframe
            className="visit-video-iframe"
            src="https://www.youtube-nocookie.com/embed/qnO8U5v48u4?autoplay=0&rel=0&controls=1"
            title="Quesos Zampa - Tambo Ovino Familiar"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

      </div>
    </section>
  );
}

"use client";

import React, { useRef } from 'react';

const InstagramCarousel = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const items = [
    { type: 'image', src: '/assets/Quesos Zampa/IMG_0773.jpg' },
    { type: 'image', src: '/assets/Quesos Zampa/IMG_0853.jpg' },
    { type: 'image', src: '/assets/Quesos Zampa/IMG_1034.jpg' },
    { type: 'image', src: '/assets/Quesos Zampa/IMG_1134.jpg' },
    { type: 'image', src: '/assets/Quesos Zampa/IMG_1221.jpg' },
    { type: 'image', src: '/assets/Quesos Zampa/IMG_1900.jpg' },
    { type: 'image', src: '/assets/Quesos Zampa/IMG_2809.jpg' },
    { type: 'image', src: '/assets/Quesos Zampa/IMG_4715.jpg' },
    { type: 'image', src: '/assets/Quesos Zampa/IMG_8715.jpg' },
  ];

  const instagramUrl = "https://www.instagram.com/quesos.zampa/";

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollContainerRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="instagram-section">
      <div className="instagram-header">
        <span className="instagram-subtitle">FILOSOFÍA EN IMÁGENES</span>
        <h2 className="instagram-title">
          <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
            @quesos.zampa
          </a>
        </h2>
        <p className="instagram-desc">Seguinos para ver el día a día en nuestro tambo pastoril en Tandil</p>
      </div>

      <div className="instagram-carousel-wrapper">
        <button 
          className="carousel-nav-btn prev" 
          onClick={() => scroll('left')}
          aria-label="Previous posts"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        <div className="instagram-scroll-container" ref={scrollContainerRef}>
          {items.map((item, index) => (
            <a 
              key={index} 
              href={instagramUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="instagram-item-card"
            >
              <div className="instagram-media-wrapper">
                {item.type === 'video' ? (
                  <video 
                    src={item.src} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="instagram-media"
                  />
                ) : (
                  <img 
                    src={item.src} 
                    alt={`Zampa Instagram Post ${index + 1}`} 
                    className="instagram-media"
                    loading="lazy"
                  />
                )}
                <div className="instagram-hover-overlay">
                  <svg className="instagram-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  <span className="instagram-hover-text">Ver en Instagram</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <button 
          className="carousel-nav-btn next" 
          onClick={() => scroll('right')}
          aria-label="Next posts"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default InstagramCarousel;

"use client";

import React, { useRef } from 'react';
import Image from 'next/image';

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
    <section className="py-24 lg:py-32 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center mb-16">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-teal mb-3 block">FILOSOFÍA EN IMÁGENES</span>
        <h2 className="font-fraunces text-4xl md:text-5xl font-semibold text-umber-dark tracking-wide uppercase mb-3">
          <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-teal transition-colors duration-300">
            @quesos.zampa
          </a>
        </h2>
        <p className="text-sm md:text-base font-light text-charcoal/80">Seguinos para ver el día a día en nuestro tambo pastoril en Tandil</p>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <button 
          className="absolute left-10 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-teal text-white flex items-center justify-center hover:bg-teal-light shadow-lg hover:scale-105 transition-all duration-300 z-30" 
          onClick={() => scroll('left')}
          aria-label="Previous posts"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        <div className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-8" ref={scrollContainerRef} style={{ scrollbarWidth: 'none' }}>
          {items.map((item, index) => (
            <a 
              key={index} 
              href={instagramUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex-shrink-0 w-[280px] md:w-[320px] aspect-square rounded-[24px] overflow-hidden relative shadow-lg group border border-teal/5 transition-all duration-500 hover:shadow-xl"
            >
              <div className="relative w-full h-full">
                {item.type === 'video' ? (
                  <video 
                    src={item.src} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Image 
                    src={item.src} 
                    alt={`Zampa Instagram Post ${index + 1}`} 
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="320px"
                  />
                )}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 backdrop-blur-[2px] transition-all duration-500 z-10 flex flex-col items-center justify-center gap-3">
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  <span className="text-xs font-semibold text-white uppercase tracking-widest">Ver en Instagram</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <button 
          className="absolute right-10 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-teal text-white flex items-center justify-center hover:bg-teal-light shadow-lg hover:scale-105 transition-all duration-300 z-30" 
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

"use client";

import React, { useRef, useState } from 'react';
import Image from 'next/image';

const InstagramCarousel = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

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

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      const maxScroll = scrollWidth - clientWidth;
      if (maxScroll <= 0) return;
      const percentage = scrollLeft / maxScroll;

      // Group into 3 dots
      if (percentage < 0.33) {
        setActiveIndex(0);
      } else if (percentage < 0.66) {
        setActiveIndex(1);
      } else {
        setActiveIndex(2);
      }
    }
  };

  const scrollToSection = (index: number) => {
    if (scrollContainerRef.current) {
      const { scrollWidth, clientWidth } = scrollContainerRef.current;
      const maxScroll = scrollWidth - clientWidth;
      let targetScroll = 0;
      if (index === 1) {
        targetScroll = maxScroll / 2;
      } else if (index === 2) {
        targetScroll = maxScroll;
      }
      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
      setActiveIndex(index);
    }
  };

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
        <h2 className="text-4xl md:text-5xl font-light text-charcoal tracking-[0.06em] uppercase mb-3">
          <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#6B4226] transition-colors duration-300">
            @quesos.zampa
          </a>
        </h2>
        <p className="text-sm md:text-base font-light text-charcoal/80">Seguinos para ver el día a día en nuestro tambo pastoril en Tandil</p>
      </div>

      <div className="relative max-w-[1600px] mx-auto px-6 lg:px-12">
        <button 
          className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-limestone-soft border border-umber/30 text-umber flex items-center justify-center hover:bg-umber hover:text-white hover:border-umber shadow-xl hover:scale-105 transition-all duration-300 z-30" 
          onClick={() => scroll('left')}
          aria-label="Previous posts"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        <div 
          className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-8" 
          ref={scrollContainerRef} 
          style={{ scrollbarWidth: 'none' }}
          onScroll={handleScroll}
        >
          {items.map((item, index) => (
            <a 
              key={index} 
              href={instagramUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex-shrink-0 w-[300px] md:w-[420px] aspect-square rounded-[32px] overflow-hidden relative shadow-lg group border border-charcoal/5 transition-all duration-500 hover:shadow-2xl"
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
                    sizes="420px"
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
          className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-limestone-soft border border-umber/30 text-umber flex items-center justify-center hover:bg-umber hover:text-white hover:border-umber shadow-xl hover:scale-105 transition-all duration-300 z-30" 
          onClick={() => scroll('right')}
          aria-label="Next posts"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>

      {/* 3 Instagram-style Pagination Dots */}
      <div className="flex justify-center gap-1.5 mt-4 z-20 relative">
        {[0, 1, 2].map((idx) => (
          <button
            key={idx}
            onClick={() => scrollToSection(idx)}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              activeIndex === idx 
                ? 'bg-[#6B4226] scale-125' // Active dot is colored and slightly larger
                : 'bg-charcoal/20 hover:bg-charcoal/40'  // Inactive dot is lighter
            }`}
            aria-label={`Go to page ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default InstagramCarousel;

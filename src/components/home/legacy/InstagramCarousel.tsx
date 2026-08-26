"use client";

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

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

const InstagramCarousel = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const isHovered = useRef(false);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);
  const hasMoved = useRef(false);

  // Duplicar elementos para lograr un flujo continuo en loop infinito
  const displayItems = [...items, ...items];

  // Scroll automático continuo e infinito
  useEffect(() => {
    let animationFrameId: number;

    const scrollStep = () => {
      if (scrollContainerRef.current && !isHovered.current && !isDragging.current) {
        const container = scrollContainerRef.current;
        container.scrollLeft += 0.6; // Movimiento suave y orgánico

        const halfWidth = container.scrollWidth / 2;
        if (container.scrollLeft >= halfWidth) {
          container.scrollLeft -= halfWidth;
        }
      }
      animationFrameId = requestAnimationFrame(scrollStep);
    };

    animationFrameId = requestAnimationFrame(scrollStep);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Eventos de arrastre con mouse (Drag & Scroll)
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    isDragging.current = true;
    setIsMouseDown(true);
    hasMoved.current = false;
    startX.current = e.pageX - scrollContainerRef.current.offsetLeft;
    scrollLeftStart.current = scrollContainerRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
    isHovered.current = false;
    setIsMouseDown(false);
  };

  const handleMouseEnter = () => {
    isHovered.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    setIsMouseDown(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.4;
    if (Math.abs(walk) > 5) {
      hasMoved.current = true;
    }
    let newScroll = scrollLeftStart.current - walk;

    const container = scrollContainerRef.current;
    const halfWidth = container.scrollWidth / 2;
    if (newScroll < 0) {
      newScroll += halfWidth;
    } else if (newScroll >= halfWidth) {
      newScroll -= halfWidth;
    }
    container.scrollLeft = newScroll;
  };

  const handleLinkClick = (e: React.MouseEvent) => {
    if (hasMoved.current) {
      e.preventDefault();
    }
  };

  return (
    <section className="py-24 lg:py-32 bg-[#FAF8F5] relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-light text-charcoal tracking-[0.06em] uppercase mb-3">
          <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#6B4226] transition-colors duration-300">
            @quesos.zampa
          </a>
        </h2>
        <p className="text-sm md:text-base font-light text-charcoal/80">Seguinos para ver el día a día en nuestro tambo pastoril en Tandil</p>
      </div>

      <div className="relative max-w-[1600px] mx-auto px-6 lg:px-12">
        <div 
          className={`flex gap-6 overflow-x-auto no-scrollbar pb-8 ${isMouseDown ? 'cursor-grabbing' : 'cursor-grab'}`}
          ref={scrollContainerRef} 
          style={{ scrollbarWidth: 'none' }}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseEnter={handleMouseEnter}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {displayItems.map((item, index) => (
            <a 
              key={index} 
              href={instagramUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              onClick={handleLinkClick}
              className="flex-shrink-0 w-[300px] md:w-[420px] aspect-square rounded-[32px] overflow-hidden relative shadow-lg group border border-charcoal/5 transition-all duration-500 hover:shadow-2xl pointer-events-auto"
            >
              <div className="relative w-full h-full">
                <Image 
                  src={item.src} 
                  alt={`Zampa Instagram Post ${index + 1}`} 
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="420px"
                  draggable={false}
                />
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
      </div>
    </section>
  );
};

export default InstagramCarousel;

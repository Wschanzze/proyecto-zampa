'use client';

import React, { useState, useRef, useEffect } from "react";
import AppImage from "@/components/ui/AppImage";
import AppIcon from "@/components/ui/AppIcon";
import { ArchiveBoxIcon, ListBulletIcon } from "@heroicons/react/24/outline";

interface Card {
  id: string;
  title: string;
  subtitle: string;
  region: string;
  maturationMonths: string;
  tastingNotes: string;
  milkType: string;
  timelineLabel: string;
  image: string;
  imageAlt: string;
}

const cards: Card[] = [
  {
    id: 'cul-001',
    title: 'Camembert de Oveja',
    region: 'Pasturas de Tandil',
    subtitle: 'Considerado la vedette de la casa. Un queso de pasta blanda con corteza enmohecida blanca, elaborado 100% con leche de oveja frisona fresca del día.',
    maturationMonths: 'Punto óptimo (4 a 6 sem.)',
    tastingNotes: 'Textura untuosa y fundente con aromas lácticos intensos y sotobosque.',
    milkType: 'Leche Cruda A2 de Oveja',
    timelineLabel: 'Camembert',
    image: '/assets/Quesos%20Zampa/producto_3.png',
    imageAlt: 'Queso Camembert de oveja Zampa en plato'
  },
  {
    id: 'cul-002',
    title: 'Queso Pecorino Zampa',
    region: 'Guarda en Cava de Ovinos',
    subtitle: 'El gran desafío técnico y orgullo de nuestro tambo. Inspirado en la tradición italiana, es un queso de pasta dura madurado lentamente en cava.',
    maturationMonths: '9 a 12 Meses en Cava',
    tastingNotes: 'Sabor robusto, notas herbales de pastura y textura firme quebradiza.',
    milkType: 'Leche Cruda A2 de Oveja',
    timelineLabel: 'Pecorino',
    image: '/assets/Quesos%20Zampa/pecorino.jpeg',
    imageAlt: 'Queso Pecorino Zampa madurado rústico'
  },
  {
    id: 'cul-003',
    title: 'Brie de Oveja',
    region: 'Pasta Blanda Tradicional',
    subtitle: 'De estilo clásico francés y corteza aterciopelada blanca. Aprovecha la gran riqueza grasa de la leche frisona para lograr extrema cremosidad.',
    maturationMonths: '3 a 5 Semanas en Cava',
    tastingNotes: 'Matices complejos, cremosidad envolvente y notas de mantequilla rica.',
    milkType: 'Leche Cruda A2 de Oveja',
    timelineLabel: 'Brie',
    image: '/assets/Quesos%20Zampa/producto_2.png',
    imageAlt: 'Queso Brie de oveja Zampa cortado'
  },
  {
    id: 'cul-004',
    title: 'Manchego Artesanal',
    region: 'Receta Tradicional',
    subtitle: 'Inspirado en la gran tradición española. Un queso de pasta semidura o dura que resalta el dulzor natural y sutiles matices herbales.',
    maturationMonths: '6 a 9 Meses en Cava',
    tastingNotes: 'Textura compacta, retrogusto limpio y equilibrado dulzor herbal.',
    milkType: 'Leche Cruda A2 de Oveja',
    timelineLabel: 'Manchego',
    image: '/assets/Quesos%20Zampa/producto_1.png',
    imageAlt: 'Queso Manchego Zampa artesanal'
  },
  {
    id: 'cul-005',
    title: 'Provolone de Oveja',
    region: 'Pasta Hilada y Semidura',
    subtitle: 'Variedad mediterránea adaptada al perfil graso y rico de la leche ovina. Presenta una textura elástica que evoluciona con el tiempo.',
    maturationMonths: '3 a 6 Meses Maduración',
    tastingNotes: 'Sabor rico y moderado que adquiere picor agradable con el tiempo.',
    milkType: 'Leche Cruda A2 de Oveja',
    timelineLabel: 'Provolone',
    image: '/assets/Quesos%20Zampa/tipos%20de%20quesos.jpg',
    imageAlt: 'Cortes de queso Provolone Zampa'
  },
  {
    id: 'cul-006',
    title: 'Queso Ahumado',
    region: 'Ahumado Natural de Autor',
    subtitle: 'Sometido a un ahumado natural lento con maderas selectas que le otorga una distintiva corteza color caramelo y aroma inconfundible.',
    maturationMonths: 'Ahumado Lento en Cava',
    tastingNotes: 'Aromas ahumados profundos en elegante contraste con la cremosidad láctica.',
    milkType: 'Leche Cruda A2 de Oveja',
    timelineLabel: 'Ahumado',
    image: '/assets/Quesos%20Zampa/IMG_9824.JPG',
    imageAlt: 'Queso Ahumado artesanal Zampa'
  }
];

function CheeseFlourish({ className = "w-16 h-6 text-[#C9A84C]" }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 100 30" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M 50 15 C 35 15, 30 5, 20 5 C 10 5, 5 15, 12 18 C 18 20, 22 12, 15 10" />
      <path d="M 50 15 C 65 15, 70 5, 80 5 C 90 5, 95 15, 88 18 C 82 20, 78 12, 85 10" />
      <polygon points="50,11 53,15 50,19 47,15" fill="currentColor" />
    </svg>
  );
}

export default function ProductTimeMachine() {
  const [position, setPosition] = useState(0);
  const [viewMode, setViewMode] = useState<"stack" | "list">("stack");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartPos = useRef<{ x: number; y: number } | null>(null);
  const positionRef = useRef(position);
  const snapTimeout = useRef<NodeJS.Timeout | null>(null);
  const isSnapping = useRef(false);

  useEffect(() => {
    positionRef.current = position;
  }, [position]);

  // Smooth Snap Animation to ensure cards never get stuck halfway
  const snapToCard = (targetIndex: number) => {
    if (isSnapping.current) return;
    isSnapping.current = true;
    
    const start = positionRef.current;
    const end = Math.max(0, Math.min(cards.length - 1, targetIndex));
    const startTime = performance.now();
    const duration = 280; // ms

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutCubic curve for smooth natural snapping
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = start + (end - start) * ease;
      
      setPosition(current);
      positionRef.current = current;

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        isSnapping.current = false;
      }
    };

    requestAnimationFrame(step);
  };

  const handleScroll = (e: WheelEvent) => {
    if (viewMode !== "stack") return;
    e.preventDefault();

    const scrollSensitivity = 0.005;
    const delta = e.deltaY * scrollSensitivity;

    const newPos = Math.max(0, Math.min(cards.length - 1, positionRef.current + delta));
    setPosition(newPos);
    positionRef.current = newPos;

    if (snapTimeout.current) clearTimeout(snapTimeout.current);
    snapTimeout.current = setTimeout(() => {
      snapToCard(Math.round(positionRef.current));
    }, 180);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (viewMode !== "stack") return;
    touchStartPos.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    };
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (viewMode !== "stack" || !touchStartPos.current) return;
    
    const deltaX = touchStartPos.current.x - e.touches[0].clientX;
    const deltaY = touchStartPos.current.y - e.touches[0].clientY;
    
    // Only capture HORIZONTAL swipe gesture for mobile card navigation
    // Native vertical scrolling up/down the page remains completely smooth
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 6) {
      const scrollSensitivity = 0.006;
      const newPos = Math.max(0, Math.min(cards.length - 1, positionRef.current + deltaX * scrollSensitivity));
      setPosition(newPos);
      positionRef.current = newPos;

      touchStartPos.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      };
    }
  };

  const handleTouchEnd = () => {
    touchStartPos.current = null;
    snapToCard(Math.round(positionRef.current));
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleScroll, { passive: false });
      return () => container.removeEventListener("wheel", handleScroll);
    }
    return undefined;
  }, [viewMode]);

  const handleTimelineClick = (index: number) => {
    snapToCard(index);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const activeIndex = Math.round(position);

  return (
    <div
      ref={containerRef}
      className="relative min-h-[88vh] sm:min-h-[95vh] w-full overflow-hidden bg-cream font-urbanist pt-4 sm:pt-10 pb-8 flex flex-col justify-between items-center select-none"
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Header View Toggle Controls */}
      <div className="absolute right-4 sm:right-6 top-4 sm:top-6 z-50 flex items-center gap-1 rounded-xl border border-charcoal/10 bg-white/80 p-1 shadow-sm backdrop-blur-md">
        <button
          className={`rounded-lg p-2 transition-colors ${viewMode === "stack" ? "bg-wheat-muted/50 text-[#C9A84C]" : "text-charcoal hover:bg-wheat-muted/30"}`}
          onClick={() => setViewMode("stack")}
          aria-label="Vista 3D"
        >
          <ArchiveBoxIcon className="h-5 w-5" />
        </button>
        <button
          className={`rounded-lg p-2 transition-colors ${viewMode === "list" ? "bg-wheat-muted/50 text-[#C9A84C]" : "text-charcoal hover:bg-wheat-muted/30"}`}
          onClick={() => setViewMode("list")}
          aria-label="Vista de Lista"
        >
          <ListBulletIcon className="h-5 w-5" />
        </button>
      </div>

      {viewMode === "stack" ? (
        <>
          {/* Main 3D Card Stage Area */}
          <div className="relative w-full flex-1 flex items-center justify-center my-2 sm:my-6 px-3 sm:px-0" style={{ perspective: "1200px" }}>
            <div className="relative h-[530px] sm:h-[640px] md:h-[670px] w-full max-w-[920px]" style={{ transformStyle: "preserve-3d" }}>
              {[...cards].reverse().map((card, reverseIndex) => {
                const index = cards.length - 1 - reverseIndex;
                const distanceFromActive = index - position;

                if (distanceFromActive < -1.5 || distanceFromActive > 5) {
                  return null;
                }

                const isBehind = distanceFromActive > 0;
                const isInFront = distanceFromActive < 0;

                const translateZ = distanceFromActive * -85;
                const translateY = distanceFromActive * -38;
                const scale = 1 - Math.abs(distanceFromActive) * 0.04;

                let opacity = 1;
                if (isInFront) {
                  opacity = Math.max(0, 1 + distanceFromActive * 2);
                }

                return (
                  <div
                    key={card.id}
                    className="absolute inset-0"
                    style={{
                      transform: `translateZ(${translateZ}px) translateY(${translateY}px) scale(${Math.max(0.7, scale)})`,
                      opacity: Math.max(0, opacity),
                      zIndex: Math.round((cards.length - Math.abs(distanceFromActive)) * 10),
                      transition: isSnapping.current ? "none" : "transform 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.15s ease-out",
                      pointerEvents: Math.abs(distanceFromActive) < 0.5 ? "auto" : "none",
                    }}
                    onClick={() => handleTimelineClick(index)}
                  >
                    <div className="h-full w-full overflow-hidden bg-white/95 backdrop-blur-sm shadow-2xl rounded-3xl border border-charcoal/5 flex flex-col md:flex-row">
                      
                      {/* Card Image Side */}
                      <div className="relative w-full md:w-[42%] h-36 sm:h-52 md:h-full overflow-hidden bg-cream/60 flex items-center justify-center p-3 sm:p-6 border-b md:border-b-0 md:border-r border-charcoal/5 flex-shrink-0">
                        <div className="relative w-full h-full group">
                          <AppImage
                            src={card.image || "/placeholder.svg"}
                            alt={card.imageAlt}
                            fill
                            className="object-contain drop-shadow-xl transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>
                        {isBehind && (
                          <div
                            className="absolute inset-0 bg-cream/60 backdrop-blur-[2px]"
                            style={{
                              opacity: Math.min(0.8, Math.abs(distanceFromActive) * 0.2),
                            }}
                          />
                        )}
                      </div>

                      {/* Card Content Side */}
                      <div className="flex-1 p-4 sm:p-7 md:p-10 flex flex-col justify-between overflow-y-auto">
                        <div>
                          {/* Region & Milk Type Badge */}
                          <div className="flex items-center justify-between mb-1 sm:mb-2 flex-wrap gap-1">
                            <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-[#C9A84C]">
                              {card.region}
                            </span>
                            <span className="text-[8px] sm:text-[9px] font-semibold uppercase tracking-wider text-charcoal/40 bg-charcoal/5 px-2 py-0.5 rounded-full">
                              {card.milkType}
                            </span>
                          </div>

                          {/* Title */}
                          <h2 className="text-lg sm:text-2xl md:text-4xl font-light uppercase tracking-wide text-charcoal leading-tight">
                            {card.title}
                          </h2>

                          {/* Calligraphic Flourish */}
                          <CheeseFlourish className="w-12 sm:w-16 h-4 sm:h-6 text-[#C9A84C]/70 my-1 sm:my-2" />

                          {/* Subtitle / Description */}
                          <p className="text-[11px] sm:text-xs md:text-base text-charcoal/70 font-light leading-relaxed mb-3 sm:mb-6 line-clamp-3 sm:line-clamp-none">
                            {card.subtitle}
                          </p>
                        </div>

                        {/* Technical Details & Cata Block */}
                        <div className="space-y-2 sm:space-y-4 pt-2 sm:pt-4 border-t border-charcoal/10">
                          <div className="grid grid-cols-2 gap-2 sm:gap-3 text-left">
                            <div className="bg-cream/40 p-2 sm:p-3 rounded-xl border border-charcoal/5">
                              <span className="text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.15em] text-charcoal/50 mb-0.5 block">
                                Maduración en Cava
                              </span>
                              <span className="text-[10px] sm:text-xs font-semibold text-charcoal uppercase tracking-wider block truncate">
                                {card.maturationMonths}
                              </span>
                            </div>

                            <div className="bg-cream/40 p-2 sm:p-3 rounded-xl border border-charcoal/5">
                              <span className="text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.15em] text-charcoal/50 mb-0.5 block">
                                Origen
                              </span>
                              <span className="text-[10px] sm:text-xs font-semibold text-charcoal uppercase tracking-wider block truncate">
                                Tandil • Pasturas
                              </span>
                            </div>
                          </div>

                          <div className="bg-white/60 p-2 sm:p-3 rounded-xl border border-charcoal/5">
                            <span className="text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.15em] text-[#C9A84C] mb-0.5 block">
                              Notas de Cata
                            </span>
                            <p className="text-[10px] sm:text-xs text-charcoal/80 font-light italic leading-snug line-clamp-2">
                              "{card.tastingNotes}"
                            </p>
                          </div>
                        </div>

                        {/* Green WhatsApp Action CTA */}
                        <div className="pt-2 sm:pt-4 mt-1 flex items-center justify-end">
                          <a 
                            href={`https://wa.me/5491132554757?text=${encodeURIComponent(`¡Hola! Estoy interesado en el queso ${card.title} (${card.maturationMonths}) que vi en su sitio web. ¿Me dirías precio y disponibilidad?`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-[11px] sm:text-xs font-bold uppercase tracking-[0.15em] text-white bg-[#25D366] hover:bg-[#20ba5a] active:scale-95 px-5 sm:px-6 py-2.5 sm:py-3.5 rounded-full transition-all duration-300 pointer-events-auto shadow-md hover:shadow-lg"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <AppIcon name="WhatsApp" size={16} className="text-white flex-shrink-0" />
                            <span>Consultar por WhatsApp</span>
                          </a>
                        </div>

                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Desktop Timeline Navigation Bar */}
          <div className="absolute bottom-20 right-4 md:right-12 top-20 z-40 flex flex-col items-end justify-center py-8 gap-6 hidden sm:flex">
            {cards.map((card, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={card.id}
                  className="group flex items-center gap-4 transition-all duration-300"
                  onClick={() => handleTimelineClick(index)}
                  aria-label={`Ir a ${card.title}`}
                >
                  <div className="flex flex-col items-end">
                    <span
                      className={`text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 ${
                        isActive ? "text-[#C9A84C]" : "text-charcoal/30 group-hover:text-charcoal/60"
                      }`}
                    >
                      {card.timelineLabel}
                    </span>
                    <span className="text-[9px] text-charcoal/40 font-light">
                      {card.maturationMonths.split(' ')[0]} {card.maturationMonths.split(' ')[1]}
                    </span>
                  </div>
                  <div className="relative flex items-center h-4">
                    <div
                      className={`h-px transition-all duration-300 ${
                        isActive ? "w-12 bg-[#C9A84C]" : "w-6 bg-charcoal/20 group-hover:w-8 group-hover:bg-charcoal/40"
                      }`}
                    />
                    {isActive && <div className="absolute right-0 w-1.5 h-1.5 rounded-full bg-[#C9A84C] shadow-[0_0_8px_rgba(201,168,76,0.6)]" />}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Bottom Area: Mobile Dots & Help Legend cleanly positioned below the cards */}
          <div className="w-full flex flex-col items-center justify-center gap-2 pt-2 pb-2 z-30">
            {/* Mobile Dots Navigation Bar */}
            <div className="flex items-center justify-center gap-2 sm:hidden mb-1">
              {cards.map((card, index) => (
                <button
                  key={card.id}
                  onClick={() => handleTimelineClick(index)}
                  aria-label={`Ir a ${card.title}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex ? "w-6 bg-[#25D366]" : "w-2 bg-charcoal/20"
                  }`}
                />
              ))}
            </div>

            {/* Help Legend - Positioned cleanly in flow so it never overlaps cards */}
            <div className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-charcoal/40 animate-pulse text-center w-full px-4">
              Desliza lateralmente (👈 👉) con el dedo o gira la rueda para explorar
            </div>
          </div>
        </>
      ) : (
        <>
          {/* List View */}
          <div className="mx-auto max-w-5xl px-4 sm:px-6 pb-24 pt-16 sm:pt-24 min-h-screen w-full">
            <div className="mb-10 sm:mb-16 text-center">
              <h2 className="text-3xl sm:text-4xl font-light uppercase tracking-wide text-charcoal mb-2">Catálogo de Autor</h2>
              <CheeseFlourish className="w-16 sm:w-20 h-5 sm:h-6 text-[#C9A84C] mx-auto mb-3" />
              <p className="text-xs sm:text-sm text-charcoal/60 font-light">Quesos de oveja madurados en cava • Pasturas de Tandil</p>
            </div>
            
            <div className="divide-y divide-charcoal/10 border-t border-b border-charcoal/10">
              {cards.map((card, index) => (
                <div
                  key={card.id}
                  className="group flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-8 py-4 sm:py-6 text-left transition-colors hover:bg-white/50 px-3 sm:px-4 rounded-xl"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div 
                    className="flex-1 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8 cursor-pointer"
                    onClick={() => {
                      setViewMode("stack");
                      snapToCard(index);
                    }}
                  >
                    <span className="w-auto sm:w-40 shrink-0 text-[10px] font-bold uppercase tracking-[0.15em] text-[#C9A84C]">
                      {card.maturationMonths}
                    </span>
                    <div className="min-w-0 sm:w-64 shrink-0">
                      <span className="font-light uppercase tracking-wide text-base sm:text-lg text-charcoal block">
                        {card.title}
                      </span>
                      <span className="text-[10px] text-charcoal/40 block uppercase tracking-wider">
                        {card.milkType}
                      </span>
                    </div>
                    <span className="min-w-0 flex-1 text-xs sm:text-sm text-charcoal/60 font-light line-clamp-2 sm:line-clamp-1">
                      {card.subtitle}
                    </span>
                  </div>

                  <a
                    href={`https://wa.me/5491132554757?text=${encodeURIComponent(`¡Hola! Estoy interesado en el queso ${card.title} (${card.maturationMonths}) que vi en su sitio web. ¿Me dirías precio y disponibilidad?`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="self-start sm:self-center inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20ba5a] px-4 py-2 rounded-full transition-colors flex-shrink-0 shadow-sm"
                  >
                    <AppIcon name="WhatsApp" size={14} className="text-white" />
                    <span>Consultar</span>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Floating preview image (Desktop) */}
          {hoveredIndex !== null && (
            <div
              className="pointer-events-none fixed z-50 overflow-hidden shadow-2xl rounded-2xl bg-white p-4 transition-opacity duration-200 hidden md:block"
              style={{
                left: mousePos.x + 20,
                top: mousePos.y - 120,
                width: 250,
                height: 250,
              }}
            >
              <div className="w-full h-full relative bg-cream/40 rounded-xl flex items-center justify-center p-4">
                <AppImage
                  src={cards[hoveredIndex].image || "/placeholder.svg"}
                  alt={cards[hoveredIndex].title}
                  fill
                  className="object-contain drop-shadow-xl"
                />
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

'use client';

import React, { useState, useRef, useEffect } from "react";
import AppImage from "@/components/ui/AppImage";
import { ArchiveBoxIcon, ListBulletIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

interface Card {
  id: string;
  title: string;
  subtitle: string;
  region: string;
  timelineLabel: string;
  image: string;
  imageAlt: string;
  droughtTolerance: string;
}

const cards: Card[] = [
  {
    id: 'cul-001',
    title: 'Camembert de Oveja',
    region: 'Elaboración artesanal',
    subtitle: 'Considerado la vedette de la casa. Un queso de pasta blanda con corteza enmohecida blanca, elaborado 100% con leche de oveja frisona.',
    timelineLabel: 'Camembert',
    droughtTolerance: 'Punto óptimo',
    image: '/assets/Quesos%20Zampa/producto_3.png',
    imageAlt: 'Queso Camembert de oveja Zampa en plato'
  },
  {
    id: 'cul-002',
    title: 'Queso Pecorino',
    region: 'Guarda en cava',
    subtitle: 'El gran desafío técnico y orgullo de nuestro tambo. Madurado lentamente en cava para desarrollar un sabor robusto y notas herbales.',
    timelineLabel: 'Pecorino',
    droughtTolerance: '9 a 12 meses',
    image: '/assets/Quesos%20Zampa/pecorino.jpeg',
    imageAlt: 'Queso Pecorino Zampa madurado rústico'
  },
  {
    id: 'cul-003',
    title: 'Brie de Oveja',
    region: 'Tradición pasta blanda',
    subtitle: 'De estilo clásico francés y corteza aterciopelada blanca. Sumamente cremoso y untuoso con matices de sabor más complejos.',
    timelineLabel: 'Brie',
    droughtTolerance: 'Pasta blanda',
    image: '/assets/Quesos%20Zampa/producto_2.png',
    imageAlt: 'Queso Brie de oveja Zampa cortado'
  },
  {
    id: 'cul-004',
    title: 'Manchego Artesanal',
    region: 'Receta tradicional',
    subtitle: 'Inspirado en la gran tradición española. Resalta el dulzor natural y los sutiles matices herbales de nuestras pasturas.',
    timelineLabel: 'Manchego',
    droughtTolerance: 'Maduración prolongada',
    image: '/assets/Quesos%20Zampa/producto_1.png',
    imageAlt: 'Queso Manchego Zampa artesanal'
  },
  {
    id: 'cul-005',
    title: 'Provolone de Oveja',
    region: 'Pasta hilada',
    subtitle: 'Variedad de origen mediterráneo adaptada al perfil graso y rico de la leche ovina. Presenta una textura elástica.',
    timelineLabel: 'Provolone',
    droughtTolerance: '3 a 6 meses',
    image: '/assets/Quesos%20Zampa/tipos%20de%20quesos.jpg',
    imageAlt: 'Cortes de queso Provolone Zampa'
  },
  {
    id: 'cul-006',
    title: 'Queso Ahumado',
    region: 'Ahumado natural',
    subtitle: 'Queso de autor sometido a un ahumado natural lento que le otorga una distintiva corteza color caramelo.',
    timelineLabel: 'Ahumado',
    droughtTolerance: 'Ahumado lento',
    image: '/assets/Quesos%20Zampa/IMG_9824.JPG',
    imageAlt: 'Queso Ahumado artesanal Zampa'
  }
];

export default function ProductTimeMachine() {
  const [position, setPosition] = useState(0);
  const [viewMode, setViewMode] = useState<"stack" | "list">("stack");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (e: WheelEvent) => {
    if (viewMode !== "stack") return;
    e.preventDefault();

    const scrollSensitivity = 0.008;
    const delta = e.deltaY * scrollSensitivity;

    setPosition((prev) => {
      const newPosition = prev + delta;
      return Math.max(0, Math.min(cards.length - 1, newPosition));
    });
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
    setPosition(index);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const activeIndex = Math.round(position);

  return (
    <div
      ref={containerRef}
      className="relative min-h-[90vh] w-full overflow-hidden bg-cream font-urbanist pt-12 pb-24"
      onMouseMove={handleMouseMove}
    >
      {/* Header Navigation */}
      <div className="absolute right-6 top-6 z-50 flex items-center gap-1 rounded-xl border border-charcoal/10 bg-white/80 p-1 shadow-sm backdrop-blur-md">
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
          {/* Cards Stack */}
          <div className="absolute inset-0 flex items-center justify-center mt-12" style={{ perspective: "1500px" }}>
            <div className="relative h-[650px] w-[90%] max-w-[850px]" style={{ transformStyle: "preserve-3d" }}>
              {[...cards].reverse().map((card, reverseIndex) => {
                const index = cards.length - 1 - reverseIndex;
                const distanceFromActive = index - position;

                if (distanceFromActive < -1.5 || distanceFromActive > 5) {
                  return null;
                }

                const isBehind = distanceFromActive > 0;
                const isInFront = distanceFromActive < 0;

                const translateZ = distanceFromActive * -80;
                const translateY = distanceFromActive * -40;
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
                      transition: "transform 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.2s ease-out",
                      pointerEvents: Math.abs(distanceFromActive) < 0.5 ? "auto" : "none",
                    }}
                    onClick={() => handleTimelineClick(index)}
                  >
                    <div className="h-full w-full overflow-hidden bg-white/95 backdrop-blur-sm shadow-2xl rounded-3xl border border-charcoal/5 flex flex-col md:flex-row">
                      
                      {/* Card Image */}
                      <div className="relative w-full md:w-[45%] h-64 md:h-full overflow-hidden bg-cream/50 flex items-center justify-center p-8">
                        <div className="relative w-full h-full group">
                          <AppImage
                            src={card.image || "/placeholder.svg"}
                            alt={card.title}
                            fill
                            className="object-contain drop-shadow-2xl transition-transform duration-700 group-hover:scale-105"
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

                      {/* Card Content */}
                      <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
                        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-charcoal/40 mb-3 block">
                          {card.region}
                        </span>
                        <h2 className="text-3xl md:text-5xl font-light uppercase tracking-wide text-charcoal leading-tight">
                          {card.title}
                        </h2>
                        
                        <div className="w-12 h-px bg-[#C9A84C]/50 my-6"></div>
                        
                        <p className="text-base md:text-lg text-charcoal/70 font-light leading-relaxed mb-8">
                          {card.subtitle}
                        </p>
                        
                        <div className="mt-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                          <div>
                            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-charcoal/40 mb-1 block">Curación</span>
                            <span className="text-sm font-medium text-charcoal uppercase tracking-wider">{card.droughtTolerance}</span>
                          </div>
                          
                          <a 
                            href={`https://wa.me/5491132554757?text=${encodeURIComponent(`¡Hola! Estoy interesado en el queso ${card.title} que vi en su sitio web. ¿Me dirías precio y disponibilidad?`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-white bg-charcoal px-6 py-3 rounded-full hover:bg-[#C9A84C] transition-colors duration-300 pointer-events-auto"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Consultar
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Timeline */}
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
                  <span
                    className={`text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 ${
                      isActive ? "text-[#C9A84C]" : "text-charcoal/30 group-hover:text-charcoal/60"
                    }`}
                  >
                    {card.timelineLabel}
                  </span>
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

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-[0.2em] text-charcoal/30 animate-pulse">
            Desliza para explorar
          </div>
        </>
      ) : (
        <>
          <div className="mx-auto max-w-5xl px-6 pb-24 pt-24 min-h-screen">
            <div className="mb-16 text-center">
              <h2 className="text-4xl font-light uppercase tracking-wide text-charcoal mb-4">Catálogo Completo</h2>
              <p className="text-charcoal/60 font-light">Nuestra selección de quesos de oveja</p>
            </div>
            
            <div className="divide-y divide-charcoal/10 border-t border-b border-charcoal/10">
              {cards.map((card, index) => (
                <button
                  key={card.id}
                  className="group flex w-full flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 py-6 text-left transition-colors hover:bg-white/40 px-4 rounded-xl -mx-4"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => {
                    setViewMode("stack");
                    setPosition(index);
                  }}
                >
                  <span className="w-32 shrink-0 text-[10px] font-bold uppercase tracking-[0.2em] text-[#C9A84C]">
                    {card.droughtTolerance}
                  </span>
                  <span className="min-w-0 shrink-0 font-light uppercase tracking-wide text-lg text-charcoal sm:w-64">
                    {card.title}
                  </span>
                  <span className="min-w-0 flex-1 text-sm text-charcoal/60 font-light line-clamp-2 sm:line-clamp-1">{card.subtitle}</span>
                  <ChevronRightIcon className="hidden sm:block h-5 w-5 shrink-0 text-charcoal/20 transition-transform group-hover:translate-x-1 group-hover:text-[#C9A84C]" />
                </button>
              ))}
            </div>
          </div>

          {/* Floating preview image */}
          {hoveredIndex !== null && (
            <div
              className="pointer-events-none fixed z-50 overflow-hidden shadow-2xl rounded-2xl bg-white p-4 transition-opacity duration-200 hidden md:block"
              style={{
                left: mousePos.x + 20,
                top: mousePos.y - 120,
                width: 240,
                height: 240,
              }}
            >
              <div className="w-full h-full relative bg-cream/30 rounded-xl flex items-center justify-center">
                <AppImage
                  src={cards[hoveredIndex].image || "/placeholder.svg"}
                  alt={cards[hoveredIndex].title}
                  fill
                  className="object-contain p-4 drop-shadow-xl"
                />
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

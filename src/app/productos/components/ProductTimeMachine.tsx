'use client';

import React, { useState, useRef, useEffect } from "react";
import AppImage from "@/components/ui/AppImage";
import { ArchiveBoxIcon, ListBulletIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

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
    maturationMonths: 'Punto óptimo (4 a 6 semanas)',
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
    maturationMonths: '3 a 5 Semanas de Cuidado',
    tastingNotes: 'Matices complejos, cremosidad envolvente y notas de mantequilla rica.',
    milkType: 'Leche Cruda A2 de Oveja',
    timelineLabel: 'Brie',
    image: '/assets/Quesos%20Zampa/producto_2.png',
    imageAlt: 'Queso Brie de oveja Zampa cortado'
  },
  {
    id: 'cul-004',
    title: 'Manchego Artesanal',
    region: 'Receta Tradicional de Pasta Firme',
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
    maturationMonths: '3 a 6 Meses de Maduración',
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
    maturationMonths: 'Ahumado Lento y Maduración',
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
      className="relative min-h-[95vh] w-full overflow-hidden bg-cream font-urbanist pt-12 pb-24"
      onMouseMove={handleMouseMove}
    >
      {/* Header Navigation Controls */}
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
          <div className="absolute inset-0 flex items-center justify-center mt-10" style={{ perspective: "1500px" }}>
            <div className="relative h-[680px] w-[92%] max-w-[900px]" style={{ transformStyle: "preserve-3d" }}>
              {[...cards].reverse().map((card, reverseIndex) => {
                const index = cards.length - 1 - reverseIndex;
                const distanceFromActive = index - position;

                if (distanceFromActive < -1.5 || distanceFromActive > 5) {
                  return null;
                }

                const isBehind = distanceFromActive > 0;
                const isInFront = distanceFromActive < 0;

                const translateZ = distanceFromActive * -85;
                const translateY = distanceFromActive * -42;
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
                      
                      {/* Card Image Side */}
                      <div className="relative w-full md:w-[44%] h-64 md:h-full overflow-hidden bg-cream/60 flex items-center justify-center p-8 border-b md:border-b-0 md:border-r border-charcoal/5">
                        <div className="relative w-full h-full group">
                          <AppImage
                            src={card.image || "/placeholder.svg"}
                            alt={card.imageAlt}
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

                      {/* Card Content Side */}
                      <div className="flex-1 p-8 md:p-10 flex flex-col justify-between overflow-y-auto">
                        <div>
                          {/* Region / Category Badge */}
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C9A84C]">
                              {card.region}
                            </span>
                            <span className="text-[9px] font-semibold uppercase tracking-wider text-charcoal/40 bg-charcoal/5 px-2.5 py-1 rounded-full">
                              {card.milkType}
                            </span>
                          </div>

                          {/* Title */}
                          <h2 className="text-2xl md:text-4xl font-light uppercase tracking-wide text-charcoal leading-tight">
                            {card.title}
                          </h2>

                          {/* SVG Flourish */}
                          <CheeseFlourish className="w-16 h-6 text-[#C9A84C]/70 my-2" />

                          {/* Subtitle / Description */}
                          <p className="text-sm md:text-base text-charcoal/70 font-light leading-relaxed mb-6">
                            {card.subtitle}
                          </p>
                        </div>

                        {/* Technical Details & Cata Block */}
                        <div className="space-y-4 pt-4 border-t border-charcoal/10">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                            <div className="bg-cream/40 p-3 rounded-xl border border-charcoal/5">
                              <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-charcoal/50 mb-0.5 block">
                                Maduración en Cava
                              </span>
                              <span className="text-xs font-semibold text-charcoal uppercase tracking-wider">
                                {card.maturationMonths}
                              </span>
                            </div>

                            <div className="bg-cream/40 p-3 rounded-xl border border-charcoal/5">
                              <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-charcoal/50 mb-0.5 block">
                                Origen
                              </span>
                              <span className="text-xs font-semibold text-charcoal uppercase tracking-wider">
                                Leche A2 • Pasturas Tandil
                              </span>
                            </div>
                          </div>

                          <div className="bg-white/60 p-3 rounded-xl border border-charcoal/5">
                            <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#C9A84C] mb-1 block">
                              Notas de Cata
                            </span>
                            <p className="text-xs text-charcoal/80 font-light italic leading-snug">
                              "{card.tastingNotes}"
                            </p>
                          </div>
                        </div>

                        {/* Action CTA */}
                        <div className="pt-5 mt-2 flex items-center justify-end">
                          <a 
                            href={`https://wa.me/5491132554757?text=${encodeURIComponent(`¡Hola! Estoy interesado en el queso ${card.title} (${card.maturationMonths}) que vi en su sitio web. ¿Me dirías precio y disponibilidad?`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-white bg-charcoal px-7 py-3.5 rounded-full hover:bg-[#C9A84C] transition-colors duration-300 pointer-events-auto shadow-md"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Consultar por WhatsApp
                          </a>
                        </div>

                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Timeline Navigation Bar */}
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

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-[0.2em] text-charcoal/40 animate-pulse">
            Desliza para explorar los quesos
          </div>
        </>
      ) : (
        <>
          {/* List View */}
          <div className="mx-auto max-w-5xl px-6 pb-24 pt-24 min-h-screen">
            <div className="mb-16 text-center">
              <h2 className="text-4xl font-light uppercase tracking-wide text-charcoal mb-2">Catálogo de Autor</h2>
              <CheeseFlourish className="w-20 h-6 text-[#C9A84C] mx-auto mb-3" />
              <p className="text-charcoal/60 font-light">Quesos de oveja madurados en cava • Pasturas de Tandil</p>
            </div>
            
            <div className="divide-y divide-charcoal/10 border-t border-b border-charcoal/10">
              {cards.map((card, index) => (
                <button
                  key={card.id}
                  className="group flex w-full flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 py-6 text-left transition-colors hover:bg-white/50 px-4 rounded-xl -mx-4"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => {
                    setViewMode("stack");
                    setPosition(index);
                  }}
                >
                  <span className="w-40 shrink-0 text-[10px] font-bold uppercase tracking-[0.15em] text-[#C9A84C]">
                    {card.maturationMonths}
                  </span>
                  <div className="min-w-0 sm:w-64 shrink-0">
                    <span className="font-light uppercase tracking-wide text-lg text-charcoal block">
                      {card.title}
                    </span>
                    <span className="text-[10px] text-charcoal/40 block uppercase tracking-wider">
                      {card.milkType}
                    </span>
                  </div>
                  <span className="min-w-0 flex-1 text-sm text-charcoal/60 font-light line-clamp-2 sm:line-clamp-1">
                    {card.subtitle}
                  </span>
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

'use client';
import { useState, useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface TimelineEntry {
  year: string;
  era: string;
  title: string;
  description: string;
  detail: string;
  yieldNote: string;
  regionNote: string;
  thumb: string;
  thumbAlt: string;
  filter?: string;
}

const entries: TimelineEntry[] = [
{
  year: '2018',
  era: 'El Origen',
  title: 'El Comienzo del Tambo',
  description: 'Adquisición de las primeras ovejas frisonas y puesta en marcha del tambo en Napaleofú.',
  detail: 'Tras asistir a una charla sobre tambos ovinos en Tandil, Juan Cruz, Isabel y Gonzalo decidieron emprender en el campo. Comenzaron con la compra de 40 borregas frisonas de aptitud lechera, iniciando así un camino de aprendizaje constante y manejo de pasturas bajo el nombre de Ovinos Zampa.',
  yieldNote: 'Rodeo inicial: 40 borregas ovinas frisonas seleccionadas.',
  regionNote: 'Establecimiento en Napaleofú, Buenos Aires (Ruta 226).',
  thumb: "/assets/Quesos%20Zampa/07B73847-614E-4FDC-B7AF-F639064C64CB.jpg",
  thumbAlt: 'Fotografía del rebaño y pasturas de la quesería',
  filter: 'grayscale(10%) contrast(1.05)'
},
{
  year: '2020',
  era: 'Quesería',
  title: 'La Transformación en Quesos',
  description: 'Decisión estratégica de integrar la cadena y elaborar quesos artesanales propios.',
  detail: 'Para capturar mayor valor agregado, Zampa dejó de vender leche cruda a terceros y comenzó a procesarla en quesos de autor. Juan Cruz, con su formación gastronómica, desarrolló recetas inspiradas en las tradiciones francesa, italiana y española, elaborando quesos con leche fresca del mismo día.',
  yieldNote: 'Integración: Elaboración diaria de lunes a lunes con leche fresca.',
  regionNote: 'Desarrollo de las primeras recetas de Camembert y Pecorino.',
  thumb: "/assets/Quesos%20Zampa/68C50477-1C39-48B6-86FE-640DEDCA65B1.jpg",
  thumbAlt: 'Quesos madurando en estanterías tradicionales'
},
{
  year: '2023',
  era: 'Crecimiento',
  title: 'Reconocimiento y Expansión',
  description: 'Los quesos Zampa llegan a los locales gourmet más exigentes de Tandil y la zona.',
  detail: 'La excelente calidad láctica de la leche de oveja frisona consolidó a Zampa en el mercado regional. Dietéticas, fiambrerías gourmet y vinerías seleccionadas en Tandil comenzaron a ofrecer nuestras variedades, construyendo una reputación de sabor único y cuidado artesanal.',
  yieldNote: 'Canal Gourmet: Distribución consolidada en locales seleccionados.',
  regionNote: 'Presencia regional fuerte en Tandil, Napaleofú y la zona.',
  thumb: "/assets/Quesos%20Zampa/6de54990-a007-4692-8898-b1dda1296784.jpg",
  thumbAlt: 'Presentación de quesos en almacén regional'
},
{
  year: '2026',
  era: 'Presente',
  title: 'Cadena Completa y Nuevos Desafíos',
  description: 'Quesería habilitada en el propio campo y enfoque en maduraciones prolongadas.',
  detail: 'Con una majada de 100 ovejas y la quesería a solo 100 metros del tambo, controlamos cada paso del proceso sin intermediarios. Nuestros próximos grandes hitos son abrir un local exclusivo de la marca en Tandil y consolidar nuestro Pecorino de larga maduración (9 a 12 meses en cava).',
  yieldNote: 'Producción actual: ~100 kg de queso artesanal por semana.',
  regionNote: 'Proyecto futuro: Local propio exclusivo de Quesos Zampa en Tandil.',
  thumb: "/assets/Quesos%20Zampa/IMG_9824.JPG",
  thumbAlt: 'Queso madurado de oveja Zampa en cava'
}];


export default function TimelineGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {if (entry.isIntersecting) setVisible(true);},
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const toggle = (i: number) => setActiveIndex((prev) => prev === i ? null : i);

  return (
    <section id="timeline" ref={sectionRef} className="py-24 lg:py-32 bg-limestone px-6 lg:px-12 relative overflow-hidden">
      {/* Wheat rule top */}
      <div className="wheat-rule mb-16" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          className={`mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          <p className="text-xs font-medium uppercase tracking-widest text-teal mb-3">Nuestra Trayectoria</p>
          <h2 className="font-fraunces text-4xl lg:text-5xl font-semibold text-umber-dark leading-tight max-w-2xl">
            Un Tambo Ovino Familiar,<br />
            <em className="font-light italic">Pasión de Origen en Cada Queso.</em>
          </h2>
          <p className="mt-5 text-umber-light font-light text-lg max-w-xl leading-relaxed">
            Cada hito representa el esfuerzo de nuestro equipo para perfeccionar el queso de oveja artesanal. Haz clic en cualquier época para conocer más.
          </p>
        </div>

        {/* Timeline entries */}
        <div className="space-y-0">
          {entries.map((entry, i) =>
          <div key={entry.year} className={`timeline-item border-b border-wheat/25 last:border-b-0 ${activeIndex === i ? 'active' : ''}`}>
              {/* Row trigger */}
              <button
              onClick={() => toggle(i)}
              className="w-full flex items-start gap-6 py-7 text-left group hover:bg-limestone-soft/60 rounded-xl px-4 -mx-4 transition-colors duration-200"
              aria-expanded={activeIndex === i}>
              
                {/* Year + dot */}
                <div className="flex items-center gap-3 flex-shrink-0 w-28">
                  <div className="timeline-dot" />
                  <span className="font-fraunces text-2xl font-semibold text-wheat">{entry.year}</span>
                </div>

                {/* Era badge */}
                <span className="hidden sm:inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-wheat-muted text-umber border border-wheat/30 self-center flex-shrink-0 w-28 justify-center">
                  {entry.era}
                </span>

                {/* Title */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-fraunces text-xl font-medium text-umber-dark group-hover:text-teal transition-colors duration-200">
                    {entry.title}
                  </h3>
                  <p className="text-sm text-umber-light font-light mt-1 leading-relaxed line-clamp-1">
                    {entry.description}
                  </p>
                </div>

                {/* Thumb */}
                <div className="w-20 h-14 rounded-xl overflow-hidden flex-shrink-0 timeline-thumb transition-transform duration-300">
                  <AppImage
                  src={entry.thumb}
                  alt={entry.thumbAlt}
                  width={80}
                  height={56}
                  className="w-full h-full object-cover"
                  style={entry.filter ? { filter: entry.filter } : undefined} />
                
                </div>

                {/* Chevron */}
                <div className={`flex-shrink-0 self-center transition-transform duration-300 ${activeIndex === i ? 'rotate-180' : ''}`}>
                  <Icon name="ChevronDownIcon" size={20} variant="outline" className="text-teal" />
                </div>
              </button>

              {/* Expandable panel */}
              <div className={`timeline-panel ${activeIndex === i ? 'open' : ''}`}>
                <div className="pb-8 px-4 grid grid-cols-1 lg:grid-cols-12 gap-8">
                  {/* Full image */}
                  <div className="lg:col-span-4 rounded-3xl overflow-hidden aspect-[4/3]">
                    <AppImage
                    src={entry.thumb}
                    alt={entry.thumbAlt}
                    width={600}
                    height={450}
                    className="w-full h-full object-cover"
                    style={entry.filter ? { filter: entry.filter } : undefined} />
                  
                  </div>

                  {/* Narrative */}
                  <div className="lg:col-span-5 flex flex-col gap-5">
                    <p className="text-umber font-light leading-relaxed">{entry.detail}</p>

                    {/* Teal link (first appearance of "Explore Available Cultivars" CTA) */}
                    {i === 0 &&
                  <a href="#cultivars" className="teal-link text-sm font-medium self-start">
                        Ver Variedades Disponibles →
                      </a>
                  }
                  </div>

                  {/* Data panel */}
                  <div className="lg:col-span-3 flex flex-col gap-4">
                    <div className="p-4 bg-cream rounded-2xl border border-wheat/25">
                      <p className="text-xs font-medium uppercase tracking-widest text-teal mb-2">Datos de Lote</p>
                      <p className="text-sm text-umber font-light leading-snug">{entry.yieldNote}</p>
                    </div>
                    <div className="p-4 bg-cream rounded-2xl border border-wheat/25">
                      <p className="text-xs font-medium uppercase tracking-widest text-teal mb-2">Alcance de Distribución</p>
                      <p className="text-sm text-umber font-light leading-snug">{entry.regionNote}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Wheat rule bottom */}
      <div className="wheat-rule mt-16" />
    </section>);

}
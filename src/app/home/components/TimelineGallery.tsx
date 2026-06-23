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
  year: '1984',
  era: 'Fundación',
  title: 'Primeros Pasos y Pasturas',
  description: 'Introducción de las primeras ovejas seleccionadas en pasturas locales para iniciar el rebaño original.',
  detail: 'Los fundadores comenzaron con un pequeño grupo de ovejas criadas con métodos de pastoreo natural. El objetivo era elaborar quesos con una identidad única, respetando los ciclos climáticos y el suelo. Las recetas originales de esta época sentaron las bases para nuestro característico sabor rústico y duradero.',
  yieldNote: 'Lote inicial: 50 ovejas seleccionadas para un pastoreo de alta adaptabilidad.',
  regionNote: 'Zona de origen: Pasturas originales de la quesería.',
  thumb: "/assets/Quesos%20Zampa/07B73847-614E-4FDC-B7AF-F639064C64CB.jpg",
  thumbAlt: 'Fotografía histórica del rebaño original y pasturas de la quesería, 1984',
  filter: 'grayscale(100%) contrast(1.05)'
},
{
  year: '1997',
  era: 'Crecimiento',
  title: 'La Primera Quesería Tradicional',
  description: 'Construcción de la planta de elaboración artesanal y la primera cámara de maduración tradicional.',
  detail: 'Con el crecimiento del rebaño, se inauguró una instalación dedicada a la elaboración y control de temperatura de maduración. Esto permitió estandarizar la receta de nuestro queso Pecorino y aumentar la producción manteniendo la fermentación natural de la leche de oveja sin aditivos.',
  yieldNote: 'Capacidad de maduración: Consolidación de la receta del Pecorino tradicional.',
  regionNote: 'Expansión: Distribución ampliada a comunidades vecinas.',
  thumb: "/assets/Quesos%20Zampa/68C50477-1C39-48B6-86FE-640DEDCA65B1.jpg",
  thumbAlt: 'Cámara de maduración tradicional con estantes de madera y quesos curándose'
},
{
  year: '2009',
  era: 'Reconocimiento',
  title: 'Distribución en Tiendas Especializadas',
  description: 'Los quesos Zampa llegan a los primeros almacenes gourmet y tiendas de especialidad en la región.',
  detail: 'La reputación del sabor curado y el cuidado artesanal abrió las puertas de los mercados más exigentes. Se estableció un sistema de distribución enfocado en mantener la cadena de frío y preservar las cualidades del queso desde el campo hasta la mesa de los consumidores.',
  yieldNote: 'Presencia de marca: Primeras fiambrerías gourmet y restaurantes de autor selectos.',
  regionNote: 'Distribución regional en las principales tiendas gourmet de la provincia.',
  thumb: "/assets/Quesos%20Zampa/6de54990-a007-4692-8898-b1dda1296784.jpg",
  thumbAlt: 'Presentación de quesos Zampa en un mercado gourmet regional'
},
{
  year: '2019',
  era: 'Sostenibilidad',
  title: 'Pastoreo Rotativo y Bienestar Animal',
  description: 'El bienestar del rebaño es la base del sabor. Implementación de un manejo de pastura rotativa.',
  detail: 'Estudios en nuestros suelos nos impulsaron a adoptar protocolos de regeneración del pasto. El pastoreo rotativo asegura que las ovejas tengan alimento de la más alta calidad y que el suelo se recupere de forma natural, aumentando el contenido de nutrientes en la leche que luego se transmite a nuestros quesos.',
  yieldNote: 'Sostenibilidad: 100% de pasturas bajo manejo rotativo y regenerativo.',
  regionNote: 'Certificación de prácticas de pastoreo respetuosas con el medio ambiente.',
  thumb: "/assets/Quesos%20Zampa/BAB4C1FD-5368-4434-ADE4-498A3AE4D8C6.jpg",
  thumbAlt: 'Vista de ovejas pastando en el campo bajo el protocolo de pastoreo rotativo'
},
{
  year: '2026',
  era: 'Presente',
  title: 'Tradición y Nuevas Variedades',
  description: 'Maduración de recetas y lanzamiento de quesos de autor de edición limitada.',
  detail: 'Con más de 40 años perfeccionando el arte de la quesería artesanal de oveja, combinamos la experiencia de tres generaciones con técnicas modernas de análisis de calidad. Seguimos empujando los límites de la maduración para ofrecer quesos con texturas y matices únicos en cada temporada.',
  yieldNote: 'Producción actual: 23 lotes anuales de maduración prolongada y quesos de autor.',
  regionNote: 'Mercado de exportación y tiendas seleccionadas a nivel nacional.',
  thumb: "/assets/Quesos%20Zampa/IMG_9824.JPG",
  thumbAlt: 'Corteza y textura detallada de un queso madurado Zampa en 2026'
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
            Cuatro Décadas de Tradición,<br />
            <em className="font-light italic">Un Legado Familiar en Cada Lote.</em>
          </h2>
          <p className="mt-5 text-umber-light font-light text-lg max-w-xl leading-relaxed">
            Cada etapa representa el esfuerzo de nuestra familia para perfeccionar el queso de oveja artesanal. Haz clic en cualquier época para leer más.
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
                        Explore Available Cultivars →
                      </a>
                  }
                  </div>

                  {/* Data panel */}
                  <div className="lg:col-span-3 flex flex-col gap-4">
                    <div className="p-4 bg-cream rounded-2xl border border-wheat/25">
                      <p className="text-xs font-medium uppercase tracking-widest text-teal mb-2">Yield Data</p>
                      <p className="text-sm text-umber font-light leading-snug">{entry.yieldNote}</p>
                    </div>
                    <div className="p-4 bg-cream rounded-2xl border border-wheat/25">
                      <p className="text-xs font-medium uppercase tracking-widest text-teal mb-2">Regional Impact</p>
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
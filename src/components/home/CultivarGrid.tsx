'use client';
import { useEffect, useRef, useState } from 'react';
import AppImage from '@/components/ui/AppImage';

interface Cultivar {
  id: string;
  name: string;
  region: string;
  yieldGain: string;
  droughtTolerance: string; // Used for maturation info
  image: string;
  imageAlt: string;
}

const cultivars: Cultivar[] = [
  {
    id: 'cul-001',
    name: 'Camembert de Oveja',
    region: 'elaboración artesanal en Napaleofú',
    yieldGain: 'Considerado la vedette de la casa. Un queso de pasta blanda con corteza enmohecida blanca, elaborado 100% con leche de oveja frisona fresca del día. Ofrece una textura interior untuosa y fundente con aromas lácticos intensos y complejos de nivel gastronómico premium.',
    droughtTolerance: 'Punto óptimo de maduración',
    image: '/assets/Quesos%20Zampa/productos/producto_Camembert.png',
    imageAlt: 'Queso Camembert de oveja Zampa en plato'
  },
  {
    id: 'cul-002',
    name: 'Queso Pecorino Zampa',
    region: 'guarda prolongada en cava ovinos',
    yieldGain: 'El gran desafío técnico y orgullo de nuestro tambo. Inspirado en la tradición italiana, es un queso de pasta dura o semidura elaborado con leche pasteurizada y madurado lentamente en cava para desarrollar un sabor robusto, notas herbales y una textura firme y quebradiza.',
    droughtTolerance: '9 a 12 meses en cava',
    image: '/assets/Quesos%20Zampa/productos/producto_pecorino.png',
    imageAlt: 'Queso Pecorino Zampa madurado rústico'
  },
  {
    id: 'cul-003',
    name: 'Brie de Oveja',
    region: 'elaboración tradicional de pasta blanda',
    yieldGain: 'De estilo clásico francés y corteza aterciopelada blanca. El Brie de oveja Zampa aprovecha la gran riqueza grasa de la leche frisona, logrando un queso sumamente cremoso y untuoso con matices de sabor más complejos y redondos que la versión vacuna.',
    droughtTolerance: 'Pasta blanda madurada',
    image: '/assets/Quesos%20Zampa/productos/producto_brie.png',
    imageAlt: 'Queso Brie de oveja Zampa cortado'
  },
  {
    id: 'cul-004',
    name: 'Manchego Artesanal',
    region: 'receta tradicional de pasta firme',
    yieldGain: 'Inspirado en la gran tradición española. Un queso de pasta semidura o dura que resalta el dulzor natural y los sutiles matices herbales de nuestras pasturas de Napaleofú. Su textura compacta y sabor limpio lo hacen el compañero ideal de fiambrerías finas.',
    droughtTolerance: 'Maduración prolongada',
    image: '/assets/Quesos%20Zampa/productos/producto_machego.png',
    imageAlt: 'Queso Manchego Zampa artesanal'
  },
  {
    id: 'cul-005',
    name: 'Provolone de Oveja',
    region: 'pasta hilada y semidura',
    yieldGain: 'Variedad de origen mediterráneo adaptada al perfil graso y rico de la leche ovina. Presenta una textura elástica y un sabor moderado que se vuelve más picante y redondo con el tiempo de maduración, ideal para tablas de quesos premium.',
    droughtTolerance: '3 a 6 meses de maduración',
    image: '/assets/Quesos%20Zampa/productos/producto_provolone.png',
    imageAlt: 'Cortes de queso Provolone Zampa'
  },
  {
    id: 'cul-006',
    name: 'Queso Ahumado',
    region: 'ahumado natural con maderas selectas',
    yieldGain: 'Queso de autor sometido a un ahumado natural lento que le otorga una distintiva corteza color caramelo. Este proceso añade notas ahumadas profundas que contrastan deliciosamente con la cremosidad láctica de la leche de oveja, logrando una experiencia gourmet única.',
    droughtTolerance: 'Maduración y ahumado lento',
    image: '/assets/Quesos%20Zampa/productos/producto_ahumado.png',
    imageAlt: 'Queso Ahumado artesanal Zampa'
  }
];

export default function CultivarGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="cultivars" ref={sectionRef} className="py-24 lg:py-32 bg-cream px-6 lg:px-12 relative overflow-hidden">
      {/* Wheat rule top */}
      <div className="wheat-rule mb-16" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          className={`mb-24 text-center transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="font-urbanist text-[10px] font-bold uppercase tracking-[0.25em] text-charcoal/60 mb-4">Nuestra Selección</p>
          <h2 className="font-urbanist text-4xl lg:text-6xl font-light text-charcoal leading-tight tracking-[0.06em] max-w-4xl mx-auto uppercase">
            Variedades Artesanales<br />
            Elaboradas con Leche 100% de Oveja
          </h2>
        </div>

        {/* List of Products */}
        <div className="space-y-16 lg:space-y-20">
          {cultivars.map((cultivar, index) => (
            <div
              key={cultivar.id}
              className={`group flex flex-col bg-white/60 border border-charcoal/[0.04] backdrop-blur-[2px] rounded-3xl p-8 lg:p-12 transition-all duration-1000 shadow-sm hover:shadow-md ${
                visible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-16'
              }`}
              style={{
                transitionDelay: visible ? `${index * 150}ms` : '0ms'
              }}>
              
              {/* Product Title + Swirl Flourish */}
              <div className="text-center mb-8 flex flex-col items-center">
                <h3 className="font-urbanist text-2xl lg:text-3xl font-light text-charcoal uppercase tracking-[0.08em]">
                  {cultivar.name}
                </h3>
                {/* SVG Vignette Flourish (Classic swirl and loops with diamond center) */}
                <svg className="w-16 h-8 text-charcoal/50 mt-3" viewBox="0 0 100 30" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M 50 15 C 35 15, 30 5, 20 5 C 10 5, 5 15, 12 18 C 18 20, 22 12, 15 10" />
                  <path d="M 50 15 C 65 15, 70 5, 80 5 C 90 5, 95 15, 88 18 C 82 20, 78 12, 85 10" />
                  <polygon points="50,11 53,15 50,19 47,15" fill="currentColor" />
                </svg>
              </div>

              {/* Product Content Row */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
                
                {/* Left: Description & Link */}
                <div className="flex flex-col gap-6 order-2 lg:order-1 text-left h-full justify-between">
                  <p className="text-charcoal/80 font-light text-sm lg:text-base leading-relaxed">
                    {cultivar.yieldGain}
                  </p>
                  
                  <div className="pt-4">
                    <a 
                      href={`https://wa.me/5491132554757?text=${encodeURIComponent(`¡Hola! Estoy interesado en el queso ${cultivar.name} que vi en su sitio web. ¿Me dirías precio y disponibilidad?`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2.5 h-11 sm:h-12 rounded-full bg-charcoal text-white font-bold text-[10px] sm:text-xs hover:bg-[#C9A84C] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.12)] tracking-[0.15em] uppercase px-6"
                    >
                      <span>Consultar por WhatsApp</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="w-4 h-4 text-white">
                        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Center: Image */}
                <div className="relative aspect-[4/3] sm:aspect-square max-w-sm sm:max-w-md mx-auto w-full order-1 lg:order-2 flex items-center justify-center p-2">
                  <AppImage
                    src={cultivar.image}
                    alt={cultivar.imageAlt}
                    width={600}
                    height={600}
                    className="w-full h-full object-contain drop-shadow-2xl scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Right: Technical Details */}
                <div className="flex flex-col justify-center gap-6 order-3 border-t lg:border-t-0 lg:border-l border-charcoal/10 pt-6 lg:pt-0 pl-0 lg:pl-12 text-left h-full">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-charcoal/40 mb-1 block">
                      Curación
                    </span>
                    <span className="text-lg font-light text-charcoal uppercase tracking-wider">
                      {cultivar.droughtTolerance}
                    </span>
                  </div>
                  
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-charcoal/40 mb-1 block">
                      Elaboración
                    </span>
                    <span className="text-sm text-charcoal/80 font-light leading-relaxed">
                      Leche pasteurizada de oveja, {cultivar.region}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-charcoal/40 mb-1 block">
                      Notas de Cata
                    </span>
                    <span className="text-sm text-charcoal/80 font-light leading-relaxed">
                      Aromas intensos, textura firme, sabor profundo y natural.
                    </span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Wheat rule bottom */}
      <div className="wheat-rule mt-32" />
    </section>
  );
}

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
    image: '/assets/Quesos%20Zampa/producto_3.png',
    imageAlt: 'Queso Camembert de oveja Zampa en plato'
  },
  {
    id: 'cul-002',
    name: 'Queso Pecorino Zampa',
    region: 'guarda prolongada en cava ovinos',
    yieldGain: 'El gran desafío técnico y orgullo de nuestro tambo. Inspirado en la tradición italiana, es un queso de pasta dura o semidura elaborado con leche cruda y madurado lentamente en cava para desarrollar un sabor robusto, notas herbales y una textura firme y quebradiza.',
    droughtTolerance: '9 a 12 meses en cava',
    image: '/assets/Quesos%20Zampa/pecorino.jpeg',
    imageAlt: 'Queso Pecorino Zampa madurado rústico'
  },
  {
    id: 'cul-003',
    name: 'Brie de Oveja',
    region: 'elaboración tradicional de pasta blanda',
    yieldGain: 'De estilo clásico francés y corteza aterciopelada blanca. El Brie de oveja Zampa aprovecha la gran riqueza grasa de la leche frisona, logrando un queso sumamente cremoso y untuoso con matices de sabor más complejos y redondos que la versión vacuna.',
    droughtTolerance: 'Pasta blanda madurada',
    image: '/assets/Quesos%20Zampa/producto_2.png',
    imageAlt: 'Queso Brie de oveja Zampa cortado'
  },
  {
    id: 'cul-004',
    name: 'Manchego Artesanal',
    region: 'receta tradicional de pasta firme',
    yieldGain: 'Inspirado en la gran tradición española. Un queso de pasta semidura o dura que resalta el dulzor natural y los sutiles matices herbales de nuestras pasturas de Napaleofú. Su textura compacta y sabor limpio lo hacen el compañero ideal de fiambrerías finas.',
    droughtTolerance: 'Maduración prolongada',
    image: '/assets/Quesos%20Zampa/producto_1.png',
    imageAlt: 'Queso Manchego Zampa artesanal'
  },
  {
    id: 'cul-005',
    name: 'Provolone de Oveja',
    region: 'pasta hilada y semidura',
    yieldGain: 'Variedad de origen mediterráneo adaptada al perfil graso y rico de la leche ovina. Presenta una textura elástica y un sabor moderado que se vuelve más picante y redondo con el tiempo de maduración, ideal para tablas de quesos premium.',
    droughtTolerance: '3 a 6 meses de maduración',
    image: '/assets/Quesos%20Zampa/tipos%20de%20quesos.jpg',
    imageAlt: 'Cortes de queso Provolone Zampa'
  },
  {
    id: 'cul-006',
    name: 'Queso Ahumado',
    region: 'ahumado natural con maderas selectas',
    yieldGain: 'Queso de autor sometido a un ahumado natural lento que le otorga una distintiva corteza color caramelo. Este proceso añade notas ahumadas profundas que contrastan deliciosamente con la cremosidad láctica de la leche de oveja, logrando una experiencia gourmet única.',
    droughtTolerance: 'Maduración y ahumado lento',
    image: '/assets/Quesos%20Zampa/IMG_9824.JPG',
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
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal mb-4">Nuestra Selección</p>
          <h2 className="font-fraunces text-4xl lg:text-6xl font-light text-umber-dark leading-tight max-w-4xl mx-auto">
            Variedades Artesanales<br />
            <em className="font-light italic text-umber-light">Elaboradas con Leche 100% de Oveja</em>
          </h2>
        </div>

        {/* List of Products */}
        <div className="space-y-32">
          {cultivars.map((cultivar, index) => (
            <div
              key={cultivar.id}
              className={`flex flex-col transition-all duration-1000 ${
                visible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-16'
              }`}
              style={{
                transitionDelay: visible ? `${index * 150}ms` : '0ms'
              }}>
              
              {/* Product Title */}
              <h3 className="font-fraunces text-3xl lg:text-5xl font-light text-charcoal uppercase tracking-wide mb-12">
                {cultivar.name}
              </h3>

              {/* Product Content Row */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-center">
                
                {/* Left: Description & Link */}
                <div className="flex flex-col gap-8 order-2 lg:order-1">
                  <p className="text-umber-light font-light text-base lg:text-lg leading-relaxed">
                    {cultivar.yieldGain}
                  </p>
                  
                  <a href="#" className="inline-flex items-center gap-4 text-base font-medium text-umber-dark hover:text-teal transition-colors duration-300 group mt-auto">
                    Descubre Más
                    <div className="w-12 h-px bg-umber-dark group-hover:bg-teal transition-colors duration-300" />
                  </a>
                </div>

                {/* Center: Image */}
                <div className="relative aspect-square max-w-sm mx-auto w-full order-1 lg:order-2 group">
                  <AppImage
                    src={cultivar.image}
                    alt={cultivar.imageAlt}
                    width={500}
                    height={500}
                    className="w-full h-full object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Right: Technical Details */}
                <div className="flex flex-col justify-center gap-6 order-3 border-l border-wheat/30 pl-8 lg:pl-12">
                  <div>
                    <span className="text-xs font-medium uppercase tracking-widest text-limestone-soft/0 text-umber-light/50 mb-1 block">
                      Curación:
                    </span>
                    <span className="font-fraunces text-xl font-light text-umber-dark uppercase tracking-wider">
                      {cultivar.droughtTolerance}
                    </span>
                  </div>
                  
                  <div>
                    <span className="text-xs font-medium uppercase tracking-widest text-umber-light/50 mb-1 block">
                      Elaboración:
                    </span>
                    <span className="text-base text-umber-dark font-light">
                      Leche cruda de oveja, {cultivar.region}
                    </span>
                  </div>

                  <div>
                    <span className="text-xs font-medium uppercase tracking-widest text-umber-light/50 mb-1 block">
                      Notas:
                    </span>
                    <span className="text-base text-umber-dark font-light">
                      Aromas intensos, textura firme, sabor profundo.
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

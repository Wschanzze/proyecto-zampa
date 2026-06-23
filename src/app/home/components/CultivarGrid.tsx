'use client';
import { useEffect, useRef, useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

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
    name: 'Queso Pecorino Zampa',
    region: 'Especialidad Rústica',
    yieldGain: 'Sabor intenso con notas herbales de pastura',
    droughtTolerance: '6 a 12 meses en cava',
    image: '/assets/Quesos%20Zampa/pecorino.jpeg',
    imageAlt: 'Queso Pecorino madurado rústico Zampa'
  },
  {
    id: 'cul-002',
    name: 'Queso Curado Tradición',
    region: 'Gran Reserva',
    yieldGain: 'Textura firme y notas profundas de madurez',
    droughtTolerance: '9 meses',
    image: '/assets/Quesos%20Zampa/producto_1.png',
    imageAlt: 'Queso Curado Tradición Zampa'
  },
  {
    id: 'cul-003',
    name: 'Queso Semicurado Selección',
    region: 'Clásico Cremoso',
    yieldGain: 'Equilibrio perfecto, textura suave y fundente',
    droughtTolerance: '3 a 6 meses',
    image: '/assets/Quesos%20Zampa/producto_2.png',
    imageAlt: 'Queso Semicurado Selección Zampa'
  },
  {
    id: 'cul-004',
    name: 'Queso Tierno Delicado',
    region: 'Suave y Fresco',
    yieldGain: 'Sabor láctico delicado, ideal para acompañar',
    droughtTolerance: '1 a 2 meses',
    image: '/assets/Quesos%20Zampa/producto_3.png',
    imageAlt: 'Queso Tierno Zampa'
  },
  {
    id: 'cul-005',
    name: 'Mix Gourmet Zampa',
    region: 'Selección Especial',
    yieldGain: 'Degustación variada con cortes de autor',
    droughtTolerance: 'Varias maduraciones',
    image: '/assets/Quesos%20Zampa/tipos%20de%20quesos.jpg',
    imageAlt: 'Variedad de cortes de quesos Zampa'
  }
];

export default function CultivarGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
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
          className={`mb-20 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          <p className="text-xs font-medium uppercase tracking-widest text-teal mb-3">Nuestra Selección</p>
          <h2 className="font-fraunces text-4xl lg:text-5xl font-semibold text-umber-dark leading-tight max-w-3xl">
            Variedades Artesanales<br />
            <em className="font-light italic">Elaboradas con Leche 100% de Oveja</em>
          </h2>
          <p className="mt-5 text-umber-light font-light text-lg max-w-2xl leading-relaxed">
            Cada variedad de queso Zampa refleja el esmero en su maduración y el carácter natural de nuestras pasturas. Producción artesanal limitada y cuidada en cada etapa.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cultivars.map((cultivar, index) => (
            <div
              key={cultivar.id}
              className={`group rounded-3xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 ${
                visible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: visible ? `${index * 100}ms` : '0ms'
              }}>
              
              {/* Image */}
              <div className="aspect-square overflow-hidden bg-limestone-soft relative">
                <AppImage
                  src={cultivar.image}
                  alt={cultivar.imageAlt}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-fraunces text-xl font-semibold text-umber-dark mb-1">
                  {cultivar.name}
                </h3>
                <p className="text-sm text-teal font-medium mb-4">{cultivar.region}</p>

                <div className="space-y-3 mb-5">
                  <div className="flex items-start gap-2">
                    <Icon name="CheckIcon" size={16} variant="outline" className="text-teal mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-umber-light">{cultivar.yieldGain}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="ShieldCheckIcon" size={16} variant="outline" className="text-teal mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-umber-light">Maduración: {cultivar.droughtTolerance}</p>
                  </div>
                </div>

                <a href="#" className="teal-link text-sm font-medium">
                  Más Información →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Wheat rule bottom */}
      <div className="wheat-rule mt-16" />
    </section>
  );
}

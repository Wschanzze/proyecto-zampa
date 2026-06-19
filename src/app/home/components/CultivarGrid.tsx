'use client';
import React, { useEffect, useRef, useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Cultivar {
  id: string;
  name: string;
  region: string;
  yieldGain: string;
  droughtTolerance: string;
  image: string;
  imageAlt: string;
}

const cultivars: Cultivar[] = [
  {
    id: 'cul-001',
    name: 'Sahel Elite',
    region: 'West Africa',
    yieldGain: '+28% under drought stress',
    droughtTolerance: 'High',
    image: 'https://images.unsplash.com/photo-1537909352614-5ffe62b5ec3d?w=500&h=500&fit=crop',
    imageAlt: 'Drought-resistant grain variety in field'
  },
  {
    id: 'cul-002',
    name: 'Horn Resilience',
    region: 'East Africa',
    yieldGain: '+32% under moisture stress',
    droughtTolerance: 'Very High',
    image: 'https://images.unsplash.com/photo-1592246854269-600fb3f29e45?w=500&h=500&fit=crop',
    imageAlt: 'High-yielding grain cultivar in semi-arid conditions'
  },
  {
    id: 'cul-003',
    name: 'Compact Strong',
    region: 'Sahel Zone',
    yieldGain: '+22% in low-rainfall zones',
    droughtTolerance: 'High',
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=500&h=500&fit=crop',
    imageAlt: 'Compact grain variety adapted to semi-arid climates'
  },
  {
    id: 'cul-004',
    name: 'Deep Root Legacy',
    region: 'Multi-region',
    yieldGain: '+25% under chronic stress',
    droughtTolerance: 'Very High',
    image: 'https://images.unsplash.com/photo-1500382017468-7049ffd0c72c?w=500&h=500&fit=crop',
    imageAlt: 'Deep-rooted grain variety in trial field'
  },
  {
    id: 'cul-005',
    name: 'Nutrient Dense',
    region: 'East Africa',
    yieldGain: '+18% with enhanced micronutrients',
    droughtTolerance: 'High',
    image: 'https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?w=500&h=500&fit=crop',
    imageAlt: 'Nutrient-rich grain cultivar for food security'
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
          
          <p className="text-xs font-medium uppercase tracking-widest text-teal mb-3">Available Cultivars</p>
          <h2 className="font-fraunces text-4xl lg:text-5xl font-semibold text-umber-dark leading-tight max-w-3xl">
            Tested Genetics for<br />
            <em className="font-light italic">Low-Rainfall Regions</em>
          </h2>
          <p className="mt-5 text-umber-light font-light text-lg max-w-2xl leading-relaxed">
            Each cultivar represents decades of selection under real-world drought conditions. Performance data spans minimum 3 seasons across multiple trial environments.
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
                    <p className="text-sm text-umber-light">Drought Tolerance: {cultivar.droughtTolerance}</p>
                  </div>
                </div>

                <a href="#" className="teal-link text-sm font-medium">
                  View Full Profile →
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

'use client';
import { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Metric {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  sub: string;
  icon: string;
}

const metrics: Metric[] = [
  { value: 100, suffix: ' Ovejas', label: 'Rodeo Lechero', sub: 'Ovejas frisonas lecheras seleccionadas en ordeñe diario', icon: 'SparklesIcon' },
  { value: 100, suffix: ' kg/sem', label: 'Producción Limitada', sub: 'Quesos elaborados artesanalmente en lotes pequeños', icon: 'InboxIcon' },
  { value: 100, suffix: '%', label: 'Cadena de Valor', sub: 'Ordeñe y quesería a solo 100 metros en el mismo campo', icon: 'CheckCircleIcon' },
  { value: 2018, suffix: '', label: 'Año de Inicio', sub: 'Emprendimiento familiar fundado en Napaleofú', icon: 'CalendarIcon' }
];



function useCountUp(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  const isDecimal = target % 1 !== 0;

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(parseFloat((eased * target).toFixed(isDecimal ? 1 : 0)));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration, isDecimal]);

  return isDecimal ? count.toFixed(1) : Math.round(count).toString();
}

function MetricCard({ metric, started }: { metric: Metric; started: boolean }) {
  const displayValue = useCountUp(metric.value, 1800, started);
  return (
    <div className="flex flex-col items-center text-center group relative p-6">
      <div className="absolute inset-0 border border-wheat/10 rounded-2xl bg-white/5 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500" />
      <div className="relative z-10">
        <div className="text-wheat mb-4 transform group-hover:scale-110 transition-transform duration-500">
          <Icon name={metric.icon as any} size={28} />
        </div>
        <div className="font-fraunces text-4xl lg:text-5xl font-semibold text-cream mb-2 tracking-tight">
          {metric.prefix}{displayValue}{metric.suffix}
        </div>
        <div className="text-sm font-medium text-wheat-light tracking-widest uppercase mb-2">{metric.label}</div>
        <p className="text-xs text-limestone-soft/60 font-light max-w-[160px] mx-auto">{metric.sub}</p>
      </div>
    </div>
  );
}

export default function ImpactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="impact" ref={sectionRef} className="relative py-32 lg:py-48 flex flex-col items-center justify-center overflow-hidden bg-charcoal">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/Quesos%20Zampa/IMG_1034.jpg" 
          alt="Origen de la Leche de Oveja" 
          className="w-full h-full object-cover object-center opacity-45 transition-transform duration-[20s] hover:scale-105"
        />
        {/* Gradient overlays to blend with the rest of the site */}
        <div className="absolute inset-0 bg-gradient-to-t from-umber-dark via-charcoal/80 to-umber-dark opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-r from-umber-dark/50 via-transparent to-umber-dark/50" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full">
        {/* Premium Header */}
        <div className={`flex flex-col items-center text-center mb-20 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-wheat/60" />
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-wheat">Compromiso con el Origen</p>
            <div className="h-px w-12 bg-wheat/60" />
          </div>
          
          <h2 className="font-fraunces text-5xl lg:text-7xl font-light text-cream leading-tight mb-8 drop-shadow-lg">
            Cuando la Calidad es Constante,<br />
            <span className="italic font-normal text-wheat-light">el Sabor se Vuelve Inolvidable.</span>
          </h2>
          
          <p className="max-w-2xl text-limestone-soft/80 text-lg lg:text-xl font-light leading-relaxed">
            Nuestro secreto reside en la pureza de nuestra leche de oveja y en el respeto absoluto 
            por los tiempos de maduración. Un proceso artesanal que garantiza una experiencia gourmet 
            en cada bocado.
          </p>
        </div>

        {/* Minimalist Metrics */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mb-24 transition-all duration-1000 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          {metrics.map((m) => (
            <MetricCard key={m.label} metric={m} started={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}

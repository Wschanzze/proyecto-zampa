'use client';
import { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

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
    <div className="flex flex-col items-start text-left group relative p-5">
      <div className="absolute inset-0 border border-teal/5 group-hover:border-teal/15 rounded-2xl bg-white/40 group-hover:bg-white/85 shadow-[0_2px_8px_rgba(46,93,90,0.02)] group-hover:shadow-[0_8px_24px_rgba(46,93,90,0.08)] transition-all duration-500" />
      <div className="relative z-10">
        <div className="text-teal mb-3 transform group-hover:scale-110 transition-transform duration-500">
          <Icon name={metric.icon as any} size={24} />
        </div>
        <div className="font-fraunces text-3xl lg:text-4xl font-semibold text-charcoal mb-1 tracking-tight">
          {metric.prefix}{displayValue}{metric.suffix}
        </div>
        <div className="text-xs font-semibold text-teal-dark tracking-wider uppercase mb-1">{metric.label}</div>
        <p className="text-xs text-charcoal/70 font-light max-w-[200px]">{metric.sub}</p>
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
    <section id="impact" ref={sectionRef} className="relative py-24 lg:py-32 flex items-center justify-center overflow-hidden bg-gray-soft">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Content & Metrics */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {/* Premium Header */}
            <div className={`flex flex-col items-start text-left transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <div className="flex items-center gap-4 mb-4">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal">Compromiso con el Origen</p>
                <div className="h-px w-12 bg-teal/60" />
              </div>
              
              <h2 className="font-fraunces text-4xl md:text-5xl font-light text-umber-dark leading-tight mb-6">
                Cuando la Calidad es Constante,<br />
                <span className="italic font-normal text-teal">el Sabor se Vuelve Inolvidable.</span>
              </h2>
              
              <p className="text-charcoal/80 text-base md:text-lg font-light leading-relaxed max-w-xl">
                Nuestro secreto reside en la pureza de nuestra leche de oveja y en el respeto absoluto 
                por los tiempos de maduración. Un proceso artesanal que garantiza una experiencia gourmet 
                en cada bocado.
              </p>
            </div>

            {/* Minimalist Metrics Grid */}
            <div className={`grid grid-cols-2 gap-x-6 gap-y-8 mt-4 transition-all duration-1000 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              {metrics.map((m) => (
                <MetricCard key={m.label} metric={m} started={visible} />
              ))}
            </div>
          </div>

          {/* Right Side: Sharp, fully visible image */}
          <div className={`lg:col-span-5 w-full transition-all duration-1000 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl group border border-teal/10">
              <AppImage 
                src="/assets/Quesos%20Zampa/IMG_1034.jpg" 
                alt="Origen de la Leche de Oveja - Ovejas frisonas en pasturas" 
                fill
                className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

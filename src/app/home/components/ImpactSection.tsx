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
{ value: 40, suffix: ' años', label: 'Historia y Tradición', sub: 'Elaboración ininterrumpida desde 1984', icon: 'CalendarIcon' },
{ value: 4.8, suffix: 'M L', label: 'Leche Procesada', sub: 'Control de calidad en cada etapa', icon: 'GlobeAltIcon' },
{ value: 23, suffix: '', label: 'Lotes de Selección', sub: 'Lotes gourmet en cámara este año', icon: 'BeakerIcon' },
{ value: 98, suffix: '%', label: 'Satisfacción Gourmet', sub: 'Aceptación en tiendas gourmet y restaurantes', icon: 'ChartBarIcon' }];


const adoptionZones = [
{ region: 'Mercado de Buenos Aires & Centro', hectares: '2.1M L', pct: 0.88, note: 'Almacenes boutique, vinerías y restaurantes' },
{ region: 'Región Pampeana', hectares: '1.4M L', pct: 0.72, note: 'Tiendas de especialidad en toda la provincia' },
{ region: 'Patagonia & Sur', hectares: '820K L', pct: 0.48, note: 'Hoteles boutique y distribución directa' },
{ region: 'Mercados de Exportación', hectares: '480K L', pct: 0.32, note: 'Tiendas de productos selectos de importación' }];


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
  const [barsAnimated, setBarsAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          setTimeout(() => setBarsAnimated(true), 400);
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
          src="/assets/Quesos%20Zampa/6de54990-a007-4692-8898-b1dda1296784.jpg" 
          alt="Origen de la Leche de Oveja" 
          className="w-full h-full object-cover object-center opacity-40 transition-transform duration-[20s] hover:scale-105"
        />
        {/* Gradient overlays to blend with the rest of the site */}
        <div className="absolute inset-0 bg-gradient-to-t from-umber-dark via-charcoal/80 to-umber-dark opacity-90" />
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

        {/* Adoption Zones (Refined) */}
        <div className={`max-w-4xl mx-auto transition-all duration-1000 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="flex items-center justify-center gap-3 mb-12">
            <Icon name="MapPinIcon" size={20} variant="outline" className="text-wheat" />
            <h3 className="font-fraunces text-3xl font-light text-cream tracking-wide">Presencia en el Mercado</h3>
          </div>

          <div className="space-y-8 bg-charcoal/40 backdrop-blur-md p-8 lg:p-10 rounded-3xl border border-wheat/10 shadow-2xl">
            {adoptionZones.map((zone, i) => (
              <div key={zone.region} className="group">
                <div className="flex items-end justify-between mb-3">
                  <div>
                    <p className="text-base font-medium text-cream group-hover:text-wheat transition-colors">{zone.region}</p>
                    <p className="text-sm text-limestone/50 font-light">{zone.note}</p>
                  </div>
                  <span className="font-fraunces text-xl font-medium text-wheat-light">{zone.hectares}</span>
                </div>
                <div className="h-1 bg-umber/30 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-wheat to-wheat-light shadow-[0_0_10px_rgba(201,168,76,0.5)]"
                    style={{
                      width: `${zone.pct * 100}%`,
                      transform: barsAnimated ? 'scaleX(1)' : 'scaleX(0)',
                      transformOrigin: 'left',
                      transition: `transform 1.5s cubic-bezier(0.22, 1, 0.36, 1) ${i * 200}ms`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

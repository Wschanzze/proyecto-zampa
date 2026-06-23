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

function MetricCard({ metric, started }: {metric: Metric;started: boolean;}) {
  const displayValue = useCountUp(metric.value, 1800, started);
  return (
    <div className="p-7 bg-limestone border border-wheat/25 rounded-4xl flex flex-col gap-3">
      <div className="w-11 h-11 rounded-xl bg-teal/10 flex items-center justify-center">
        <Icon name={metric.icon as any} size={20} variant="outline" className="text-teal" />
      </div>
      <div>
        <p className="font-fraunces text-4xl font-semibold text-umber-dark counter-value">
          {metric.prefix}{displayValue}{metric.suffix}
        </p>
        <p className="text-sm font-medium text-umber mt-1">{metric.label}</p>
        <p className="text-xs text-umber-light font-light mt-0.5">{metric.sub}</p>
      </div>
    </div>);

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
    <section id="impact" ref={sectionRef} className="py-24 lg:py-32 bg-umber-dark px-6 lg:px-12 relative overflow-hidden">
      {/* Atmospheric overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 opacity-10"
        style={{ background: 'radial-gradient(ellipse at 80% 10%, rgba(201,168,76,0.4) 0%, transparent 60%)' }} />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 opacity-8"
        style={{ background: 'radial-gradient(ellipse at 10% 90%, rgba(46,93,90,0.5) 0%, transparent 60%)' }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div
          className={`mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          <div className="wheat-rule-left mb-8 w-24" />
          <p className="text-xs font-medium uppercase tracking-widest text-wheat mb-3">Compromiso con el Origen</p>
          <h2 className="font-fraunces text-4xl lg:text-5xl font-semibold text-limestone leading-tight max-w-2xl">
            Cuando la Calidad es Constante,<br />
            <em className="font-light italic text-wheat-light">el Sabor se Vuelve Inolvidable.</em>
          </h2>
        </div>

        {/* Metrics grid */}
        <div
          className={`grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {metrics.map((m) =>
          <MetricCard key={m.label} metric={m} started={visible} />
          )}
        </div>

        {/* Adoption zones */}
        <div
          className={`transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          <div className="flex items-center gap-3 mb-8">
            <Icon name="MapPinIcon" size={18} variant="outline" className="text-wheat" />
            <h3 className="font-fraunces text-2xl font-medium text-limestone">Presencia en el Mercado</h3>
          </div>

          <div className="space-y-6">
            {adoptionZones.map((zone, i) =>
            <div key={zone.region}>
                <div className="flex items-end justify-between mb-2">
                  <div>
                    <p className="text-sm font-medium text-limestone">{zone.region}</p>
                    <p className="text-xs text-limestone/50 font-light">{zone.note}</p>
                  </div>
                  <span className="font-fraunces text-xl font-semibold text-wheat">{zone.hectares}</span>
                </div>
                <div className="h-1.5 bg-umber/40 rounded-full overflow-hidden">
                  <div
                  className="adoption-bar h-full rounded-full"
                  style={{
                    width: `${zone.pct * 100}%`,
                    transform: barsAnimated ? 'scaleX(1)' : 'scaleX(0)',
                    transitionDelay: `${i * 150}ms`
                  }} />
                
                </div>
              </div>
            )}
          </div>

          {/* Testimonials row */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[
            {
              quote: "El Pecorino Zampa le dio a nuestra tabla de quesos un valor único esta temporada. Los comensales lo eligen una y otra vez por su intensidad.",
              name: 'Ignacio Soria',
              role: 'Dueño y Chef de Restaurante de Autor, Buenos Aires',
              avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop"
            },
            {
              quote: "El control en el origen de la leche de oveja y el respeto por el pastoreo tradicional hacen de Quesos Zampa la marca más consistente del mercado.",
              name: 'Dr. Martín Valenzuela',
              role: 'Especialista en Producción Alimentaria y Catador de Quesos',
              avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop"
            }].
            map((t) =>
            <div key={t.name} className="p-7 rounded-4xl border border-wheat/15 bg-charcoal/40">
                <div className="flex items-start gap-1 mb-4 text-wheat">
                  {[1, 2, 3, 4, 5].map((s) =>
                <svg key={s} className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                )}
                </div>
                <blockquote className="font-fraunces text-lg font-light italic text-limestone leading-relaxed mb-5">
                  "{t.quote}"
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border border-wheat/20">
                    <img src={t.avatar} alt={`Portrait of ${t.name}`} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-limestone">{t.name}</p>
                    <p className="text-xs text-limestone/55 font-light">{t.role}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

}

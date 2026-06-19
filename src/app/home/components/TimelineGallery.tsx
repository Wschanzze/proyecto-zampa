'use client';
import React, { useState, useEffect, useRef } from 'react';
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
  era: 'Founding',
  title: 'First Plots, Red Clay Soil',
  description: 'Twelve test rows on a leased quarter-section in the Sahelian transition zone. Three researchers, a hand-drill planter, and rainfall records going back to 1962.',
  detail: 'The founding team identified that existing commercial varieties were bred for irrigated conditions. Their hypothesis: systematic recurrent selection under managed drought stress would yield lines with stable performance across low-rainfall seasons. Early germplasm included 47 landrace accessions collected from smallholder farms across four countries.',
  yieldNote: 'First cycle: 12% yield advantage over commercial check under 280mm annual rainfall.',
  regionNote: 'Initial adoption zone: 3 districts, Burkina Faso.',
  thumb: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&h=400&fit=crop",
  thumbAlt: 'Black and white archival photograph of founding trial plots in red clay soil, 1984',
  filter: 'grayscale(100%) contrast(1.05)'
},
{
  year: '1997',
  era: 'Expansion',
  title: 'Crossing Into Genomics',
  description: 'A partnership with three national agricultural research systems brought marker-assisted selection into the pipeline. Selection cycles shortened from 6 years to 3.',
  detail: 'Molecular markers targeting root architecture genes allowed the team to screen 2,400 F2 plants per season without waiting for phenotypic expression under drought. The result: a breeding pipeline that could now advance 8 lines per year instead of 2. Parent lines from this period form the backbone of 60% of currently licensed cultivars.',
  yieldNote: 'Pipeline efficiency: 4× increase in lines advanced per breeding cycle.',
  regionNote: 'Adoption zone expanded to 7 countries across West and East Africa.',
  thumb: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
  thumbAlt: 'Color photograph of genomics laboratory with plant samples and molecular analysis equipment'
},
{
  year: '2009',
  era: 'Scale',
  title: 'Satellite Mapping Adoption Zones',
  description: 'Remote sensing data revealed that Cultivar lines were being planted on 2.1 million hectares — far beyond what licensing records showed. Seed was moving through informal channels.',
  detail: 'NDVI analysis of crop phenology across the Sahel and Horn of Africa confirmed that the phenotypic signature of Cultivar varieties — late tillering, compact canopy, extended grain fill — was detectable at landscape scale. This discovery reshaped the institute\'s strategy: formal licensing partnerships with national seed systems were established to capture the informal adoption and ensure quality seed supply reached smallholders.',
  yieldNote: '2.1 million hectares under Cultivar genetics — 73% through informal seed networks.',
  regionNote: '3 continents, 14 countries, 8 national seed system partnerships.',
  thumb: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=600&h=400&fit=crop",
  thumbAlt: 'Satellite imagery showing adoption zones of drought-resistant grain varieties across semi-arid landscapes'
},
{
  year: '2019',
  era: 'Soil Protocols',
  title: 'Restoration Science Joins the Pipeline',
  description: 'Yield under stress is only half the equation. A soil health program measuring carbon sequestration, mycorrhizal density, and aggregate stability was embedded into every trial protocol.',
  detail: 'Long-term plots established in 1984 showed measurable degradation in untreated control rows. The soil science program developed restoration protocols — specific cover crop sequences, organic amendment timings, and minimal-till schedules — that when combined with Cultivar varieties produced 18% higher yield stability over five-year rolling windows compared to variety alone. These protocols are now licensed alongside parent lines.',
  yieldNote: '+18% yield stability over 5-year windows when soil protocols are paired with Cultivar varieties.',
  regionNote: 'Soil protocol adoption: 340,000 hectares across 6 countries.',
  thumb: "https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?w=600&h=400&fit=crop",
  thumbAlt: 'Researcher examining soil aggregate structure and root density in a trial plot restoration zone'
},
{
  year: '2026',
  era: 'Present',
  title: 'Fourth Decade, Sharpest Tools',
  description: 'Genomic prediction models trained on 40 years of phenotypic data. The current pipeline can predict drought tolerance with 89% accuracy before a single seed touches soil.',
  detail: 'Training datasets spanning 1984 to 2025 — 41 seasons of rainfall, temperature, and yield observations — feed genomic prediction models that now guide parent selection with an accuracy impossible in the first decade. The 2026 trial season advances 23 new lines across 6 target environments. Three lines are already in pre-commercial multiplication. The work compounds.',
  yieldNote: '89% prediction accuracy for drought tolerance. 23 new lines in 2026 pipeline.',
  regionNote: '4.8 million hectares under Cultivar genetics as of December 2025.',
  thumb: "https://images.unsplash.com/photo-1574263867373-68bfa3cf6d8d?w=600&h=400&fit=crop",
  thumbAlt: 'Researcher in modern field trial using digital tools to record phenotypic data on grain varieties at dawn'
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
          
          <p className="text-xs font-medium uppercase tracking-widest text-teal mb-3">Origin Story</p>
          <h2 className="font-fraunces text-4xl lg:text-5xl font-semibold text-umber-dark leading-tight max-w-2xl">
            Four Decades of Work,<br />
            <em className="font-light italic">One Compounding Record.</em>
          </h2>
          <p className="mt-5 text-umber-light font-light text-lg max-w-xl leading-relaxed">
            Each chapter raised the stakes — from a single research plot to global food security. Click any era to read it.
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
                  style={entry.filter ? { filter: entry.filter } as React.CSSProperties : undefined} />
                
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
                    style={entry.filter ? { filter: entry.filter } as React.CSSProperties : undefined} />
                  
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
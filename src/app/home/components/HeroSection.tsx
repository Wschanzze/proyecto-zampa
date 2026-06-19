'use client';
import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

export default function HeroSection() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = [headlineRef?.current, subRef?.current, cardRef?.current];
    elements?.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = '0';
      el.style.transform = 'translateY(28px)';
      setTimeout(() => {
        if (!el) return;
        el.style.transition = 'opacity 0.9s cubic-bezier(0.23,1,0.32,1), transform 0.9s cubic-bezier(0.23,1,0.32,1)';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 300 + i * 180);
    });
  }, []);

  return (
    <section className="relative min-h-screen bg-limestone-soft overflow-hidden flex items-center grain-overlay">
      {/* Atmospheric gradient background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute top-0 right-0 w-2/3 h-full opacity-30"
          style={{
            background: 'radial-gradient(ellipse at 80% 30%, rgba(201,168,76,0.18) 0%, transparent 60%)'
          }} />
        
        <div
          className="absolute bottom-0 left-0 w-1/2 h-1/2 opacity-20"
          style={{
            background: 'radial-gradient(ellipse at 20% 80%, rgba(46,93,90,0.15) 0%, transparent 55%)'
          }} />
        
      </div>
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-12 pt-28 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left: Copy */}
          <div className="lg:col-span-5 flex flex-col gap-7">
            {/* Season badge */}
            <div className="inline-flex items-center gap-2 self-start border border-wheat/50 bg-cream px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-teal animate-pulse flex-shrink-0" />
              <span className="text-xs font-medium text-teal tracking-widest uppercase">
                2026 Trial Season Open
              </span>
            </div>

            <h1
              ref={headlineRef}
              className="font-fraunces text-5xl lg:text-6xl font-semibold leading-[1.05] text-umber-dark">
              
              Forty Years<br />
              in the Soil.<br />
              <em className="font-light italic text-umber" style={{ fontStyle: 'italic' }}>
                Every Season Counts.
              </em>
            </h1>

            <p
              ref={subRef}
              className="text-lg font-light text-umber-light leading-relaxed max-w-md">
              
              Cultivar breeds drought-resistant grain varieties and soil restoration protocols for semi-arid landscapes — where a single season's timing determines whether a community eats.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <a
                href="#cultivars"
                className="flex items-center justify-center gap-2 h-14 px-8 rounded-2xl bg-teal text-cream font-medium text-base hover:bg-teal-light transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                style={{ boxShadow: '0 8px 32px rgba(46,93,90,0.28)' }}>
                
                <Icon name="SparklesIcon" size={18} variant="outline" />
                Explore Available Cultivars
              </a>
              <a
                href="#timeline"
                className="flex items-center justify-center gap-2 h-14 px-8 rounded-2xl border border-wheat/60 bg-limestone text-umber font-medium text-base hover:bg-wheat-muted hover:border-wheat transition-all duration-300 group">
                
                <Icon name="ClockIcon" size={18} variant="outline" className="group-hover:text-teal transition-colors" />
                Our Research Story
              </a>
            </div>

            {/* Social proof strip */}
            <div className="pt-5 border-t border-wheat/30 flex items-center gap-6 flex-wrap">
              <div className="flex -space-x-3">
                {[
                'https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg?auto=compress&w=64&h=64&fit=crop',
                'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&w=64&h=64&fit=crop',
                'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&w=64&h=64&fit=crop']?.
                map((src, i) =>
                <div key={i} className="w-10 h-10 rounded-full border-2 border-limestone-soft overflow-hidden flex-shrink-0">
                    <AppImage src={src} alt={`Partner researcher ${i + 1}`} width={40} height={40} className="w-full h-full object-cover" />
                  </div>
                )}
                <div className="w-10 h-10 rounded-full border-2 border-limestone-soft bg-wheat-muted flex items-center justify-center text-xs font-semibold text-umber flex-shrink-0">
                  +84
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1 text-wheat">
                  {[1, 2, 3, 4, 5]?.map((s) =>
                  <svg key={s} className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  )}
                </div>
                <p className="text-xs text-umber-light mt-0.5 font-light">Trusted by extension officers across 3 continents</p>
              </div>
            </div>
          </div>

          {/* Right: Asymmetric photo grid */}
          <div className="lg:col-span-7 relative hidden lg:block">
            <div className="hero-photo-grid">
              {/* Main tall image — researcher hands inspecting grain */}
              <div className="photo-main rounded-5xl overflow-hidden relative group shadow-2xl img-zoom">
                <AppImage
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_13f900373-1772055246276.png"
                  alt="Researcher's hands parting wheat stalks to inspect a seed head in a breeder trial field at dawn"
                  fill
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                
                <div className="absolute inset-0 bg-gradient-to-t from-umber-dark/50 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 text-cream">
                  <p className="text-xs font-medium uppercase tracking-widest text-wheat-light mb-1">Field Breeding</p>
                  <h3 className="font-fraunces text-lg font-medium">Trial Plot 47-C</h3>
                </div>
              </div>

              {/* Top wide — golden-hour trial rows */}
              <div className="photo-top-wide rounded-5xl overflow-hidden relative group shadow-2xl img-zoom">
                <AppImage
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_12de1774a-1772055242519.png"
                  alt="Wide-angle view of breeder trial field rows disappearing toward the horizon at golden hour"
                  fill
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                
                <div className="absolute inset-0 bg-gradient-to-t from-umber-dark/40 via-transparent to-transparent" />
                <div className="absolute top-4 right-4 glass-dark px-3 py-1.5 rounded-full flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-wheat animate-pulse" />
                  <span className="text-xs font-medium text-cream">Active Trials</span>
                </div>
              </div>

              {/* Bottom left — close-up grain */}
              <div className="photo-bottom-left rounded-5xl overflow-hidden relative group shadow-2xl img-zoom">
                <AppImage
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_18a95e75f-1772055244198.png"
                  alt="Close-up of drought-resistant grain seed heads with dew still on leaf collars at dawn"
                  fill
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                
              </div>

              {/* Circular spinning element */}
              <div className="photo-circular-element flex items-center justify-center relative">
                <div className="relative w-32 h-32 flex items-center justify-center">
                  <svg className="w-full h-full absolute animate-spin-slow" viewBox="0 0 100 100">
                    <path id="hero-curve" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                    <text className="text-[7px] uppercase font-bold tracking-widest" fill="#C9A84C">
                      <textPath href="#hero-curve">
                        · Drought Resistant · Field Proven · Since 1984 ·
                      </textPath>
                    </text>
                  </svg>
                  <a
                    href="#cultivars"
                    className="w-16 h-16 rounded-full bg-teal flex items-center justify-center hover:bg-teal-light transition-all duration-300 shadow-lg z-10 hover:scale-110"
                    aria-label="Explore cultivars">
                    
                    <Icon name="ArrowUpRightIcon" size={22} variant="outline" className="text-cream" />
                  </a>
                </div>
              </div>
            </div>

            {/* Floating trial card */}
            <div
              ref={cardRef}
              className="absolute top-[38%] right-[-28px] glass-stone p-5 rounded-3xl w-64 shadow-2xl animate-float border border-wheat/30">
              
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-medium uppercase tracking-wide text-umber-light">Trial Summary</span>
                <Icon name="EllipsisHorizontalIcon" size={16} variant="outline" className="text-umber-light" />
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-wheat-muted text-teal flex-shrink-0">
                  <Icon name="BeakerIcon" size={18} variant="outline" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-umber-dark">CVR-Sahel-28</p>
                  <p className="text-xs text-umber-light">Planting: Mar 12 – Apr 4</p>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl border border-wheat/30 bg-cream">
                <span className="text-xs text-umber-light">Yield Advantage</span>
                <span className="text-sm font-semibold text-teal">+34% vs. check</span>
              </div>
              <div className="mt-3 flex items-center gap-2 text-xs font-medium px-2 py-1 rounded-md text-teal bg-teal/10 w-max">
                <Icon name="CheckCircleIcon" size={12} variant="outline" />
                Licensed Available
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Wheat-gold divider */}
      <div className="absolute bottom-0 left-0 right-0 wheat-rule z-10" />
    </section>);

}

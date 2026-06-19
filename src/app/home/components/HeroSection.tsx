'use client';
import { useEffect, useRef, useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-6 lg:px-12 bg-limestone-soft overflow-hidden">
      {/* Background images with overlay */}
      <div className="absolute inset-0 z-0">
        <AppImage
          src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1600&h=900&fit=crop"
          alt="Expansive view of grain trial fields at golden hour stretching across the horizon"
          fill
          className="w-full h-full object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-limestone via-limestone/90 to-cream" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-teal/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal/5 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Subtitle */}
        <div
          className={`mb-6 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ transitionDelay: '100ms' }}>
          <p className="text-xs font-medium uppercase tracking-widest text-teal mb-1">
            Breeding for Resilience
          </p>
        </div>

        {/* Main headline */}
        <h1
          className={`font-fraunces text-5xl lg:text-7xl font-semibold text-umber-dark leading-tight mb-6 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '200ms' }}>
          Drought-Resistant Grain<br />
          <em className="font-light italic text-teal">Genetics that Scale</em>
        </h1>

        {/* Descriptive text */}
        <p
          className={`text-lg lg:text-xl font-light text-umber-light max-w-3xl mx-auto leading-relaxed mb-8 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '300ms' }}>
          Four decades of systematic breeding under real drought stress. 28 licensed cultivars deployed across 4.8 million hectares. Stable yields when rainfall fails.
        </p>

        {/* Stats row */}
        <div
          className={`flex flex-col sm:flex-row gap-6 justify-center mb-12 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '400ms' }}>
          {[
            { number: '28', label: 'Licensed Cultivars' },
            { number: '4.8M', label: 'Hectares Adopted' },
            { number: '40+', label: 'Years of Research' }
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <p className="font-fraunces text-4xl lg:text-5xl font-semibold text-teal">
                {stat.number}
              </p>
              <p className="text-sm font-medium text-umber mt-2">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '500ms' }}>
          
          {/* Primary button */}
          <a
            href="#cultivars"
            className="flex items-center justify-center gap-3 h-14 px-10 rounded-2xl bg-teal text-cream font-medium hover:bg-teal-light transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 group">
            <Icon name="SparklesIcon" size={18} variant="outline" />
            Explore Cultivars
            <Icon name="ArrowRightIcon" size={16} variant="outline" className="group-hover:translate-x-1 transition-transform duration-200" />
          </a>

          {/* Secondary button */}
          <a
            href="#timeline"
            className="flex items-center justify-center gap-3 h-14 px-10 rounded-2xl bg-white text-teal font-medium border-2 border-teal hover:bg-cream transition-all duration-300 group">
            <Icon name="BookOpenIcon" size={18} variant="outline" />
            Our Story
            <Icon name="ArrowRightIcon" size={16} variant="outline" className="group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          className={`flex justify-center mt-16 transition-all duration-1000 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '600ms' }}>
          <div className="flex flex-col items-center gap-3 animate-bounce">
            <p className="text-xs font-medium uppercase tracking-widest text-umber-light">Scroll to explore</p>
            <Icon name="ChevronDownIcon" size={20} variant="outline" className="text-teal" />
          </div>
        </div>
      </div>
    </section>
  );
}

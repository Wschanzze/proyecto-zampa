import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/home/HeroSection';
import SliderSection from '@/components/home/SliderSection';
import HeritageSection from '@/components/home/HeritageSection';
import FloatingPill from '@/components/home/FloatingPill';

// Legacy Home Components
import OurProducts from '@/components/home/legacy/OurProducts';
import LegacyVisitSection from '@/components/home/legacy/LegacyVisitSection';
import JoinFamily from '@/components/home/legacy/JoinFamily';
import InstagramCarousel from '@/components/home/legacy/InstagramCarousel';

// Legacy styles
import '@/styles/legacy-home.css';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-limestone-soft">
      <Header />
      <HeroSection />
      {/* --- INICIO LEGACY (Antiguo Home) --- */}
      <OurProducts />
      <HeritageSection />
      <SliderSection />

      <LegacyVisitSection />
      <InstagramCarousel />
      <JoinFamily />
      {/* --- FIN INICIO LEGACY --- */}

      <Footer />
      <FloatingPill />
    </div>
  );
}

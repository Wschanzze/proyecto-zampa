import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import SliderSection from './components/SliderSection';
import ImpactSection from './components/ImpactSection';
import HeritageSection from './components/HeritageSection';
import CtaSection from './components/CtaSection';
import FloatingPill from './components/FloatingPill';

// Legacy Home Components
import IntroStatement from './components/legacy/IntroStatement';
import OurProducts from './components/legacy/OurProducts';
import BannerBW from './components/legacy/BannerBW';
import PastoralSystem from './components/legacy/PastoralSystem';
import LegacyVisitSection from './components/legacy/LegacyVisitSection';
import JoinFamily from './components/legacy/JoinFamily';
import InstagramCarousel from './components/legacy/InstagramCarousel';
import QuickContact from './components/legacy/QuickContact';

// Legacy styles
import '@/styles/legacy-home.css';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-limestone-soft">
      <Header />
      <HeroSection />
      
      {/* --- INICIO LEGACY (Antiguo Home) --- */}
      <IntroStatement />
      <OurProducts />
      <BannerBW />
      <HeritageSection />
      <PastoralSystem />
      <SliderSection />
      <LegacyVisitSection />
      <JoinFamily />
      <InstagramCarousel />
      <QuickContact />
      {/* --- FIN INICIO LEGACY --- */}

      {/* --- INICIO NUEVO (Nuevos Apartados) --- */}
      <ImpactSection />
      <CtaSection />
      {/* --- FIN INICIO NUEVO --- */}

      <Footer />
      <FloatingPill />
    </div>
  );
}
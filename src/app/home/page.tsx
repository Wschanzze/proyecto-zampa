import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import AudienceSection from './components/AudienceSection';
import TimelineGallery from './components/TimelineGallery';
import CultivarGrid from './components/CultivarGrid';
import ImpactSection from './components/ImpactSection';
import VisitSection from './components/VisitSection';
import HeritageSection from './components/HeritageSection';
import CtaSection from './components/CtaSection';
import FloatingPill from './components/FloatingPill';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-limestone-soft">
      <Header />
      <HeroSection />
      <AudienceSection />
      <TimelineGallery />
      <CultivarGrid />
      <ImpactSection />
      <VisitSection />
      <HeritageSection />
      <CtaSection />
      <Footer />
      <FloatingPill />
    </div>
  );
}
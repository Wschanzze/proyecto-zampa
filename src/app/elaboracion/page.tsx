'use client';
import React, { useState, useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingPill from '@/app/home/components/FloatingPill';
import RecipesPairings from '@/components/RecipesPairings';
import ProductParallaxSection from '@/app/home/components/ProductParallaxSection';

interface ChefSection {
  id: number;
  title: string;
  subtitle: string;
  text: string[];
  image: string;
  alt: string;
}

const chefSections: ChefSection[] = [
  {
    id: 1,
    title: "JUAN CRUZ: EL CHEF",
    subtitle: "LA GASTRONOMÍA DETRÁS DE ZAMPA",
    text: [
      "Juan Cruz, con su gran experiencia profesional en gastronomía, lidera Zampa aportando una visión culinaria única al mundo de los quesos. Su conocimiento sobre ingredientes y técnicas permite elaborar quesos de oveja artesanales que son aclamados por la comunidad gastronómica local.",
      "Nuestros productos ya se encuentran en las cocinas de varios chefs reconocidos, quienes eligen los quesos de Zampa para elevar el nivel de sus preparaciones, apostando siempre por el producto local y el verdadero sabor de campo."
    ],
    image: "/assets/Quesos Zampa/IMG_0019.JPG",
    alt: "Juan Cruz trabajando"
  },
  {
    id: 2,
    title: "PECORINO, DE ZAMPA",
    subtitle: "NUESTRA ESTRELLA",
    text: [
      "Este auténtico heredero de la mejor tradición quesera italiana se elabora con leche de oveja criadas de forma pastoril. Este queso pecorino es suave, de aroma intenso y pasados los 6 meses de maduración ofrece buen picor.",
      "Dice Juan Cruz, quien dirige Zampa: \"El primer año nos dedicamos a aprender del tambo, del bienestar animal y a manejar las pasturas, porque la base para poder tener leche de buena calidad y poder lograr nuestros quesos es esa\"."
    ],
    image: "/assets/Quesos Zampa/pecorino.jpeg",
    alt: "Pecorino Zampa"
  },
  {
    id: 3,
    title: "SALA DE ELABORACIÓN",
    subtitle: "CRECIENDO DESDE LA RAÍZ",
    text: [
      "Hoy ya tenemos nuestra propia sala de elaboración en el predio del tambo. \"Tenemos 120 ovejas y la idea es seguir creciendo\", afirma Juan.",
      "Todo el proceso, desde el ordeñe hasta la maduración en cámara, es supervisado meticulosamente para garantizar que cada horma de queso alcance la calidad premium que nos caracteriza."
    ],
    image: "/assets/Quesos Zampa/IMG_9816.JPG",
    alt: "Sala de elaboración"
  },
  {
    id: 4,
    title: "CACIO E PEPE",
    subtitle: "¿CÓMO DISFRUTARLO?",
    text: [
      "Solo, en picada, nuestro pecorino es increíble. Pero el plato estrella para lucirlo es la pasta cacio e pepe, una preparación típica de Roma que solo lleva spaghettis, queso pecorino y pimienta.",
      "E dopo morire. Una experiencia gastronómica inigualable que te transporta a Italia, pero con el inconfundible espíritu del campo uruguayo."
    ],
    image: "/assets/Quesos Zampa/07B73847-614E-4FDC-B7AF-F639064C64CB.jpg",
    alt: "Plato con queso Zampa"
  }
];

export default function ElaboracionPage() {
  const [activeImage, setActiveImage] = useState<string>(chefSections[0].image);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute('data-id');
          const section = chefSections.find(s => s.id === parseInt(sectionId || '0'));
          if (section) {
            setActiveImage(section.image);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    textRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      textRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-cream">
      <Header />

      {/* HERO SECTION */}
      <header className="products-hero">
        <img 
          src="/assets/Quesos Zampa/IMG_9816.JPG" 
          alt="Elaboración - Quesería Zampa" 
          className="products-hero-bg" 
        />
        <div className="products-hero-overlay"></div>
        <div className="products-hero-content">
          <p className="hero-subtitle">NUESTRO PROCESO</p>
          <h1 className="hero-title font-light uppercase">Elaboración</h1>
          <p className="hero-description">
            El arte de transformar la leche más pura en quesos extraordinarios. Conocé nuestra sala de elaboración diaria, el cuidado de la materia prima y las técnicas culinarias que nos definen.
          </p>
        </div>
      </header>

      {/* PARALLAX PRODUCT SECTION */}
      <ProductParallaxSection />

      {/* RECIPES & PAIRINGS SECTION */}
      <RecipesPairings />

      {/* CHEF SCROLL SECTION */}
      <section className="our-story chef-scroll-section py-24 px-[5%] lg:min-h-screen lg:pb-24">
        
        <div className="section-header chef-main-header">
          <p className="text-xs font-medium uppercase tracking-widest text-teal mb-3">LA GASTRONOMÍA DETRÁS DE ZAMPA</p>
          <h3 className="text-3xl lg:text-4xl font-light text-charcoal leading-tight mb-4 uppercase">EL CHEF: JUAN CRUZ</h3>
        </div>

        <div className="chef-scroll-wrapper max-w-6xl mx-auto">
          {/* TEXT COLUMN */}
          <div className="chef-text-col">
            {chefSections.map((section, index) => (
              <div 
                key={section.id} 
                className="chef-text-block" 
                data-id={section.id}
                ref={el => { textRefs.current[index] = el; }}
              >
                <div className="story-text">
                  <p className="text-xs uppercase tracking-widest text-teal mb-2">{section.subtitle}</p>
                  <h3 className="text-2xl lg:text-3xl font-light text-charcoal mb-6 uppercase">{section.title}</h3>
                  {section.text.map((paragraph, i) => (
                    <p key={i} className="text-umber-light font-light text-base mb-4 leading-relaxed">{paragraph}</p>
                  ))}
                </div>
                
                {/* MOBILE ONLY IMAGE */}
                <div className="chef-mobile-image">
                  <img src={section.image} alt={section.alt} />
                </div>
              </div>
            ))}
          </div>

          {/* IMAGE COLUMN (DESKTOP ONLY STICKY) */}
          <div className="chef-image-col">
            <div className="chef-sticky-container">
              {chefSections.map((section) => (
                <img 
                  key={section.id}
                  src={section.image} 
                  alt={section.alt} 
                  className={`chef-sticky-image ${activeImage === section.image ? 'active' : ''}`}
                />
              ))}
              <h1 className="watermark-logo absolute bottom-[-5%] right-[-5%] opacity-10 pointer-events-none select-none font-light text-right leading-none text-charcoal uppercase">
                ZAMPA<br />QUESOS<br />TANDIL
              </h1>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingPill />
    </div>
  );
}

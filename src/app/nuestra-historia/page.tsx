'use client';
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingPill from '@/app/home/components/FloatingPill';
import DecoratedTitle from '@/components/ui/DecoratedTitle';
import NutritionalBenefits from '@/components/NutritionalBenefits';

export default function NuestraHistoriaPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      
      {/* HERO SECTION */}
      <header className="products-hero">
        <img 
          src="/assets/Quesos Zampa/BAB4C1FD-5368-4434-ADE4-498A3AE4D8C6.jpg" 
          alt="Nuestra Historia - Campo Zampa" 
          className="products-hero-bg" 
        />
        <div className="products-hero-overlay"></div>
        <div className="products-hero-content">
          <p className="hero-subtitle">DESDE NAPALEOFÚ</p>
          <h1 className="hero-title font-light uppercase">Nuestra Historia</h1>
          <p className="hero-description">
            Un proyecto familiar que nació de la curiosidad y la pasión. Conocé el origen de nuestro tambo de ovejas y nuestra quesería artesanal en las sierras de Tandil.
          </p>
        </div>
      </header>

      {/* NEWSPAPER LAYOUT */}
      <div className="newspaper-wrapper">
        <div className="newspaper-container">
          
          {/* CABECERA DEL PERIÓDICO */}
          <header className="newspaper-header">
            <DecoratedTitle tag="h1" className="masthead">El Diario de Zampa</DecoratedTitle>
            <p className="text-center text-lg italic mt-2 tracking-wide text-charcoal">
              Crónicas de la Cría Pastoril y la Quesería Artesanal
            </p>
            <div className="newspaper-meta text-charcoal">
              <span>Napaleofú, Tandil • Argentina</span>
              <span>Año III • Edición Especial</span>
              <span>Valor: Trabajo y Dedicación</span>
            </div>
          </header>

          {/* CONTENIDO DEL PERIÓDICO */}
          <div className="newspaper-spread">

            {/* PÁGINA IZQUIERDA */}
            <section className="newspaper-page-left">
              <span className="article-tag">Historia de Familia</span>
              <h2 className="article-title font-light uppercase">El Origen de un Sueño de Oveja en Tandil</h2>
              <p className="article-subtitle">
                Cómo Juan Cruz e Isabel unieron la gastronomía y el paisajismo en un tambo ovino referente en Napaleofú.
              </p>
              
              <div className="newspaper-img-container main-img relative block mx-auto max-w-[450px] w-full">
                <img 
                  src="/assets/Quesos Zampa/nuevas/e86d00df-bd8f-464c-93ea-ecd85bf7f3a8.jpg" 
                  alt="Juan Cruz e Isabel - Zampa" 
                  className="h-[220px] md:h-[280px] w-full object-cover"
                />
                <p className="newspaper-img-caption">
                  Juan Cruz Moy Peña e Isabel Sáenz Rozas, fundadores de Quesos Zampa.
                </p>
                <h1 className="watermark-logo absolute bottom-12 right-4 opacity-15 pointer-events-none select-none font-light text-right leading-none text-charcoal uppercase">
                  ZAMPA<br />QUESOS<br />TANDIL
                </h1>
              </div>

              <div className="article-text">
                <div className="article-columns">
                  <p className="drop-cap">
                    Juan Cruz Moy Peña e Isabel Sáenz Rozas, pareja desde hace más de diez años, decidieron iniciar un proyecto productivo conjunto tras un largo período de búsqueda sin una idea definida. Con experiencia profesional en gastronomía (Juan Cruz) y paisajismo (Isabel), la chispa definitiva se encendió al asistir, junto a Gonzalo (35), hermano de Isabel y productor agropecuario, a una charla sobre tambos ovinos en el Parque Industrial de Tandil.
                  </p>
                  <p>
                    Motivados por el enorme potencial de la actividad, tomaron una decisión temprana y muy audaz: adquirieron 40 borregas frisonas lecheras sin contar aún con una estructura física consolidada. Fue un salto de fe que requirió determinación inmediata para acondicionar un campo arrendado en Napaleofú y convertirlo en su centro operativo.
                  </p>
                  <p>
                    Hoy en día, Zampa opera bajo un sistema de integración vertical. Esto significa que la familia controla meticulosamente cada eslabón de la cadena de valor: la cría de su rebaño frisón en pasturas naturales, la obtención de leche fresca y la elaboración de quesos de oveja de carácter excepcional en su propia quesería.
                  </p>
                </div>
              </div>

              <blockquote className="article-quote ">
                "Adquirimos nuestras primeras 40 borregas sin tener una estructura armada. Fue un salto de fe que hoy da vida a quesos artesanales con identidad y terruño propio."
              </blockquote>

              <div className="sub-article border-b-0 pb-0">
                <span className="article-tag">El Tambo Ovino</span>
                <h3 className="article-title text-2xl font-light uppercase">El Ordeñe Diario y el Cuidado del Rebaño</h3>
                <div className="newspaper-img-container float-right ml-4 mb-2 sm:ml-6 sm:mb-4 w-[130px] sm:w-[180px] md:w-[200px]">
                  <img 
                    src="/assets/Quesos Zampa/IMG_8715.jpg" 
                    alt="Pastoreo de ovejas Zampa" 
                    className="h-[95px] sm:h-[130px] md:h-[150px] w-full object-cover"
                  />
                  <p className="newspaper-img-caption">
                    Rebaño de ovejas frisonas en pastoreo.
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-charcoal mb-4 text-justify">
                  La jornada en Napaleofú comienza muy temprano con los dos ordeñes diarios. La leche fresca es transportada inmediatamente a la quesería para preservar sus cualidades intactas. El pastoreo directo sobre pasturas de alta calidad garantiza que nuestras ovejas gocen de una alimentación natural, libre de químicos, reflejándose en una materia prima superior.
                </p>
              </div>
            </section>

            {/* PÁGINA DERECHA */}
            <section className="newspaper-page-right">
              
              <div className="right-page-articles">
                
                <div className="sub-article">
                  <span className="article-tag">Elaboración Artesanal</span>
                  <h3 className="article-title text-2xl font-light uppercase">Quesos de Autor y Habilitación Local</h3>
                  <div className="newspaper-img-container float-left mr-4 mb-2 sm:mr-6 sm:mb-4 w-[130px] sm:w-[180px] md:w-[200px]">
                    <img 
                      src="/assets/Quesos Zampa/IMG_9821.JPG" 
                      alt="Quesos Zampa madurando" 
                      className="h-[95px] sm:h-[130px] md:h-[150px] w-full object-cover"
                    />
                    <p className="newspaper-img-caption">
                      Quesos de oveja en proceso de maduración.
                    </p>
                  </div>
                  <p className="text-sm leading-relaxed text-charcoal mb-4 text-justify">
                    En Zampa nos enfocamos en producciones limitadas donde cada horma se cuida individualmente. Elaboramos variedades selectas como Pecorino, Ahumado, Orégano y Manchego. El gran objetivo del proyecto es avanzar con la habilitación definitiva de la quesería propia para vender directo al público y potenciar el valor agregado en origen.
                  </p>
                </div>

                <div className="sub-article border-b-0 pb-0">
                  <span className="article-tag">Identidad</span>
                  <h3 className="article-title text-2xl font-light uppercase">Zampa: La Resiliencia de la Estepa</h3>
                  <div className="newspaper-img-container float-right ml-4 mb-2 sm:ml-6 sm:mb-4 w-[130px] sm:w-[180px] md:w-[200px]">
                    <img 
                      src="/assets/Quesos Zampa/IMG_9823.JPG" 
                      alt="Quesos Zampa terminados" 
                      className="h-[95px] sm:h-[130px] md:h-[150px] w-full object-cover"
                    />
                    <p className="newspaper-img-caption">
                      Hormas listas para ser marcadas.
                    </p>
                  </div>
                  <p className="text-sm leading-relaxed text-charcoal mb-4 text-justify">
                    El nombre del emprendimiento hace honor al arbusto 'Zampa', característico de las regiones más áridas del sur argentino. En la estepa, este arbusto está muy asociado a la calidad del ganado ovino de pastoreo por su alto valor nutritivo y resistencia. Adoptar su nombre simboliza la rusticidad, resiliencia y el carácter natural que impregna a nuestros quesos.
                  </p>
                </div>

                {/* Marca de agua */}
                <div className="newspaper-watermark flex justify-center items-center opacity-60 mt-16 py-8">
                  <img 
                    src="/IMG_1960(1).png" 
                    alt="Zampa Marca de Agua" 
                    className="w-[70%] max-w-[220px] grayscale"
                  />
                </div>

              </div>

            </section>

          </div>

          {/* SECCIÓN ANUNCIO VINTAGE A PIE DE PÁGINA */}
          <footer className="newspaper-ad-container">
            <div className="newspaper-ad-box">
              <NutritionalBenefits isVintage={true} />
            </div>
          </footer>

        </div>
      </div>

      <Footer />
      <FloatingPill />
    </div>
  );
}

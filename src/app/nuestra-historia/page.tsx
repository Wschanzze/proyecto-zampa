'use client';
import React from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingPill from '@/components/home/FloatingPill';
import DecoratedTitle from '@/components/ui/DecoratedTitle';
import NutritionalBenefits from '@/components/NutritionalBenefits';

export default function NuestraHistoriaPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      
      {/* HERO SECTION */}
      <header className="products-hero relative min-h-[350px] md:min-h-[420px] flex items-center justify-center">
        <Image 
          src="/assets/Quesos Zampa/BAB4C1FD-5368-4434-ADE4-498A3AE4D8C6.jpg" 
          alt="Nuestra Historia - Campo Zampa en Tandil" 
          fill
          priority
          sizes="100vw"
          quality={85}
          className="products-hero-bg object-cover"
        />
        <div className="products-hero-overlay"></div>
        <div className="products-hero-content z-10">
          <p className="hero-subtitle">DESDE TANDIL</p>
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
              <span>Tandil • Buenos Aires, Argentina</span>
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
                Cómo Isabel y Juan Cruz unieron el paisajismo y la gastronomía en un tambo ovino referente en Tandil.
              </p>
              
              <div className="newspaper-img-container main-img relative block mx-auto max-w-[450px] w-full my-6">
                <Image 
                  src="/assets/Quesos Zampa/nuevas/e86d00df-bd8f-464c-93ea-ecd85bf7f3a8.jpg" 
                  alt="Isabel y Juan Cruz - Zampa" 
                  width={450}
                  height={280}
                  sizes="(max-width: 640px) 100vw, 450px"
                  quality={85}
                  className="h-[220px] md:h-[280px] w-full object-cover rounded-sm"
                />
                <p className="newspaper-img-caption">
                  Isabel Sáenz Rozas y Juan Cruz Moy Peña, fundadores de Quesos Zampa.
                </p>
                <h1 className="watermark-logo absolute bottom-12 right-4 opacity-15 pointer-events-none select-none font-light text-right leading-none text-charcoal uppercase">
                  ZAMPA<br />QUESOS<br />TANDIL
                </h1>
              </div>

              <div className="article-text">
                <div className="article-columns">
                  <p className="drop-cap">
                    Isabel Sáenz Rozas y Juan Cruz Moy Peña, pareja desde hace más de diez años, decidieron iniciar un proyecto productivo conjunto tras un largo período de búsqueda sin una idea definida. Con experiencia profesional en paisajismo (Isabel) y gastronomía (Juan Cruz), la chispa definitiva se encendió al asistir, junto a Gonzalo (35), hermano de Isabel y productor agropecuario, a una charla sobre tambos ovinos en el Parque Industrial de Tandil.
                  </p>
                  <p>
                    Motivados por el enorme potencial de la actividad, tomaron una decisión temprana y muy audaz: adquirieron 40 borregas frisonas lecheras sin contar aún con una estructura física consolidada. Fue un salto de fe que requirió determinación inmediata para acondicionar su campo en las sierras de Tandil y convertirlo en su centro operativo.
                  </p>
                  <p>
                    Hoy en día, Zampa opera bajo un sistema de integración vertical. Esto significa que la familia controla meticulosamente cada eslabón de la cadena de valor: la cría de su rebaño frisón en pasturas implantadas de alfalfa y festuca, la obtención de leche fresca y la elaboración de quesos de oveja de carácter excepcional en su propia quesería.
                  </p>
                </div>
              </div>

              <blockquote className="article-quote">
                "Adquirimos nuestras primeras 40 borregas sin tener una estructura armada. Fue un salto de fe que hoy da vida a quesos artesanales con identidad y terruño propio."
              </blockquote>

              <div className="sub-article border-b-0 pb-0 clear-both flow-root">
                <span className="article-tag">El Tambo Ovino</span>
                <h3 className="article-title text-2xl font-light uppercase">El Ordeñe Diario y el Cuidado del Rebaño</h3>
                <div className="newspaper-img-container mx-auto my-3 block w-full max-w-[280px] sm:float-right sm:ml-6 sm:mb-4 sm:my-1 sm:w-[180px] md:w-[200px]">
                  <Image 
                    src="/assets/Quesos Zampa/IMG_8715.jpg" 
                    alt="Pastoreo de ovejas Zampa" 
                    width={300}
                    height={225}
                    sizes="(max-width: 640px) 280px, 200px"
                    quality={80}
                    className="h-[160px] sm:h-[130px] md:h-[150px] w-full object-cover"
                  />
                  <p className="newspaper-img-caption">
                    Rebaño de ovejas frisonas en pastoreo.
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-charcoal mb-4 text-left sm:text-justify">
                  La jornada en Tandil comienza muy temprano con los dos ordeñes diarios. La leche fresca es transportada inmediatamente a la quesería para preservar sus cualidades intactas. El pastoreo directo sobre pasturas de alta calidad garantiza que nuestras ovejas gocen de una alimentación natural, libre de químicos, reflejándose en una materia prima superior.
                </p>
              </div>
            </section>

            {/* PÁGINA DERECHA */}
            <section className="newspaper-page-right">
              
              <div className="right-page-articles">
                
                <div className="sub-article clear-both flow-root">
                  <span className="article-tag">Elaboración Artesanal</span>
                  <h3 className="article-title text-2xl font-light uppercase">Quesos de Autor y Habilitación Local</h3>
                  <div className="newspaper-img-container mx-auto my-3 block w-full max-w-[280px] sm:float-left sm:mr-6 sm:mb-4 sm:my-1 sm:w-[180px] md:w-[200px]">
                    <Image 
                      src="/assets/Quesos Zampa/IMG_9821.JPG" 
                      alt="Quesos Zampa madurando" 
                      width={300}
                      height={225}
                      sizes="(max-width: 640px) 280px, 200px"
                      quality={80}
                      className="h-[160px] sm:h-[130px] md:h-[150px] w-full object-cover"
                    />
                    <p className="newspaper-img-caption">
                      Quesos de oveja en proceso de maduración.
                    </p>
                  </div>
                  <p className="text-sm leading-relaxed text-charcoal mb-4 text-left sm:text-justify">
                    En Zampa nos enfocamos en producciones limitadas donde cada horma se cuida individualmente. Elaboramos variedades selectas como Pecorino, Ahumado, Orégano y Manchego. Con la habilitación definitiva de nuestra quesería propia plenamente alcanzada, vendemos directo al público y potenciamos el valor agregado en origen.
                  </p>
                </div>

                <div className="sub-article border-b-0 pb-0 clear-both flow-root">
                  <span className="article-tag">Identidad</span>
                  <h3 className="article-title text-2xl font-light uppercase">Zampa: La Resiliencia de la Estepa</h3>
                  <div className="newspaper-img-container mx-auto my-3 block w-full max-w-[280px] sm:float-right sm:ml-6 sm:mb-4 sm:my-1 sm:w-[180px] md:w-[200px]">
                    <Image 
                      src="/assets/Quesos Zampa/IMG_9823.JPG" 
                      alt="Quesos Zampa terminados" 
                      width={300}
                      height={225}
                      sizes="(max-width: 640px) 280px, 200px"
                      quality={80}
                      className="h-[160px] sm:h-[130px] md:h-[150px] w-full object-cover"
                    />
                    <p className="newspaper-img-caption">
                      Hormas listas para ser marcadas.
                    </p>
                  </div>
                  <p className="text-sm leading-relaxed text-charcoal mb-4 text-left sm:text-justify">
                    El nombre del emprendimiento hace honor al arbusto 'Zampa', característico de las regiones más áridas del sur argentino. En la estepa, este arbusto está muy asociado a la calidad del ganado ovino de pastoreo por su alto valor nutritivo y resistencia. Adoptar su nombre simboliza la rusticidad, resiliencia y el carácter natural que impregna a nuestros quesos.
                  </p>
                </div>

                {/* Marca de agua */}
                <div className="newspaper-watermark flex justify-center items-center opacity-60 mt-12 py-6">
                  <Image 
                    src="/IMG_1960(1).png" 
                    alt="Zampa Marca de Agua" 
                    width={220}
                    height={100}
                    className="w-[70%] max-w-[220px] h-auto grayscale"
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


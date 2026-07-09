import React from 'react';
import DecoratedTitle from '@/components/ui/DecoratedTitle';

const Introduction = () => {
  return (
    <section className="intro-section">
      <div className="intro-container">
        <div className="intro-header">
          <span className="intro-subtitle">FILOSOFÍA ZAMPA</span>
          <DecoratedTitle className="intro-title">Nuestra Vocación</DecoratedTitle>
        </div>

        <div className="intro-grid">
          <div className="intro-image-column">
            <div className="intro-image-wrapper">
              <img 
                src="/assets/Quesos Zampa/imagen_lapis.jfif" 
                alt="Filosofía Zampa y Sistema Pastoril" 
                className="intro-image"
              />
              <div className="intro-badge">
                <span className="intro-badge-number">100%</span>
                <span className="intro-badge-text">CONTROL DE CALIDAD</span>
              </div>
            </div>
          </div>

          <div className="intro-content-column">
            <div className="philosophy-item">
              <span className="philosophy-num">01</span>
              <h3 className="philosophy-heading">Integración Vertical: Del Pasto al Mostrador</h3>
              <p className="philosophy-text">
                <span className="desktop-text-only">
                  Zampa funciona bajo un modelo de cadena completa: criamos nuestras propias ovejas, producimos la leche, elaboramos los quesos y los comercializamos directamente. Sin intermediarios. Este modelo, sumamente exigente, nos permite un control absoluto sobre la calidad de nuestros productos en cada paso del proceso.
                </span>
                <span className="mobile-text-only">
                  Criamos nuestras ovejas, producimos la leche y elaboramos nuestros quesos directamente sin intermediarios, garantizando un control absoluto de calidad en cada paso.
                </span>
              </p>
            </div>

            <div className="philosophy-item">
              <span className="philosophy-num">02</span>
              <h3 className="philosophy-heading">Materia Prima Noble: El Secreto de la Oveja</h3>
              <p className="philosophy-text">
                <span className="desktop-text-only">
                  La leche de oveja supera a la vacuna en concentración de grasas y proteínas. Esto se traduce en quesos con sabores más pronunciados, texturas más ricas y una cremosidad inigualable. Aprovechamos este rendimiento único elaborando nuestros quesos con leche fresca del mismo día, preservando intactas sus propiedades organolépticas naturales.
                </span>
                <span className="mobile-text-only">
                  La leche de oveja ofrece sabores más pronunciados, texturas más ricas y mayor cremosidad. Elaboramos nuestros quesos el mismo día del ordeñe para preservar su frescura.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;

import React from 'react';

const ProductParallaxSection = () => {
  return (
    <section className="parallax-section" style={{ backgroundColor: '#FAF8F5' }}>
      {/* Elementos Flotantes */}
      <div className="parallax-img-wrapper wrapper-1">
        <img 
          src="/assets/Quesos Zampa/nuevas/10669c4a-4810-4945-b53a-b80f8ab4fc63.jfif" 
          alt="Queso Provoleta Zampa" 
          className="parallax-img" 
        />
      </div>
      <div className="parallax-img-wrapper wrapper-2">
        <img 
          src="/assets/Quesos Zampa/nuevas/14ce3b07-ee68-478b-acfd-b41fce3de55a.jfif" 
          alt="Queso Brie Zampa" 
          className="parallax-img" 
        />
      </div>
      <div className="parallax-img-wrapper wrapper-3">
        <img 
          src="/assets/Quesos Zampa/nuevas/18dc7d71-6187-4119-b0dc-020910b30b5e.jfif" 
          alt="Queso Camembert Zampa" 
          className="parallax-img" 
        />
      </div>

      <div className="parallax-container">
        <div className="parallax-card animate-float">
          {/* Logotipo superior */}
          <div className="parallax-card-logo-container">
            <img 
              src="/IMG_1960(1).png" 
              alt="Logo Quesos Zampa" 
              className="parallax-card-logo" 
            />
          </div>

          {/* Subtítulo / Badge */}
          <div className="parallax-badge">
            <span className="badge-line"></span>
            <span className="badge-text">FILOSOFÍA ZAMPA</span>
            <span className="badge-line"></span>
          </div>

          {/* Título Principal */}
          <h2 className="parallax-title font-light uppercase">
            Frescura y <span className="text-highlight">Naturalidad</span>
            <br />
            son los principios de
            <br />
            nuestra <span className="text-highlight">producción</span>
          </h2>

          {/* Divisor */}
          <div className="parallax-divider">
            <span className="divider-dot"></span>
          </div>

          {/* Descripción */}
          <p className="parallax-description">
            Desde el pastoreo libre de nuestras ovejas en las sierras de Napaleofú hasta la maduración en nuestra cava. Cada horma se elabora manualmente con paciencia, respetando los tiempos de la naturaleza para lograr un queso premium y honesto.
          </p>

          {/* Firma o Pie de Tarjeta */}
          <div className="parallax-footer">
            <div className="aesthetic-signature">Quesos de Autor • Tandil</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductParallaxSection;

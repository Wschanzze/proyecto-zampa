import React from 'react';
import Link from 'next/link';

const IntroStatement = () => {
  return (
    <section className="intro-statement-section">
      <div className="intro-statement-container">
        <h2 className="statement-title">
          Frescura y naturalidad<br />
          son los principios de nuestra producción
        </h2>
        <p className="statement-description">
          Desde el pastoreo libre de nuestras ovejas en las pasturas de Tandil hasta la maduración en nuestra cava. Cada horma se elabora manualmente con paciencia, respetando los tiempos de la naturaleza para lograr un queso premium y honesto.
        </p>
        <Link href="/nuestra-historia" className="btn btn-primary">
          Conocé nuestra historia
        </Link>
      </div>
      <img 
        src="/assets/Quesos Zampa/ovejas_render.png" 
        alt="Ovejas en Napaleofú" 
        className="statement-watermark" 
      />
    </section>
  );
};

export default IntroStatement;

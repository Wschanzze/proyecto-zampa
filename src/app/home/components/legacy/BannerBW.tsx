import React from 'react';

const BannerBW = () => {
  return (
    <section className="banner-bw">
      <img 
        src="/assets/Quesos Zampa/IMG_0019.JPG" 
        alt="Trabajo en el tambo" 
        className="banner-bg" 
      />
      <div className="banner-content">
        <h3 className="banner-text left-text">QUESOS DE OVEJA<br />DE AUTOR</h3>
        <h3 className="banner-text right-text">SISTEMA PASTORIL<br />100% EN LIBERTAD</h3>
      </div>
    </section>
  );
};

export default BannerBW;

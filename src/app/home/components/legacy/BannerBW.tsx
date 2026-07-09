import React from 'react';
import Image from 'next/image';

const BannerBW = () => {
  return (
    <section className="banner-bw">
      <Image 
        src="/assets/Quesos Zampa/IMG_0019.JPG" 
        alt="Trabajo en el tambo" 
        fill
        className="banner-bg"
        style={{ objectFit: 'cover' }}
      />
      <div className="banner-content">
        <h3 className="banner-text left-text">QUESOS DE OVEJA<br />DE AUTOR</h3>
        <h3 className="banner-text right-text">SISTEMA PASTORIL<br />100% EN LIBERTAD</h3>
      </div>
    </section>
  );
};

export default BannerBW;

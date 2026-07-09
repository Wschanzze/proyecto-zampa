import React from 'react';
import Link from 'next/link';

const JoinFamily = () => {
  return (
    <section className="join-family">
      <img 
        src="/assets/Quesos Zampa/6de54990-a007-4692-8898-b1dda1296784.jpg" 
        alt="Quesos en maduración" 
        className="join-bg" 
      />
      <div className="join-content">
        <p className="join-subtitle">EL VALOR DE LO ARTESANAL</p>
        <h2 className="join-title">SABORES ÚNICOS DESDE EL TAMBO</h2>
        <p className="join-description">
          <span className="desktop-text-only">
            Integramos todo el proceso de elaboración: desde la cría y ordeñe de nuestras ovejas en los pastos de Napaleofú, hasta la maduración perfecta de cada horma. Te invitamos a probar un queso con identidad y carácter real.
          </span>
          <span className="mobile-text-only">
            Integramos todo el proceso de elaboración en Napaleofú para lograr un queso premium de oveja con identidad y carácter real.
          </span>
        </p>
        
        <Link href="/productos" className="btn btn-primary join-cta">
          PROBAR NUESTROS QUESOS
        </Link>
      </div>
      <h1 className="watermark-logo">ZAMPA<br />QUESOS<br />TANDIL</h1>
    </section>
  );
};

export default JoinFamily;

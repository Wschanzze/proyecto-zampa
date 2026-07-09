import React from 'react';
import DecoratedTitle from '@/components/ui/DecoratedTitle';
import Link from 'next/link';
import Image from 'next/image';

const OurProducts = () => {
  const categories = [
    {
      title: "QUESOS DUROS",
      image: "/assets/Quesos Zampa/pecorino.jpeg",
      link: "/productos"
    },
    {
      title: "QUESOS SEMIDUROS",
      image: "/assets/Quesos Zampa/IMG_9816.JPG",
      link: "/productos"
    },
    {
      title: "QUESOS BLANDOS",
      image: "/assets/Quesos Zampa/tipos de quesos.jpg",
      link: "/productos"
    }
  ];

  return (
    <section className="our-products-section">
      <div className="products-heading">
        <h6 className="products-subtitle">NUESTROS PRODUCTOS</h6>
        <DecoratedTitle className="products-title">100% Leche de Oveja</DecoratedTitle>
      </div>

      <div className="products-grid">
        {categories.map((cat, idx) => (
          <div key={idx} className="product-card">
            <Link href={cat.link} className="product-link">
              <div className="product-img-wrapper">
                <Image src={cat.image} alt={cat.title} fill className="product-img" sizes="(max-width: 768px) 100vw, 33vw" />
                <div className="product-overlay"></div>
                <div className="product-title-wrapper">
                  <h6 className="product-category-title">{cat.title}</h6>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurProducts;

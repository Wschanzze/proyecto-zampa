import React from 'react';
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
    <section className="our-products-section py-24 lg:py-32 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center mb-16">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal mb-3">NUESTROS PRODUCTOS</p>
        <h2 className="font-fraunces text-4xl md:text-5xl font-light text-umber-dark leading-tight">100% Leche de Oveja</h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((cat, idx) => (
          <div key={idx} className="product-card group relative aspect-[4/5] rounded-[32px] overflow-hidden shadow-xl hover:shadow-2xl border border-teal/5 transition-all duration-500">
            <Link href={cat.link} className="absolute inset-0 z-20">
              <div className="relative w-full h-full">
                <Image 
                  src={cat.image} 
                  alt={cat.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  sizes="(max-width: 768px) 100vw, 33vw" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent z-10" />
                <div className="absolute bottom-8 left-8 right-8 z-20 text-left">
                  <h6 className="font-fraunces text-2xl md:text-3xl font-medium text-white tracking-wide uppercase">{cat.title}</h6>
                  <span className="inline-flex items-center gap-2 text-xs font-medium text-wheat-light uppercase tracking-widest mt-2 group-hover:text-white transition-colors duration-300">
                    Ver Variedades
                    <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </span>
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

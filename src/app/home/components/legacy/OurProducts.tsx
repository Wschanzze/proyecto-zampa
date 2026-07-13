import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const OurProducts = () => {
  const categories = [
    {
      title: "QUESOS DUROS",
      subtitle: "Intensos & Madurados",
      desc: "Variedades de larga guarda en cava como nuestro Pecorino, de textura firme y sabor persistente.",
      image: "/assets/Quesos Zampa/pecorino.jpeg",
      link: "/productos"
    },
    {
      title: "QUESOS SEMIDUROS",
      subtitle: "Texturas & Sabores Equilibrados",
      desc: "Texturas cremosas y firmes con notas mantecosas, ideales para tablas de maridaje.",
      image: "/assets/Quesos Zampa/IMG_9816.JPG",
      link: "/productos"
    },
    {
      title: "QUESOS BLANDOS",
      subtitle: "Cremosos & Fundentes",
      desc: "Recetas de influencia francesa como el Brie y Camembert, de corteza aterciopelada y corazón untuoso.",
      image: "/assets/Quesos Zampa/tipos de quesos.jpg",
      link: "/productos"
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#FAF8F5] relative overflow-hidden">
      {/* Header section */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-16 md:mb-24">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal mb-4 block">NUESTROS PRODUCTOS</p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-charcoal leading-tight uppercase tracking-[0.06em] mb-6">
          Descubrí nuestros quesos de autor
        </h2>
        <p className="text-base md:text-lg font-light text-charcoal/80 max-w-2xl mx-auto leading-relaxed">
          Todos nuestros productos están elaborados 100% con Leche de Oveja y con Cuidado Artesanal.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((cat, idx) => (
          <div key={idx} className="product-card group relative aspect-square sm:aspect-[4/3] md:aspect-[4/5] rounded-[32px] overflow-hidden shadow-xl hover:shadow-2xl border border-teal/5 transition-all duration-500 hover:-translate-y-2 bg-white">
            <Link href={cat.link} className="absolute inset-0 z-20">
              <div className="relative w-full h-full">
                <Image 
                  src={cat.image} 
                  alt={cat.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  sizes="(max-width: 768px) 100vw, 33vw" 
                />
                {/* Overlay layer */}
                <div className="absolute inset-0 bg-black/35 group-hover:bg-black/40 transition-colors duration-500 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-10" />
                
                {/* Content container */}
                <div className="absolute inset-x-0 bottom-0 p-8 z-20 text-left flex flex-col gap-2">

                  <h3 className="text-2xl md:text-3xl font-light text-white tracking-wide uppercase">
                    {cat.title}
                  </h3>
                  <p className="text-xs md:text-sm font-light text-white/80 leading-relaxed mt-2 max-h-20 opacity-100 md:max-h-0 md:opacity-0 md:group-hover:max-h-20 md:group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                    {cat.desc}
                  </p>
                  <span className="inline-flex items-center gap-2 text-xs font-semibold text-wheat-light uppercase tracking-widest mt-4">
                    Ver Variedades
                    <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
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

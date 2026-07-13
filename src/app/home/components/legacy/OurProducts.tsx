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
    <section className="py-24 lg:py-32 bg-limestone-soft relative overflow-hidden flex flex-col items-center">
      {/* Background Parallax Elements */}
      <div className="absolute top-10 left-[-5%] w-[250px] md:w-[350px] opacity-40 md:opacity-60 pointer-events-none animate-float z-0">
        <Image 
          src="/assets/Quesos Zampa/producto_1.png" 
          alt="Parallax Queso 1" 
          width={400} 
          height={400} 
          className="object-contain"
        />
      </div>
      
      <div className="absolute bottom-10 right-[-10%] w-[300px] md:w-[450px] opacity-30 md:opacity-50 pointer-events-none animate-float z-0" style={{ animationDelay: '2s' }}>
        <Image 
          src="/assets/Quesos Zampa/producto_3.png" 
          alt="Parallax Queso 3" 
          width={500} 
          height={500} 
          className="object-contain"
        />
      </div>

      {/* Header section */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center mb-16 md:mb-24">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-teal mb-6 block drop-shadow-sm">
          NUESTROS PRODUCTOS
        </p>
        <h2 className="font-fraunces text-4xl md:text-5xl lg:text-[64px] font-semibold text-charcoal leading-[1.1] uppercase tracking-wider mb-6 drop-shadow-md">
          Descubrí nuestros <span className="text-highlight font-light normal-case">quesos de autor</span>
        </h2>
        <div className="w-16 h-px bg-wheat mx-auto mb-8"></div>
        <p className="text-base md:text-lg font-light text-charcoal/80 max-w-2xl mx-auto leading-relaxed">
          Todos nuestros productos están elaborados 100% con leche de oveja y con un profundo respeto por la elaboración artesanal.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {categories.map((cat, idx) => (
          <div key={idx} className="product-card group relative aspect-square sm:aspect-[4/3] md:aspect-[4/5] rounded-[32px] overflow-hidden shadow-xl hover:shadow-2xl border border-white/40 transition-all duration-700 hover:-translate-y-3 bg-white">
            <Link href={cat.link} className="absolute inset-0 z-20">
              <div className="relative w-full h-full">
                <Image 
                  src={cat.image} 
                  alt={cat.title} 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-110" 
                  sizes="(max-width: 768px) 100vw, 33vw" 
                />
                
                {/* Glassmorphism Overlays */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-700 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/40 to-transparent opacity-90 z-10" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 backdrop-blur-[2px] transition-opacity duration-700 z-10" />
                
                {/* Content container */}
                <div className="absolute inset-x-0 bottom-0 p-8 md:p-10 z-20 text-left flex flex-col gap-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-wheat-light opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                    {cat.subtitle}
                  </p>
                  <h3 className="font-fraunces text-2xl md:text-3xl font-medium text-white tracking-wide uppercase">
                    {cat.title}
                  </h3>
                  <p className="text-xs md:text-sm font-light text-white/90 leading-relaxed mt-1 max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100 transition-all duration-700 overflow-hidden">
                    {cat.desc}
                  </p>
                  
                  <span className="inline-flex items-center gap-3 text-xs font-semibold text-white uppercase tracking-widest mt-4 group/btn">
                    Ver Variedades
                    <span className="w-8 h-px bg-white/50 group-hover/btn:w-12 group-hover/btn:bg-white transition-all duration-500"></span>
                    <svg className="w-3.5 h-3.5 transform group-hover/btn:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
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

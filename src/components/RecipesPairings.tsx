'use client';
import React from 'react';

interface VideoItem {
  id: number;
  title: string;
  author: string;
  instagramUrl: string;
  instagramHandle: string;
  videoUrl: string;
}

const videoItems: VideoItem[] = [
  {
    id: 1,
    title: 'Amaru Tandil',
    author: 'Restaurante & Experiencia',
    instagramUrl: 'https://www.instagram.com/amaru_tandil/',
    instagramHandle: '@amaru_tandil',
    videoUrl: '/assets/Quesos Zampa/Recetas/amaru tandil.mp4',
  },
  {
    id: 2,
    title: 'Charcutería Artesanal',
    author: 'Chef Daniel Alberto Techeyro',
    instagramUrl: 'https://www.instagram.com/danielalbertotecheyro/',
    instagramHandle: '@danielalbertotecheyro',
    videoUrl: '/assets/Quesos Zampa/Recetas/charcuteria.mp4',
  },
  {
    id: 3,
    title: 'Don Rosendo Tandil',
    author: 'Gastronomía Local',
    instagramUrl: 'https://www.instagram.com/donrosendotandil/',
    instagramHandle: '@donrosendotandil',
    videoUrl: '/assets/Quesos Zampa/Recetas/don rosendo.mp4',
  },
  {
    id: 4,
    title: 'Pecorino en Salumería',
    author: 'Bocado Salumería',
    instagramUrl: 'https://www.instagram.com/bocadosalumeria/',
    instagramHandle: '@bocadosalumeria',
    videoUrl: '/assets/Quesos Zampa/Recetas/pecorino-prueba.mp4',
  },
  {
    id: 5,
    title: 'Queso Brie Zampa',
    author: 'Quesería Zampa',
    instagramUrl: 'https://www.instagram.com/quesoszampa/',
    instagramHandle: '@quesoszampa',
    videoUrl: '/assets/Quesos Zampa/Recetas/queso-brie.mp4',
  },
];

export default function RecipesPairings() {
  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-light uppercase tracking-wide text-charcoal mb-4">
          Nuestros Quesos en Acción
        </h2>
        <p className="text-charcoal/80 font-light max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          Descubrí cómo chefs, restaurantes y amigos de la casa preparan y disfrutan los quesos de Zampa en sus propias cocinas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videoItems.map((item) => (
          <div 
            key={item.id} 
            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-charcoal/5 flex flex-col justify-between"
          >
            {/* Video Player (No autoplay) */}
            <div className="relative aspect-[9/16] bg-black max-h-[450px] w-full overflow-hidden">
              <video 
                src={item.videoUrl} 
                controls 
                preload="metadata" 
                className="w-full h-full object-contain"
              />
            </div>

            {/* Video Details & Link */}
            <div className="p-6 flex flex-col gap-3">
              <div>
                <h3 className="text-xl font-medium text-charcoal uppercase tracking-wide">
                  {item.title}
                </h3>
                <p className="text-sm text-charcoal/70 font-light">
                  {item.author}
                </p>
              </div>

              <div className="pt-3 border-t border-charcoal/10 flex items-center justify-between">
                <a 
                  href={item.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#6B4226] hover:text-charcoal transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>{item.instagramHandle}</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

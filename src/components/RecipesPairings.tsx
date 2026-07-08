'use client';
import React from 'react';
import DecoratedTitle from '@/components/ui/DecoratedTitle';

export default function RecipesPairings() {
  const images = [
    '/assets/Quesos Zampa/Recetas/receta_1.jpg',
    '/assets/Quesos Zampa/Recetas/receta_2.jpg',
    '/assets/Quesos Zampa/Recetas/receta_3.jpg',
    '/assets/Quesos Zampa/Recetas/receta_4.jpg',
    '/assets/Quesos Zampa/Recetas/receta_5.jpg',
    '/assets/Quesos Zampa/Recetas/receta_6.jpg',
  ];

  return (
    <section className="recipes-pairings">
      <div className="recipes-header">
        <DecoratedTitle className="editorial-title">Recetas y Maridajes</DecoratedTitle>
      </div>

      <div className="recipes-photo-grid">
        {images.map((img, index) => (
          <div key={index} className="recipe-photo-item">
            <img src={img} alt={`Receta Zampa ${index + 1}`} loading="lazy" />
            <div className="recipe-photo-overlay">
              <span>Ver Receta</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

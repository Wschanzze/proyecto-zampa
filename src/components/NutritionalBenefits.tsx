'use client';
import React from 'react';

interface NutritionalBenefitsProps {
  isVintage?: boolean;
}

export default function NutritionalBenefits({ isVintage = false }: NutritionalBenefitsProps) {
  return (
    <section className={`benefits-section ${isVintage ? 'vintage-ad' : ''}`}>
      <div className="benefits-header">
        {!isVintage && (
          <p className="story-subtitle" style={{ textAlign: 'center' }}>
            NUESTRA MATERIA PRIMA
          </p>
        )}
        <h2 className={isVintage ? '' : 'story-title'} style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          BENEFICIOS DE LA LECHE DE OVEJA
        </h2>
        <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', color: 'var(--clr-text-light)' }}>
          La leche de oveja se destaca por su alto valor nutricional, especialmente por su contenido de proteínas, minerales y grasa, lo que la convierte en un alimento altamente beneficioso para la digestión y la salud general.
        </p>
      </div>

      <div className="benefits-grid">
        <div className="benefit-card">
          <div className="benefit-image">
            <img src="/assets/Quesos Zampa/IMG_9858.JPG" alt="Proteínas y digestión en Zampa" />
          </div>
          <h3>Proteínas y Digestión</h3>
          <p>
            Contiene una mayor cantidad de proteínas, donde casi el 80% es caseína. Posee una muy baja concentración de beta-caseína A1 (asociada a trastornos digestivos). Casi la totalidad es la <strong>variante A2</strong>, haciéndola mucho más segura y beneficiosa para la salud intestinal.
          </p>
        </div>

        <div className="benefit-card">
          <div className="benefit-image">
            <img src="/assets/Quesos Zampa/IMG_0019.JPG" alt="Minerales esenciales y ovejas Zampa" />
          </div>
          <h3>Minerales Esenciales</h3>
          <p>
            La elevada cantidad de proteínas está directamente relacionada con un mayor contenido de minerales esenciales. Destacan el <strong>Calcio</strong> y el <strong>Fósforo</strong>, fundamentales para contribuir a la fortaleza y salud de nuestro sistema óseo.
          </p>
        </div>

        <div className="benefit-card">
          <div className="benefit-image">
            <img src="/assets/Quesos Zampa/tipos de quesos.jpg" alt="Quesos y grasas saludables" />
          </div>
          <h3>Grasas Saludables</h3>
          <p>
            Aunque posee mayor cantidad de grasa, presenta un <strong>menor contenido de colesterol</strong> en comparación con otras leches. Sus glóbulos de grasa son más pequeños, lo que facilita su descomposición y la hace más fácil y ligera de digerir.
          </p>
        </div>
      </div>
    </section>
  );
}

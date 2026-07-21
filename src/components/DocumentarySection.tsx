import React from 'react';

export default function DocumentarySection() {
  return (
    <section className="py-16 px-4 md:px-8 max-w-5xl mx-auto text-center">
      <div className="mb-8">
        <p className="text-xs font-medium uppercase tracking-widest text-teal mb-3">DOCUMENTAL</p>
        <h2 className="text-3xl md:text-4xl font-light uppercase tracking-wide text-charcoal mb-4">
          Conoce Más de Zampa
        </h2>
        <p className="text-umber-light font-light text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          Te invitamos a ver el siguiente documental sobre nuestros orígenes, nuestro tambo pastoril 
          y el testimonio directo de Juan Cruz e Isabel en su día a día.
        </p>
      </div>
      <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl bg-black">
        <iframe 
          src="https://www.youtube.com/embed/-Zb6oeexldo" 
          title="Documental Zampa - Tambo Ovino y Quesería en Tandil" 
          className="absolute inset-0 w-full h-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}

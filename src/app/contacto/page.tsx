'use client';
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingPill from '@/components/home/FloatingPill';
import DecoratedTitle from '@/components/ui/DecoratedTitle';

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format WhatsApp message with form data
    const messageText = `¡Hola! Te contacto desde la web de Quesos Zampa.\n\nNombre: ${formData.name}\nEmail: ${formData.email}\nAsunto: ${formData.subject}\nMensaje: ${formData.message}`;
    const whatsappUrl = `https://wa.me/5491132554757?text=${encodeURIComponent(messageText)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    // Show success toast locally
    setToastMessage('¡Redirigiendo a WhatsApp para enviar el mensaje!');
    setTimeout(() => {
      setToastMessage(null);
    }, 5000);

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-cream relative">
      <Header />

      <section className="contacto-page px-[5%] py-24 pt-32">
        <div className="section-header text-center mb-16">
          <p className="text-xs font-medium uppercase tracking-widest text-teal mb-3">COMUNICATE CON NOSOTROS</p>
          <DecoratedTitle className="editorial-title">Contacto</DecoratedTitle>
          <p className="text-umber-light font-light text-base leading-relaxed max-w-2xl mx-auto mt-4">
            ¿Querés saber más sobre nuestros quesos, coordinar una compra especial o visitarnos en Napaleofú? Dejanos tu mensaje.
          </p>
        </div>

        <div className="b2b-layout max-w-7xl mx-auto">
          {/* Info Column */}
          <div className="b2b-specs-container rounded-lg flex flex-col gap-8">
            <div>
              <h3 className="vintage-header font-light uppercase">ATENCIÓN DIRECTA</h3>
              <p className="text-sm mt-2 text-charcoal leading-relaxed">
                Estamos en Napaleofú, en el partido de Balcarce, cerca de Tandil, Provincia de Buenos Aires, Argentina.
              </p>
            </div>

            <div className="spec-row">
              <span className="spec-label">WhatsApp</span>
              <a 
                href="https://wa.me/5491132554757?text=%C2%A1Hola!%20Te%20contacto%20desde%20su%20sitio%20web.%20Me%20gustar%C3%ADa%20hacerles%20una%20consulta." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-lg text-teal font-semibold hover:text-teal-light transition-colors"
              >
                +54 9 11 3255-4757
              </a>
            </div>

            <div className="spec-row">
              <span className="spec-label">Correo Electrónico</span>
              <a 
                href="mailto:hola@quesoszampa.com" 
                className="text-base text-charcoal hover:text-teal transition-colors"
              >
                hola@quesoszampa.com
              </a>
            </div>

            <div className="spec-row">
              <span className="spec-label">Ubicación del Tambo</span>
              <span className="text-base text-charcoal font-medium">
                Napaleofú, Tandil • Buenos Aires, Argentina
              </span>
            </div>

            <div className="b2b-notes p-6 bg-limestone-soft/40 border-l-4 border-umber rounded-r-lg">
              <h5 className="font-semibold text-umber">🌿 Sistema Pastoril de Alta Calidad</h5>
              <p className="text-sm mt-2 text-charcoal leading-relaxed">
                Nuestras ovejas se crían en pasturas libres, lo que otorga a la leche y a los quesos características sensoriales únicas que varían con las estaciones del año.
              </p>
            </div>
          </div>

          {/* Form Column */}
          <div className="b2b-form-container rounded-lg">
            <h3 className="vintage-header font-light uppercase">ENVIANOS UN MENSAJE</h3>
            <form className="b2b-form mt-6" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nombre Completo *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Correo Electrónico *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Asunto *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Mensaje *</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="w-full py-4 border border-limestone bg-limestone-soft text-charcoal hover:bg-umber hover:text-white transition-all duration-300 font-semibold tracking-wider uppercase text-sm rounded">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 bg-limestone-soft border border-umber/30 text-umber px-6 py-3 rounded-lg shadow-lg font-medium tracking-wide animate-fade-in text-sm text-center">
          {toastMessage}
        </div>
      )}

      <Footer />
      <FloatingPill />
    </div>
  );
}

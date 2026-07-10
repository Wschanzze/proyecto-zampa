'use client';
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingPill from '@/app/home/components/FloatingPill';
import { generateWhatsAppLink, createResellerMessage, WHATSAPP_NUMBER } from '@/utils/whatsapp';

export default function RevendedoresPage() {
  const [formData, setFormData] = useState({
    businessName: '',
    taxId: '',
    contactName: '',
    email: '',
    phone: '',
    businessType: 'distributor',
    location: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = createResellerMessage(formData);
    const link = generateWhatsAppLink(WHATSAPP_NUMBER, message);
    window.location.href = link;
    setFormData({
      businessName: '',
      taxId: '',
      contactName: '',
      email: '',
      phone: '',
      businessType: 'distributor',
      location: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-cream">
      <Header />

      {/* HERO SECTION */}
      <header className="products-hero">
        <img 
          src="/assets/Quesos Zampa/IMG_9858.JPG" 
          alt="Revendedores - Quesos Zampa" 
          className="products-hero-bg" 
        />
        <div className="products-hero-overlay"></div>
        <div className="products-hero-content">
          <p className="hero-subtitle">ALIANZAS COMERCIALES</p>
          <h1 className="hero-title font-light uppercase">Revendedores</h1>
          <p className="hero-description">
            Llevá el sabor único de nuestros quesos de oveja pastoriles a tu restaurante, fiambrería o red de distribución. Simplificamos tu logística y te ofrecemos condiciones comerciales estratégicas.
          </p>
        </div>
      </header>

      <section className="b2b-page px-[5%] py-16">

        {/* Strategic Information Cards */}
        <div className="b2b-info-grid mb-20">
          <div className="b2b-card rounded-lg">
            <div className="b2b-card-image">
              <img src="/assets/Quesos Zampa/IMG_9821.JPG" alt="Pedido Mínimo" />
            </div>
            <h4>PEDIDO MÍNIMO</h4>
            <p>Manejamos volúmenes flexibles adaptados tanto a pequeñas tiendas gourmet y restaurantes de autor como a grandes distribuidores regionales.</p>
            <span className="b2b-spec">Mínimo: 10 kg de hormas mixtas</span>
          </div>

          <div className="b2b-card rounded-lg">
            <div className="b2b-card-image">
              <img src="/assets/Quesos Zampa/6de54990-a007-4692-8898-b1dda1296784.jpg" alt="Logística y Cobertura" />
            </div>
            <h4>LOGÍSTICA Y COBERTURA</h4>
            <p>Despachamos directamente desde nuestro tambo con cadena de frío garantizada. Coordinamos entregas semanales programadas.</p>
            <span className="b2b-spec">Envíos a todo el país</span>
          </div>

          <div className="b2b-card rounded-lg">
            <div className="b2b-card-image">
              <img src="/assets/Quesos Zampa/IMG_9858.JPG" alt="Conservación y Vida Útil" />
            </div>
            <h4>CONSERVACIÓN Y VIDA ÚTIL</h4>
            <p>Nuestros quesos se entregan envasados al vacío, con rotulación clara, garantizando una excelente durabilidad en cámara.</p>
            <span className="b2b-spec">Vida útil: 180 días (envasado)</span>
          </div>

          <div className="b2b-card rounded-lg">
            <div className="b2b-card-image">
              <img src="/assets/Quesos Zampa/tipos de quesos.jpg" alt="Soporte de Ventas" />
            </div>
            <h4>SOPORTE DE VENTAS</h4>
            <p>Te brindamos material POP, fichas técnicas de producto, capacitación para tu personal de ventas y apoyo en degustaciones.</p>
            <span className="b2b-spec">Material digital & folletería gratis</span>
          </div>
        </div>

        {/* Main Content Layout (Table & Form) */}
        <div className="b2b-layout max-w-7xl mx-auto">
          {/* Specifications Section */}
          <div className="b2b-specs-container rounded-lg">
            <h3 className="vintage-header font-light uppercase">DATOS ESTRATÉGICOS PARA PROVEEDORES</h3>
            <p className="text-sm text-charcoal mb-6">
              Agilizamos tus compras con información técnica detallada de nuestros productos estrella:
            </p>

            <table className="b2b-table">
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Formato de Horma</th>
                  <th>Maduración</th>
                  <th>Temperatura de Conservación</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Pecorino Zampa</strong></td>
                  <td>Horma entera (~2.5 kg) o Cuñas (~300g)</td>
                  <td>6 a 8 meses</td>
                  <td>4°C a 8°C</td>
                </tr>
                <tr>
                  <td><strong>Ahumado Zampa</strong></td>
                  <td>Hormitas individuales (~1 kg)</td>
                  <td>3 meses + ahumado natural</td>
                  <td>4°C a 10°C</td>
                </tr>
                <tr>
                  <td><strong>Queso al Orégano</strong></td>
                  <td>Hormitas individuales (~1.2 kg)</td>
                  <td>2 meses</td>
                  <td>4°C a 8°C</td>
                </tr>
                <tr>
                  <td><strong>Manchego Zampa</strong></td>
                  <td>Horma grande (~3 kg)</td>
                  <td>9 meses</td>
                  <td>4°C a 8°C</td>
                </tr>
              </tbody>
            </table>

            <div className="b2b-notes mt-8 p-6 bg-limestone-soft/40 border-l-4 border-umber rounded-r-lg">
              <h5 className="font-semibold text-umber">📌 Canales Integrados y Facturación</h5>
              <p className="text-sm mt-2 text-charcoal leading-relaxed">
                Ofrecemos facturación formal con RUT/CUIT, fichas de trazabilidad sanitaria aprobadas y facilidades de pago a 30 días para cuentas corrientes corporativas homologadas.
              </p>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="b2b-form-container rounded-lg">
            <h3 className="vintage-header font-light uppercase">SOLICITUD DE ALTA PARA REVENDEDORES</h3>
            <form className="b2b-form mt-6" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="businessName">Razón Social / Nombre Comercial *</label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  required
                  placeholder="Ej. Distribuidora Gourmet S.A."
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="taxId">Identificación Tributaria (RUT/CUIT) *</label>
                  <input
                    type="text"
                    id="taxId"
                    name="taxId"
                    value={formData.taxId}
                    onChange={handleChange}
                    required
                    placeholder="Número de registro"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="businessType">Tipo de Negocio *</label>
                  <select
                    id="businessType"
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    required
                  >
                    <option value="distributor">Distribuidor</option>
                    <option value="restaurant">Restaurante / Hotel</option>
                    <option value="cheese_shop">Fiambrería / Tienda Gourmet</option>
                    <option value="supermarket">Supermercado / Cadena</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="contactName">Nombre de Contacto *</label>
                <input
                  type="text"
                  id="contactName"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleChange}
                  required
                  placeholder="Nombre del comprador/encargado"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Corporativo *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="compras@tuempresa.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Teléfono de Contacto *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Número de teléfono/WhatsApp"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="location">Ubicación / Ciudad y País *</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  placeholder="Ej. Montevideo, Uruguay"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Comentarios o Requerimientos Particulares</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Detalla qué volumen estimas comprar, qué quesos te interesan y cualquier otra consulta..."
                ></textarea>
              </div>

              <button type="submit" className="w-full py-4 border border-limestone bg-limestone-soft text-charcoal hover:bg-umber hover:text-white transition-all duration-300 font-semibold tracking-wider uppercase text-sm rounded flex items-center justify-center gap-2">
                Enviar Solicitud de Revendedor
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingPill />
    </div>
  );
}

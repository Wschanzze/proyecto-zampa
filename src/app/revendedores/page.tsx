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
    <div className="min-h-screen bg-limestone-soft">
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

      <section className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">

        {/* Strategic Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          <div className="group bg-white border border-charcoal/5 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col">
            <div className="relative h-48 w-full overflow-hidden">
              <img 
                src="/assets/Quesos Zampa/IMG_9821.JPG" 
                alt="Pedido Mínimo" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
            </div>
            <div className="p-8 flex flex-col flex-grow text-left">
              <span className="text-[10px] font-bold text-[#C9A84C] tracking-[0.2em] uppercase mb-2">Información</span>
              <h4 className="text-lg font-light tracking-wide uppercase text-charcoal mb-3">PEDIDO MÍNIMO</h4>
              <p className="text-sm font-light text-charcoal/70 leading-relaxed mb-6 flex-grow">Manejamos volúmenes flexibles adaptados tanto a pequeñas tiendas gourmet y restaurantes de autor como a grandes distribuidores regionales.</p>
              <div className="border-t border-charcoal/5 pt-4">
                <span className="text-[11px] font-semibold text-charcoal/80 uppercase tracking-wider">Mínimo: 10 kg de hormas mixtas</span>
              </div>
            </div>
          </div>

          <div className="group bg-white border border-charcoal/5 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col">
            <div className="relative h-48 w-full overflow-hidden">
              <img 
                src="/assets/Quesos Zampa/6de54990-a007-4692-8898-b1dda1296784.jpg" 
                alt="Logística y Cobertura" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
            </div>
            <div className="p-8 flex flex-col flex-grow text-left">
              <span className="text-[10px] font-bold text-[#C9A84C] tracking-[0.2em] uppercase mb-2">Información</span>
              <h4 className="text-lg font-light tracking-wide uppercase text-charcoal mb-3">LOGÍSTICA Y COBERTURA</h4>
              <p className="text-sm font-light text-charcoal/70 leading-relaxed mb-6 flex-grow">Despachamos directamente desde nuestro tambo con cadena de frío garantizada. Coordinamos entregas semanales programadas.</p>
              <div className="border-t border-charcoal/5 pt-4">
                <span className="text-[11px] font-semibold text-charcoal/80 uppercase tracking-wider">Envíos a todo el país</span>
              </div>
            </div>
          </div>

          <div className="group bg-white border border-charcoal/5 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col">
            <div className="relative h-48 w-full overflow-hidden">
              <img 
                src="/assets/Quesos Zampa/IMG_9858.JPG" 
                alt="Conservación y Vida Útil" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
            </div>
            <div className="p-8 flex flex-col flex-grow text-left">
              <span className="text-[10px] font-bold text-[#C9A84C] tracking-[0.2em] uppercase mb-2">Información</span>
              <h4 className="text-lg font-light tracking-wide uppercase text-charcoal mb-3">CONSERVACIÓN Y VIDA ÚTIL</h4>
              <p className="text-sm font-light text-charcoal/70 leading-relaxed mb-6 flex-grow">Nuestros quesos se entregan envasados al vacío, con rotulación clara, garantizando una excelente durabilidad en cámara.</p>
              <div className="border-t border-charcoal/5 pt-4">
                <span className="text-[11px] font-semibold text-charcoal/80 uppercase tracking-wider">Vida útil: 180 días (envasado)</span>
              </div>
            </div>
          </div>

          <div className="group bg-white border border-charcoal/5 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col">
            <div className="relative h-48 w-full overflow-hidden">
              <img 
                src="/assets/Quesos Zampa/tipos de quesos.jpg" 
                alt="Soporte de Ventas" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
            </div>
            <div className="p-8 flex flex-col flex-grow text-left">
              <span className="text-[10px] font-bold text-[#C9A84C] tracking-[0.2em] uppercase mb-2">Información</span>
              <h4 className="text-lg font-light tracking-wide uppercase text-charcoal mb-3">SOPORTE DE VENTAS</h4>
              <p className="text-sm font-light text-charcoal/70 leading-relaxed mb-6 flex-grow">Te brindamos material POP, fichas técnicas de producto, capacitación para tu personal de ventas y apoyo en degustaciones.</p>
              <div className="border-t border-charcoal/5 pt-4">
                <span className="text-[11px] font-semibold text-charcoal/80 uppercase tracking-wider">Material digital & folletería gratis</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Layout (Table & Form) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-7xl mx-auto">
          {/* Specifications Section */}
          <div className="lg:col-span-7 bg-white p-8 lg:p-12 rounded-2xl border border-charcoal/5 shadow-sm text-left">
            <div className="flex flex-col gap-3 mb-6">
              <span className="text-[10px] font-bold text-[#C9A84C] tracking-[0.25em] uppercase">B2B / Proveedores</span>
              <h3 className="text-2xl md:text-3xl font-light text-charcoal tracking-wide uppercase">DATOS ESTRATÉGICOS</h3>
              <div className="w-12 h-[2px] bg-[#C9A84C]"></div>
            </div>
            <p className="text-sm font-light text-charcoal/70 leading-relaxed mb-8">
              Agilizamos tus compras con información técnica detallada de nuestros productos estrella:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-charcoal/10">
                    <th className="py-4 px-2 text-[10px] font-bold text-charcoal/50 tracking-[0.15em] uppercase font-sans">Producto</th>
                    <th className="py-4 px-2 text-[10px] font-bold text-charcoal/50 tracking-[0.15em] uppercase font-sans">Formato de Horma</th>
                    <th className="py-4 px-2 text-[10px] font-bold text-charcoal/50 tracking-[0.15em] uppercase font-sans">Maduración</th>
                    <th className="py-4 px-2 text-[10px] font-bold text-charcoal/50 tracking-[0.15em] uppercase font-sans">Temperatura</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-charcoal/5">
                  <tr className="hover:bg-limestone-soft/40 transition-colors duration-200">
                    <td className="py-4 px-2 text-sm font-bold text-charcoal">Pecorino Zampa</td>
                    <td className="py-4 px-2 text-sm font-light text-charcoal/80">Horma entera (~2.5 kg) o Cuñas (~300g)</td>
                    <td className="py-4 px-2 text-sm font-light text-charcoal/80">6 a 8 meses</td>
                    <td className="py-4 px-2 text-sm font-light text-[#C9A84C]">4°C a 8°C</td>
                  </tr>
                  <tr className="hover:bg-limestone-soft/40 transition-colors duration-200">
                    <td className="py-4 px-2 text-sm font-bold text-charcoal">Ahumado Zampa</td>
                    <td className="py-4 px-2 text-sm font-light text-charcoal/80">Hormitas individuales (~1 kg)</td>
                    <td className="py-4 px-2 text-sm font-light text-charcoal/80">3 meses + ahumado natural</td>
                    <td className="py-4 px-2 text-sm font-light text-[#C9A84C]">4°C a 10°C</td>
                  </tr>
                  <tr className="hover:bg-limestone-soft/40 transition-colors duration-200">
                    <td className="py-4 px-2 text-sm font-bold text-charcoal">Queso al Orégano</td>
                    <td className="py-4 px-2 text-sm font-light text-charcoal/80">Hormitas individuales (~1.2 kg)</td>
                    <td className="py-4 px-2 text-sm font-light text-charcoal/80">2 meses</td>
                    <td className="py-4 px-2 text-sm font-light text-[#C9A84C]">4°C a 8°C</td>
                  </tr>
                  <tr className="hover:bg-limestone-soft/40 transition-colors duration-200">
                    <td className="py-4 px-2 text-sm font-bold text-charcoal">Manchego Zampa</td>
                    <td className="py-4 px-2 text-sm font-light text-charcoal/80">Horma grande (~3 kg)</td>
                    <td className="py-4 px-2 text-sm font-light text-charcoal/80">9 meses</td>
                    <td className="py-4 px-2 text-sm font-light text-[#C9A84C]">4°C a 8°C</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 p-6 bg-limestone-soft/50 border-l-2 border-[#C9A84C] rounded-r-2xl">
              <h5 className="text-xs font-bold text-charcoal uppercase tracking-[0.15em] mb-1.5">📌 Canales Integrados y Facturación</h5>
              <p className="text-sm font-light text-charcoal/70 leading-relaxed">
                Ofrecemos facturación formal con RUT/CUIT, fichas de trazabilidad sanitaria aprobadas y facilidades de pago a 30 días para cuentas corrientes corporativas homologadas.
              </p>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="lg:col-span-5 bg-white p-8 lg:p-12 rounded-2xl border border-charcoal/5 shadow-sm text-left">
            <div className="flex flex-col gap-3 mb-6">
              <span className="text-[10px] font-bold text-[#C9A84C] tracking-[0.25em] uppercase">Alta Proveedores</span>
              <h3 className="text-2xl md:text-3xl font-light text-charcoal tracking-wide uppercase">SOLICITUD DE ALTA</h3>
              <div className="w-12 h-[2px] bg-[#C9A84C]"></div>
            </div>
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="businessName" className="text-[9px] font-bold tracking-[0.2em] uppercase text-charcoal/50">Razón Social / Nombre Comercial *</label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  required
                  placeholder="Ej. Distribuidora Gourmet S.A."
                  className="w-full px-4 py-3 bg-limestone-soft/40 border border-charcoal/10 rounded-lg text-sm text-charcoal placeholder-charcoal/30 focus:outline-none focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C] transition-all duration-200"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="taxId" className="text-[9px] font-bold tracking-[0.2em] uppercase text-charcoal/50">Identificación (RUT/CUIT) *</label>
                  <input
                    type="text"
                    id="taxId"
                    name="taxId"
                    value={formData.taxId}
                    onChange={handleChange}
                    required
                    placeholder="Número de registro"
                    className="w-full px-4 py-3 bg-limestone-soft/40 border border-charcoal/10 rounded-lg text-sm text-charcoal placeholder-charcoal/30 focus:outline-none focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C] transition-all duration-200"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="businessType" className="text-[9px] font-bold tracking-[0.2em] uppercase text-charcoal/50">Tipo de Negocio *</label>
                  <select
                    id="businessType"
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-limestone-soft/40 border border-charcoal/10 rounded-lg text-sm text-charcoal focus:outline-none focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C] transition-all duration-200"
                  >
                    <option value="distributor">Distribuidor</option>
                    <option value="restaurant">Restaurante / Hotel</option>
                    <option value="cheese_shop">Fiambrería / Tienda Gourmet</option>
                    <option value="supermarket">Supermercado / Cadena</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="contactName" className="text-[9px] font-bold tracking-[0.2em] uppercase text-charcoal/50">Nombre de Contacto *</label>
                <input
                  type="text"
                  id="contactName"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleChange}
                  required
                  placeholder="Nombre del comprador/encargado"
                  className="w-full px-4 py-3 bg-limestone-soft/40 border border-charcoal/10 rounded-lg text-sm text-charcoal placeholder-charcoal/30 focus:outline-none focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C] transition-all duration-200"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-[9px] font-bold tracking-[0.2em] uppercase text-charcoal/50">Email Corporativo *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="compras@tuempresa.com"
                    className="w-full px-4 py-3 bg-limestone-soft/40 border border-charcoal/10 rounded-lg text-sm text-charcoal placeholder-charcoal/30 focus:outline-none focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C] transition-all duration-200"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" className="text-[9px] font-bold tracking-[0.2em] uppercase text-charcoal/50">Teléfono / WhatsApp *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Número con WhatsApp"
                    className="w-full px-4 py-3 bg-limestone-soft/40 border border-charcoal/10 rounded-lg text-sm text-charcoal placeholder-charcoal/30 focus:outline-none focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C] transition-all duration-200"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="location" className="text-[9px] font-bold tracking-[0.2em] uppercase text-charcoal/50">Ubicación / Ciudad y País *</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  placeholder="Ej. Tandil, Buenos Aires"
                  className="w-full px-4 py-3 bg-limestone-soft/40 border border-charcoal/10 rounded-lg text-sm text-charcoal placeholder-charcoal/30 focus:outline-none focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C] transition-all duration-200"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-[9px] font-bold tracking-[0.2em] uppercase text-charcoal/50">Comentarios o Requerimientos</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Detalla qué volumen estimas comprar, qué quesos te interesan..."
                  className="w-full px-4 py-3 bg-limestone-soft/40 border border-charcoal/10 rounded-lg text-sm text-charcoal placeholder-charcoal/30 focus:outline-none focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C] transition-all duration-200 resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full flex items-center justify-center gap-2 h-14 rounded-full bg-charcoal text-white font-bold text-[10px] sm:text-xs hover:bg-[#C9A84C] hover:scale-[1.02] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.1)] tracking-[0.15em] uppercase px-8 mt-2"
              >
                <span>Enviar Solicitud</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="w-4 h-4">
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

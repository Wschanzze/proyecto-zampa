export const WHATSAPP_NUMBER = "5491132554757";

export const generateWhatsAppLink = (phoneNumber: string, message: string) => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};

export interface ResellerFormData {
  businessName: string;
  taxId: string;
  contactName: string;
  email: string;
  phone: string;
  businessType: string;
  location: string;
  message: string;
}

export const createResellerMessage = (formData: ResellerFormData) => {
  const businessTypeMap: Record<string, string> = {
    distributor: "Distribuidor",
    restaurant: "Restaurante / Hotel",
    cheese_shop: "Fiambrería / Tienda Gourmet",
    supermarket: "Supermercado / Cadena"
  };
  
  return `¡Hola, equipo de Zampa! 🧀

Espero que se encuentren muy bien. Me pongo en contacto a través del sitio web con el fin de solicitar el alta como revendedor de sus quesos. A continuación, les comparto los datos de mi negocio:

💼 *Razón Social:* ${formData.businessName}
🆔 *Identificación Tributaria (RUT/CUIT):* ${formData.taxId}
🏢 *Tipo de Negocio:* ${businessTypeMap[formData.businessType] || formData.businessType}
👤 *Persona de Contacto:* ${formData.contactName}
📧 *Correo Electrónico:* ${formData.email}
📞 *Teléfono:* ${formData.phone}
📍 *Ubicación:* ${formData.location}
${formData.message ? `\n📝 *Comentarios/Requerimientos:* \n${formData.message}\n` : ''}
Agradezco de antemano su atención y quedo a la espera de su respuesta para conocer sus condiciones comerciales.

Saludos cordiales.`;
};

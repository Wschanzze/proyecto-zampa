import React from 'react';

const QuickContact = () => {
  const contacts = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      ),
      title: "Teléfono:",
      desc: "+54 9 249 123-4567"
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>
        </svg>
      ),
      title: "Ubicación:",
      desc: "Tandil, Buenos Aires, Argentina"
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      ),
      title: "Email:",
      desc: "contacto@quesoszampa.com"
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      ),
      title: "Horarios:",
      desc: "Lun — Vie: 9am – 6pm\nSábados: 9am – 1pm"
    }
  ];

  return (
    <section className="quick-contact-section">
      <div className="quick-contact-intro">
        <h6 className="qc-subtitle">VISÍTANOS O ESCRÍBENOS</h6>
        <h2 className="qc-title">¿Por qué nuestros quesos son tan deliciosos? ¡Descubre el secreto!</h2>
      </div>
      <div className="quick-contact-grid">
        {contacts.map((item, idx) => (
          <div key={idx} className="qc-item">
            <div className="qc-icon">{item.icon}</div>
            <div className="qc-text">
              <span className="qc-item-title">{item.title}</span>
              <span className="qc-item-desc" style={{ whiteSpace: 'pre-line' }}>{item.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QuickContact;

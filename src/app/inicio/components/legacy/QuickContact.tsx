import React from 'react';

const QuickContact = () => {
  const contacts = [
    {
      icon: (
        <svg className="w-5 h-5 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      ),
      title: "Teléfono / WhatsApp",
      desc: "+54 9 11 3255-4757",
      href: "https://wa.me/5491132554757?text=%C2%A1Hola!%20Te%20contacto%20desde%20su%20sitio%20web.%20Me%20gustar%C3%ADa%20hacerles%20una%20consulta."
    },
    {
      icon: (
        <svg className="w-5 h-5 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>
        </svg>
      ),
      title: "Ubicación",
      desc: "Napaleofú, Tandil\nBuenos Aires, Argentina",
      href: "https://maps.google.com/?q=Napaleof%C3%BA,+Tandil,+Buenos+Aires,+Argentina"
    },
    {
      icon: (
        <svg className="w-5 h-5 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      ),
      title: "Email",
      desc: "hola@quesoszampa.com",
      href: "mailto:hola@quesoszampa.com"
    },
    {
      icon: (
        <svg className="w-5 h-5 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      ),
      title: "Horarios",
      desc: "Lun — Vie: 9am – 6pm\nSábados: 9am – 1pm"
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-teal mb-3 block">ATENCIÓN Y CONSULTAS</span>
          <h2 className="text-3xl md:text-4xl font-light text-charcoal leading-tight max-w-xl mx-auto uppercase tracking-[0.06em]">
            Estemos en contacto
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contacts.map((item, idx) => (
            <div key={idx} className="flex gap-4 p-6 rounded-xl bg-[#FAF8F5]/60 hover:bg-[#FAF8F5] border border-teal/5 hover:border-teal/10 shadow-sm hover:shadow-md transition-all duration-300 items-start text-left">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal/5 flex items-center justify-center text-teal">
                {item.icon}
              </div>
              <div className="flex flex-col min-h-[60px] justify-center">
                <h4 className="text-xs font-bold tracking-wider uppercase text-charcoal/55 mb-1.5">{item.title}</h4>
                {item.href ? (
                  <a 
                    href={item.href}
                    target={item.href.startsWith('http') ? "_blank" : undefined}
                    rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
                    className="text-sm font-light text-charcoal hover:text-teal transition-colors whitespace-pre-line leading-relaxed"
                  >
                    {item.desc}
                  </a>
                ) : (
                  <p className="text-sm font-light text-charcoal whitespace-pre-line leading-relaxed">{item.desc}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickContact;

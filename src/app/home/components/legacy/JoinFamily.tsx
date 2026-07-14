import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Icon from '@/components/ui/AppIcon';

const JoinFamily = () => {
  const contacts = [
    {
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      ),
      title: "Teléfono / WhatsApp",
      desc: "+54 9 11 3255-4757",
      href: "https://wa.me/5491132554757?text=%C2%A1Hola!%20Te%20contacto%20desde%20su%20sitio%20web.%20Me%20gustar%C3%ADa%20hacerles%20una%20consulta."
    },
    {
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>
        </svg>
      ),
      title: "Ubicación",
      desc: "Napaleofú, Tandil\nBuenos Aires, Argentina",
      href: "https://maps.google.com/?q=Napaleof%C3%BA,+Tandil,+Buenos+Aires,+Argentina"
    },
    {
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      ),
      title: "Email",
      desc: "hola@quesoszampa.com",
      href: "mailto:hola@quesoszampa.com"
    },
    {
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      ),
      title: "Horarios",
      desc: "Lun — Vie: 9am – 6pm\nSábados: 9am – 1pm"
    }
  ];

  return (
    <section className="relative w-full overflow-hidden py-24 px-6 lg:px-12 flex flex-col items-center justify-center gap-16 md:gap-20">
      <Image 
        src="/assets/Quesos Zampa/6de54990-a007-4692-8898-b1dda1296784.jpg" 
        alt="Quesos en maduración" 
        fill
        className="object-cover"
        sizes="100vw"
        priority
      />
      {/* Overlays for dark text readability */}
      <div className="absolute inset-0 bg-black/65 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent z-10" />
      
      {/* Reseller Call to Action */}
      <div className="relative z-20 max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60">UNITE A LA FAMILIA ZAMPA</span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-[0.06em] uppercase leading-tight">
          LLEVÁ NUESTROS QUESOS A TU REGIÓN
        </h2>
        <p className="text-base md:text-lg lg:text-xl font-light text-white/80 leading-relaxed max-w-2xl mx-auto">
          ¿Tenés un almacén de especialidad, fiambrería o querés emprender con un producto artesanal honesto de Tandil? Conocé nuestra propuesta y convertite en revendedor de Quesos Zampa.
        </p>
        
        <Link 
          href="/revendedores" 
          className="flex items-center justify-center gap-2 sm:gap-3 h-12 sm:h-14 rounded-full bg-white text-charcoal font-bold text-[10px] sm:text-xs hover:bg-white/90 hover:scale-[1.02] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.3)] tracking-[0.15em] uppercase px-8 mt-4"
        >
          <Icon name="SparklesIcon" size={16} variant="solid" className="sm:w-5 sm:h-5 text-charcoal/90" />
          <span>Quiero ser Revendedor</span>
        </Link>
      </div>

      {/* Integrated Contact Details Grid */}
      <div className="relative z-20 max-w-7xl mx-auto w-full border-t border-white/10 pt-16">
        <div className="text-center mb-10">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60 mb-2 block">ATENCIÓN Y CONSULTAS</span>
          <p className="text-sm font-light text-white/60 tracking-wider">Estemos en contacto, responderemos tu inquietud de inmediato</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {contacts.map((item, idx) => (
            <div key={idx} className="group flex gap-4 p-6 rounded-xl bg-white/[0.04] backdrop-blur-[2px] hover:bg-white/[0.08] border border-white/10 hover:border-wheat-light/20 shadow-lg hover:shadow-xl transition-all duration-300 items-start text-left">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/5 group-hover:bg-wheat-light/10 flex items-center justify-center text-white/50 group-hover:text-wheat-light transition-colors duration-300">
                {item.icon}
              </div>
              <div className="flex flex-col min-h-[60px] justify-center">
                <h4 className="text-xs font-bold tracking-wider uppercase text-white/50 group-hover:text-white/80 transition-colors duration-300 mb-1.5">{item.title}</h4>
                {item.href ? (
                  <a 
                    href={item.href}
                    target={item.href.startsWith('http') ? "_blank" : undefined}
                    rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
                    className="text-sm font-light text-white group-hover:text-wheat-light transition-colors duration-300 whitespace-pre-line leading-relaxed"
                  >
                    {item.desc}
                  </a>
                ) : (
                  <p className="text-sm font-light text-white/95 group-hover:text-wheat-light transition-colors duration-300 whitespace-pre-line leading-relaxed">{item.desc}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JoinFamily;

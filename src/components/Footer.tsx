'use client';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-wheat/30 bg-gray-soft py-10 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        
        {/* Fila principal */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo + links */}
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
            <AppLogo
              src="/IMG_1960(1).png"
              size={40}
              className="text-umber opacity-75"
            />
            <div className="flex items-center gap-6 text-sm font-medium text-umber-light">
              <a href="/#timeline" className="hover:text-teal transition-colors">Nuestra Historia</a>
              <a href="/productos" className="hover:text-teal transition-colors">Productos</a>
              <a href="/#about" className="hover:text-teal transition-colors">Calidad</a>
              <a href="#" className="hover:text-teal transition-colors">Privacidad</a>
              <a href="#" className="hover:text-teal transition-colors">Términos</a>
            </div>
          </div>

          {/* Social + copyright */}
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-3">
              {(['GlobeAltIcon', 'EnvelopeIcon'] as const).map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="w-9 h-9 rounded-full border border-wheat/40 flex items-center justify-center text-umber-light hover:text-teal hover:border-teal transition-all duration-200"
                  aria-label={icon}
                >
                  <Icon name={icon} size={16} variant="outline" />
                </a>
              ))}
            </div>
            <span className="text-sm text-umber-light opacity-60">© {year} Quesería Artesanal Zampa</span>
          </div>
        </div>

        {/* Fila de firma */}
        <div className="border-t border-wheat/15 pt-6 flex justify-center md:justify-end items-center">
          <a
            href="https://www.notanother.company/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:opacity-95 transition-opacity text-xs tracking-wide"
          >
            <span className="text-umber-light/70 font-light">Creado por</span>
            <span className="text-charcoal font-bold">Not another consultora</span>
            <img
              src="/assets/images/Gemini_Generated_Image_b89zf1b89zf1b89z__1_-removebg-preview.png"
              alt="Not another logo"
              className="w-5 h-5 object-contain"
            />
          </a>
        </div>

      </div>
    </footer>
  );
}
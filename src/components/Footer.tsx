'use client';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-wheat/30 bg-limestone-soft py-10 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Logo + links */}
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
          <AppLogo
            size={28}
            iconName="BeakerIcon"
            text="Cultivar"
            className="text-umber opacity-70"
          />
          <div className="flex items-center gap-6 text-sm font-medium text-umber-light">
            <a href="#timeline" className="hover:text-teal transition-colors">Research</a>
            <a href="#cultivars" className="hover:text-teal transition-colors">Cultivars</a>
            <a href="#impact" className="hover:text-teal transition-colors">Impact</a>
            <a href="#" className="hover:text-teal transition-colors">Privacy</a>
            <a href="#" className="hover:text-teal transition-colors">Terms</a>
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
          <span className="text-sm text-umber-light opacity-60">© {year} Cultivar Research Institute</span>
        </div>
      </div>
    </footer>
  );
}
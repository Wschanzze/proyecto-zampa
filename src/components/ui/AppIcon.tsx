import React from 'react';
import * as OutlineIcons from '@heroicons/react/24/outline';
import * as SolidIcons from '@heroicons/react/24/solid';

interface AppIconProps {
  name: string;
  size?: number | string;
  className?: string;
  variant?: 'outline' | 'solid';
  [key: string]: any;
}

export default function AppIcon({ name, size = 24, className = '', variant = 'outline', ...props }: AppIconProps) {
  if (name.toLowerCase() === 'whatsapp') {
    return (
      <svg 
        className={className} 
        width={size} 
        height={size} 
        fill="currentColor" 
        viewBox="0 0 24 24" 
        {...props}
      >
        <path d="M12 .03c-6.602 0-11.961 5.338-11.97 11.93-.004 2.105.549 4.161 1.597 5.97L.03 24l6.19-1.616c1.758.954 3.73 1.456 5.74 1.46h.008c6.602 0 11.961-5.338 11.97-11.93a11.9 11.9 0 00-3.51-8.46A11.95 11.95 0 0012 .03zm6.57 16.14c-.27.76-1.56 1.42-2.15 1.53-.4.07-.92.1-2.61-.6-2.15-.89-3.51-3.08-3.62-3.23-.11-.15-.89-1.18-.89-2.35s.61-1.74.83-1.97c.22-.23.47-.29.63-.29h.45c.14 0 .32-.01.49.4.18.43.6 1.47.65 1.58.05.11.08.24 0 .4-.08.16-.13.26-.26.41-.12.15-.26.33-.37.44-.12.12-.25.25-.11.49.14.24.63 1.03 1.35 1.67.92.82 1.7 1.07 1.94 1.19.24.12.38.1.52-.06.14-.16.61-.71.77-.95.16-.24.32-.2.54-.12s1.39.65 1.63.77c.24.12.4.18.46.28.06.11.06.63-.21 1.39z"/>
      </svg>
    );
  }

  // Map icons
  const IconComponent = variant === 'solid' 
    ? (SolidIcons as any)[name] 
    : (OutlineIcons as any)[name];

  if (!IconComponent) {
    // Fallback indicator
    return (
      <svg 
        className={className} 
        width={size} 
        height={size} 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor" 
        strokeWidth={2}
        {...props}
      >
        <circle cx="12" cy="12" r="10" />
      </svg>
    );
  }

  return <IconComponent className={className} style={{ width: size, height: size }} {...props} />;
}

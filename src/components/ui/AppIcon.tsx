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

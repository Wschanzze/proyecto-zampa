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
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.725 1.451 5.486 0 9.95-4.46 9.953-9.952.002-2.661-1.033-5.161-2.91-7.04C16.536 1.774 14.04 0.74 11.383 0.74c-5.49 0-9.953 4.463-9.957 9.957 0 1.958.572 3.864 1.656 5.514l-.997 3.642 3.734-.979zm13.111-5.127c-.314-.157-1.858-.917-2.143-1.021-.285-.104-.493-.157-.7.157-.207.314-.8.104-1.021.157-.222.052-.444-.052-.758-.21-1.326-.649-2.383-1.637-3.177-3.003-.314-.543.314-.504.9-.504.168 0 .331-.004.475-.004.18 0 .422-.068.649-.519.227-.451.879-2.143.956-2.298.077-.156.129-.336.026-.543-.103-.207-.7-1.687-.958-2.308-.25-.602-.505-.519-.69-.529-.18-.01-.384-.01-.589-.01-.205 0-.539.077-.821.384-.282.308-1.077 1.05-1.077 2.561s1.102 2.971 1.256 3.177c.154.205 2.167 3.31 5.251 4.642.733.316 1.306.505 1.753.646.737.234 1.407.2 1.938.12.593-.088 1.858-.759 2.119-1.455.262-.695.262-1.291.183-1.414-.078-.124-.285-.207-.6-.364z"/>
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

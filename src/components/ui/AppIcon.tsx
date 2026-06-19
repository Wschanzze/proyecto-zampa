import React from 'react';

interface AppIconProps {
  name: string;
  size?: number | string;
  className?: string;
  [key: string]: any;
}

export default function AppIcon({ name, size = 24, className = '', ...props }: AppIconProps) {
  return (
    <svg 
      className={className} 
      width={size} 
      height={size} 
      fill="none"
      stroke="currentColor" 
      strokeWidth={2}
      viewBox="0 0 24 24" 
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}

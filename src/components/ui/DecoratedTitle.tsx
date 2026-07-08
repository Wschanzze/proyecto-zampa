'use client';
import React from 'react';

interface DecoratedTitleProps {
  children: React.ReactNode;
  className?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export default function DecoratedTitle({ children, className = '', tag: Tag = 'h2' }: DecoratedTitleProps) {
  return (
    <Tag className={`decorated-title ${className}`}>
      <span className="title-text">{children}</span>
    </Tag>
  );
}

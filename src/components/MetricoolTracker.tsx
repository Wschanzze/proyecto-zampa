'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    beTracker?: {
      t: (params: { hash: string; [key: string]: any }) => void;
    };
  }
}

const METRICOOL_HASH = 'dcf151a64700f8b34fce9e1d01542308';

export function MetricoolTracker() {
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Avoid double-tracking the initial page view since the script in head tracks it
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (typeof window !== 'undefined' && window.beTracker) {
      window.beTracker.t({ hash: METRICOOL_HASH });
    }
  }, [pathname]);

  return null;
}

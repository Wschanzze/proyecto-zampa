import posthog from 'posthog-js';

/**
 * Registra un evento personalizado en PostHog de forma segura en el cliente.
 */
export function trackEvent(eventName: string, properties?: Record<string, any>) {
  if (typeof window !== 'undefined') {
    try {
      posthog.capture(eventName, properties);
    } catch (err) {
      console.error('Error enviando evento a PostHog:', err);
    }
  }
}

/**
 * Helper específico para rastrear conversiones y clics dirigidos a WhatsApp.
 */
export function trackWhatsAppClick(location: string, details?: Record<string, any>) {
  trackEvent('whatsapp_click', {
    button_location: location,
    timestamp: new Date().toISOString(),
    ...details,
  });
}

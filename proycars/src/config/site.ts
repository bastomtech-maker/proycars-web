// ---- Site metadata ----
export const SITE_NAME = 'Proycars';
export const SITE_URL = 'https://proycars.com';
export const SITE_DESCRIPTION = 'Tu concesionario de confianza. Vehículos de ocasión revisados y garantizados al mejor precio en Madrid.';
export const SITE_LOCALE = 'es_ES';
export const SITE_OG_IMAGE = '/og-image.jpg';

// ---- Contact ----
export const CONTACT_EMAIL = 'info@proycars.com';
export const CONTACT_ADDRESS = 'Calle Ejemplo 123, 28001 Madrid, España';
export const CONTACT_PHONE_LOCAL = '657688278';
export const CONTACT_PHONE_INTL = '34657688278';
export const CONTACT_PHONE_TEL = '+34 657 688 278';
export const WHATSAPP_NUMBER = CONTACT_PHONE_INTL;
export const WHATSAPP_DEFAULT_MESSAGE = 'Hola, me gustaría información sobre un coche.';

export function buildWhatsAppUrl(message: string = WHATSAPP_DEFAULT_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function buildTelUrl(): string {
  return `tel:+${CONTACT_PHONE_INTL}`;
}

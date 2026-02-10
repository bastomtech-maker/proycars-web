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

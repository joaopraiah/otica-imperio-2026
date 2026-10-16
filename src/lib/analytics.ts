export type AnalyticsEvent =
  | "whatsapp_click"
  | "directions_click"
  | "phone_click"
  | "lead_form_submit"
  | "vision_test_completed"
  | "virtual_page_view";

export type AnalyticsParams = Record<string, string | number | boolean | undefined>;
export const OPEN_CONSENT_EVENT = "otica:open-consent";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown> | IArguments>;
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Envia eventos próprios para o dataLayer. Nunca inclua nome, telefone,
 * mensagem ou qualquer outro dado pessoal nos parâmetros.
 */
export function trackEvent(event: AnalyticsEvent, params: AnalyticsParams = {}) {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}

export function openConsentPreferences() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(OPEN_CONSENT_EVENT));
  }
}

export function identifyStore(href: string, declaredStore?: string) {
  if (declaredStore) return declaredStore;
  if (href.includes("5519984475265") || href.toLowerCase().includes("sumar")) return "sumare";
  if (href.includes("5519981131761") || href.toLowerCase().includes("hortol")) {
    return "hortolandia";
  }
  return "nao_identificada";
}

export function safeLinkUrl(href: string) {
  try {
    const url = new URL(href, window.location.origin);
    // O texto do WhatsApp pode conter dados digitados pelo usuário.
    if (url.hostname === "wa.me" || url.hostname.endsWith("whatsapp.com")) {
      return `${url.origin}${url.pathname}`;
    }
    return url.href;
  } catch {
    return href.split("?")[0] ?? href;
  }
}

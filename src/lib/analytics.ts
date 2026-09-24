// Event tracking helper for Google Ads, Meta Pixel, and Google Analytics 4

type EventName =
  | "click_phone"
  | "click_whatsapp"
  | "click_directions"
  | "contact_submit"
  | "view_products"
  | "view_services";

export function trackEvent(eventName: EventName, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;

  // Track event via Google Analytics (gtag)
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }

  // Track event via Meta Pixel (fbq)
  if (typeof window.fbq === "function") {
    window.fbq("trackCustom", eventName, params);
  }

  // Log in non-production for verification
  if (process.env.NODE_ENV !== "production") {
    console.log(`[Analytics Event Tracked]: ${eventName}`, params || "");
  }
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

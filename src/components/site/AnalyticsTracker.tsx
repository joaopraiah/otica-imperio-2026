import { useRouterState } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { identifyStore, safeLinkUrl, trackEvent } from "@/lib/analytics";

function isWhatsApp(url: URL) {
  return url.hostname === "wa.me" || url.hostname.endsWith("whatsapp.com");
}

function isDirections(url: URL) {
  return (
    url.hostname.includes("google.") &&
    (url.pathname.includes("/maps") || url.pathname.includes("/maps/search"))
  );
}

export function AnalyticsTracker() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const firstPage = useRef(true);

  useEffect(() => {
    if (firstPage.current) {
      firstPage.current = false;
      return;
    }

    trackEvent("virtual_page_view", {
      page_path: pathname,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [pathname]);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest<HTMLAnchorElement>("a[href]");
      if (!anchor) return;

      let url: URL;
      try {
        url = new URL(anchor.href, window.location.origin);
      } catch {
        return;
      }

      const store = identifyStore(anchor.href, anchor.dataset.store);
      const common = {
        store,
        link_url: safeLinkUrl(anchor.href),
        link_text: anchor.textContent?.trim().replace(/\s+/g, " ").slice(0, 100) || "",
        link_location: anchor.dataset.trackLocation || window.location.pathname,
        page_path: window.location.pathname,
      };

      if (anchor.dataset.leadForm) {
        trackEvent("lead_form_submit", {
          ...common,
          form_name: anchor.dataset.leadForm,
        });
      }

      if (isWhatsApp(url)) {
        trackEvent("whatsapp_click", common);
      } else if (isDirections(url)) {
        trackEvent("directions_click", common);
      } else if (url.protocol === "tel:") {
        trackEvent("phone_click", common);
      }
    }

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return null;
}

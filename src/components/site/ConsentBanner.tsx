import { useEffect, useState } from "react";
import { OPEN_CONSENT_EVENT } from "@/lib/analytics";

const CONSENT_KEY = "otica_imperio_consent_v1";
type ConsentChoice = "granted" | "denied";

function updateConsent(choice: ConsentChoice) {
  if (typeof window === "undefined") return;

  window.gtag?.("consent", "update", {
    analytics_storage: choice,
    ad_storage: choice,
    ad_user_data: choice,
    ad_personalization: choice,
  });
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: "consent_update", consent_choice: choice });
  try {
    localStorage.setItem(CONSENT_KEY, choice);
  } catch {
    // O consentimento continua válido para esta página mesmo sem armazenamento local.
  }
}

export function ConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const openPreferences = () => setVisible(true);
    window.addEventListener(OPEN_CONSENT_EVENT, openPreferences);

    let saved: ConsentChoice | null = null;
    try {
      saved = localStorage.getItem(CONSENT_KEY) as ConsentChoice | null;
    } catch {
      // Alguns navegadores bloqueiam o armazenamento; nesse caso, perguntamos novamente.
    }

    if (saved) {
      updateConsent(saved);
    } else {
      setVisible(true);
    }

    return () => window.removeEventListener(OPEN_CONSENT_EVENT, openPreferences);
  }, []);

  if (!visible) return null;

  function choose(choice: ConsentChoice) {
    updateConsent(choice);
    setVisible(false);
  }

  return (
    <aside
      role="dialog"
      aria-live="polite"
      aria-label="Preferências de privacidade"
      className="fixed inset-x-4 bottom-4 z-[70] mx-auto max-w-3xl border border-ink/20 bg-card p-5 shadow-2xl sm:p-6"
    >
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl">
          <p className="font-display text-lg">Sua privacidade importa</p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Usamos cookies opcionais para medir acessos e entender o resultado das campanhas. Você
            pode aceitar a medição ou continuar somente com os recursos necessários do site.
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-2">
          <button
            type="button"
            onClick={() => choose("denied")}
            className="border border-ink/25 px-4 py-3 text-[0.68rem] uppercase tracking-[0.14em] transition-colors hover:border-ink"
          >
            Somente necessários
          </button>
          <button
            type="button"
            onClick={() => choose("granted")}
            className="bg-ink px-4 py-3 text-[0.68rem] uppercase tracking-[0.14em] text-ink-foreground transition-colors hover:bg-forest"
          >
            Aceitar medição
          </button>
        </div>
      </div>
    </aside>
  );
}

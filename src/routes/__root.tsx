import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { LazyMotion, MotionConfig } from "motion/react";

const loadMotionFeatures = () => import("@/lib/motion-features").then((r) => r.default);

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { ORGANIZATION_JSON_LD, WEBSITE_JSON_LD } from "@/lib/seo";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { AnalyticsTracker } from "@/components/site/AnalyticsTracker";
import { ConsentBanner } from "@/components/site/ConsentBanner";
import { ScrollProgressBar } from "@/components/site/motion-primitives";

const GTM_ID = "GTM-N5W2RCG";
const CONSENT_MODE_DEFAULT = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('consent', 'default', {
  analytics_storage: 'denied',
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  functionality_storage: 'granted',
  security_storage: 'granted',
  wait_for_update: 500
});
`;
const GTM_LOADER = `
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');
`;

function NotFoundComponent() {
  return (
    <>
      <meta name="robots" content="noindex" />
      <div className="flex min-h-screen items-center justify-center bg-background px-4">
        <div className="max-w-md text-center">
          <h1 className="font-display text-7xl text-ink">404</h1>
          <h2 className="mt-4 text-xl">Página não encontrada</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            O endereço que você acessou não existe ou foi movido.
          </p>
          <div className="mt-6">
            <Link
              to="/"
              className="inline-flex items-center justify-center bg-ink px-5 py-3 text-[0.72rem] uppercase tracking-[0.16em] text-ink-foreground transition-colors hover:bg-forest"
            >
              Voltar para a home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Esta página não carregou
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Algo deu errado por aqui. Tente novamente ou volte para a home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center bg-ink px-5 py-3 text-[0.72rem] uppercase tracking-[0.16em] text-ink-foreground"
          >
            Tentar de novo
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center border border-ink/25 px-5 py-3 text-[0.72rem] uppercase tracking-[0.16em]"
          >
            Ir para a home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Ótica Império Glasses — Sumaré e Hortolândia" },
      {
        name: "description",
        content:
          "Ótica premium em Sumaré e Hortolândia: atendimento humanizado, visagismo e exame de vista com hora marcada.",
      },
      { name: "author", content: "Ótica Império Glasses" },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "theme-color", content: "#201e1e" },
      { name: "format-detection", content: "telephone=no" },
      { name: "geo.region", content: "BR-SP" },
      { name: "geo.placename", content: "Sumaré, Hortolândia" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Ótica Império Glasses" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      { type: "text/javascript", children: CONSENT_MODE_DEFAULT },
      { type: "text/javascript", children: GTM_LOADER },
      ...[ORGANIZATION_JSON_LD, WEBSITE_JSON_LD].map((j) => ({
        type: "application/ld+json",
        children: JSON.stringify(j),
      })),
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Respeita "reduzir movimento" do sistema em todas as animações. */}
      <LazyMotion features={loadMotionFeatures} strict>
        <MotionConfig reducedMotion="user">
          <ScrollProgressBar />
          <AnalyticsTracker />
          <Header />
          <main>
            {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
            <Outlet />
          </main>
          <Footer />
          <WhatsAppFab />
          <ConsentBanner />
        </MotionConfig>
      </LazyMotion>
    </QueryClientProvider>
  );
}

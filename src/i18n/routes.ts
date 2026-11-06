// Adresses des pages dans chaque langue. Les URLs françaises et portugaises
// reprennent celles du site actuel pour conserver le référencement.
export const langs = ["fr", "pt", "en", "es", "de"] as const;
export type Lang = (typeof langs)[number];
export const pageKeys = ["home", "services", "why", "compare", "jobs", "quote", "legal"] as const;
export type PageKey = (typeof pageKeys)[number];

export const langMeta: Record<Lang, { label: string; html: string; og: string }> = {
  fr: { label: "Français", html: "fr", og: "fr_FR" },
  pt: { label: "Português", html: "pt-PT", og: "pt_PT" },
  en: { label: "English", html: "en", og: "en_GB" },
  es: { label: "Español", html: "es", og: "es_ES" },
  de: { label: "Deutsch", html: "de", og: "de_DE" },
};

export const routes: Record<Lang, Record<PageKey, string>> = {
  fr: {
    home: "/",
    services: "/nos-services-solutions/",
    why: "/pourquoi-nous/",
    compare: "/bestcall-vs-centre-dappel-traditionnel/",
    jobs: "/recrutement/",
    quote: "/demander-un-devis/",
    legal: "/mentions-legales/",
  },
  pt: {
    home: "/pt/inicio/",
    services: "/pt/os-nossos-servicos-e-solucoes/",
    why: "/pt/porque-nos/",
    compare: "/pt/bestcall-vs-call-center-tradicional/",
    jobs: "/pt/recrutamento/",
    quote: "/pt/pedir-um-orcamento/",
    legal: "/pt/aviso-legal/",
  },
  en: {
    home: "/en/home/",
    services: "/en/services-solutions/",
    why: "/en/why-us/",
    compare: "/en/bestcall-vs-traditional-call-centre/",
    jobs: "/en/careers/",
    quote: "/en/request-a-quote/",
    legal: "/en/legal-notice/",
  },
  es: {
    home: "/es/inicio-es/",
    services: "/es/servicios-soluciones/",
    why: "/es/por-que-nosotros/",
    compare: "/es/bestcall-vs-call-center-tradicional/",
    jobs: "/es/empleo/",
    quote: "/es/solicitar-presupuesto/",
    legal: "/es/aviso-legal/",
  },
  de: {
    home: "/de/startseite/",
    services: "/de/leistungen-loesungen/",
    why: "/de/warum-wir/",
    compare: "/de/bestcall-vs-klassisches-callcenter/",
    jobs: "/de/karriere/",
    quote: "/de/angebot-anfordern/",
    legal: "/de/impressum/",
  },
};

/** Remplace {services}, {quote}… par les URLs de la langue. */
export function linkify(html: string, lang: Lang): string {
  return html.replace(/\{(home|services|why|compare|jobs|quote|legal)\}/g, (_, k: PageKey) => routes[lang][k]);
}

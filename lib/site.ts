/** Shared site constants — temporary plausible content for ТСК Горизонт */

export const SITE = {
  name: "ТСК Горизонт",
  phoneDisplay: "8 (8555) 24-18-90",
  phoneHref: "tel:+78555241890",
  telegramHref: "https://t.me/tsk_gorizont",
  maxHref: "https://max.ru/u/tsk_gorizont",
  email: "info@tsk-gorizont.ru",
  cities: "Нижнекамск и Набережные Челны",
  yearFounded: 2015,
  housesBuilt: 120,
  guaranteeYears: 5,
  buildDaysFrom: 45,
  priceFromMln: "2,1",
  inn: "1651000000",
  ogrn: "1151651000000",
  legalName: "ООО «ТСК Горизонт»",
  address: "г. Нижнекамск, пр. Химиков, 48, офис 12",
} as const;

export const focusRing =
  "outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--c-link)]";

export const focusRingOnPhoto =
  "outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

export const btnAccent =
  "inline-flex items-center justify-center rounded-none bg-[var(--c-accent)] text-[length:var(--fs-ui)] font-semibold leading-[1.2] text-[var(--c-ink)] transition-[background-color] duration-[160ms] hover:bg-[var(--c-accent-hover)]";

export const btnGhostOnPhoto =
  "inline-flex items-center justify-center rounded-none border-0 bg-transparent text-[length:var(--fs-ui)] font-semibold leading-[1.2] text-[var(--c-on-photo)] underline-offset-4 hover:underline";

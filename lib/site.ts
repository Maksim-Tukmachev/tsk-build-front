/** Shared site constants — temporary plausible content for ТСК Горизонт */

export const SITE = {
  name: "ТСК Горизонт",
  phoneDisplay: "+7 917 295-88-22",
  phoneHref: "tel:+79172958822",
  maxHref: "https://max.ru/u/tsk_gorizont",
  maxChannelHref: "https://max.ru/id1650390568_biz",
  email: "tckgorizont@mail.ru",
  cities: "Набережные Челны и Республика Татарстан",
  yearFounded: 2015,
  housesBuilt: 120,
  guaranteeYears: 5,
  buildDaysFrom: 90,
  priceFromMln: "2,1",
  inn: "1650390568",
  kpp: "165001001",
  legalName:
    "ООО Торгово-строительная компания «Горизонт»",
  address: "г. Набережные Челны, Бизнес Центр 2/18, офис 1907",
} as const;

export const focusRing =
  "outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--c-link)]";

export const focusRingOnPhoto =
  "outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

export const btnAccent =
  "inline-flex items-center justify-center rounded-none bg-[var(--c-accent)] text-[length:var(--fs-ui)] font-semibold leading-[1.2] text-[var(--c-ink)] transition-[background-color] duration-[160ms] hover:bg-[var(--c-accent-hover)]";

export const btnGhostOnPhoto =
  "inline-flex items-center justify-center rounded-none border-0 bg-transparent text-[length:var(--fs-ui)] font-semibold leading-[1.2] text-[var(--c-on-photo)] underline-offset-4 hover:underline";

export type Project = {
  id: string;
  name: string;
  area: number;
  floors: string;
  priceFrom: number;
  includes: string;
  image: string;
  budgetBand: "to25" | "25to35" | "35to50" | "from50";
  areaBand: "to80" | "80to120" | "120to180" | "from180";
};

export const PROJECTS: Project[] = [
  {
    id: "kedr",
    name: "Кедр",
    area: 86,
    floors: "1 этаж",
    priceFrom: 2100000,
    includes: "Фундамент, коробка, кровля, окна, входная дверь",
    image: "/images/project-kedr.jpg",
    budgetBand: "to25",
    areaBand: "80to120",
  },
  {
    id: "sosna",
    name: "Сосна",
    area: 112,
    floors: "1 этаж + мансарда",
    priceFrom: 2750000,
    includes: "Под ключ: утепление, электрика, черновая отделка",
    image: "/images/project-sosna.jpg",
    budgetBand: "25to35",
    areaBand: "80to120",
  },
  {
    id: "bereza",
    name: "Берёза",
    area: 148,
    floors: "2 этажа",
    priceFrom: 3480000,
    includes: "Под ключ с разводкой коммуникаций",
    image: "/images/project-bereza.jpg",
    budgetBand: "35to50",
    areaBand: "120to180",
  },
  {
    id: "el",
    name: "Ель",
    area: 74,
    floors: "1 этаж",
    priceFrom: 1950000,
    includes: "Коробка на свайно-винтовом фундаменте",
    image: "/images/project-el.jpg",
    budgetBand: "to25",
    areaBand: "to80",
  },
  {
    id: "lipa",
    name: "Липа",
    area: 168,
    floors: "2 этажа",
    priceFrom: 4200000,
    includes: "Под ключ, терраса, тёплый контур",
    image: "/images/project-lipa.jpg",
    budgetBand: "35to50",
    areaBand: "120to180",
  },
  {
    id: "dub",
    name: "Дуб",
    area: 210,
    floors: "2 этажа",
    priceFrom: 5600000,
    includes: "Индивидуальная планировка, под ключ с отделкой",
    image: "/images/project-dub.png",
    budgetBand: "from50",
    areaBand: "from180",
  },
];

export function formatPrice(value: number): string {
  return new Intl.NumberFormat("ru-RU").format(value) + " ₽";
}

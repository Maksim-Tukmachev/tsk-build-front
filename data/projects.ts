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
    priceFrom: 4100000,
    includes: "Фундамент, коробка, кровля, окна, входная дверь",
    image: "/images/project-kedr.jpg",
    budgetBand: "35to50",
    areaBand: "80to120",
  },
  {
    id: "sosna",
    name: "Сосна",
    area: 112,
    floors: "1 этаж + мансарда",
    priceFrom: 4750000,
    includes: "Под ключ: утепление, электрика, черновая отделка",
    image: "/images/project-sosna.jpg",
    budgetBand: "35to50",
    areaBand: "80to120",
  },
  {
    id: "bereza",
    name: "Берёза",
    area: 148,
    floors: "2 этажа",
    priceFrom: 6480000,
    includes: "Под ключ с разводкой коммуникаций",
    image: "/images/project-bereza.png",
    budgetBand: "from50",
    areaBand: "120to180",
  },
  {
    id: "el",
    name: "Ель",
    area: 74,
    floors: "1 этаж",
    priceFrom: 2950000,
    includes: "Коробка на свайно-винтовом фундаменте",
    image: "/images/project-el.png",
    budgetBand: "25to35",
    areaBand: "to80",
  },
  {
    id: "lipa",
    name: "Липа",
    area: 168,
    floors: "2 этажа",
    priceFrom: 8200000,
    includes: "Под ключ, терраса, тёплый контур",
    image: "/images/project-lipa.png",
    budgetBand: "from50",
    areaBand: "120to180",
  },
];

export function formatPrice(value: number): string {
  return new Intl.NumberFormat("ru-RU").format(value) + " ₽";
}

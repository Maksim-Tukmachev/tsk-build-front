import Image from "next/image";
import { Container } from "@/components/Container";
import { btnAccent, focusRing } from "@/lib/site";

const PACKAGES = [
  {
    id: "turnkey",
    number: "01",
    eyebrow: "Полная комплектация",
    title: "Под ключ",
    text: "Берём на себя весь цикл: от фундамента до электрики и чистовой подготовки.",
    image: "/images/pkg-turnkey.png",
    href: "#projects",
    className:
      "min-h-[400px] md:col-span-7 md:row-span-2 md:min-h-0 md:h-full",
    imageClassName: "object-center",
  },
  {
    id: "box",
    number: "02",
    eyebrow: "Быстрый старт",
    title: "Тёплый контур",
    text: "Каркас, утепление, кровля, окна и входная дверь.",
    image: "/images/pkg-envelope.png",
    href: "#projects",
    className: "min-h-[280px] md:col-span-5 md:min-h-[264px]",
    imageClassName: "object-center",
  },
  {
    id: "foundation",
    number: "03",
    eyebrow: "Основание дома",
    title: "Фундамент",
    text: "Сваи, лента или плита после оценки грунта и участка.",
    image: "/images/pkg-foundation.png",
    href: "#quiz",
    className: "min-h-[280px] md:col-span-5 md:min-h-[264px]",
    imageClassName: "object-[50%_60%]",
  },
  {
    id: "custom",
    number: "04",
    eyebrow: "Под ваш сценарий",
    title: "Индивидуальный проект",
    text: "Архитектура и планировка под семью, бюджет и особенности участка.",
    image: "/images/pkg-custom.png",
    href: "#quiz",
    className: "min-h-[320px] md:col-span-8 md:min-h-[360px]",
    imageClassName: "object-center",
  },
  {
    id: "catalog",
    number: "05",
    eyebrow: "Проверенные решения",
    title: "Типовые проекты",
    text: "Готовые планировки с понятной ценой и сроком.",
    image: "/images/pkg-typical.png",
    href: "#projects",
    className: "min-h-[320px] md:col-span-4 md:min-h-[360px]",
    imageClassName: "object-center",
  },
] as const;

export function Packages() {
  return (
    <section
      className="bg-[var(--c-bg)] py-[var(--space-10)] md:py-[var(--space-20)]"
      aria-labelledby="packages-heading"
    >
      <Container>
        <div className="grid grid-cols-1 gap-[var(--space-3)] md:grid-cols-12">
          <div className="md:col-span-8">
            <p className="text-[length:var(--fs-caption)] font-semibold uppercase tracking-[0.06em] text-[var(--c-ink-muted)]">
              Форматы строительства
            </p>
            <h2
              id="packages-heading"
              className="mt-[var(--space-2)] max-w-[800px] text-[length:var(--fs-display)] font-extrabold leading-[1.08] tracking-[-0.01em] text-[var(--c-ink)]"
            >
              Выберите, с какого этапа мы начнём
            </h2>
          </div>
          <p className="max-w-[400px] self-end text-[length:var(--fs-ui)] leading-[1.5] text-[var(--c-ink-muted)] md:col-span-4">
            Можно взять готовый проект или собрать комплектацию под участок и
            бюджет. Смету фиксируем до начала работ.
          </p>
        </div>

        <ul className="mt-[var(--space-8)] grid grid-cols-1 gap-[var(--space-2)] md:grid-cols-12 md:grid-rows-[264px_264px_360px]">
          {PACKAGES.map((item) => (
            <li
              key={item.id}
              className={`group relative overflow-hidden ${item.className}`}
            >
              <Image
                src={item.image}
                alt=""
                fill
                className={`object-cover transition-transform duration-700 group-hover:scale-[1.04] ${item.imageClassName}`}
                sizes="(max-width: 768px) 100vw, 60vw"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(10,12,14,0.08) 0%, rgba(10,12,14,0.28) 40%, rgba(10,12,14,0.88) 100%)",
                }}
                aria-hidden="true"
              />
              <a
                href={item.href}
                className={`absolute inset-0 flex flex-col justify-between p-[var(--space-3)] text-white md:p-[var(--space-4)] ${focusRing}`}
                aria-label={`${item.title}: ${item.text}`}
              >
                <div className="flex items-start justify-between gap-[var(--space-2)]">
                  <span className="text-[length:var(--fs-caption)] font-semibold uppercase tracking-[0.06em] text-white/80">
                    {item.eyebrow}
                  </span>
                  <span className="text-[length:var(--fs-caption)] font-semibold tabular-nums text-white/70">
                    {item.number}
                  </span>
                </div>
                <div>
                  <h3 className="text-[length:var(--fs-body)] font-extrabold leading-[1.2] tracking-[-0.01em]">
                    {item.title}
                  </h3>
                  <p className="mt-[var(--space-1)] max-w-[440px] text-[length:var(--fs-ui)] font-normal leading-[1.5] text-white/80">
                    {item.text}
                  </p>
                  <span
                    className={`${btnAccent} mt-[var(--space-3)] h-12 w-fit px-[var(--space-3)] transition-transform duration-[160ms] group-hover:translate-x-1`}
                    aria-hidden="true"
                  >
                    Подробнее <span className="ml-[var(--space-1)]">→</span>
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

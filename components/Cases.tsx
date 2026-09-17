import Image from "next/image";
import { CaseDetails } from "@/components/CaseDetails";
import { CasesGallery } from "@/components/CasesGallery";
import { Container } from "@/components/Container";
import { CASES } from "@/data/content";
import { btnAccent, focusRing } from "@/lib/site";

function caseLayout(index: number) {
  if (index === 0) {
    return "lg:col-span-7 lg:row-span-2 lg:min-h-[720px]";
  }
  if (index === 1 || index === 2) {
    return "lg:col-span-5 lg:min-h-[356px]";
  }
  return "lg:col-span-6 lg:min-h-[380px]";
}

function caseObjectPosition(index: number) {
  if (index === 0) return "object-[50%_42%]";
  if (index === 1) return "object-[50%_40%]";
  if (index === 2) return "object-[50%_45%]";
  if (index === 3) return "object-[50%_48%]";
  return "object-[50%_40%]";
}

export function Cases() {
  return (
    <section
      id="cases"
      className="bg-[var(--c-bg)] py-[var(--space-10)] md:py-[var(--space-20)]"
      aria-labelledby="cases-heading"
    >
      <Container>
        <div className="grid grid-cols-1 gap-[var(--space-3)] md:grid-cols-12">
          <div className="md:col-span-8">
            <p className="text-[length:var(--fs-caption)] font-semibold uppercase tracking-[0.06em] text-[var(--c-ink-muted)]">
              Построенные дома
            </p>
            <h2
              id="cases-heading"
              className="mt-[var(--space-2)] max-w-[760px] text-[length:var(--fs-display)] font-extrabold leading-[1.08] tracking-[-0.01em] text-[var(--c-ink)]"
            >
              Результат в цифрах и историях
            </h2>
          </div>
          <p className="max-w-[400px] self-end text-[length:var(--fs-ui)] leading-[1.5] text-[var(--c-ink-muted)] md:col-span-4">
            Показываем не только красивый фасад, но и площадь, бюджет и отзыв
            владельцев.
          </p>
        </div>

        <ul className="mt-[var(--space-8)] grid grid-cols-1 gap-[var(--space-2)] lg:grid-cols-12">
          {CASES.map((item, index) => (
            <li
              key={item.id}
              className={`group relative min-h-[400px] overflow-hidden ${caseLayout(index)}`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className={`object-cover transition-transform duration-700 group-hover:scale-[1.03] ${caseObjectPosition(index)}`}
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(10,12,14,0.06) 0%, rgba(10,12,14,0.3) 45%, rgba(10,12,14,0.9) 100%)",
                }}
                aria-hidden="true"
              />
              <div className="absolute inset-0 flex flex-col justify-between p-[var(--space-3)] text-white md:p-[var(--space-4)]">
                <div className="flex items-start gap-[var(--space-2)]">
                  <span className="bg-[var(--c-accent)] px-[var(--space-2)] py-[var(--space-1)] text-[length:var(--fs-caption)] font-semibold uppercase tracking-[0.06em] text-[var(--c-ink)]">
                    {item.area} м²
                  </span>
                </div>
                <div>
                  <p className="text-[length:var(--fs-caption)] font-semibold uppercase tracking-[0.06em] text-white/70">
                    {item.district}
                  </p>
                  <h3 className="mt-[var(--space-1)] max-w-[540px] text-[length:var(--fs-body)] font-extrabold leading-[1.2] tracking-[-0.01em]">
                    {item.title}
                  </h3>
                  {index === 0 ? (
                    <blockquote className="mt-[var(--space-3)] max-w-[520px] text-[length:var(--fs-body)] font-normal leading-[1.5] text-white/90">
                      «{item.quote}»
                    </blockquote>
                  ) : null}
                  <div className="mt-[var(--space-3)] flex flex-wrap items-center gap-x-[var(--space-4)] gap-y-[var(--space-1)]">
                    <span className="text-[length:var(--fs-ui)] font-semibold">
                      {item.budget}
                    </span>
                    <span className="text-[length:var(--fs-caption)] font-semibold uppercase tracking-[0.06em] text-white/65">
                      {item.client}
                    </span>
                  </div>
                </div>
              </div>
              <CaseDetails item={item} />
            </li>
          ))}
        </ul>
        <div className="mt-[var(--space-5)] flex flex-col gap-[var(--space-3)] md:flex-row md:items-center md:justify-between">
          <p className="max-w-[520px] text-[length:var(--fs-ui)] leading-[1.5] text-[var(--c-ink-muted)]">
            Подберём похожий дом и адаптируем его под ваш участок.
          </p>
          <div className="flex w-full flex-col gap-[var(--space-2)] md:w-auto md:flex-row">
            <CasesGallery />
            <a
              href="#quiz"
              className={`${btnAccent} h-14 w-full px-[var(--space-5)] md:w-fit ${focusRing}`}
            >
              Получить подборку
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

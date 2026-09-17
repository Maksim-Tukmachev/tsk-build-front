import { Container } from "@/components/Container";
import { btnAccent, focusRing, SITE } from "@/lib/site";

export function Trust() {
  return (
    <section
      id="about"
      className="bg-[#1A1D20] py-[var(--space-10)] text-white md:py-[var(--space-20)]"
      aria-labelledby="trust-heading"
    >
      <Container>
        <div className="grid grid-cols-1 gap-[var(--space-8)] lg:grid-cols-12 lg:gap-[var(--space-8)]">
          <div className="lg:col-span-7">
            <p className="text-[length:var(--fs-caption)] font-semibold uppercase tracking-[0.06em] text-white/55">
              Ответственность за результат
            </p>
            <h2
              id="trust-heading"
              className="mt-[var(--space-2)] max-w-[760px] text-[length:var(--fs-display)] font-extrabold leading-[1.08] tracking-[-0.01em]"
            >
              Строим так, чтобы через пять лет не пришлось переделывать
            </h2>
            <p className="mt-[var(--space-5)] max-w-[640px] text-[length:var(--fs-body)] leading-[1.5] text-white/75">
              «Мы отвечаем не только за ровные стены, но и за то, как дом
              поведёт себя после первой зимы. Поэтому не экономим на скрытых
              работах и фиксируем каждое решение до монтажа».
            </p>
            <p className="mt-[var(--space-3)] text-[length:var(--fs-caption)] font-semibold uppercase tracking-[0.06em] text-white/50">
              Руководитель проектов · ТСК Горизонт
            </p>
            <div className="mt-[var(--space-8)] flex flex-col gap-[var(--space-2)] sm:flex-row">
              <a
                href="/dogovor"
                className={`${btnAccent} h-14 w-full px-[var(--space-5)] sm:w-fit ${focusRing}`}
              >
                Посмотреть договор
              </a>
              <a
                href="#contacts"
                className={`inline-flex h-14 w-full items-center justify-center bg-white/10 px-[var(--space-5)] text-[length:var(--fs-ui)] font-semibold sm:w-fit ${focusRing}`}
              >
                Записаться на замер
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <dl className="grid grid-cols-2 gap-[var(--space-2)]">
              <div className="flex min-h-[180px] flex-col justify-between bg-white/[0.06] p-[var(--space-3)]">
                <dt className="text-[length:var(--fs-caption)] font-semibold uppercase tracking-[0.06em] text-white/50">
                  На рынке
                </dt>
                <dd className="text-[length:var(--fs-display)] font-extrabold leading-[1.08] text-[var(--c-accent)]">
                  с {SITE.yearFounded}
                </dd>
              </div>
              <div className="flex min-h-[180px] flex-col justify-between bg-white/[0.06] p-[var(--space-3)]">
                <dt className="text-[length:var(--fs-caption)] font-semibold uppercase tracking-[0.06em] text-white/50">
                  Построено
                </dt>
                <dd className="text-[length:var(--fs-display)] font-extrabold leading-[1.08] text-[var(--c-accent)]">
                  {SITE.housesBuilt}+
                </dd>
              </div>
            </dl>

            <div className="mt-[var(--space-5)] border-t border-white/15 pt-[var(--space-3)]">
              <p className="text-[length:var(--fs-caption)] font-semibold uppercase tracking-[0.06em] text-white/45">
                Юридическая информация
              </p>
              <p className="mt-[var(--space-2)] text-[length:var(--fs-ui)] leading-[1.5] text-white/70">
                {SITE.legalName} · ИНН {SITE.inn} · КПП {SITE.kpp}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

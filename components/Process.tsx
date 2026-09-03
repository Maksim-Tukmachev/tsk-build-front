import { Container } from "@/components/Container";
import { PROCESS_STEPS } from "@/data/content";
import { btnAccent, focusRing } from "@/lib/site";

export function Process() {
  return (
    <section
      id="process"
      className="bg-[var(--c-surface)] py-[var(--space-10)] md:py-[var(--space-20)]"
      aria-labelledby="process-heading"
    >
      <Container>
        <div className="grid grid-cols-1 gap-[var(--space-8)] lg:grid-cols-12 lg:gap-[var(--space-8)]">
          <div className="self-start lg:sticky lg:top-[var(--space-20)] lg:col-span-5">
            <p className="text-[length:var(--fs-caption)] font-semibold uppercase tracking-[0.06em] text-[var(--c-ink-muted)]">
              Как мы работаем
            </p>
            <h2
              id="process-heading"
              className="mt-[var(--space-2)] max-w-[560px] text-[length:var(--fs-display)] font-extrabold leading-[1.08] tracking-[-0.01em] text-[var(--c-ink)]"
            >
              От первого разговора до ключей
            </h2>
            <p className="mt-[var(--space-3)] max-w-[440px] text-[length:var(--fs-body)] leading-[1.5] text-[var(--c-ink-muted)]">
              Вы заранее знаете стоимость, сроки и ответственного за каждый
              этап. Изменения согласовываем до выполнения работ.
            </p>
            <a
              href="#quiz"
              className={`${btnAccent} mt-[var(--space-5)] h-14 w-full px-[var(--space-5)] md:w-fit ${focusRing}`}
            >
              Обсудить строительство
            </a>
          </div>

          <ol className="flex flex-col lg:col-span-7">
            {PROCESS_STEPS.map((step, index) => (
              <li
                key={step.title}
                className="grid grid-cols-[48px_1fr] gap-[var(--space-3)] border-t border-black/10 py-[var(--space-4)] first:border-t-0 first:pt-0 md:grid-cols-[64px_1fr_auto]"
              >
                <span className="text-[length:var(--fs-body)] font-extrabold leading-[1.2] text-[var(--c-accent-hover)] tabular-nums">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="text-[length:var(--fs-body)] font-extrabold leading-[1.2] tracking-[-0.01em] text-[var(--c-ink)]">
                    {step.title}
                  </h3>
                  <p className="mt-[var(--space-2)] max-w-[520px] text-[length:var(--fs-ui)] leading-[1.5] text-[var(--c-ink-muted)]">
                    {step.text}
                  </p>
                </div>
                <span className="col-start-2 text-[length:var(--fs-caption)] font-semibold uppercase tracking-[0.06em] text-[var(--c-ink-muted)] md:col-start-auto">
                  {step.days}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}

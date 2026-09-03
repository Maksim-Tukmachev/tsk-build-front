"use client";

import { useState, type FormEvent } from "react";
import { Container } from "@/components/Container";
import { btnAccent, focusRing, SITE } from "@/lib/site";

export function FinalCta() {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <section
      id="contacts"
      className="bg-[var(--c-surface)] py-[var(--space-10)] md:py-[var(--space-20)]"
      aria-labelledby="final-cta-heading"
    >
      <Container>
        <div className="grid grid-cols-1 overflow-hidden bg-[#1A1D20] text-white lg:grid-cols-12">
          <div className="flex flex-col justify-between p-[var(--space-4)] md:p-[var(--space-8)] lg:col-span-5">
            <div>
              <p className="text-[length:var(--fs-caption)] font-semibold uppercase tracking-[0.06em] text-white/50">
                Бесплатная консультация
              </p>
              <h2
                id="final-cta-heading"
                className="mt-[var(--space-2)] max-w-[560px] text-[length:var(--fs-display)] font-extrabold leading-[1.08] tracking-[-0.01em]"
              >
                Посмотрим участок и рассчитаем дом
              </h2>
              <p className="mt-[var(--space-3)] max-w-[480px] text-[length:var(--fs-body)] leading-[1.5] text-white/70">
                Выезд по Нижнекамску и Набережным Челнам. Без обязательств и
                скрытых условий.
              </p>
            </div>

            <div className="mt-[var(--space-8)]">
              <a
                href={SITE.phoneHref}
                className={`text-[length:var(--fs-body)] font-extrabold leading-[1.2] ${focusRing}`}
              >
                {SITE.phoneDisplay}
              </a>
              <p className="mt-[var(--space-1)] text-[length:var(--fs-caption)] font-semibold uppercase tracking-[0.06em] text-white/45">
                ежедневно · 9:00—21:00
              </p>
              <div className="mt-[var(--space-4)] flex gap-[var(--space-3)]">
                <a
                  href={SITE.maxHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-[length:var(--fs-ui)] font-semibold text-white/80 hover:text-white ${focusRing}`}
                >
                  Max ↗
                </a>
                <a
                  href={SITE.telegramHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-[length:var(--fs-ui)] font-semibold text-white/80 hover:text-white ${focusRing}`}
                >
                  Telegram ↗
                </a>
              </div>
            </div>
          </div>

          <div className="bg-[var(--c-bg)] p-[var(--space-4)] text-[var(--c-ink)] md:p-[var(--space-8)] lg:col-span-7">
            {sent ? (
              <div className="flex min-h-[440px] flex-col justify-center">
                <span className="text-[length:var(--fs-display)] font-extrabold leading-[1.08] text-[var(--c-accent-hover)]">
                  ✓
                </span>
                <h3 className="mt-[var(--space-3)] text-[length:var(--fs-body)] font-extrabold leading-[1.2]">
                  Заявка принята
                </h3>
                <p className="mt-[var(--space-2)] max-w-[440px] text-[length:var(--fs-ui)] leading-[1.5] text-[var(--c-ink-muted)]">
                  Менеджер свяжется с вами в рабочее время и уточнит детали
                  участка.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className={`mt-[var(--space-4)] w-fit text-[length:var(--fs-ui)] font-semibold text-[var(--c-link)] ${focusRing}`}
                >
                  Отправить ещё одну заявку
                </button>
              </div>
            ) : (
              <form onSubmit={submit}>
                <p className="text-[length:var(--fs-body)] font-extrabold leading-[1.2]">
                  Оставьте контакты
                </p>
                <p className="mt-[var(--space-2)] text-[length:var(--fs-ui)] leading-[1.5] text-[var(--c-ink-muted)]">
                  Перезвоним, уточним задачу и согласуем удобное время выезда.
                </p>

                <div className="mt-[var(--space-5)] grid grid-cols-1 gap-[var(--space-3)] sm:grid-cols-2">
                  <label className="flex flex-col gap-[var(--space-1)]">
                    <span className="text-[length:var(--fs-caption)] font-semibold uppercase tracking-[0.06em] text-[var(--c-ink-muted)]">
                      Ваше имя
                    </span>
                    <input
                      name="name"
                      autoComplete="name"
                      required
                      className={`h-14 bg-[var(--c-surface)] px-[var(--space-3)] text-[length:var(--fs-ui)] ${focusRing}`}
                      placeholder="Как к вам обращаться"
                    />
                  </label>
                  <label className="flex flex-col gap-[var(--space-1)]">
                    <span className="text-[length:var(--fs-caption)] font-semibold uppercase tracking-[0.06em] text-[var(--c-ink-muted)]">
                      Телефон
                    </span>
                    <input
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      required
                      className={`h-14 bg-[var(--c-surface)] px-[var(--space-3)] text-[length:var(--fs-ui)] ${focusRing}`}
                      placeholder="+7"
                    />
                  </label>
                  <label className="flex flex-col gap-[var(--space-1)] sm:col-span-2">
                    <span className="text-[length:var(--fs-caption)] font-semibold uppercase tracking-[0.06em] text-[var(--c-ink-muted)]">
                      Где строим
                    </span>
                    <select
                      name="city"
                      className={`h-14 appearance-none bg-[var(--c-surface)] px-[var(--space-3)] text-[length:var(--fs-ui)] ${focusRing}`}
                      defaultValue=""
                      required
                    >
                      <option value="" disabled>
                        Выберите город или район
                      </option>
                      <option>Нижнекамск</option>
                      <option>Набережные Челны</option>
                      <option>Нижнекамский район</option>
                      <option>Тукаевский район</option>
                    </select>
                  </label>
                </div>

                <label className="mt-[var(--space-3)] flex items-start gap-[var(--space-2)] text-[length:var(--fs-caption)] leading-[1.5] text-[var(--c-ink-muted)]">
                  <input
                    type="checkbox"
                    required
                    className="mt-[2px] size-4 shrink-0 accent-[var(--c-accent)]"
                  />
                  <span>
                    Согласен на обработку персональных данных по{" "}
                    <a
                      href="/privacy"
                      className={`text-[var(--c-link)] underline ${focusRing}`}
                    >
                      политике конфиденциальности
                    </a>
                  </span>
                </label>

                <button
                  type="submit"
                  className={`${btnAccent} mt-[var(--space-5)] h-16 w-full px-[var(--space-5)] sm:w-fit ${focusRing}`}
                >
                  Заказать консультацию
                </button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

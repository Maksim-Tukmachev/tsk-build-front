"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/Container";
import { FAQ_ITEMS } from "@/data/content";
import { EASE } from "@/components/motion-tokens";
import { focusRing, SITE } from "@/lib/site";

export function Faq() {
  const [openId, setOpenId] = useState<number | null>(0);
  const reduced = useReducedMotion() === true;

  return (
    <section
      id="faq"
      className="bg-[var(--c-bg)] py-[var(--space-10)] md:py-[var(--space-20)]"
      aria-labelledby="faq-heading"
    >
      <Container>
        <div className="grid grid-cols-1 gap-[var(--space-8)] lg:grid-cols-12 lg:gap-[var(--space-8)]">
          <div className="self-start lg:sticky lg:top-[var(--space-20)] lg:col-span-4">
            <p className="text-[length:var(--fs-caption)] font-semibold uppercase tracking-[0.06em] text-[var(--c-ink-muted)]">
              Ответы на вопросы
            </p>
            <h2
              id="faq-heading"
              className="mt-[var(--space-2)] max-w-[520px] text-[length:var(--fs-display)] font-extrabold leading-[1.08] tracking-[-0.01em] text-[var(--c-ink)]"
            >
              Что важно знать до старта
            </h2>
            <div className="mt-[var(--space-5)] bg-[var(--c-accent)] p-[var(--space-3)] md:p-[var(--space-4)]">
              <p className="text-[length:var(--fs-body)] font-extrabold leading-[1.2] text-[var(--c-ink)]">
                Не нашли свой вопрос?
              </p>
              <p className="mt-[var(--space-2)] text-[length:var(--fs-ui)] leading-[1.5] text-[var(--c-ink)]/70">
                Позвоните — инженер ответит по участку, фундаменту и
                комплектации.
              </p>
              <a
                href={SITE.phoneHref}
                className={`mt-[var(--space-3)] inline-flex text-[length:var(--fs-body)] font-extrabold leading-[1.2] text-[var(--c-ink)] ${focusRing}`}
              >
                {SITE.phoneDisplay} →
              </a>
            </div>
          </div>

          <ol className="lg:col-span-8">
            {FAQ_ITEMS.map((item, index) => {
              const open = openId === index;
              const panelId = `faq-panel-${index}`;

              return (
                <li key={item.q} className="border-t border-black/10">
                  <button
                    type="button"
                    className={`grid w-full grid-cols-[40px_1fr_32px] items-start gap-[var(--space-2)] py-[var(--space-3)] text-left md:grid-cols-[56px_1fr_40px] md:py-[var(--space-4)] ${focusRing}`}
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpenId(open ? null : index)}
                  >
                    <span className="pt-[2px] text-[length:var(--fs-caption)] font-semibold tabular-nums text-[var(--c-ink-muted)]">
                      0{index + 1}
                    </span>
                    <span className="text-[length:var(--fs-body)] font-semibold leading-[1.5] text-[var(--c-ink)]">
                      {item.q}
                    </span>
                    <span
                      className={`inline-flex size-8 items-center justify-center bg-[var(--c-surface)] text-[length:var(--fs-body)] font-normal text-[var(--c-ink)] transition-transform duration-[160ms] ${
                        open ? "rotate-45" : ""
                      }`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {open ? (
                      <motion.div
                        id={panelId}
                        initial={reduced ? false : { height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={reduced ? undefined : { height: 0, opacity: 0 }}
                        transition={
                          reduced
                            ? { duration: 0 }
                            : { duration: 0.28, ease: EASE }
                        }
                        className="overflow-hidden"
                      >
                        <p className="max-w-[680px] pb-[var(--space-4)] pl-[56px] text-[length:var(--fs-ui)] leading-[1.5] text-[var(--c-ink-muted)] md:pl-[72px]">
                          {item.a}
                        </p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </li>
              );
            })}
          </ol>
        </div>
      </Container>
    </section>
  );
}

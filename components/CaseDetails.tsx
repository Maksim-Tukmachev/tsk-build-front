"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { CaseItem } from "@/data/content";
import { focusRing } from "@/lib/site";

export function CaseDetails({ item }: { item: CaseItem }) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const trigger = triggerRef.current;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      trigger?.focus();
    };
  }, [open]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        className={`absolute inset-0 z-10 cursor-pointer text-left ${focusRing}`}
        aria-label={`Подробнее об объекте «${item.title}»`}
      >
        <span className="absolute right-[var(--space-3)] top-[var(--space-3)] border border-white/25 bg-black/60 px-[var(--space-2)] py-[var(--space-1)] text-[length:var(--fs-caption)] font-semibold uppercase tracking-[0.06em] text-white backdrop-blur-sm transition-colors duration-200 group-hover:bg-black/75 md:right-[var(--space-4)] md:top-[var(--space-4)]">
          Обзор ↗
        </span>
      </button>

      {open && typeof document !== "undefined"
        ? createPortal(
            <div
              className="fixed inset-0 z-[120] flex items-center justify-center bg-black/75 p-0 backdrop-blur-sm md:p-[var(--space-4)]"
              role="dialog"
              aria-modal="true"
              aria-labelledby={`case-${item.id}-heading`}
              onMouseDown={(event) => {
                if (event.target === event.currentTarget) setOpen(false);
              }}
            >
              <article className="relative grid h-full max-h-full w-full max-w-[1280px] overflow-y-auto bg-white md:h-auto md:max-h-[90svh] lg:grid-cols-12">
                <button
                  ref={closeRef}
                  type="button"
                  onClick={() => setOpen(false)}
                  className={`absolute right-[var(--space-2)] top-[var(--space-2)] z-30 inline-flex size-12 cursor-pointer items-center justify-center border border-black/10 bg-white/90 text-[var(--c-ink)] backdrop-blur-sm transition-colors hover:bg-[#E8E8E8] md:right-[var(--space-3)] md:top-[var(--space-3)] ${focusRing}`}
                  aria-label="Закрыть описание объекта"
                >
                  <span
                    className="absolute h-px w-5 rotate-45 bg-current"
                    aria-hidden="true"
                  />
                  <span
                    className="absolute h-px w-5 -rotate-45 bg-current"
                    aria-hidden="true"
                  />
                </button>

                <div className="flex flex-col bg-[#16191C] p-[var(--space-4)] pt-[var(--space-8)] text-white md:p-[var(--space-5)] md:pt-[var(--space-8)] lg:col-span-4">
                  <p className="text-[length:var(--fs-caption)] font-semibold uppercase tracking-[0.07em] text-[var(--c-accent)]">
                    Построенный дом
                  </p>
                  <h2
                    id={`case-${item.id}-heading`}
                    className="mt-[var(--space-2)] text-[length:var(--fs-display)] font-extrabold leading-[1.08] tracking-[-0.01em]"
                  >
                    {item.title}
                  </h2>
                  <p className="mt-[var(--space-2)] text-[length:var(--fs-caption)] font-semibold uppercase tracking-[0.06em] text-white/50">
                    {item.district}
                  </p>
                  <p className="mt-[var(--space-4)] text-[length:var(--fs-ui)] leading-[1.55] text-white/72">
                    {item.description}
                  </p>

                  <dl className="mt-[var(--space-5)] grid grid-cols-2 border-y border-white/12">
                    <div className="border-r border-white/12 py-[var(--space-3)] pr-[var(--space-2)]">
                      <dt className="text-[length:var(--fs-caption)] uppercase tracking-[0.06em] text-white/40">
                        Площадь
                      </dt>
                      <dd className="mt-1 text-[length:var(--fs-body)] font-extrabold">
                        {item.area} м²
                      </dd>
                    </div>
                    <div className="py-[var(--space-3)] pl-[var(--space-3)]">
                      <dt className="text-[length:var(--fs-caption)] uppercase tracking-[0.06em] text-white/40">
                        Бюджет
                      </dt>
                      <dd className="mt-1 text-[length:var(--fs-body)] font-extrabold">
                        {item.budget}
                      </dd>
                    </div>
                  </dl>

                  <blockquote className="mt-[var(--space-5)] border-l-2 border-[var(--c-accent)] pl-[var(--space-3)] text-[length:var(--fs-ui)] leading-[1.5] text-white/80">
                    «{item.quote}»
                    <footer className="mt-[var(--space-2)] text-[length:var(--fs-caption)] font-semibold uppercase tracking-[0.06em] text-white/45">
                      {item.client}
                    </footer>
                  </blockquote>
                </div>

                <div className="bg-[var(--c-surface)] p-[var(--space-3)] pt-[var(--space-8)] md:p-[var(--space-5)] md:pt-[var(--space-8)] lg:col-span-8">
                  <p className="text-[length:var(--fs-caption)] font-semibold uppercase tracking-[0.07em] text-[var(--c-ink-muted)]">
                    Этапы строительства
                  </p>
                  <h3 className="mt-[var(--space-1)] text-[length:var(--fs-body)] font-extrabold leading-[1.2] text-[var(--c-ink)]">
                    От основания до готового дома
                  </h3>

                  <ol className="mt-[var(--space-4)] grid gap-[var(--space-2)] sm:grid-cols-3">
                    {item.stages.map((stage, index) => (
                      <li key={stage.title} className="bg-white">
                        <div className="relative aspect-[4/3] overflow-hidden bg-[#D9D9D9]">
                          <Image
                            src={stage.image}
                            alt={`${stage.title}: ${item.title}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 100vw, 260px"
                          />
                        </div>
                        <div className="p-[var(--space-2)]">
                          <p className="text-[length:var(--fs-caption)] font-semibold uppercase tracking-[0.06em] text-[var(--c-accent-hover)]">
                            0{index + 1}
                          </p>
                          <h4 className="mt-1 text-[length:var(--fs-ui)] font-extrabold text-[var(--c-ink)]">
                            {stage.title}
                          </h4>
                          <p className="mt-1 text-[length:var(--fs-caption)] leading-[1.45] text-[var(--c-ink-muted)]">
                            {stage.text}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ol>

                  <a
                    href="#quiz"
                    onClick={() => setOpen(false)}
                    className={`mt-[var(--space-4)] inline-flex h-14 w-full items-center justify-center bg-[var(--c-accent)] px-[var(--space-4)] text-[length:var(--fs-ui)] font-semibold text-[var(--c-ink)] transition-colors hover:bg-[var(--c-accent-hover)] sm:w-fit ${focusRing}`}
                  >
                    Рассчитать похожий дом
                  </a>
                </div>
              </article>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}

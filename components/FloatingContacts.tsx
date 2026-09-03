"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { IconClose, IconPhone, IconTelegram } from "@/components/icons";
import { EASE } from "@/components/motion-tokens";
import { focusRing, SITE } from "@/lib/site";
import "@/app/widget.css";

function IconMax({ className = "size-5" }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/icons/max.svg"
      alt=""
      aria-hidden="true"
      width={20}
      height={20}
      className={className}
    />
  );
}

const LINKS = [
  {
    id: "phone",
    href: SITE.phoneHref,
    label: "Позвонить",
    detail: SITE.phoneDisplay,
    bg: "var(--c-ink)",
    external: false,
    icon: <IconPhone className="size-5" decorative />,
  },
  {
    id: "max",
    href: SITE.maxHref,
    label: "Max",
    detail: "Написать в Max",
    bg: "var(--c-max)",
    external: true,
    icon: <IconMax />,
  },
  {
    id: "tg",
    href: SITE.telegramHref,
    label: "Telegram",
    detail: "Написать в Telegram",
    bg: "var(--c-tg)",
    external: true,
    icon: <IconTelegram className="size-5 text-white" />,
  },
] as const;

export function FloatingContacts() {
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion() === true;

  return (
    <div className="fixed bottom-[calc(var(--space-3)+env(safe-area-inset-bottom,0px))] right-[calc(var(--space-3)+env(safe-area-inset-right,0px))] z-40 flex flex-col items-end gap-[var(--space-2)]">
      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            key="panel"
            className="flex w-[min(100vw-48px,280px)] flex-col overflow-hidden bg-[var(--c-bg)]"
            initial={reduced ? false : { opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduced ? undefined : { opacity: 0, y: 8, scale: 0.98 }}
            transition={
              reduced ? { duration: 0 } : { duration: 0.28, ease: EASE }
            }
          >
            <div className="bg-[#1A1D20] px-[var(--space-3)] py-[var(--space-3)]">
              <p className="text-[length:var(--fs-caption)] font-semibold uppercase tracking-[0.06em] text-white/60">
                Связь с нами
              </p>
              <p className="mt-[var(--space-1)] text-[length:var(--fs-ui)] font-semibold leading-[1.2] text-white">
                Ответим за 5–10 минут
              </p>
            </div>
            <ul className="flex flex-col">
              {LINKS.map((item) => (
                <li key={item.id} className="border-t border-black/5">
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className={`flex items-center gap-[var(--space-2)] px-[var(--space-3)] py-[var(--space-2)] hover:bg-black/[0.03] ${focusRing}`}
                  >
                    <span
                      className="inline-flex size-10 shrink-0 items-center justify-center rounded-full text-white"
                      style={{ background: item.bg }}
                      aria-hidden="true"
                    >
                      {item.icon}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-[length:var(--fs-ui)] font-semibold leading-[1.2] text-[var(--c-ink)]">
                        {item.label}
                      </span>
                      <span className="mt-[2px] block truncate text-[length:var(--fs-caption)] font-normal leading-[1.2] text-[var(--c-ink-muted)]">
                        {item.detail}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <button
        type="button"
        aria-expanded={open}
        aria-label={open ? "Скрыть контакты" : "Открыть контакты"}
        onClick={() => setOpen((v) => !v)}
        className={`relative inline-flex size-14 items-center justify-center rounded-full bg-[var(--c-accent)] text-[var(--c-ink)] ${focusRing}`}
      >
        {!open && !reduced ? (
          <>
            <span
              className="phone-wave pointer-events-none absolute inset-0 rounded-full border-2 border-[var(--c-accent)]"
              aria-hidden="true"
            />
            <span
              className="phone-wave phone-wave--delay pointer-events-none absolute inset-0 rounded-full border-2 border-[var(--c-accent)]"
              aria-hidden="true"
            />
          </>
        ) : null}
        <span className={open || reduced ? undefined : "phone-ring-icon"}>
          {open ? (
            <IconClose className="size-6" />
          ) : (
            <IconPhone className="size-6" decorative />
          )}
        </span>
      </button>
    </div>
  );
}

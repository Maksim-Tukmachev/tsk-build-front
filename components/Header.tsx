"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/Container";
import { EASE } from "@/components/motion-tokens";
import { IconBurger, IconClose } from "@/components/icons";
import { SITE, btnAccent, focusRing } from "@/lib/site";

const NAV_ITEMS = [
  { label: "Проекты", href: "/#projects" },
  { label: "Расчёт", href: "/#quiz" },
  { label: "Этапы", href: "/#process" },
  { label: "О нас", href: "/#about" },
  { label: "Контакты", href: "/#contacts" },
] as const;

function Logo() {
  return (
    <Link
      href="/"
      className={`shrink-0 ${focusRing}`}
      aria-label={`${SITE.name} — на главную`}
    >
      <Image
        src="/images/logo-tsk-gorizont.png"
        alt={SITE.name}
        width={160}
        height={82}
        priority
        className="h-11 w-auto object-contain object-left md:h-16"
      />
    </Link>
  );
}

function DesktopNav() {
  return (
    <ul className="flex items-center gap-[var(--space-4)]">
      {NAV_ITEMS.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className={`inline-flex items-center text-[length:var(--fs-ui)] font-normal leading-[1.5] text-[var(--c-ink)] ${focusRing}`}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function Hours() {
  return (
    <div className="flex flex-col leading-none">
      <span className="text-[length:var(--fs-caption)] font-semibold uppercase tracking-[0.06em] text-[var(--c-ink-muted)]">
        ежедневно
      </span>
      <span className="mt-1 text-[length:var(--fs-ui)] font-semibold leading-[1.2] text-[var(--c-ink)]">
        9:00 — 21:00
      </span>
    </div>
  );
}

function MessengerLink({
  href,
  label,
  bg,
  children,
}: {
  href: string;
  label: string;
  bg: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`inline-flex size-10 shrink-0 items-center justify-center rounded-full text-white ${focusRing}`}
      style={{ background: bg }}
    >
      {children}
    </a>
  );
}

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

function CallButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={SITE.phoneHref}
      className={[
        btnAccent,
        "h-14 min-w-[180px] shrink-0 px-[var(--space-5)] md:h-16 md:min-w-[240px] md:px-[var(--space-8)]",
        focusRing,
        className,
      ].join(" ")}
    >
      Позвонить
    </a>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const burgerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const wasOpen = useRef(false);
  const reducedMotion = useReducedMotion() === true;

  const closeMenu = useCallback(() => {
    setOpen(false);
  }, []);

  useEffect(() => {
    if (!open) {
      if (wasOpen.current) {
        burgerRef.current?.focus();
      }
      wasOpen.current = false;
      return;
    }

    wasOpen.current = true;
    const panel = panelRef.current;
    if (!panel) return;

    const focusables = panel.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    first?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu();
        return;
      }
      if (event.key !== "Tab" || focusables.length === 0) return;
      if (event.shiftKey) {
        if (document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        }
      } else if (document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, closeMenu]);

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 h-16 bg-[var(--c-bg)] md:h-20"
      initial={reducedMotion ? false : { opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={
        reducedMotion
          ? { duration: 0 }
          : { duration: 0.4, delay: 0.1, ease: EASE }
      }
    >
      <Container className="flex h-full items-center justify-between gap-[var(--space-3)]">
        <div className="flex min-w-0 items-center gap-[var(--space-4)]">
          <Logo />
          <nav aria-label="Основная навигация" className="hidden lg:block">
            <DesktopNav />
          </nav>
        </div>

        <div className="hidden items-center gap-[var(--space-3)] md:flex">
          <MessengerLink
            href={SITE.maxHref}
            label="Написать в Max"
            bg="var(--c-max)"
          >
            <IconMax />
          </MessengerLink>
          <Hours />
          <CallButton />
        </div>

        <div className="flex items-center gap-[var(--space-2)] md:hidden">
          <CallButton className="min-w-0 px-[var(--space-3)]" />
          <button
            ref={burgerRef}
            type="button"
            className={`inline-flex text-[var(--c-ink)] ${focusRing}`}
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <IconClose /> : <IconBurger />}
          </button>
        </div>
      </Container>

      <div
        id={menuId}
        ref={panelRef}
        hidden={!open}
        className="fixed inset-x-0 bottom-0 top-16 z-50 overflow-y-auto bg-[var(--c-bg)] md:hidden"
        style={{ height: "calc(100svh - 64px)" }}
        role="dialog"
        aria-modal="true"
        aria-label="Мобильное меню"
      >
        <Container className="flex flex-col py-[var(--space-5)]">
          <nav aria-label="Мобильная навигация">
            <ul className="flex flex-col gap-[var(--space-3)]">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className={`inline-flex items-center text-[length:var(--fs-body)] font-normal leading-[1.5] text-[var(--c-ink)] ${focusRing}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-[var(--space-5)] flex flex-col gap-[var(--space-3)]">
            <a
              href={SITE.phoneHref}
              className={`text-[length:var(--fs-body)] font-semibold leading-[1.2] tracking-[-0.01em] text-[var(--c-ink)] ${focusRing}`}
            >
              {SITE.phoneDisplay}
            </a>
            <div>
              <p className="text-[length:var(--fs-caption)] font-semibold uppercase tracking-[0.06em] text-[var(--c-ink-muted)]">
                ежедневно
              </p>
              <p className="mt-1 text-[length:var(--fs-body)] font-semibold leading-[1.2] text-[var(--c-ink)]">
                9:00 — 21:00
              </p>
            </div>
            <div className="flex items-center gap-[var(--space-3)]">
              <MessengerLink
                href={SITE.maxHref}
                label="Написать в Max"
                bg="var(--c-max)"
              >
                <IconMax />
              </MessengerLink>
            </div>
          </div>
        </Container>
      </div>
    </motion.header>
  );
}

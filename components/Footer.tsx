import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { focusRing, SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-[#111315] py-[var(--space-8)] text-white md:py-[var(--space-10)]">
      <Container>
        <div className="grid grid-cols-1 gap-[var(--space-8)] md:grid-cols-12">
          <div className="md:col-span-5">
            <Link
              href="/"
              className={`inline-flex ${focusRing}`}
              aria-label={`${SITE.name} — на главную`}
            >
              <Image
                src="/images/logo-tsk-gorizont.png"
                alt={SITE.name}
                width={200}
                height={103}
                className="h-16 w-auto object-contain object-left"
              />
            </Link>
            <p className="mt-[var(--space-3)] max-w-[400px] text-[length:var(--fs-ui)] leading-[1.5] text-white/55">
              Проектируем и строим каркасные дома в Нижнекамске, Набережных
              Челнах и ближайших районах.
            </p>
          </div>

          <nav
            className="md:col-span-3"
            aria-label="Навигация в подвале"
          >
            <p className="text-[length:var(--fs-caption)] font-semibold uppercase tracking-[0.06em] text-white/40">
              Разделы
            </p>
            <ul className="mt-[var(--space-3)] flex flex-col gap-[var(--space-2)]">
              <li>
                <Link
                  href="/#projects"
                  className={`text-[length:var(--fs-ui)] text-white/75 hover:text-white ${focusRing}`}
                >
                  Проекты
                </Link>
              </li>
              <li>
                <Link
                  href="/#process"
                  className={`text-[length:var(--fs-ui)] text-white/75 hover:text-white ${focusRing}`}
                >
                  Этапы работы
                </Link>
              </li>
              <li>
                <Link
                  href="/#cases"
                  className={`text-[length:var(--fs-ui)] text-white/75 hover:text-white ${focusRing}`}
                >
                  Построенные дома
                </Link>
              </li>
              <li>
                <Link
                  href="/#faq"
                  className={`text-[length:var(--fs-ui)] text-white/75 hover:text-white ${focusRing}`}
                >
                  Вопросы
                </Link>
              </li>
            </ul>
          </nav>

          <div className="md:col-span-4">
            <p className="text-[length:var(--fs-caption)] font-semibold uppercase tracking-[0.06em] text-white/40">
              Контакты
            </p>
            <a
              href={SITE.phoneHref}
              className={`mt-[var(--space-3)] inline-flex text-[length:var(--fs-body)] font-extrabold leading-[1.2] ${focusRing}`}
            >
              {SITE.phoneDisplay}
            </a>
            <p className="mt-[var(--space-1)] text-[length:var(--fs-caption)] font-semibold uppercase tracking-[0.06em] text-white/40">
              ежедневно · 9:00—21:00
            </p>
            <a
              href={`mailto:${SITE.email}`}
              className={`mt-[var(--space-3)] inline-flex text-[length:var(--fs-ui)] text-white/70 hover:text-white ${focusRing}`}
            >
              {SITE.email}
            </a>
            <p className="mt-[var(--space-3)] max-w-[360px] text-[length:var(--fs-ui)] leading-[1.5] text-white/50">
              {SITE.address}
            </p>
            <div className="mt-[var(--space-3)] flex gap-[var(--space-3)]">
              <a
                href={SITE.maxHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-[length:var(--fs-ui)] font-semibold text-white/75 hover:text-white ${focusRing}`}
              >
                Max ↗
              </a>
              <a
                href={SITE.telegramHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-[length:var(--fs-ui)] font-semibold text-white/75 hover:text-white ${focusRing}`}
              >
                Telegram ↗
              </a>
            </div>
          </div>
        </div>

        <div className="mt-[var(--space-8)] flex flex-col gap-[var(--space-2)] border-t border-white/10 pt-[var(--space-3)] text-[length:var(--fs-caption)] leading-[1.5] text-white/35 md:flex-row md:items-center md:justify-between">
          <p>
            © 2026 {SITE.legalName} · ИНН {SITE.inn} · ОГРН {SITE.ogrn}
          </p>
          <div className="flex flex-wrap gap-[var(--space-3)]">
            <Link
              href="/privacy"
              className={`text-white/50 hover:text-white ${focusRing}`}
            >
              Политика конфиденциальности
            </Link>
            <Link
              href="/dogovor"
              className={`text-white/50 hover:text-white ${focusRing}`}
            >
              Образец договора
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

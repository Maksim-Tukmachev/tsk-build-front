import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { focusRing, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: `Политика конфиденциальности — ${SITE.name}`,
  description: "Политика обработки персональных данных",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="mt-16 bg-[var(--c-bg)] py-[var(--space-10)] md:mt-20 md:py-[var(--space-20)]">
        <Container className="max-w-[800px]">
          <p className="text-[length:var(--fs-caption)] font-semibold uppercase tracking-[0.06em] text-[var(--c-ink-muted)]">
            Документы
          </p>
          <h1 className="mt-[var(--space-2)] text-[length:var(--fs-display)] font-extrabold leading-[1.08] tracking-[-0.01em] text-[var(--c-ink)]">
            Политика конфиденциальности
          </h1>
          <div className="mt-[var(--space-5)] flex flex-col gap-[var(--space-3)] text-[length:var(--fs-ui)] leading-[1.5] text-[var(--c-ink-muted)]">
            <p>
              {SITE.legalName} ({SITE.name}) обрабатывает персональные данные
              посетителей сайта в соответствии с Федеральным законом № 152-ФЗ
              «О персональных данных».
            </p>
            <p>
              Мы получаем имя и телефон при отправке квиза или заявки на
              консультацию, чтобы связаться с вами по телефону, в Max или
              Telegram и подготовить расчёт стоимости дома.
            </p>
            <p>
              Данные не передаются третьим лицам, за исключением случаев,
              предусмотренных законом, и хранятся не дольше, чем нужно для
              обработки обращения.
            </p>
            <p>
              По вопросам обработки данных:{" "}
              <a href={`mailto:${SITE.email}`} className={focusRing}>
                {SITE.email}
              </a>
              .
            </p>
            <p className="text-[length:var(--fs-caption)] text-[var(--c-ink-muted)]">
              Текст временный (заглушка) — замените на юридически выверенную
              редакцию перед продакшеном.
            </p>
          </div>
          <Link
            href="/"
            className={`mt-[var(--space-8)] inline-flex text-[length:var(--fs-ui)] font-semibold text-[var(--c-link)] ${focusRing}`}
          >
            На главную
          </Link>
        </Container>
      </main>
      <Footer />
    </>
  );
}

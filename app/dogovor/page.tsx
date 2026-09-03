import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { focusRing, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: `Образец договора — ${SITE.name}`,
  description: "Пример договора на строительство каркасного дома",
};

export default function DogovorPage() {
  return (
    <>
      <Header />
      <main className="mt-16 bg-[var(--c-bg)] py-[var(--space-10)] md:mt-20 md:py-[var(--space-20)]">
        <Container className="max-w-[800px]">
          <h1 className="text-[length:var(--fs-display)] font-extrabold leading-[1.08] tracking-[-0.01em] text-[var(--c-ink)]">
            Образец договора
          </h1>
          <p className="mt-[var(--space-3)] text-[length:var(--fs-body)] leading-[1.5] text-[var(--c-ink-muted)]">
            Здесь будет PDF с типовым договором подряда на строительство
            каркасного дома. Пока страница-заглушка: состав работ, сроки,
            гарантия {SITE.guaranteeYears} лет и порядок оплаты согласовываются
            индивидуально.
          </p>
          <Link
            href="/#about"
            className={`mt-[var(--space-8)] inline-flex text-[length:var(--fs-ui)] font-semibold text-[var(--c-link)] ${focusRing}`}
          >
            Вернуться к блоку доверия
          </Link>
        </Container>
      </main>
      <Footer />
    </>
  );
}

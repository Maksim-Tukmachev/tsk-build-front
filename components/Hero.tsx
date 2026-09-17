"use client";

import { getImageProps } from "next/image";
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/Container";
import { EASE } from "@/components/motion-tokens";
import { SITE, btnAccent, focusRingOnPhoto } from "@/lib/site";

const ALT = `Каркасный дом ${SITE.name} в Набережных Челнах`;

/** Short display headline — price & geo live in the lead, not in H1 */
const H1_TEXT =
  "Крепкий каркас. Надёжный дом. Быстро строим — веками живём.";

const h1ClassName =
  "max-w-full text-[length:var(--fs-display)] font-extrabold leading-[1.08] tracking-[-0.01em] text-[var(--c-on-photo)] lg:max-w-[820px]";

const h1Style: CSSProperties = {
  hyphens: "none",
  overflowWrap: "break-word",
  textWrap: "balance",
};

function measureLines(container: HTMLElement): string[] {
  const wordEls = Array.from(
    container.querySelectorAll<HTMLElement>("[data-word]"),
  );
  if (wordEls.length === 0) return [H1_TEXT];

  const lines: string[][] = [];
  let currentTop = Number.NaN;
  let currentLine: string[] = [];

  for (const el of wordEls) {
    const top = el.offsetTop;
    if (Number.isNaN(currentTop)) currentTop = top;
    if (Math.abs(top - currentTop) > 1) {
      lines.push(currentLine);
      currentLine = [];
      currentTop = top;
    }
    currentLine.push(el.textContent ?? "");
  }
  if (currentLine.length > 0) lines.push(currentLine);
  return lines.map((words) => words.join(" "));
}

function AnimatedH1({ reducedMotion }: { reducedMotion: boolean }) {
  const measureRef = useRef<HTMLHeadingElement>(null);
  const [lines, setLines] = useState<string[] | null>(
    reducedMotion ? [H1_TEXT] : null,
  );
  const words = H1_TEXT.split(/\s+/);

  useEffect(() => {
    if (reducedMotion) {
      setLines([H1_TEXT]);
      return;
    }
    let cancelled = false;
    void document.fonts.ready.then(() => {
      requestAnimationFrame(() => {
        if (cancelled || !measureRef.current) return;
        setLines(measureLines(measureRef.current));
      });
    });
    return () => {
      cancelled = true;
    };
  }, [reducedMotion]);

  if (reducedMotion) {
    return (
      <h1 id="hero-heading" className={h1ClassName} style={h1Style}>
        {H1_TEXT}
      </h1>
    );
  }

  const ready = lines !== null;

  return (
    <h1
      id="hero-heading"
      ref={measureRef}
      className={h1ClassName}
      style={{ ...h1Style, visibility: ready ? "visible" : "hidden" }}
    >
      {!ready
        ? words.map((word, index) => (
            <span key={`${word}-${index}`}>
              {index > 0 ? " " : null}
              <span data-word className="inline">
                {word}
              </span>
            </span>
          ))
        : lines.map((line, index) => (
            <span key={`line-${index}`} className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{
                  duration: 0.7,
                  delay: 0.25 + index * 0.08,
                  ease: EASE,
                }}
              >
                {line}
              </motion.span>
            </span>
          ))}
    </h1>
  );
}

export function Hero() {
  const reducedMotion = useReducedMotion() === true;

  const common = {
    alt: ALT,
    sizes: "100vw",
    priority: true as const,
  };

  const {
    props: { srcSet: mobileSrcSet },
  } = getImageProps({
    ...common,
    src: "/images/hero-mobile.png",
    width: 1024,
    height: 1536,
  });

  const {
    props: { srcSet: desktopSrcSet, ...desktopImg },
  } = getImageProps({
    ...common,
    src: "/images/hero-desktop.png",
    width: 1536,
    height: 1024,
  });

  return (
    <section
      className="relative mt-16 h-[calc(100svh-64px)] overflow-hidden md:mt-20 md:h-[calc(100svh-80px)] md:min-h-[640px]"
      aria-labelledby="hero-heading"
    >
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ backgroundColor: "#1A1D20" }}
      >
        <motion.div
          className="absolute inset-0"
          initial={reducedMotion ? { scale: 1 } : { scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={
            reducedMotion
              ? { duration: 0 }
              : { duration: 1.2, delay: 0, ease: EASE }
          }
        >
          <picture>
            <source
              media="(max-width: 767px)"
              srcSet={mobileSrcSet}
              sizes="100vw"
            />
            <source
              media="(min-width: 768px)"
              srcSet={desktopSrcSet}
              sizes="100vw"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              {...desktopImg}
              alt={ALT}
              decoding="async"
              fetchPriority="high"
              className="absolute inset-0 h-full w-full object-cover object-[50%_40%] md:object-[50%_60%]"
              style={{
                ...desktopImg.style,
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
              }}
            />
          </picture>
        </motion.div>
      </div>

      <div
        className="pointer-events-none absolute inset-0 md:hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,12,14,0.25) 0%, rgba(10,12,14,0.40) 45%, rgba(10,12,14,0.55) 100%)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 hidden md:block"
        style={{
          background:
            "linear-gradient(180deg, var(--c-scrim-top) 0%, var(--c-scrim-mid) 45%, var(--c-scrim-bottom) 100%)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(10,12,14,0.55) 0%, rgba(10,12,14,0.2) 45%, rgba(10,12,14,0) 70%)",
        }}
        aria-hidden="true"
      />

      <Container
        className={[
          "relative z-10 flex h-full flex-col",
          "justify-end pt-0",
          "pb-[calc(var(--space-5)+env(safe-area-inset-bottom,0px))]",
          "md:justify-start md:pb-0 md:pt-[var(--space-20)]",
        ].join(" ")}
      >
        <AnimatedH1 reducedMotion={reducedMotion} />

        <motion.p
          className="mt-[var(--space-3)] max-w-full text-[length:var(--fs-body)] font-normal leading-[1.5] text-[var(--c-on-photo)] md:mt-[var(--space-5)] lg:max-w-[640px]"
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={
            reducedMotion
              ? { duration: 0 }
              : { duration: 0.5, delay: 0.45, ease: EASE }
          }
        >
          Набережные Челны · работаем по Республике Татарстан · под ключ от{" "}
          {SITE.priceFromMln} млн ₽ · срок от {SITE.buildDaysFrom} дней
        </motion.p>

        <motion.div
          className="mt-[var(--space-5)] flex w-full flex-col gap-[var(--space-2)] md:flex-row md:items-center md:gap-[var(--space-3)]"
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={
            reducedMotion
              ? { duration: 0 }
              : { duration: 0.5, delay: 0.55, ease: EASE }
          }
        >
          <a
            href="#projects"
            className={`${btnAccent} h-14 w-full min-w-0 px-[var(--space-5)] uppercase tracking-[0.02em] md:h-16 md:w-fit md:min-w-[240px] ${focusRingOnPhoto}`}
          >
            Список проектов
          </a>
          <a
            href="#quiz"
            className={`inline-flex h-14 w-full items-center justify-center bg-white/15 px-[var(--space-5)] text-[length:var(--fs-ui)] font-semibold leading-[1.2] text-[var(--c-on-photo)] md:h-16 md:w-fit ${focusRingOnPhoto}`}
          >
            Рассчитать стоимость
          </a>
        </motion.div>
      </Container>
    </section>
  );
}

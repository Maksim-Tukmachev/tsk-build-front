"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { focusRing } from "@/lib/site";

const GALLERY_IMAGES = [
  {
    src: "/images/case-garden-patio.jpg",
    alt: "Одноэтажный дом с террасой и садом",
  },
  {
    src: "/images/case-blue-cottage.jpg",
    alt: "Компактный построенный дом",
  },
  {
    src: "/images/case-white-terrace.jpg",
    alt: "Белый дом с тёмной террасой",
  },
  {
    src: "/images/case-gray-piles.jpg",
    alt: "Серый каркасный дом на сваях",
  },
  {
    src: "/images/case-modern-porch.jpg",
    alt: "Современный дом с большой верандой",
  },
  {
    src: "/images/case-chelny-couple.png",
    alt: "Двухэтажный загородный дом с террасой",
  },
  {
    src: "/images/case-nk-family.png",
    alt: "Загородный дом с просторной верандой",
  },
] as const;

export function CasesGallery() {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
      if (event.key === "ArrowRight") {
        setActiveIndex((index) => (index + 1) % GALLERY_IMAGES.length);
      }
      if (event.key === "ArrowLeft") {
        setActiveIndex(
          (index) =>
            (index - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length,
        );
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const activeImage = GALLERY_IMAGES[activeIndex];

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`inline-flex h-14 w-full cursor-pointer items-center justify-center border border-black/20 px-[var(--space-5)] text-[length:var(--fs-ui)] font-semibold transition-[background-color,border-color] duration-200 hover:border-black/30 hover:bg-black/[0.06] md:w-fit ${focusRing}`}
      >
        Смотреть все фото
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-[100] bg-[#090B0D]/95 text-white backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cases-gallery-heading"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setOpen(false);
          }}
        >
          <div className="relative mx-auto flex h-full w-full max-w-[1600px] flex-col overflow-hidden">
            <div className="relative z-20 flex items-start justify-between gap-[var(--space-3)] px-[var(--space-3)] pt-[var(--space-3)] md:px-[var(--space-5)] md:pt-[var(--space-4)]">
              <div>
                <p className="text-[length:var(--fs-caption)] font-semibold uppercase tracking-[0.08em] text-[var(--c-accent)]">
                  Галерея
                </p>
                <h2
                  id="cases-gallery-heading"
                  className="mt-1 text-[length:var(--fs-body)] font-extrabold leading-[1.2]"
                >
                  Готовые объекты
                </h2>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setOpen(false)}
                className={`relative inline-flex size-12 cursor-pointer items-center justify-center border border-white/15 bg-white/[0.06] transition-colors duration-200 hover:border-white/30 hover:bg-white/15 ${focusRing}`}
                aria-label="Закрыть галерею"
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
            </div>

            <div className="relative min-h-0 flex-1">
              <div className="absolute inset-x-4 inset-y-4 md:inset-x-20 md:inset-y-6 lg:inset-x-28">
                <Image
                  src={activeImage.src}
                  alt={activeImage.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 1400px"
                />
              </div>
              <button
                type="button"
                onClick={() =>
                  setActiveIndex(
                    (index) =>
                      (index - 1 + GALLERY_IMAGES.length) %
                      GALLERY_IMAGES.length,
                  )
                }
                className={`absolute left-3 top-1/2 z-10 inline-flex size-12 -translate-y-1/2 cursor-pointer items-center justify-center border border-white/15 bg-black/45 text-3xl transition-colors duration-200 hover:border-white/40 hover:bg-white hover:text-black md:left-5 md:size-14 ${focusRing}`}
                aria-label="Предыдущее фото"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={() =>
                  setActiveIndex((index) => (index + 1) % GALLERY_IMAGES.length)
                }
                className={`absolute right-3 top-1/2 z-10 inline-flex size-12 -translate-y-1/2 cursor-pointer items-center justify-center border border-white/15 bg-black/45 text-3xl transition-colors duration-200 hover:border-white/40 hover:bg-white hover:text-black md:right-5 md:size-14 ${focusRing}`}
                aria-label="Следующее фото"
              >
                ›
              </button>
            </div>

            <div className="relative z-20 bg-gradient-to-t from-[#090B0D] via-[#090B0D] to-transparent px-[var(--space-3)] pb-[calc(var(--space-3)+env(safe-area-inset-bottom,0px))] pt-[var(--space-5)] md:px-[var(--space-5)] md:pb-[var(--space-4)]">
              <div className="mb-[var(--space-2)] flex items-end justify-between gap-[var(--space-3)]">
                <p className="truncate text-[length:var(--fs-ui)] font-semibold text-white/85">
                  {activeImage.alt}
                </p>
                <p className="shrink-0 text-[length:var(--fs-caption)] font-semibold tabular-nums text-white/45">
                  {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(GALLERY_IMAGES.length).padStart(2, "0")}
                </p>
              </div>
              <div className="flex snap-x gap-[var(--space-1)] overflow-x-auto pb-1">
                {GALLERY_IMAGES.map((image, index) => (
                  <button
                    key={image.src}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`relative aspect-[4/3] w-20 shrink-0 snap-start cursor-pointer overflow-hidden border-2 transition-[border-color,opacity,transform] duration-200 md:w-28 ${
                      activeIndex === index
                        ? "scale-[0.96] border-[var(--c-accent)] opacity-100"
                        : "border-transparent opacity-45 hover:scale-[0.96] hover:opacity-100"
                    } ${focusRing}`}
                    aria-label={`Открыть фото ${index + 1}: ${image.alt}`}
                    aria-current={activeIndex === index ? "true" : undefined}
                  >
                    <Image
                      src={image.src}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 80px, 112px"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

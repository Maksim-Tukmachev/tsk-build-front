"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Container } from "@/components/Container";
import { PROJECTS, formatPrice, type Project } from "@/data/projects";
import { focusRing } from "@/lib/site";

type AreaFilter = "all" | Project["areaBand"];

const AREA_FILTERS: { id: AreaFilter; label: string }[] = [
  { id: "all", label: "Все" },
  { id: "to80", label: "До 80 м²" },
  { id: "80to120", label: "80–120 м²" },
  { id: "120to180", label: "120–180 м²" },
  { id: "from180", label: "От 180 м²" },
];

export function Projects() {
  const [filter, setFilter] = useState<AreaFilter>("all");

  const items = useMemo(
    () =>
      filter === "all"
        ? PROJECTS
        : PROJECTS.filter((p) => p.areaBand === filter),
    [filter],
  );

  return (
    <section
      id="projects"
      className="bg-[var(--c-surface)] py-[var(--space-10)] md:py-[var(--space-20)]"
      aria-labelledby="projects-heading"
    >
      <Container>
        <div className="grid grid-cols-1 gap-[var(--space-4)] lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-[length:var(--fs-caption)] font-semibold uppercase tracking-[0.06em] text-[var(--c-ink-muted)]">
              Каталог проектов
            </p>
            <h2
              id="projects-heading"
              className="mt-[var(--space-2)] max-w-[720px] text-[length:var(--fs-display)] font-extrabold leading-[1.08] tracking-[-0.01em] text-[var(--c-ink)]"
            >
              Дома, в которых удобно жить
            </h2>
            <p className="mt-[var(--space-3)] max-w-[560px] text-[length:var(--fs-ui)] leading-[1.5] text-[var(--c-ink-muted)]">
              Готовые планировки можно адаптировать под состав семьи, участок
              и привычный образ жизни.
            </p>
          </div>
          <div
            className="flex flex-wrap items-end gap-x-[var(--space-3)] gap-y-[var(--space-2)] lg:col-span-5 lg:justify-end"
            role="group"
            aria-label="Фильтр по площади"
          >
            {AREA_FILTERS.map((f) => {
              const active = filter === f.id;
              return (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setFilter(f.id)}
                  className={[
                    "relative h-10 px-0 text-[length:var(--fs-ui)] font-semibold leading-[1.2] transition-colors duration-[160ms]",
                    active
                      ? "text-[var(--c-ink)] after:absolute after:inset-x-0 after:bottom-0 after:h-[2px] after:bg-[var(--c-accent)]"
                      : "text-[var(--c-ink-muted)] hover:text-[var(--c-ink)]",
                    focusRing,
                  ].join(" ")}
                  aria-pressed={active}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </div>

        <ul className="mt-[var(--space-8)] grid grid-cols-1 gap-[var(--space-2)] sm:grid-cols-2 xl:grid-cols-4">
          {items.map((project, index) => {
            const featured = index === 0;

            return (
              <li
                key={project.id}
                className={`group flex min-w-0 flex-col bg-[var(--c-bg)] ${
                  featured ? "sm:col-span-2 xl:col-span-2" : ""
                }`}
              >
                <a href="#quiz" className={`flex h-full flex-col ${focusRing}`}>
                  <div
                    className={`relative overflow-hidden bg-[#1A1D20] ${
                      featured ? "aspect-[16/9]" : "aspect-[5/4]"
                    }`}
                  >
                  <Image
                    src={project.image}
                    alt={`Проект «${project.name}» — ${project.area} м²`}
                    fill
                      className={`object-cover transition-transform duration-700 group-hover:scale-[1.035] ${
                        featured ? "object-[56%_60%]" : "object-[68%_55%]"
                      }`}
                      sizes={
                        featured
                          ? "(max-width: 640px) 100vw, 50vw"
                          : "(max-width: 1280px) 50vw, 25vw"
                      }
                  />
                    <span className="absolute left-[var(--space-2)] top-[var(--space-2)] bg-[var(--c-accent)] px-[var(--space-2)] py-[var(--space-1)] text-[length:var(--fs-caption)] font-semibold uppercase tracking-[0.06em] text-[var(--c-ink)]">
                      {featured ? "Выбор семей" : project.floors}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-[var(--space-3)]">
                    <div className="flex items-start justify-between gap-[var(--space-2)]">
                      <div>
                        <p className="text-[length:var(--fs-caption)] font-semibold uppercase tracking-[0.06em] text-[var(--c-ink-muted)]">
                          {project.area} м² · {project.floors}
                        </p>
                        <h3 className="mt-[var(--space-1)] text-[length:var(--fs-body)] font-extrabold leading-[1.2] tracking-[-0.01em] text-[var(--c-ink)]">
                          {project.name}
                        </h3>
                      </div>
                      <span
                        className="shrink-0 text-[length:var(--fs-body)] font-normal text-[var(--c-ink-muted)] transition-transform duration-[160ms] group-hover:translate-x-1"
                        aria-hidden="true"
                      >
                        →
                      </span>
                    </div>
                    <p className="mt-[var(--space-2)] text-[length:var(--fs-ui)] leading-[1.5] text-[var(--c-ink-muted)]">
                      {project.includes}
                    </p>
                    <p className="mt-auto pt-[var(--space-3)] text-[length:var(--fs-body)] font-semibold leading-[1.2] text-[var(--c-ink)]">
                      от {formatPrice(project.priceFrom)}
                    </p>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}

const COLORS: { name: string; value: string; varName: string }[] = [
  { name: "bg", value: "#FFFFFF", varName: "--c-bg" },
  { name: "ink", value: "#141414", varName: "--c-ink" },
  { name: "ink-muted", value: "#555555", varName: "--c-ink-muted" },
  { name: "link", value: "#1D5BD6", varName: "--c-link" },
  { name: "accent", value: "#FFD84A", varName: "--c-accent" },
  { name: "accent-hover", value: "#F2C61F", varName: "--c-accent-hover" },
  { name: "on-photo", value: "#FFFFFF", varName: "--c-on-photo" },
  {
    name: "scrim-top",
    value: "rgba(10,12,14,0.55)",
    varName: "--c-scrim-top",
  },
  {
    name: "scrim-mid",
    value: "rgba(10,12,14,0.30)",
    varName: "--c-scrim-mid",
  },
  {
    name: "scrim-bottom",
    value: "rgba(10,12,14,0.10)",
    varName: "--c-scrim-bottom",
  },
  { name: "tg", value: "#2AABEE", varName: "--c-tg" },
  { name: "max", value: "#5B4CFF", varName: "--c-max" },
];

const TYPE_STEPS: {
  name: string;
  varName: string;
  clamp: string;
  sample: string;
}[] = [
  {
    name: "display",
    varName: "--fs-display",
    clamp: "clamp(30px, 3.4vw, 48px)",
    sample: "СТРОИТЕЛЬСТВО КАРКАСНЫХ ДОМОВ",
  },
  {
    name: "body",
    varName: "--fs-body",
    clamp: "clamp(16px, 1.4vw, 20px)",
    sample: "С 01 по 30 сентября скидка на типовые проекты 10%.",
  },
  {
    name: "ui",
    varName: "--fs-ui",
    clamp: "16px",
    sample: "Проекты · Строительство · О нас · Контакты",
  },
  {
    name: "caption",
    varName: "--fs-caption",
    clamp: "12px",
    sample: "ДОМА. КАРКАСНО.",
  },
];

const WEIGHTS = [
  { weight: 400, label: "Regular 400" },
  { weight: 600, label: "Semibold 600" },
  { weight: 800, label: "ExtraBold 800" },
] as const;

const LINE_HEIGHTS = [
  { value: 1.08, label: "1.08 — display / H1" },
  { value: 1.2, label: "1.2 — телефон, кнопка, тэглайн" },
  { value: 1.5, label: "1.5 — body / меню / абзац" },
] as const;

const SPACES: { name: string; px: number }[] = [
  { name: "--space-1", px: 8 },
  { name: "--space-2", px: 16 },
  { name: "--space-3", px: 24 },
  { name: "--space-4", px: 32 },
  { name: "--space-5", px: 40 },
  { name: "--space-8", px: 64 },
  { name: "--space-10", px: 80 },
  { name: "--space-20", px: 160 },
];

export default function TypoPage() {
  return (
    <main
      style={{
        maxWidth: 960,
        marginInline: "auto",
        paddingBlock: "var(--space-8)",
        paddingInline: "var(--space-3)",
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-8)",
      }}
    >
      <header style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
        <p
          style={{
            fontSize: "var(--fs-caption)",
            fontWeight: 600,
            lineHeight: 1.2,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: "var(--c-ink-muted)",
          }}
        >
          ТСК Горизонт · Design tokens
        </p>
        <h1
          style={{
            fontSize: "var(--fs-display)",
            fontWeight: 800,
            lineHeight: 1.08,
            letterSpacing: "-0.01em",
            textTransform: "uppercase",
            color: "var(--c-ink)",
          }}
        >
          Типографика и шкалы
        </h1>
        <p
          style={{
            fontSize: "var(--fs-body)",
            fontWeight: 400,
            lineHeight: 1.5,
            color: "var(--c-ink-muted)",
            maxWidth: 640,
          }}
        >
          Inter · subsets cyrillic + latin · веса 400 / 600 / 800 · display swap.
          Четыре ступени кегля, три веса, три line-height. Цвета и отступы — только
          из токенов `@theme`.
        </p>
      </header>

      {/* Type scale */}
      <section style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
        <h2
          style={{
            fontSize: "var(--fs-ui)",
            fontWeight: 600,
            lineHeight: 1.5,
            color: "var(--c-ink)",
          }}
        >
          1. Шкала кегля — 4 ступени
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
          {TYPE_STEPS.map((step) => (
            <div
              key={step.name}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "var(--space-1)",
              }}
            >
              <code
                style={{
                  fontSize: "var(--fs-caption)",
                  fontWeight: 600,
                  lineHeight: 1.2,
                  color: "var(--c-ink-muted)",
                }}
              >
                {step.varName} · {step.clamp}
              </code>
              <p
                style={{
                  fontSize: `var(${step.varName})`,
                  fontWeight: step.name === "display" ? 800 : 400,
                  lineHeight: step.name === "display" ? 1.08 : 1.5,
                  letterSpacing: step.name === "display" ? "-0.01em" : 0,
                  textTransform: step.name === "caption" ? "uppercase" : undefined,
                  color: "var(--c-ink)",
                }}
              >
                {step.sample}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Weights */}
      <section style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
        <h2
          style={{
            fontSize: "var(--fs-ui)",
            fontWeight: 600,
            lineHeight: 1.5,
            color: "var(--c-ink)",
          }}
        >
          2. Веса — 400 / 600 / 800
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
          {WEIGHTS.map((w) => (
            <p
              key={w.weight}
              style={{
                fontSize: "var(--fs-body)",
                fontWeight: w.weight,
                lineHeight: 1.5,
                color: "var(--c-ink)",
              }}
            >
              {w.label} — Каркасные дома ТСК Горизонт в Набережных Челнах
            </p>
          ))}
        </div>
      </section>

      {/* Line heights */}
      <section style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
        <h2
          style={{
            fontSize: "var(--fs-ui)",
            fontWeight: 600,
            lineHeight: 1.5,
            color: "var(--c-ink)",
          }}
        >
          3. Line-height — 1.08 / 1.2 / 1.5
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
          {LINE_HEIGHTS.map((lh) => (
            <div
              key={lh.value}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "var(--space-1)",
                paddingBlock: "var(--space-2)",
                background:
                  "linear-gradient(transparent 0, transparent calc(100% - 1px), #E5E5E5 calc(100% - 1px))",
                backgroundSize: "100% 1.2em",
              }}
            >
              <code
                style={{
                  fontSize: "var(--fs-caption)",
                  fontWeight: 600,
                  lineHeight: 1.2,
                  color: "var(--c-ink-muted)",
                }}
              >
                {lh.label}
              </code>
              <p
                style={{
                  fontSize: "var(--fs-body)",
                  fontWeight: 400,
                  lineHeight: lh.value,
                  color: "var(--c-ink)",
                  maxWidth: 560,
                }}
              >
                Строительство каркасных домов по типовым и индивидуальным проектам.
                Скидка на типовые проекты 10%. Дополнительная скидка для семей с детьми.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Colors */}
      <section style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
        <h2
          style={{
            fontSize: "var(--fs-ui)",
            fontWeight: 600,
            lineHeight: 1.5,
            color: "var(--c-ink)",
          }}
        >
          4. Цветовые токены
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
            gap: "var(--space-2)",
          }}
        >
          {COLORS.map((c) => {
            const needsChecker =
              c.name === "on-photo" || c.name.startsWith("scrim");

            return (
              <div
                key={c.varName}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--space-1)",
                }}
              >
                <div
                  style={{
                    height: 80,
                    background: needsChecker ? "#1A1D20" : undefined,
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: `var(${c.varName})`,
                    }}
                  />
                </div>
                <code
                  style={{
                    fontSize: "var(--fs-caption)",
                    fontWeight: 600,
                    lineHeight: 1.2,
                    color: "var(--c-ink)",
                  }}
                >
                  {c.varName}
                </code>
                <span
                  style={{
                    fontSize: "var(--fs-caption)",
                    fontWeight: 400,
                    lineHeight: 1.2,
                    color: "var(--c-ink-muted)",
                  }}
                >
                  {c.value}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Spacing */}
      <section style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
        <h2
          style={{
            fontSize: "var(--fs-ui)",
            fontWeight: 600,
            lineHeight: 1.5,
            color: "var(--c-ink)",
          }}
        >
          5. Шкала отступов — шаг 8px
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
          {SPACES.map((s) => (
            <div
              key={s.name}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "var(--space-2)",
              }}
            >
              <code
                style={{
                  width: 120,
                  flexShrink: 0,
                  fontSize: "var(--fs-caption)",
                  fontWeight: 600,
                  lineHeight: 1.2,
                  color: "var(--c-ink-muted)",
                }}
              >
                {s.name}
              </code>
              <span
                style={{
                  width: 40,
                  flexShrink: 0,
                  fontSize: "var(--fs-caption)",
                  fontWeight: 400,
                  lineHeight: 1.2,
                  color: "var(--c-ink)",
                }}
              >
                {s.px}px
              </span>
              <div
                style={{
                  height: 16,
                  width: `var(${s.name})`,
                  background: "var(--c-accent)",
                  flexShrink: 0,
                }}
                aria-hidden="true"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Applied samples from brief */}
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--space-4)",
          padding: "var(--space-5)",
          background: "#1A1D20",
        }}
      >
        <h2
          style={{
            fontSize: "var(--fs-ui)",
            fontWeight: 600,
            lineHeight: 1.5,
            color: "var(--c-on-photo)",
          }}
        >
          6. Прикладные стили с брифа (на тёмном)
        </h2>
        <p
          style={{
            fontSize: "var(--fs-display)",
            fontWeight: 800,
            lineHeight: 1.08,
            letterSpacing: "-0.01em",
            textTransform: "uppercase",
            color: "var(--c-on-photo)",
            maxWidth: 800,
          }}
        >
          СТРОИТЕЛЬСТВО КАРКАСНЫХ ДОМОВ ПО ТИПОВЫМ И ИНДИВИДУАЛЬНЫМ ПРОЕКТАМ
        </p>
        <p
          style={{
            fontSize: "var(--fs-body)",
            fontWeight: 400,
            lineHeight: 1.5,
            color: "var(--c-on-photo)",
            maxWidth: 880,
          }}
        >
          С 01 по 30 сентября скидка на типовые проекты 10%. Дополнительная скидка
          для семей с детьми! Подробные условия у менеджера.
        </p>
        <a
          href="/projects"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            height: 64,
            paddingInline: "var(--space-5)",
            minWidth: 200,
            width: "fit-content",
            background: "var(--c-accent)",
            color: "var(--c-ink)",
            fontSize: "var(--fs-ui)",
            fontWeight: 600,
            lineHeight: 1.2,
            textDecoration: "none",
            borderRadius: 0,
            transition: "background-color 160ms",
          }}
        >
          Каталог проектов
        </a>
      </section>
    </main>
  );
}

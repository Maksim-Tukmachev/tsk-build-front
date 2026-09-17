"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useId,
  useState,
  type FormEvent,
} from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/Container";
import { IconClose } from "@/components/icons";
import { EASE } from "@/components/motion-tokens";
import { btnAccent, focusRing, SITE } from "@/lib/site";

type Answers = {
  type: string;
  area: string;
  land: string;
  city: string;
  budget: string;
  start: string;
};

const STEPS: {
  key: keyof Answers;
  title: string;
  options: string[];
}[] = [
  {
    key: "type",
    title: "Какой тип дома вас интересует?",
    options: [
      "Одноэтажный",
      "Двухэтажный",
      "С мансардой",
      "Не знаю, нужна помощь",
    ],
  },
  {
    key: "area",
    title: "Примерная площадь дома?",
    options: ["До 80 м²", "80–120 м²", "120–180 м²", "Более 180 м²"],
  },
  {
    key: "land",
    title: "Есть ли у вас участок?",
    options: [
      "Да, в собственности",
      "Да, в планах покупка",
      "Нет, нужна помощь с подбором",
    ],
  },
  {
    key: "city",
    title: "Где рассматриваете строительство?",
    options: [
      "Набережные Челны",
      "Нижнекамск",
      "Район / пригород",
      "Пока не определился",
    ],
  },
  {
    key: "budget",
    title: "Какой бюджет вы планируете?",
    options: ["До 2,5 млн", "2,5–3,5 млн", "3,5–5 млн", "Более 5 млн"],
  },
  {
    key: "start",
    title: "Когда хотите начать строительство?",
    options: ["В этом сезоне", "В следующем году", "Пока присматриваюсь"],
  },
];

const emptyAnswers: Answers = {
  type: "",
  area: "",
  land: "",
  city: "",
  budget: "",
  start: "",
};

function QuizFlow({
  compact = false,
  onFinished,
}: {
  compact?: boolean;
  onFinished?: () => void;
}) {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [answers, setAnswers] = useState<Answers>(emptyAnswers);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [consent, setConsent] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");
  const reduced = useReducedMotion() === true;

  const isForm = step >= STEPS.length;
  const progress = Math.min(step + 1, STEPS.length + 1);
  const total = STEPS.length + 1;

  function go(next: number) {
    setDirection(next > step ? 1 : -1);
    setStep(next);
  }

  function selectOption(value: string) {
    const key = STEPS[step].key;
    setAnswers((prev) => ({ ...prev, [key]: value }));
    go(step + 1);
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    setError("");
    if (!name.trim() || !phone.trim()) {
      setError("Укажите имя и телефон");
      return;
    }
    if (!consent) {
      setError("Нужно согласие на обработку персональных данных");
      return;
    }
    console.info("[quiz-lead]", { name, phone, answers });
    setDone(true);
    onFinished?.();
  }

  const slide = {
    enter: (dir: number) =>
      reduced ? { opacity: 1, x: 0 } : { opacity: 0, x: dir > 0 ? 24 : -24 },
    center: { opacity: 1, x: 0 },
    exit: (dir: number) =>
      reduced ? { opacity: 1, x: 0 } : { opacity: 0, x: dir > 0 ? -24 : 24 },
  };

  return (
    <div className={compact ? "" : "max-w-[560px]"}>
      <div className="h-1 w-full bg-white/20">
        <div
          className="h-full bg-[var(--c-accent)] transition-[width] duration-[160ms]"
          style={{ width: `${(progress / total) * 100}%` }}
        />
      </div>
      <p className="mt-[var(--space-2)] text-[length:var(--fs-caption)] font-semibold uppercase tracking-[0.06em] text-white/60">
        Шаг {progress} из {total}
      </p>

      <div className="relative mt-[var(--space-4)] min-h-[280px]">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={done ? "done" : isForm ? "form" : `step-${step}`}
            custom={direction}
            variants={slide}
            initial="enter"
            animate="center"
            exit="exit"
            transition={
              reduced ? { duration: 0 } : { duration: 0.28, ease: EASE }
            }
          >
            {done ? (
              <div className="flex flex-col gap-[var(--space-3)]">
                <p className="text-[length:var(--fs-body)] font-semibold leading-[1.5] text-white">
                  Спасибо, {name.split(" ")[0]}! Мы получили ответы и свяжемся в
                  Max в ближайшее время.
                </p>
                <a
                  href={SITE.maxHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${btnAccent} h-14 w-full px-[var(--space-5)] md:w-fit ${focusRing}`}
                >
                  Написать в Max сейчас
                </a>
              </div>
            ) : !isForm ? (
              <div>
                <div className="flex items-start gap-[var(--space-3)]">
                  <span
                    className="text-[length:var(--fs-display)] font-extrabold leading-[1.08] text-[var(--c-accent)]"
                    aria-hidden="true"
                  >
                    0{step + 1}
                  </span>
                  <h3 className="max-w-[400px] pt-[var(--space-1)] text-[length:var(--fs-body)] font-semibold leading-[1.5] text-white">
                    {STEPS[step].title}
                  </h3>
                </div>
                <ul className="mt-[var(--space-4)] grid grid-cols-1 gap-[var(--space-2)] sm:grid-cols-2">
                  {STEPS[step].options.map((option, optionIndex) => (
                    <li key={option}>
                      <button
                        type="button"
                        onClick={() => selectOption(option)}
                        className={`group flex min-h-20 w-full items-center gap-[var(--space-2)] bg-white/[0.06] px-[var(--space-3)] text-left text-[length:var(--fs-ui)] font-semibold leading-[1.2] text-white transition-colors duration-[160ms] hover:bg-[var(--c-accent)] hover:text-[var(--c-ink)] ${focusRing}`}
                      >
                        <span className="inline-flex size-8 shrink-0 items-center justify-center bg-white/10 text-[length:var(--fs-caption)] font-semibold text-white/70 transition-colors duration-[160ms] group-hover:bg-black/10 group-hover:text-[var(--c-ink)]">
                          {optionIndex + 1}
                        </span>
                        <span>{option}</span>
                      </button>
                    </li>
                  ))}
                </ul>
                {step > 0 ? (
                  <button
                    type="button"
                    onClick={() => go(step - 1)}
                    className={`mt-[var(--space-3)] text-[length:var(--fs-ui)] font-semibold text-white/80 ${focusRing}`}
                  >
                    Назад
                  </button>
                ) : null}
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                className="flex flex-col gap-[var(--space-3)]"
              >
                <label className="flex flex-col gap-[var(--space-1)]">
                  <span className="text-[length:var(--fs-caption)] font-semibold uppercase tracking-[0.06em] text-white/70">
                    Имя
                  </span>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoComplete="name"
                    className={`h-14 bg-[var(--c-bg)] px-[var(--space-3)] text-[length:var(--fs-ui)] text-[var(--c-ink)] ${focusRing}`}
                    required
                  />
                </label>
                <label className="flex flex-col gap-[var(--space-1)]">
                  <span className="text-[length:var(--fs-caption)] font-semibold uppercase tracking-[0.06em] text-white/70">
                    Телефон
                  </span>
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    type="tel"
                    autoComplete="tel"
                    placeholder="+7"
                    className={`h-14 bg-[var(--c-bg)] px-[var(--space-3)] text-[length:var(--fs-ui)] text-[var(--c-ink)] ${focusRing}`}
                    required
                  />
                </label>
                <label className="flex items-start gap-[var(--space-2)] text-[length:var(--fs-ui)] leading-[1.5] text-white/85">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-1 size-4 shrink-0 accent-[var(--c-accent)]"
                  />
                  <span>
                    Согласен на обработку персональных данных по{" "}
                    <a href="/privacy" className={`underline ${focusRing}`}>
                      политике конфиденциальности
                    </a>
                  </span>
                </label>
                {error ? (
                  <p className="text-[length:var(--fs-ui)] text-[var(--c-accent)]">
                    {error}
                  </p>
                ) : null}
                <div className="flex flex-col gap-[var(--space-2)] sm:flex-row">
                  <button
                    type="button"
                    onClick={() => go(STEPS.length - 1)}
                    className={`h-14 px-[var(--space-3)] text-[length:var(--fs-ui)] font-semibold text-white/80 ${focusRing}`}
                  >
                    Назад
                  </button>
                  <button
                    type="submit"
                    className={`${btnAccent} h-14 w-full px-[var(--space-5)] sm:w-fit ${focusRing}`}
                  >
                    Получить расчёт в Max
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export function Quiz() {
  return (
    <section
      id="quiz"
      className="bg-[var(--c-bg)] py-[var(--space-10)] text-[var(--c-on-photo)] md:py-[var(--space-20)]"
      aria-labelledby="quiz-heading"
    >
      <Container>
        <div className="grid grid-cols-1 overflow-hidden bg-[#1A1D20] lg:grid-cols-12 lg:items-stretch">
          <div className="relative hidden min-h-[640px] overflow-hidden lg:col-span-5 lg:block">
            <Image
              src="/images/hero-desktop.png"
              alt=""
              fill
              className="object-cover object-[64%_42%]"
              sizes="40vw"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(10,12,14,0.2) 0%, rgba(10,12,14,0.75) 100%)",
              }}
              aria-hidden="true"
            />
            <div className="absolute inset-0 flex flex-col justify-between p-[var(--space-5)]">
              <span className="w-fit bg-[var(--c-accent)] px-[var(--space-2)] py-[var(--space-1)] text-[length:var(--fs-caption)] font-semibold uppercase tracking-[0.06em] text-[var(--c-ink)]">
                Бесплатный подбор
              </span>
              <div>
              <p className="text-[length:var(--fs-caption)] font-semibold uppercase tracking-[0.06em] text-white/70">
                  После квиза
              </p>
              <p className="mt-[var(--space-2)] text-[length:var(--fs-body)] font-semibold leading-[1.5] text-white">
                  Получите 3 проекта, предварительную смету и консультацию
                  инженера.
              </p>
              </div>
            </div>
          </div>

          <div className="p-[var(--space-4)] md:p-[var(--space-5)] lg:col-span-7 lg:p-[var(--space-8)]">
            <p className="text-[length:var(--fs-caption)] font-semibold uppercase tracking-[0.06em] text-white/70">
              Персональный расчёт · 2 минуты
            </p>
            <h2
              id="quiz-heading"
              className="mt-[var(--space-2)] max-w-[640px] text-[length:var(--fs-display)] font-extrabold leading-[1.08] tracking-[-0.01em]"
            >
              Дом под ваш бюджет и участок
            </h2>
            <p className="mt-[var(--space-3)] max-w-[560px] text-[length:var(--fs-body)] font-normal leading-[1.5] text-white/85">
              Ответьте на {STEPS.length} вопросов. Покажем подходящие проекты и
              отправим расчёт в Max — без навязчивых звонков.
            </p>
            <ul className="mt-[var(--space-4)] flex flex-wrap gap-x-[var(--space-4)] gap-y-[var(--space-1)] text-[length:var(--fs-caption)] font-semibold uppercase tracking-[0.06em] text-white/60">
              <li>Без регистрации</li>
              <li>Без обязательств</li>
              <li>Ответ в день обращения</li>
            </ul>
            <div className="mt-[var(--space-5)]">
              <QuizFlow />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

const STORAGE_KEY = "tsk-quiz-popup-shown";

export function QuizPopup() {
  const [open, setOpen] = useState(false);
  const titleId = useId();
  const reduced = useReducedMotion() === true;

  const close = useCallback(() => {
    setOpen(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(STORAGE_KEY) === "1") return;
    } catch {
      /* ignore */
    }

    const timer = window.setTimeout(() => setOpen(true), 15000);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, close]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[60] flex items-end justify-center p-[var(--space-3)] sm:items-center"
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduced ? undefined : { opacity: 0 }}
          transition={{ duration: reduced ? 0 : 0.25 }}
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/55"
            aria-label="Закрыть"
            onClick={close}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="relative z-10 max-h-[min(90svh,760px)] w-full max-w-[520px] overflow-y-auto bg-[#1A1D20] p-[var(--space-4)] text-white md:p-[var(--space-5)]"
            initial={reduced ? false : { opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduced ? undefined : { opacity: 0, y: 16 }}
            transition={
              reduced ? { duration: 0 } : { duration: 0.32, ease: EASE }
            }
          >
            <button
              type="button"
              onClick={close}
              className={`absolute right-[var(--space-3)] top-[var(--space-3)] text-white/80 ${focusRing}`}
              aria-label="Закрыть квиз"
            >
              <IconClose className="size-6" />
            </button>
            <p className="text-[length:var(--fs-caption)] font-semibold uppercase tracking-[0.06em] text-white/60">
              Быстрый расчёт
            </p>
            <h2
              id={titleId}
              className="mt-[var(--space-2)] pr-[var(--space-8)] text-[length:var(--fs-body)] font-extrabold leading-[1.2] tracking-[-0.01em]"
            >
              Не нашли проект? Подберём 3 варианта под бюджет
            </h2>
            <div className="mt-[var(--space-4)]">
              <QuizFlow compact onFinished={close} />
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { PresentationContactForm } from "./PresentationContactForm";
import styles from "./presentation.module.css";

export const metadata: Metadata = {
  title: "ТСК Горизонт | Каркасные дома",
  description:
    "Презентация проектов, построенных домов и технологии строительства ТСК Горизонт.",
};

const OBJECTS = [
  {
    src: "/images/case-garden-patio.jpg",
    alt: "Готовый каркасный дом с садом и открытой зоной отдыха",
    title: "Дом с террасой",
    meta: "Одноэтажный дом для постоянного проживания",
    className: styles.objectLarge,
  },
  {
    src: "/images/case-white-terrace.jpg",
    alt: "Белый одноэтажный дом с тёмной крышей и террасой",
    title: "Дом с крытой верандой",
    meta: "Современный фасад и просторная входная группа",
    className: styles.objectTall,
  },
  {
    src: "/images/case-blue-cottage.jpg",
    alt: "Серый одноэтажный дом с цветником",
    title: "Компактный семейный дом",
    meta: "Рациональная планировка и готовый участок",
    className: styles.objectWide,
  },
  {
    src: "/images/case-gray-piles.jpg",
    alt: "Каркасный дом на свайном фундаменте",
    title: "Дом на свайном фундаменте",
    meta: "Объект перед завершением благоустройства",
    className: styles.objectSmall,
  },
  {
    src: "/images/case-modern-porch.jpg",
    alt: "Современный каркасный дом в процессе завершения строительства",
    title: "Объект в работе",
    meta: "Фасад готов, продолжается отделка террасы",
    className: styles.objectSmall,
  },
] as const;

const PROJECTS = [
  {
    name: "Кедр",
    area: "86 м²",
    rooms: "3 комнаты",
    image: "/images/project-kedr.jpg",
  },
  {
    name: "Сосна",
    area: "112 м²",
    rooms: "4 комнаты",
    image: "/images/project-sosna.jpg",
  },
  {
    name: "Берёза",
    area: "148 м²",
    rooms: "4 комнаты",
    image: "/images/project-bereza.jpg",
  },
] as const;

const WALL_LAYERS = [
  ["01", "Фасад", "Защищает конструкцию и формирует внешний вид дома"],
  ["02", "Вентиляционный зазор", "Отводит влагу от конструкции стены"],
  ["03", "Ветрозащита", "Снижает продувание утеплителя"],
  ["04", "Каркас и утепление", "Основа прочности и теплосбережения"],
  ["05", "Пароизоляция", "Защищает стену от влажного воздуха из помещений"],
  ["06", "Внутренняя отделка", "Готовая поверхность жилого пространства"],
] as const;

export default function PresentationPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <a className={styles.brand} href="#top" aria-label="ТСК Горизонт, наверх">
          <Image
            src="/images/logo-tsk-gorizont.png"
            alt=""
            width={52}
            height={52}
            priority
          />
          <span>
            <strong>ТСК Горизонт</strong>
            <small>Каркасное строительство</small>
          </span>
        </a>

        <nav className={styles.desktopNav} aria-label="Навигация по странице">
          <a href="#objects">Объекты</a>
          <a href="#projects">Проекты</a>
          <a href="#technology">Технология</a>
          <a href="#contacts">Контакты</a>
        </nav>

        <a className={styles.headerPhone} href={SITE.phoneHref}>
          {SITE.phoneDisplay}
        </a>

        <details className={styles.mobileNav}>
          <summary aria-label="Открыть меню">Меню</summary>
          <nav>
            <a href="#objects">Объекты</a>
            <a href="#projects">Проекты</a>
            <a href="#technology">Технология</a>
            <a href="#contacts">Контакты</a>
          </nav>
        </details>
      </header>

      <section className={styles.hero} id="top">
        <Image
          src="/images/case-garden-patio.jpg"
          alt="Готовый каркасный дом ТСК Горизонт"
          fill
          priority
          sizes="100vw"
          className={styles.heroImage}
        />
        <div className={styles.heroShade} />
        <div className={styles.heroContent}>
          <p>Проектируем и строим</p>
          <h1>Каркасные дома для жизни</h1>
          <span>
            Современная архитектура, понятная технология и реальные объекты.
          </span>
          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href="#objects">
              Смотреть дома
            </a>
            <a className={styles.photoButton} href={SITE.phoneHref}>
              Позвонить
            </a>
          </div>
        </div>
      </section>

      <section className={styles.intro}>
        <div className={styles.sectionNumber}>ТСК Горизонт</div>
        <div className={styles.introText}>
          <h2>Дом начинается с разговора</h2>
          <p>
            Мы строим каркасные дома под заказ и помогаем пройти весь путь:
            выбрать проект, адаптировать его к участку и увидеть каждый этап
            строительства вживую.
          </p>
        </div>
        <div className={styles.introFacts}>
          <div>
            <strong>Под заказ</strong>
            <span>Проект под семью, участок и сценарий жизни</span>
          </div>
          <div>
            <strong>Открыто</strong>
            <span>Показываем материалы и приглашаем на объекты</span>
          </div>
          <div>
            <strong>Поэтапно</strong>
            <span>Объясняем конструкцию без перегрузки терминами</span>
          </div>
        </div>
      </section>

      <section className={styles.objects} id="objects">
        <div className={styles.sectionHeading}>
          <h2>Построенные дома</h2>
          <p>
            Реальные объекты компании. Галерея будет дополняться новыми домами,
            этапами строительства и интерьерами.
          </p>
        </div>
        <div className={styles.objectGrid}>
          {OBJECTS.map((object) => (
            <figure className={object.className} key={object.src}>
              <div className={styles.objectImage}>
                <Image
                  src={object.src}
                  alt={object.alt}
                  fill
                  sizes="(max-width: 767px) 100vw, 50vw"
                />
              </div>
              <figcaption>
                <strong>{object.title}</strong>
                <span>{object.meta}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className={styles.projects} id="projects">
        <div className={styles.projectIntro}>
          <h2>Проекты домов</h2>
          <p>
            Начальная коллекция планировок. Любой проект можно доработать вместе
            с проектировщиком.
          </p>
          <a href="#contacts">Обсудить свой проект</a>
        </div>
        <div className={styles.projectList}>
          {PROJECTS.map((project) => (
            <article className={styles.project} key={project.name}>
              <div className={styles.projectImage}>
                <Image
                  src={project.image}
                  alt={`Проект дома ${project.name}`}
                  fill
                  sizes="(max-width: 767px) 100vw, 33vw"
                />
              </div>
              <div className={styles.projectTitle}>
                <h3>{project.name}</h3>
                <span>
                  {project.area}
                  <br />
                  {project.rooms}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.technology} id="technology">
        <div className={styles.technologyLead}>
          <h2>Как устроен каркасный дом</h2>
          <p>
            Слои стены работают как единая система. На встрече покажем образцы
            материалов и объясним конструкцию на готовом объекте.
          </p>
        </div>
        <div className={styles.wallVisual} aria-label="Схема слоёв стены">
          <div className={styles.wallFacade}>Фасад</div>
          <div className={styles.wallGap}>Зазор</div>
          <div className={styles.wallShield}>Защита</div>
          <div className={styles.wallFrame}>
            <span />
            <span />
            <span />
          </div>
          <div className={styles.wallVapor}>Пароизоляция</div>
          <div className={styles.wallFinish}>Отделка</div>
        </div>
        <div className={styles.layerList}>
          {WALL_LAYERS.map(([number, title, text]) => (
            <article key={number}>
              <span>{number}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.principles}>
        <div className={styles.principlesImage}>
          <Image
            src="/images/case-modern-porch.jpg"
            alt="Каркасный дом во время завершающих работ"
            fill
            sizes="(max-width: 767px) 100vw, 50vw"
          />
        </div>
        <div className={styles.principlesText}>
          <h2>Главное можно увидеть своими глазами</h2>
          <p>
            Сайт знакомит с компанией, но не заменяет живой осмотр. Приглашаем
            клиентов, риелторов и партнёров посмотреть дом, материалы и качество
            работ на месте.
          </p>
          <ul>
            <li>Показываем конструкцию до закрытия отделкой</li>
            <li>Объясняем выбор материалов простым языком</li>
            <li>Обсуждаем планировку на примере реальных домов</li>
          </ul>
          <a href="#contacts">Договориться о встрече</a>
        </div>
      </section>

      <section className={styles.upcoming}>
        <div>
          <span>Сейчас в работе</span>
          <h2>Дом около 110 м² со вторым светом</h2>
          <p>
            Проект станет полноценным демонстрационным объектом. После
            завершения добавим гостиную, санузел и спальни в галерею.
          </p>
        </div>
        <div className={styles.upcomingImage}>
          <Image
            src="/images/case-gray-piles.jpg"
            alt="Дом на этапе строительства"
            fill
            sizes="(max-width: 767px) 100vw, 50vw"
          />
        </div>
      </section>

      <section className={styles.partners}>
        <h2>Открыты к партнёрству</h2>
        <div>
          <p>
            Работаем с риелторами, проектировщиками и владельцами земельных
            участков.
          </p>
          <p>
            Готовы обсуждать базы отдыха, инвестиционные объекты и совместные
            проекты в каркасном строительстве.
          </p>
        </div>
      </section>

      <section className={styles.contacts} id="contacts">
        <div className={styles.contactLead}>
          <span>Связаться с нами</span>
          <h2>Покажем дома и ответим на вопросы</h2>
          <p>
            Позвоните или оставьте номер. Подберём удобное время для встречи,
            презентации или осмотра объекта.
          </p>
          <a href={SITE.phoneHref}>{SITE.phoneDisplay}</a>
          <div className={styles.messengers}>
            <a href={SITE.telegramHref} target="_blank" rel="noreferrer">
              Telegram
            </a>
            <a href={SITE.maxHref} target="_blank" rel="noreferrer">
              Max
            </a>
          </div>
        </div>
        <PresentationContactForm />
      </section>

      <footer className={styles.footer}>
        <div>
          <strong>ТСК Горизонт</strong>
          <span>Каркасные дома</span>
        </div>
        <address>
          {SITE.address}
          <br />
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
        </address>
        <div className={styles.footerLinks}>
          <Link href="/privacy">Политика конфиденциальности</Link>
          <Link href="/">Первая версия сайта</Link>
        </div>
      </footer>
    </main>
  );
}

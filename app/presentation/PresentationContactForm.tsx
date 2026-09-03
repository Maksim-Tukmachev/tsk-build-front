"use client";

import { FormEvent, useState } from "react";
import styles from "./presentation.module.css";

export function PresentationContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className={styles.formSuccess} role="status">
        <p>Спасибо. Мы получили ваши контакты.</p>
        <span>Свяжемся с вами и договоримся о разговоре или встрече на объекте.</span>
      </div>
    );
  }

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <label>
        <span>Как к вам обращаться</span>
        <input name="name" autoComplete="name" required />
      </label>
      <label>
        <span>Телефон</span>
        <input
          name="phone"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          required
        />
      </label>
      <button type="submit">Оставить контакты</button>
      <p>
        Нажимая кнопку, вы соглашаетесь с политикой обработки персональных
        данных.
      </p>
    </form>
  );
}

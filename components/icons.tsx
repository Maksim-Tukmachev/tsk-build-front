type IconProps = {
  className?: string;
  title?: string;
  decorative?: boolean;
};

function svgProps({ title, decorative }: IconProps) {
  if (decorative || !title) {
    return { "aria-hidden": true as const };
  }
  return { role: "img" as const };
}

export function IconHouse({ className, title, decorative }: IconProps) {
  return (
    <svg
      className={className}
      width="20"
      height="18"
      viewBox="0 0 20 18"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...svgProps({ title, decorative })}
    >
      {title && !decorative ? <title>{title}</title> : null}
      <path d="M10 0.5L19.5 8.2V17.5H12.5V11.5H7.5V17.5H0.5V8.2L10 0.5Z" />
    </svg>
  );
}

export function IconChevron({ className, decorative = true }: IconProps) {
  return (
    <svg
      className={className}
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden={decorative}
    >
      <path
        d="M3 4.5L6 7.5L9 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  );
}

export function IconWhatsApp({ className, title = "WhatsApp" }: IconProps) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
    >
      <title>{title}</title>
      <path d="M12 2C6.5 2 2 6.4 2 11.9c0 2.1.6 4 1.7 5.7L2 22l4.5-1.5c1.6.9 3.5 1.4 5.5 1.4 5.5 0 10-4.4 10-9.9S17.5 2 12 2Zm0 17.8c-1.7 0-3.3-.5-4.7-1.3l-.3-.2-2.7.9.9-2.6-.2-.3c-.9-1.4-1.4-3.1-1.4-4.8 0-4.4 3.6-8 8.1-8s8.1 3.6 8.1 8-3.6 8-8.1 8Zm4.5-5.9c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1-.2.2-.6.8-.7.9-.1.2-.3.2-.5.1-.2-.1-.9-.3-1.8-1.1-.7-.6-1.1-1.3-1.2-1.5-.1-.2 0-.4.1-.5l.4-.5c.1-.1.2-.3.2-.4 0-.1 0-.3-.1-.4-.1-.1-.5-1.3-.7-1.8-.2-.5-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.2.9 2.3c.1.2 1.6 2.5 3.9 3.4.5.2.9.4 1.3.5.5.2 1 .1 1.3.1.4-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1-.1-.1-.3-.2-.5-.3Z" />
    </svg>
  );
}

export function IconPhone({ className, title = "Телефон", decorative }: IconProps) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...(decorative || !title
        ? { "aria-hidden": true as const }
        : { role: "img" as const })}
    >
      {!decorative && title ? <title>{title}</title> : null}
      <path
        d="M7.5 3.5h3l1.5 4.5-2 1.5c1 2 2.5 3.5 4.5 4.5l1.5-2 4.5 1.5v3c0 1-1 2-2 2C10.5 18.5 5.5 13.5 5.5 5.5c0-1 1-2 2-2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconCallback({ className, title = "Обратный звонок" }: IconProps) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
    >
      <title>{title}</title>
      <path
        d="M8 4H5.5A1.5 1.5 0 0 0 4 5.5v3M16 4h2.5A1.5 1.5 0 0 1 20 5.5v3M8 20H5.5A1.5 1.5 0 0 1 4 18.5v-3M16 20h2.5a1.5 1.5 0 0 0 1.5-1.5v-3"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M8.5 9.5h2l1 3-1.5 1c.8 1.5 1.9 2.6 3.5 3.5l1-1.5 3 1v2c0 .7-.7 1.5-1.5 1.5C10.5 19.5 6.5 15.5 6.5 9.5c0-.8.8-1.5 1.5-1.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconFavorite({ className, title = "Избранное" }: IconProps) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
    >
      <title>{title}</title>
      <path
        d="M12 19.5 4.8 12.8A4.4 4.4 0 0 1 12 6.2a4.4 4.4 0 0 1 7.2 6.6L12 19.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconSearch({ className, title = "Поиск" }: IconProps) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
    >
      <title>{title}</title>
      <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M16 16l4.5 4.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function IconBurger({ className, title = "Меню" }: IconProps) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
    >
      <title>{title}</title>
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function IconClose({ className, title = "Закрыть" }: IconProps) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
    >
      <title>{title}</title>
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

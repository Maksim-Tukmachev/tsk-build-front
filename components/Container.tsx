import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "nav" | "section";
};

export function Container({
  children,
  className = "",
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag
      className={[
        "mx-auto w-full max-w-[1600px]",
        // Mobile: space-3 + safe-area (keeps header/hero left edges aligned)
        "pl-[calc(var(--space-3)+env(safe-area-inset-left,0px))]",
        "pr-[calc(var(--space-3)+env(safe-area-inset-right,0px))]",
        // Tablet / desktop — token paddings from the brief
        "md:pl-[var(--space-5)] md:pr-[var(--space-5)]",
        "lg:pl-[var(--space-8)] lg:pr-[var(--space-8)]",
        "xl:pl-[var(--space-20)] xl:pr-[var(--space-20)]",
        className,
      ].join(" ")}
    >
      {children}
    </Tag>
  );
}

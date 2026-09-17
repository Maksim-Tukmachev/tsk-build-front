import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const mazzardH = localFont({
  src: [
    {
      path: "./fonts/mazzard/MazzardH-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/mazzard/MazzardH-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/mazzard/MazzardH-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-mazzard",
});

export const metadata: Metadata = {
  title: "ТСК Горизонт — каркасные дома в Набережных Челнах",
  description:
    "Каркасные дома под ключ от 2,1 млн ₽. Срок от 90 дней, гарантия 5 лет. Набережные Челны, работаем по Республике Татарстан.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" className={`${mazzardH.variable} h-full antialiased`}>
      <body className={`${mazzardH.className} min-h-full`}>{children}</body>
    </html>
  );
}

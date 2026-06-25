
import type { Metadata } from "next";
import "./globals.css";

import { getMessages } from "next-intl/server";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/src/i18n/routing";

import localFont from "next/font/local";

const kotayk = localFont({
  src: "../fonts/Kotayk.ttf",
  variable: "--font-kotayk",
})

const juana = localFont({
  src: "../fonts/Fontspring-DEMO-juana-medium.otf",
  variable: "--font-juana",
});

const adobe = localFont({
  src: "../fonts/adobe-clean-serif.ttf",
  variable: "--font-adobe",
});

const bruney = localFont({
  src: "../fonts/ss-bruney.otf",
  variable: "--font-bruney",
});

const vrdznagir = localFont({
  src: "../fonts/Vrdznagir.otf",
  variable: "--font-vrdznagir",
});

// const norkirk = localFont({
//   src: "../fonts/Norkirk.ttf",
//   variable: "--font-norkirk",
// });

const notoArmenian = localFont({
  src: [
    {
      path: "../fonts/NotoSansArmenian-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../fonts/NotoSansArmenian-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../fonts/NotoSansArmenian-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/NotoSansArmenian-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/NotoSansArmenian-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/NotoSansArmenian-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-noto-armenian",
});

export const metadata: Metadata = {
  title: "Invitation",
  description: "Elegant wedding invitation website",
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`
          ${kotayk.variable}
          ${adobe.variable}
          ${bruney.variable}
          ${kotayk.variable}
          ${juana.variable}
          ${notoArmenian.variable}
          ${vrdznagir.variable}
          min-h-screen flex flex-col
        `}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
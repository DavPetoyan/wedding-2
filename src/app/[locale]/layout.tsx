// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import { getMessages } from "next-intl/server";
// import { hasLocale, NextIntlClientProvider } from "next-intl";
// import { notFound } from "next/navigation";
// import { routing } from "@/src/i18n/routing";


// type Props = {
//   children: React.ReactNode;
//   params: Promise<{ locale: string }>;
// };

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "Invitation",
//   description: "Elegant invitation website",
// };

// export default async function LocaleLayout({ children, params }: Props) {
//   const { locale } = await params;

//   if (!hasLocale(routing.locales, locale)) {
//     notFound();
//   }

//   const messages = await getMessages();

//   return (
//     <html
//       lang={locale}
//     >
//       <body className="min-h-full flex flex-col">
//         <NextIntlClientProvider messages={messages}>
//           {children}
//         </NextIntlClientProvider>
//       </body>
//     </html>
//   );
// }



import type { Metadata } from "next";
import "./globals.css";

import { getMessages } from "next-intl/server";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/src/i18n/routing";

import localFont from "next/font/local";

// ===== FONTS =====
const kotayk = localFont({
  src: [
    {
      path: "../fonts/Kotayk-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Kotayk-Italic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-kotayk",
});

const adobe = localFont({
  src: "../fonts/adobe-clean-serif.woff2",
  variable: "--font-adobe",
});

const bruney = localFont({
  src: "../fonts/ss-bruney.woff2",
  variable: "--font-bruney",
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
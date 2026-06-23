
"use client";

import { usePathname, useRouter } from "@/src/i18n/navigation";
import { useLocale } from "next-intl";

export default function LanguageSwitcher() {
    const router = useRouter();
    const locale = useLocale();
    const pathname = usePathname();

    function toggleLanguage() {
        const newLocale = locale === "hy" ? "ru" : "hy";
        router.replace(pathname, { locale: newLocale });
    }

    return (
            <button
                onClick={toggleLanguage}
                className="font-adobe bg-transparent text-white tracking-[3px] text-center cursor-pointer border-2 border-white rounded-[50%] px-[6px] pt-[4px] "
            >
                {locale === "hy" ? "RU" : "AM"}
            </button>
    );
}
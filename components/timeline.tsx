"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import React from "react";

type EventItem = {
    title: string;
    time: string;
    address?: string;
    map?: string;
    place?: string;
};

export default function Timeline() {
    const t = useTranslations();

    const events = t.raw("Events") as Record<string, any>;

    const schedule: EventItem[] = Object.values(events).filter(
        (item): item is EventItem =>
            typeof item === "object" &&
            item !== null &&
            "time" in item
    );

    return (
        <div className="relative w-full max-w-md mx-auto py-10">
            {schedule.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.6,
                        delay: index * 0.15,
                    }}
                    viewport={{ once: true, amount: 0.4 }}
                    className={`relative flex gap-8 ${
                        index !== schedule.length - 1 ? "mb-[40px]" : ""
                    }`}
                >
                    {/* Dot + Line */}
                    <div className="relative flex flex-col items-center">
                        <div className="w-[11px] h-[11px] rounded-full bg-black z-10" />

                        {index !== schedule.length - 1 && (
                            <div className="absolute top-[11px] w-[1px] h-[85px] bg-black/60" />
                        )}
                    </div>

                    {/* Text */}
                    <div className="flex flex-col">
                        <h3 className="text-[16px] font-bold leading-[20px]">
                            {item.time}
                        </h3>

                        <p className="mt-[6px] text-[16px] leading-[20px]">
                            {item.title}
                        </p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}







"use client"

import { useTranslations } from "next-intl";
import React from "react";
import { motion } from "framer-motion";

export default function Calendar() {
  const c = useTranslations("Calendar");

  return (
    <motion.div
      initial={{ opacity: 0, y: 80, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
    >

      <div className="w-full h-full flex justify-center gap-4 p-5 flex-col items-center ">
        <p className="medMonth font-juana leading-[136%] text-[30px] text-center">
          {c("month")}
        </p>
      </div>


      <div className="w-full h-full flex justify-center ">
        <div className="medCal w-83  flex justify-between items-center">
          <p className="medDay font-noto-armenian text-[12px] tracking-[3px] uppercase">
            {c("days.mon")}
          </p>
          <p className="medDay font-noto-armenian text-[12px] tracking-[3px] uppercase">
            {c("days.tue")}
          </p>
          <p className="medDay font-noto-armenian text-[12px] tracking-[3px] uppercase">
            {c("days.wed")}
          </p>
          <p className="medDay font-noto-armenian text-[12px] tracking-[3px] uppercase">
            {c("days.thu")}
          </p>
          <p className="medDay font-noto-armenian text-[12px] tracking-[3px] uppercase">
            {c("days.fri")}
          </p>
          <p className="medDay font-noto-armenian text-[12px] tracking-[3px] uppercase">
            {c("days.sat")}
          </p>
          <p className="medDay font-noto-armenian text-[12px] tracking-[3px] uppercase">
            {c("days.sun")}
          </p>
        </div>
      </div>

      {/* NUMBERS */}
      <div className="w-full h-full flex justify-center pt-2 ">
        <div className="medNumbers w-82 pl-1 flex flex-wrap gap-8.5">
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: i * 0.03 }}
              viewport={{ once: true }}
              className="medNumber font-medium w-4"
            >
              <p>{i + 1}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
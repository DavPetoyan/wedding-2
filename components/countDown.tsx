"use client"

// import React from 'react'
// import Countdown from 'react-countdown'


// const endingDate = new Date("2026-07-01")


// export default function CountDown() {
//   return (
//     <Countdown className='font-bruney font-normal tracking-[12px] text-[45px] leading-1.7 text-[#000000] ' date={endingDate} />
//   )
// }

import { useTranslations } from "next-intl";
import Countdown from "react-countdown";

const endingDate = new Date("2026-07-01");

export default function CountDown() {
    const f = useTranslations("Timeline")
    return (
        <Countdown
            date={endingDate}
            renderer={({ days, hours, minutes, seconds }) => (
                <div className="flex justify-center gap-6">
                    <div className="flex flex-col items-center">
                        <span className="font-bruney text-[45px]">
                            {String(days).padStart(2, "0")}
                        </span>
                        <span className="font-noto-armenian uppercase font-light text-[14px] leading-1.7">{f("day")}</span>
                    </div>

                    <span className="font-bruney text-[45px]">:</span>

                    <div className="flex flex-col items-center">
                        <span className="font-bruney text-[45px]">
                            {String(hours).padStart(2, "0")}
                        </span>
                        <span className="font-noto-armenian uppercase font-light text-[14px] leading-1.7"> {f("hours")} </span>
                    </div>

                    <span className="font-bruney text-[45px]">:</span>

                    <div className="flex flex-col items-center">
                        <span className="font-bruney text-[45px]">
                            {String(minutes).padStart(2, "0")}
                        </span>
                        <span className="font-noto-armenian uppercase font-light text-[14px] leading-1.7">{f("minute")}</span>
                    </div>

                    <span className="font-bruney text-[45px]">:</span>

                    <div className="flex flex-col items-center">
                        <span className="font-bruney text-[45px]">
                            {String(seconds).padStart(2, "0")}
                        </span>
                        <span className="font-noto-armenian uppercase font-light text-[14px] leading-1.7 ">{f("second")}</span>
                    </div>
                </div>
            )}
        />
    );
}
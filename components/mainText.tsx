import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function MainText() {


    const t = useTranslations("Hero")

    return (
        <>
            <div className="flex flex-col items-center justify-center text-center">
                <p className="font-bruney  leading-[136%] text-[25px] text-[#DEDAD5]">
                    {t("saveTheDate")}
                </p>

                <p className="font-bruney font-normal tracking-[4px] text-[22px] text-[#DEDAD5]">
                    {t("date")}
                </p>

                <div className="w-15 h-22 relative">
                    <Link href="https://www.ayandesign.am/#home" target="_blank">
                        <Image
                            src="https://dl-invitation.ayandesign.am/a.png"
                            alt="Decoration"
                            fill
                            className='object-cover'
                        />
                    </Link>
                </div>

                <div className="mt-22.75  w-full px-4   text-center h-50 ">
                    <div className=' relative'>
                        <p className="medText2 p-2 font-bruney tracking-[3px] text-[45px] top-16 left-16  absolute text-[#DEDAD5]  ">
                            Arman
                            <span className=" p-2 font-bruney  absolute -top-6  text-[68px] text-[#DEDAD5]/34"> &</span>
                        </p>
                        <p className="medText p-2 font-bruney tracking-[3px] absolute top-26  left-40  text-[45px] text-[#DEDAD5]  ">
                            Angelina
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

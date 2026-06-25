import React from 'react'
import { motion } from "framer-motion";
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Footer() {


    const n = useTranslations("Footer")

    return (
        <>
            <motion.div className="w-full mt-18 flex justify-center ">
                <div className="w-66 h-48.75 flex justify-center items-center bg-white rounded-[14px]" >
                    <div className="w-56.5 h-35 bg-contain bg-center bg-no-repeat flex items-center flex-col justify-center items-center p-6 text-white " style={{
                        backgroundImage:
                            "url('/photo_2026-06-25_19-33-32.jpg')",
                    }}>
                        <p className='font-vrdznagir text-[#DEDAD5] text-[20px] leading-1.7 ' > {n("madeBy")} </p>
                        <div>
                            <p className='font-noto-armenian text-[6px] text-[#A1A1AA]/64 '> {n("click")} </p>
                        </div>
                        <Image src="Ayan-agency.svg" alt='' width={64} height={28} className='object-contain' />
                        <div className='flex'>
                            <Image src="insta.svg" alt='' width={14} height={14} />
                            <Image src="fb.svg" alt='' width={14} height={14} />
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

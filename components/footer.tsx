import React from 'react'
import { motion } from "framer-motion";
import { useTranslations } from 'next-intl';

export default function Footer() {


    const n = useTranslations("Footer")

    return (
        <>
            <motion.div className="w-full mt-18 flex justify-center ">
                <div className="w-66 h-48.75 flex justify-center items-center bg-white rounded-[14px]" >
                    <div className="w-56.5 h-35 bg-contain bg-center bg-no-repeat flex justify-center items-center p-6 text-white " style={{
                        backgroundImage:
                            "url('/photo_2026-06-25_19-33-32.jpg')",
                    }}>
                        <p className='font-vrdznagir text-[#DEDAD5] text-[20px] leading-1.7 ' > {n("madeBy")}sdf </p>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

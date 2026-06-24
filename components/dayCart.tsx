import React from 'react'
import { motion } from "framer-motion";
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function DayCart() {

    const e = useTranslations("Events");


    return (
        <>

            <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                className="w-74 flex flex-col "
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="w-full h-full  flex justify-center flex-col items-center"
                >
                    <motion.div
                        initial={{ scale: 0.8, rotate: -5 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        viewport={{ once: true }}
                        className="w-14 h-31 relative"
                    >
                        <Image src="/pesa.svg" alt="" fill className="object-contain" />
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.45, duration: 0.4 }}
                        viewport={{ once: true }}
                        className="font-noto-armenian font-black leading-[136%] text-[15px]"
                    >
                        {e("groomHouse.title")}
                    </motion.p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.55, duration: 0.4 }}
                    viewport={{ once: true }}
                    className="w-full h-full mt-7.5 flex justify-center"
                >
                    <p className="font-noto-armenian font-normal leading-[136%] text-[15px]">
                        {e("groomHouse.address")}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <Link
                        href="https://yandex.com/maps/10262/yerevan/house/sundukyan_poghots_17/YE0YcwdhS0MDQFpqfX5xcXxrbA==/?indoorLevel=1&ll=44.501263%2C40.200088&z=17.3"
                        target="_blank"
                        className="font-noto-armenian text-[16px] mb-5.25 border rounded-[26px] w-full  text-center mt-5.25 py-3.5 block"
                    >
                        {e("groomHouse.map")}
                    </Link>
                </motion.div>
            </motion.div>

            

            <motion.div
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                className="w-74 flex flex-col "
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="w-full h-full  flex justify-center flex-col items-center"
                >
                    <motion.div
                        initial={{ scale: 0.8, rotate: 5 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.45, duration: 0.6 }}
                        viewport={{ once: true }}
                        className="w-20.25 h-25.25 relative"
                    >
                        <Image
                            src="/harsik.svg"
                            alt=""
                            fill
                            className="object-contain"
                        />
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.4 }}
                        viewport={{ once: true }}
                        className="font-noto-armenian font-black leading-[136%] text-[15px]"
                    >
                        {e("brideHouse.title")}
                    </motion.p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.75, duration: 0.4 }}
                    viewport={{ once: true }}
                    className="w-full h-full mt-7.5 flex justify-center"
                >
                    <p className="font-noto-armenian font-normal leading-[136%] text-[15px]">
                        {e("brideHouse.address")}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <Link
                        href="https://yandex.com/maps/10262/yerevan/house/bashinjaghyan_poghots_183/YE0YcgFoSUAEQFpqfX5xd3tmYQ==/?indoorLevel=1&ll=44.468053%2C40.206756&z=17.3"
                        target="_blank"
                        className="font-noto-armenian text-[16px] mb-5.25 rounded-[26px] w-full border text-center mt-5.25 py-3.5 block"
                    >
                        {e("groomHouse.map")}
                    </Link>
                </motion.div>
            </motion.div>
        </>
    )
}

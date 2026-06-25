// import React from 'react'
// import { motion } from "framer-motion";
// import Image from 'next/image';
// import Link from 'next/link';
// import { useTranslations } from 'next-intl';
// export default function DayCartSec() {

//     const e = useTranslations("Events");

//     return (
//         <>
//             <motion.div className="w-74 h-full flex flex-col  border">
//                 <div className="w-full h-full border text-center flex justify-center flex-col items-center">
//                     <div className="w-24.5 h-28.5 relative">
//                         <Image src="/ekexeci.svg" alt="" fill className="object-contain" />
//                     </div>
//                     <p className="font-noto-armenian font-black leading-[136%] text-[15px] "> {e("church.title")} </p>
//                 </div>
//                 <Link href="https://yandex.com/maps/10262/yerevan/house/armenak_armenakyan_poghots_99/YE0YcwRhS0EOQFpqfX15d3hgYA==/?ll=44.531249%2C40.186434&z=17.3" target="_blank" className="font-noto-armenian text-[16px] mb-5.25 rounded-[26px] w-full border text-center mt-5.25 py-3.5 ">{e("groomHouse.map")}</Link>
//             </motion.div>
//             <motion.div className="w-74 h-full flex flex-col  border">
//                 <div className="w-full h-full border text-center flex justify-center flex-col items-center">
//                     <div className="w-22 h-24.5 relative">
//                         <Image src="/restoran.svg" alt="" fill className="object-contain" />
//                     </div>
//                     <p className="mt-4.5 font-noto-armenian font-black leading-[136%] text-[15px] "> {e("party.title")} </p>
//                 </div>
//                 <Link href="https://yandex.com/maps/org/mkrtchyans_hall/139276208586/?ll=44.426484%2C40.076116&z=14.49" target="_blank" className="font-noto-armenian text-[16px] mb-5.25 rounded-[26px] w-full border text-center mt-5.25 py-3.5 ">{e("groomHouse.map")}</Link>
//             </motion.div>
//         </>
//     )
// }


import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function DayCartSec() {
  const e = useTranslations("Events");

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="w-73 h-full flex flex-col "
      >
        <div className="w-full h-full  text-center flex justify-center flex-col items-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-24.5 h-28.5 relative"
          >
            <Image src="/ekexeci.svg" alt="" fill className="object-contain" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="font-noto-armenian font-black leading-[136%] text-[15px]"
          >
            {e("church.title")}
          </motion.p>
        </div>

        <Link
          href="https://yandex.com/maps/10262/yerevan/house/armenak_armenakyan_poghots_99/YE0YcwRhS0EOQFpqfX15d3hgYA==/?ll=44.531249%2C40.186434&z=17.3"
          target="_blank"
          className="font-noto-armenian text-[16px] mb-5.25 rounded-[26px] w-full border text-center mt-5.25 py-3.5"
        >
          {e("groomHouse.map")}
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="w-74 h-full flex flex-col "
      >
        <div className="w-full h-full  text-center flex justify-center flex-col items-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="w-22 h-24.5 relative"
          >
            <Image src="/restoran.svg" alt="" fill className="object-contain" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-4.5 font-noto-armenian font-black leading-[136%] text-[15px]"
          >
            {e("party.title")}
          </motion.p>
        </div>

        <Link
          href="https://yandex.com/maps/org/mkrtchyans_hall/139276208586/?ll=44.426484%2C40.076116&z=14.49"
          target="_blank"
          className="font-noto-armenian text-[16px] mb-5.25 rounded-[26px] w-full border text-center mt-5.25 py-3.5"
        >
          {e("groomHouse.map")}
        </Link>
      </motion.div>
    </>
  );
}
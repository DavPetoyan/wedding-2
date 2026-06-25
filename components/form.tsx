"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function RSVPForm() {
    return (
        <motion.form
            action="https://formsubmit.co/davitpetoyan7@gmail.com"
            method="POST"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="px-4 mt-8"
        >
            <div className="mx-auto flex w-[360px] flex-col items-center justify-center gap-6 rounded-2xl border border-[#18548B22] bg-white/60 p-6 backdrop-blur-md">

                {/* NAME */}
                <div className="w-full max-w-[420px]">
                    <p className="mb-1 text-xs text-[#18548B]">
                        Անուն Ազգանուն՝
                    </p>

                    <input
                        type="text"
                        name="Անուն Ազգանուն"
                        required
                        className="h-10 w-full rounded-xl border border-[#18548B33] bg-white/80 px-3 text-[#18548B] placeholder-[#18548B55]  transition duration-300 focus:scale-[1.01] focus:border-transparent focus:outline focus:outline-[#18548B]"
                    />
                </div>

                {/* ATTENDANCE */}
                <div className="w-full max-w-[420px]">
                    <p className="mb-2  text-xs text-[#18548B]">
                        Կկարողանա՞ք ներկա գտնվել
                    </p>

                    <div className="flex items-center justify-center gap-[30px]">

                        <input id="yes" type="radio" name="Ներկա" value="Այո" required className="rad peer hidden" />
                        <label
                            htmlFor="yes"
                            className="flex h-[46px] text-[12px] w-full max-w-[225px] cursor-pointer items-center justify-center rounded-xl border border-[#18548B33] bg-white/80 text-[#18548B] transition duration-300 hover:scale-[1.03] "
                        >
                            Այո, ներկա կլինեմ
                        </label>

                        <input id="no" type="radio" name="Ներկա" value="Ոչ" className="rad px-8 peer hidden" />
                        <label
                            htmlFor="no"
                            className="flex h-[46px] text-[12px] w-full max-w-[225px] cursor-pointer items-center justify-center rounded-xl border border-[#18548B33] bg-white/80 text-[#18548B] transition duration-300 hover:scale-[1.03]"
                        >
                            Ոչ, ներկա չեմ լինի
                        </label>

                    </div>
                </div>

                {/* INVITED BY */}
                <div className="w-full max-w-[420px] ">
                    <p className="mb-2 text-xs text-[#18548B]">
                        Ու՞մ կողմից եք հրավիրված
                    </p>

                    <div className="flex items-center justify-center gap-[30px]">
                        <input id="pesa" type="radio" name="Ում կողմից" value="Արման" required className="rad peer hidden" />
                        <label
                            htmlFor="pesa"
                            className="flex h-[46px] w-full text-[12px] max-w-[225px] cursor-pointer items-center justify-center rounded-xl border border-[#18548B33] bg-white/80 text-[#18548B] transition duration-300 hover:scale-[1.03]"
                        >
                            Փեսայի
                        </label>


                        <input id="hars" type="radio" name="Ում կողմից" value="Անգելինա" className="rad peer hidden" />
                        <label
                            htmlFor="hars"
                            className="flex h-[46px] w-full text-[12px] max-w-[225px] cursor-pointer items-center justify-center rounded-xl border border-[#18548B33] bg-white/80 text-[#18548B] transition duration-300 hover:scale-[1.03]"
                        >
                            Հարսի
                        </label>

                    </div>
                </div>

                {/* GUESTS */}
                <div className="w-full max-w-[420px]">
                    <p className="mb-1 text-xs text-[#18548B]">
                        Հյուրերի քանակը
                    </p>

                    <input
                        type="number"
                        name="Հյուրերի քանակ"
                        required
                        className="h-10 w-full rounded-xl border border-[#18548B33] bg-white/80 px-3 text-[#18548B] transition duration-300 focus:scale-[1.01] focus:border-transparent focus:outline focus:outline-[#18548B]"
                    />
                </div>

                {/* BUTTON */}
                <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    className="font-noto-armenian font-medium tracking-[0.160px] h-10 w-full flex justify-center items-center gap-1 max-w-[420px] cursor-pointer rounded-xl bg-[#18548B]/24 text-[#18548B] shadow-md transition"
                >
                    <Image src="/Component-1.svg" alt="" width={16}  height={16}  />
                    ուղարկել
                </motion.button>

                <input type="hidden" name="_subject" value="New RSVP Response" />
                <input type="hidden" name="_captcha" value="false" />
            </div>
        </motion.form>
    );
}
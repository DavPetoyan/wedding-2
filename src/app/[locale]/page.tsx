"use client"


import Calendar from "@/components/calendar";
import MainText from "@/components/mainText";
import Navbar from "@/components/navbar";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import DayCart from "@/components/dayCart";
import DayCartSec from "@/components/dayCartSec";
import Timeline from "@/components/timeline";
import CountDown from "@/components/countDown";
import RSVPForm from "@/components/form";
import Footer from "@/components/footer";

export default function Home() {
  const [introDone, setIntroDone] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [scrollLocked, setScrollLocked] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIntroDone(true);
      setScrollLocked(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);



  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setIntroDone(true);
      document.body.style.overflow = "auto";
    }, 2200);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, []);


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleAudio = async () => {
    if (!audioRef.current) return;

    if (audioPlaying) {
      audioRef.current.pause();
      setAudioPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setAudioPlaying(true);
      } catch (err) {
        console.log("Audio blocked:", err);
      }
    }
  };

  const t = useTranslations("Hero");
  const e = useTranslations("Events");
  const b = useTranslations("resolve")
  return (
    <>
      <audio ref={audioRef}>
        <source src="/Ordinary.mp3" type="audio/mp3" />
      </audio>

      <div className="w-full min-h-screen relative overflow-hidden bg-cover bg-center bg-no-repeat">


        {!introDone && (
          <div className="relative w-full h-screen flex">
            <Image
              src="/f22d87c44c02df76e9540b025e3109b2ad879faf.png"
              alt=""
              fill
              className="imganim1 absolute object-contain"
            />
            <Image
              src="/c6f7e4ad0d6339f6fcac7a88b54dbff429a976e1.png"
              alt=""
              fill
              className="imganim2 absolute object-contain"
            />
          </div>
        )}


        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={
            introDone
              ? { opacity: 1, scale: 1 }
              : { opacity: 0, scale: 1.05 }
          }
          transition={{ duration: 1 }}
          className="max-w-130 mx-auto h-161 bg-center bg-cover bg-no-repeat relative"
          style={{
            backgroundImage:
              "url('https://dl-invitation.ayandesign.am/1.png')",
          }}
        >
          <div className="grad w-full h-full absolute top-0 left-0 pt-4 px-2 sm:px-3 lg:px-4">
            <Navbar />
            <MainText />
          </div>
        </motion.div>


        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-130 mx-auto bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('./18573a5cd93765380000d7d7df8875a80701e7c0.jpg')",
          }}
        >

          <div className="w-full pt-3.25 pb-1 flex items-center justify-center h-full relative">
            <div
              className="w-17 h-17 rounded-full border flex justify-center "
              onClick={toggleAudio}
            >
              <Image
                src={
                  audioPlaying
                    ? "https://dl-invitation.ayandesign.am/Vector%20(1).svg"
                    : "https://dl-invitation.ayandesign.am/Vector%20(2).svg"
                }
                alt="audio"
                width={34}
                height={34}
                className="cursor-pointer object-contain hover:scale-110 transition-transform"
                onClick={() => setAudioPlaying(!audioPlaying)}
              />
            </div>
          </div>


          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full h-full flex justify-center gap-4 p-5 flex-col items-center "
          >
            <p className="inviteText font-juana leading-[136%] text-[35px] text-center">
              {t("inviteText1")}
            </p>

            <p className="max-w-84.5 font-noto-armenian font-light leading-7 text-[18px] text-center">
              {t("inviteText2")}
            </p>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Calendar />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.3 }}
            className="mt-2 p-2"
          >
            <p className="font-kotayk text-[35px] leading-[136%] font-normal text-center">
              {e("title")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="w-full min-h-screen flex flex-col items-center justify-center "
          >
            <DayCart />
            <DayCartSec />
            <motion.div
              className="w-full flex justify-center"
            >
              <div className="w-98.75  flex items-center justify-between gap-6 pt-3 ">
                <div className="relative w-26.75 h-40.25">
                  <Image src="/harsikpesank1.svg" alt="" fill className="object-contain " />
                </div>

                <div className="relative w-26.75 h-40.25 ">
                  <Image src="/harsikpesank2.svg" alt="" fill className="object-contain shadow-xl" />
                </div>

                <div className="relative w-26.75 h-40.25">
                  <Image src="/harsikpesank3.svg" alt="" fill className="object-contain " />
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
              className="w-full pl-12"
            >
              <Timeline />
            </motion.div>

          </motion.div>
          <motion.div className="w-full flex justify-center" initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}>
            <CountDown />
          </motion.div>

          <motion.div className="w-full text-center mt-14">
            <p className="font-norkirk text-[20px] text-[#18548B] ">{b("res")}</p>
          </motion.div>
          <RSVPForm />

          
          <Footer />


        </motion.div>
      </div>
    </>
  );
}
"use client"

import Navbar from "@/components/navbar";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Home() {

  const [introDone, setIntroDone] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [audioPlaying, setAudioPlaying] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIntroDone(true);
    }, 2200);

    return () => clearTimeout(timer);
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


  return (

    <>
      <audio ref={audioRef}>
        <source
          src="/Ordinary.mp3"
          type="audio/mp3"
        />
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

        <div
          className={`
          max-w-130 mx-auto h-161
          bg-center bg-cover bg-no-repeat
          transition-all duration-1000 ease-out relative
          ${introDone ? "opacity-100 scale-100" : "opacity-0 scale-105"}
          `}
          style={{
            backgroundImage:
              "url('https://dl-invitation.ayandesign.am/1.png')",
          }}
        >
          <div className="grad w-full h-full absolute top-0 left-0 pt-4 px-2 sm:px-3 lg:px-4">
            <Navbar />
          </div>
        </div>
        <div className="max-w-130 mx-auto bg-cover bg-center bg-no-repeat " style={{
          backgroundImage:
            "url('./18573a5cd93765380000d7d7df8875a80701e7c0.jpg')",
        }} >
          <div className="w-full py-3.25 flex items-center justify-center h-full border relative ">
            <div className="w-17 h-17 rounded-full  flex justify-center border" onClick={toggleAudio}>
              <Image src={`${audioPlaying ? 'https://dl-invitation.ayandesign.am/Vector%20(1).svg' : 'https://dl-invitation.ayandesign.am/Vector%20(2).svg'}`} alt="audio" width={34} height={34} className="cursor-pointer object-contain brightness-98 hover:scale-110 hover:brightness-110 transition-transform duration-400" onClick={() => setAudioPlaying(!audioPlaying)} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
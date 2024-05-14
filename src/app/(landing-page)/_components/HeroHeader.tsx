"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export default function HeroHeader() {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  return (
    <>
      <header className="bg-[#F5F5F5] w-full flex flex-col justify-center items-center md:h-auto pb-24 md:pb-48">
        <div className="w-full max-w-3xl flex flex-col gap-y-6 md:gap-y-8 justify-center items-center px-4 md:px-8 pt-24 md:pt-48">
          <h1 className="font-normal text-3xl md:text-6xl text-center leading-tight md:leading-snug">
            Automate data workflows with AI, effortlessly.
          </h1>
          <p className="text-center text-lg md:text-xl font-light text-[#7A7A7A]">
            Streamline your data management with Akkio&apos;s no-code automation
            platform.
          </p>
          <div className="flex justify-center w-full gap-x-4 mt-6">
            <Button
              className="bg-[#1F1F1F] text-white font-light rounded-full px-8 py-8 text-xl"
              size="lg"
            >
              Book a call
            </Button>
            <Button
              variant="primary"
              className="rounded-full font-normal shadow-md:shadow-yellow-400 px-16 py-8 text-xl"
              size="lg"
              style={{
                boxShadow: "0px 1px 10px rgba(197, 253, 44, 0.5)",
              }}
            >
              Try Akkio
            </Button>
          </div>
        </div>
      </header>
      <aside
        className="w-[90%] border-2 border-black/10  md:max-w-6xl h-[200px] md:h-[648px] mx-auto rounded-3xl -mt-24 md:-mt-24 bg-white"
        // style={{ boxShadow: "100px 50px 250px rgba(9, 20, 50, 0.15)" }}
        style={{ boxShadow: "25px 45px 80px 20px rgba(9, 20, 50, 5%)" }}
        // style={{ boxShadow: "1px 1px 10px 1px rgba(9, 20, 50, 0.10)" }}
      >
        <video
          ref={videoRef}
          className="w-full h-full object-cover rounded-3xl"
          autoPlay
          loop
          muted
          onClick={handleVideoClick}
        >
          <source src="/akkio-demo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </aside>
    </>
  );
}

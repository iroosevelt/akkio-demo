import { Button } from "@/components/ui/button";
import React from "react";

export default function HeroHeader() {
  return (
    <>
      <header className="bg-[#F5F5F5] w-full md:h-[90vh] flex flex-col">
        <div className="max-w-[60%] flex flex-col gap-y-12 justify-center items-center mx-auto px-24 md:pt-48">
          <h1 className="font-normal text-6xl text-center">
            Automate data workflows with AI, effortlessly.
          </h1>
          <p className="text-center text-xl md:w-[60%] font-light text-[#7A7A7A]">
            Streamline your data management with Akkio&apos;s no-code automation
            platform.
          </p>
        </div>
        <div className="flex justify-center w-full gap-x-4 p-10">
          <Button className="bg-[#1F1F1F] rounded-full" size="lg">
            Book a call
          </Button>
          <Button className="bg-[#C5FD2C] text-black rounded-full" size="lg">
            Try Akkio
          </Button>
        </div>
      </header>
      <aside className="w-[80%] h-[648px] mx-auto rounded-3xl mt-[-6rem] bg-gray-200"></aside>
    </>
  );
}

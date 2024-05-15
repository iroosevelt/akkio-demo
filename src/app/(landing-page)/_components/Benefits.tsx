"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

// Interface for Card
interface Card {
  title: string;
  description: string;
  image: string;
}

// Card data array
const cards: Card[] = [
  {
    title: "Pitch",
    description:
      "Quickly create a client dashboard in your preso to highlight how you’re using AI to identify wasted ad spend, top performing ads by conversion rate, and more.",
    image: "/1.png",
  },
  {
    title: "Predict",
    description:
      "Automatically surface patterns in historical data to predict future outcomes and generate key insights for how to slow client churn, improve campaigns, and more.",
    image: "/2.png",
  },
  {
    title: "Perform",
    description:
      "Optimize for any KPI to improve client performance and happiness. Eliminate wasted time, wasted spend, and wasted opportunities.",
    image: "/1.png",
  },
];

export default function Benefits() {
  // State for selected image
  const [selectedImage, setSelectedImage] = useState(cards[0].image);
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Function to handle auto-change
    const handleAutoChange = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
      setSelectedImage(cards[(currentIndex + 1) % cards.length].image);
    };

    // Set up the interval for auto-change
    intervalRef.current = setInterval(handleAutoChange, 3000); // Change image every 3 seconds

    // Clear interval on component unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [currentIndex]);

  // Handle card click
  const handleCardClick = (index: number) => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setCurrentIndex(index);
    setSelectedImage(cards[index].image);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
      setSelectedImage(cards[(index + 1) % cards.length].image);
    }, 3000);
  };

  return (
    <section className="bg-[#F5F5F5] w-full h-auto flex flex-col">
      {/* Header */}
      <div className="max-w-full md:max-w-[50%] flex flex-col gap-y-12 justify-center items-center mx-auto px-4 md:px-24 pt-8 md:pt-32">
        <h1 className="font-normal tracking-tight md:leading-snug text-3xl md:text-5xl text-center">
          Turn AI into an opportunity. Not a threat.
        </h1>
      </div>

      {/* Main content: smaller screens */}

      {/* Main content: larger screens */}
      <div className="hidden md:flex flex-col md:flex-row justify-center md:items-center my-12">
        {/* Laptop screen area */}
        <div
          className="relative w-full h-auto md:w-[60%] rounded-2xl  border-2 border-black/10 bg-white p-4"
          style={{
            backgroundImage: `url("/macbook.png")`,
            backgroundSize: "contain",
            backgroundPosition: "left",
            backgroundRepeat: "no-repeat",
            boxShadow: "25px 45px 80px 20px rgba(9, 20, 50, 5%)",
          }}
        >
          <div className="relative w-[75%] h-0 pb-[56.25%]  mt-8 mx-auto ">
            <div className="absolute top-0 left-0 w-full  h-full  ">
              <Image
                src={selectedImage}
                layout="fill"
                objectFit="contain"
                alt="Laptop screen"
                className=""
              />
            </div>
          </div>
        </div>

        {/* Cards grid */}
        <div className="w-full md:w-1/4 p-4 grid grid-cols-1 gap-4 mt-8 md:mt-0">
          {cards.map((card: Card, index: number) => (
            <div
              key={index}
              className={`p-4 md:p-6 border-none rounded-xl cursor-pointer ${
                currentIndex === index ? "bg-white" : "bg-transparent"
              }`}
              onClick={() => handleCardClick(index)}
            >
              <h2 className="font-normal text-lg mb-2">{card.title}</h2>
              <p className="text-gray-700 font-light text-md">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

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
    title: "Benefit 1",
    description: "Description of benefit 1.",
    image: "/1.png",
  },
  {
    title: "Benefit 2",
    description: "Description of benefit 2.",
    image: "/2.png",
  },
  {
    title: "Benefit 3",
    description: "Description of benefit 3.",
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
        <h1 className="font-normal tracking-tight leading-snug text-3xl md:text-5xl text-center">
          Turn AI into an opportunity. Not a threat.
        </h1>
      </div>

      {/* Main content */}
      <div className="flex flex-col md:flex-row justify-center items-center mt-12">
        {/* Laptop screen area */}
        <div
          className="relative w-full h-auto md:w-[60%] p-4"
          style={{
            backgroundImage: `url("/macbook.png")`,
            backgroundSize: "contain",
            backgroundPosition: "left",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="relative w-[75%] h-0 pb-[56.25%] mt-8 mx-auto">
            <div className="absolute top-0 left-0 w-full h-full">
              <Image
                src={selectedImage}
                layout="fill"
                objectFit="contain"
                alt="Laptop screen"
              />
            </div>
          </div>
        </div>

        {/* Cards grid */}
        <div className="w-full md:w-1/4 p-4 grid grid-cols-1 gap-4 mt-8 md:mt-0">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white p-4 border rounded-lg shadow-lg cursor-pointer"
              onClick={() => handleCardClick(index)}
            >
              <h2 className="font-bold text-xl mb-2">{card.title}</h2>
              <p className="text-gray-700">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

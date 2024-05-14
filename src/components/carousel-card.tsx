"use client";

import * as React from "react";

import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";

const testimonials = [
  {
    logo: "/logo.svg",
    link: "(link unavailable)",
    text: "LA/VIE is a cutting-edge digital marketing consultancy founded by marketers based in Los Angeles and Vienna. They create and optimize paid creative campaigns for a book of business totaling more than $250M in ad spend.",
    title: "70%",
    description: "Reduction in reporting workload with AI tagging",
    background: "(link unavailable)",
  },
  {
    logo: "/logo.svg",
    link: "(link unavailable)",
    text: "Ellipsis is a world-class SEO Content agency. They deliver ranking results, backed by expertise, technology, and process.",
    title: "80%",
    description: "Reduction in reporting workload with AI tagging",
    background: "(link unavailable)",
  },
  {
    logo: "/logo.svg",
    link: "(link unavailable)",
    text: "Sterling is on the leading-edge of Democratic campaigning, working with campaigns from the local to the national level and offer full-service scalable fundraising.",
    title: "60%",
    description: "Reduction in reporting workload with AI tagging",
    background: "(link unavailable)",
  },
  // ...
];

export function CardCarousel() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]}
      opts={{ align: "start", loop: true }}
      className="w-full max-w-6xl"
    >
      <CarouselContent>
        {testimonials.map((testimonial, index) => (
          <CarouselItem
            key={index}
            className="md:basis-1/2 lg:basis-4/5 rounded-3xl"
          >
            <div className="p-1">
              <Card
                className="relative flex flex-col w-full h-[485px] rounded-3xl overflow-hidden"
                style={{
                  backgroundImage: `url(${testimonial.background})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div
                  className="absolute inset-0 opacity-50"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.85) 100%)",
                  }}
                />

                <CardHeader className="flex flex-row justify-between items-center">
                  <Image
                    src={testimonial.logo}
                    alt="Logo"
                    width={100}
                    height={100}
                    // layout="responsive"
                  />
                  <a href={testimonial.link} target="_blank">
                    <Button>
                      Case Study
                      <ArrowUpRight />
                    </Button>
                  </a>
                </CardHeader>
                <CardContent className="flex-1">
                  <p>{testimonial.text}</p>
                </CardContent>
                <CardFooter className="flex-col items-start justify-end mt-auto">
                  <h2>{testimonial.title}</h2>
                  <p>{testimonial.description}</p>
                </CardFooter>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

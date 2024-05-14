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

const articles = [
  {
    logo: "/logo.svg",
    title: "70% Reduction in Reporting Workload",
    description:
      "LA/VIE is a cutting-edge digital marketing consultancy founded by marketers based in Los Angeles and Vienna. They create and optimize paid creative campaigns for a book of business totaling more than $250M in ad spend.",
    link: "https://example.com/article1",
  },
  {
    logo: "/logo.svg",
    title: "80% Reduction in Reporting Workload",
    description:
      "Ellipsis is a world-class SEO Content agency. They deliver ranking results, backed by expertise, technology, and process.",
    link: "https://example.com/article2",
  },
  {
    logo: "/logo.svg",
    title: "60% Reduction in Reporting Workload",
    description:
      "Sterling is on the leading-edge of Democratic campaigning, working with campaigns from the local to the national level and offer full-service scalable fundraising.",
    link: "https://example.com/article3",
  },
  // Add more articles as needed
];

export function NewsCarousel() {
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
        {articles.map((article, index) => (
          <CarouselItem
            key={index}
            className="md:basis-1/2 lg:basis-1/3 rounded-3xl"
          >
            <div className="p-1">
              <Card className="relative flex flex-col w-full h-[390px] rounded-3xl bg-[#F5F5F5] overflow-hidden">
                <CardHeader className="flex flex-row justify-between items-center">
                  <Image
                    src={article.logo}
                    alt="Logo"
                    width={100}
                    height={100}
                    // layout="responsive"
                  />
                </CardHeader>
                <CardContent className="flex-1">
                  <h2>{article.title}</h2>
                  <p>{article.description}</p>
                </CardContent>
                <CardFooter className="flex-col items-start justify-end mt-auto">
                  <a href={article.link} target="_blank">
                    <Button>
                      Read
                      <ArrowUpRight />
                    </Button>
                  </a>
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

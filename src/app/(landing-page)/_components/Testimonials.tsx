import { CardCarousel } from "@/components/carousel-card";
import Container from "@/components/container";
import React from "react";

export default function Testimonials() {
  return (
    <Container>
      <section className="flex flex-col gap-6 py-40">
        <aside className="flex flex-col gap-4">
          <h2 className="text-4xl">Real Results from Leading Agencies</h2>
          <p className="text-xl text-[#5E5E5E] md:max-w-2xl font-light">
            Akkio is helping agencies push the boundaries of what&apos;s
            possible with AI-driven data analysis and insights.
          </p>
        </aside>
        <aside>
          <CardCarousel />
          {/* <CarouselPlugin /> */}
        </aside>
      </section>
    </Container>
  );
}

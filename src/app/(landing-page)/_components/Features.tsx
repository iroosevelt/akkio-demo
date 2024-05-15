import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  imageUrl,
}) => {
  return (
    <div className="relative flex flex-col h-auto bg-[#F5F5F5] rounded-3xl">
      <aside className="flex flex-col gap-4 p-10 md:p-20">
        <h2 className="text-2xl md:text-4xl">{title}</h2>
        <p className="text-base md:text-lg text-[#5E5E5E] font-light">
          {description}
        </p>
      </aside>
      <div className="relative w-full h-[200px] md:h-[300px] overflow-hidden">
        <Image
          src={imageUrl}
          layout="fill"
          objectFit="contain"
          alt="Feature image"
        />
      </div>
    </div>
  );
};

export default function Features() {
  return (
    <Container className="w-full py-20 md:py-40 space-y-6 md:space-y-4">
      {/* Section 1 */}
      <section className="bg-[#F5F5F5] rounded-3xl w-full flex flex-col justify-center gap-6">
        <aside className="flex flex-col gap-4 md:max-w-xl mx-auto px-10 md:px-0 py-10 md:py-20">
          <h2 className="text-3xl md:text-6xl leading-snug tracking-tight text-center">
            We make AI easy. Data in. Results out.
          </h2>
        </aside>
        <aside className="grid grid-cols-1 gap-4 w-full">
          <div
            className="h-[100px] md:h-[300px]"
            style={{
              backgroundImage: `url("/data.png")`,
              backgroundSize: "cover",
              backgroundPosition: "top center",
              backgroundRepeat: "no-repeat",
            }}
          />
        </aside>
      </section>

      {/* Section 2 */}
      <section className="w-full flex flex-col justify-center gap-6">
        <aside className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 w-full">
          <FeatureCard
            title="Analyze & Optimize"
            description="Use Akkio's predictive AI and turn future predictions into actionable decisions."
            imageUrl="/analyze.png"
          />
          <FeatureCard
            title="Chat & Chart"
            description="Instant insights, no-code required. Chat, analyze, and share live reports and charts with clients."
            imageUrl="/chart.png"
          />
        </aside>
      </section>

      {/* Section 3 */}
      <section className="bg-[#F5F5F5] rounded-3xl w-full flex flex-col justify-center pt-10 md:pt-20 gap-6">
        <aside className="flex flex-col gap-4 md:max-w-3xl mx-auto px-10 py-10 md:px-0 md:py-20">
          <h2 className="text-3xl md:text-6xl tracking-tight md:px-3 leading-snug text-center">
            Ready to see the power of AI-driven analytics?
          </h2>
          <p className="text-center text-lg md:text-xl tracking-wide font-light text-[#7A7A7A]">
            Try Akkio for free today — No credit card required
          </p>
          <div className="flex justify-center w-full gap-x-4 p-5 md:p-10">
            <Button
              variant="primary"
              className="rounded-full font-normal shadow-md:shadow-yellow-400 px-16 py-8 text-xl"
              size="lg"
            >
              Try Akkio
            </Button>
          </div>
        </aside>
      </section>
    </Container>
  );
}

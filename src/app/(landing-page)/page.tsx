import Benefits from "./_components/Benefits";
import Features from "./_components/Features";
import HeroHeader from "./_components/HeroHeader";
import News from "./_components/News";
import Testimonials from "./_components/Testimonials";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroHeader />
      <Testimonials />
      <Benefits />
      <Features />
      <News />
    </main>
  );
}

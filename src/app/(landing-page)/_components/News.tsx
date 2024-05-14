// import { CarouselPlugin } from "@/components/carousel-plugin";
// import { CardCarousel } from "@/components/carousel-plugin";
import Container from "@/components/container";
import { NewsCarousel } from "@/components/news-carousel";

export default function News() {
  return (
    <Container>
      <section className="flex flex-col gap-6 py-40">
        <aside className="flex flex-col pb-20 gap-4">
          <h2 className="text-5xl font-400 text-center">Akkio in the news</h2>
        </aside>
        <aside>
          <NewsCarousel />
          {/* <CarouselPlugin /> */}
        </aside>
      </section>
    </Container>
  );
}

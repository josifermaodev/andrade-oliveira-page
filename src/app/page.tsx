import Categories from "./_components/categories";
import Faq from "./_components/faq";
import Fullbanner from "./_components/fullbanner";
import Historia from "./_components/history";
import { ServiceCarousel } from "./_components/servicos-carrossel";

export default function Home() {
  return (
    <main>
      <Fullbanner />
      <Categories />
      <Historia />
      <ServiceCarousel />
      <Faq />
    </main>
  );
}

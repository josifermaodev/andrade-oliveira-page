import Categories from "../components/categories";
import Faq from "../components/faq";
import Fullbanner from "../components/fullbanner";
import Historia from "../components/history";
import { ServiceCarousel } from "../components/servicos-carrossel";

export default function Home() {
  return (
    <div>
      <Fullbanner />
      <Categories />
      <Historia />
      <ServiceCarousel />
      <Faq />
    </div>
  );
}

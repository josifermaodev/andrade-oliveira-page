import { SobreResumido } from "./_components/about-preview";
import Categories from "./_components/categories";
import Faq from "./_components/faq";
import Fullbanner from "./_components/fullbanner";
import { ServiceCarousel } from "./_components/servicos-carrossel";

export default function Home() {
  return (
    <main >
      <Fullbanner />
      <Categories />
      <SobreResumido />
      <ServiceCarousel />
      <Faq />
    </main>
  );
}

import { Metadata } from "next";
import Historia from "../_components/history";
import FullImage from "../_components/full-image";
import Cta from "../_components/cta";
import FeaturesSection from "../_components/features-section";

export const metadata: Metadata = {
  title: "Andrade Oliveira | Sobre",
  description: "Empresa especializada em sondagem de solos, projetos estruturais e arquitetônicos. Nascemos com o compromisso de oferecer soluções seguras e eficientes para a construção civil.",
  keywords: "engenharia, arquitetura, sondagem de solos, projetos estruturais, projetos arquitetônicos, construção civil",
};

export default function Sobre(){
    return (
        <main className="flex flex-col justify-center items-center w-full">
            <div>
                <Historia />
            </div>
            <div className="flex justify-center w-full">
                <FullImage />
            </div>
            <div className="mt-20">
                <FeaturesSection/>
            </div>
            <div className="mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <Cta />
            </div>
        </main>
    )
}
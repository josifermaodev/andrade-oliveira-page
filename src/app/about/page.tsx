import { Metadata } from "next";
import Historia from "../_components/history";
import Categories from "../_components/categories";

export const metadata: Metadata = {
  title: "Andrade Oliveira | Sobre",
  description: "Empresa especializada em sondagem de solos, projetos estruturais e arquitetônicos. Nascemos com o compromisso de oferecer soluções seguras e eficientes para a construção civil.",
  keywords: "engenharia, arquitetura, sondagem de solos, projetos estruturais, projetos arquitetônicos, construção civil",
};

export default function Sobre(){
    return (
        <main>
            <div>
                <Historia />
                <Categories />
            </div>
        </main>
    )
}
// data/services.ts

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
}

export const services: Service[] = [
  {
    id: "1",
    title: "Sondagem SPT (Simples de Penetração)",
    description: "Investigação do solo para análise de resistência e características geotécnicas.",
    image: "https://ik.imagekit.io/q5tv5x3k8/imagens%20f%C3%A1bio/sondagem.png?updatedAt=1747697259247",
  },
  {
    id: "2",
    title: "Projetos Estruturais",
    description: "Desenvolvimento de projetos que garantem a estabilidade e segurança das construções.",
    image: "https://ik.imagekit.io/q5tv5x3k8/imagens%20f%C3%A1bio/crop-architect-opening-blueprint_23-2147710985.avif?updatedAt=1747697669629",
  },
  {
    id: "3",
    title: "Projetos Arquitetônicos e Geotécnicos",
    description: "Concepção visual da obra e análise técnica do solo para construção segura.",
    image: "https://ik.imagekit.io/q5tv5x3k8/imagens%20f%C3%A1bio/image-engineering-objects-workplace-top-view-construction-concept-engineering-tools-vintage-tone-retro-filter-effect-soft-focus-selective-focus.jpg?updatedAt=1747687741140",
  },
  {
    id: "4",
    title: "Projetos Elétricos e Hidrossanitários",
    description: "Planejamento das instalações elétricas e de água/esgoto conforme normas técnicas.",
    image: "https://ik.imagekit.io/q5tv5x3k8/imagens%20f%C3%A1bio/male-electrician-works-switchboard-with-electrical-connecting-cable.jpg?updatedAt=1747687739805",
  },
  {
    id: "5",
    title: "Projetos de Combate a Incêndio",
    description: "Elaboração de sistemas preventivos contra incêndios para aprovação em órgãos competentes.",
    image: "https://ik.imagekit.io/q5tv5x3k8/imagens%20f%C3%A1bio/safety-extinguisher-instrument-utility-faucet.jpg?updatedAt=1747687740539",
  },
  {
    id: "6",
    title: "Regularização de Obras e Imóveis",
    description: "Adequação legal de imóveis e construções para garantir segurança jurídica e técnica.",
    image: "https://ik.imagekit.io/q5tv5x3k8/imagens%20f%C3%A1bio/african-american-lady-safety-helmet-writing-notepad-near-building-construction.jpg?updatedAt=1747687737922",
  },
  {
    id: "7",
    title: "Licenciamento Ambiental",
    description: "Processo para obtenção das licenças necessárias para obras com impacto ambiental.",
    image: "https://ik.imagekit.io/q5tv5x3k8/imagens%20f%C3%A1bio/side-view-man-working-eco-friendly-wind-power-project-with-paper-plans.jpg?updatedAt=1747697581849",
  },
  {
    id: "8",
    title: "Emissão de Habite-se",
    description: "Documento que comprova que a construção foi concluída conforme as exigências legais.",
    image: "https://ik.imagekit.io/q5tv5x3k8/imagens%20f%C3%A1bio/hand-holding-key-outdoors.jpg?updatedAt=1747687737691",
  },
  
];

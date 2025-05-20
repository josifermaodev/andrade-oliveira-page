// data/services.ts

export interface Service {
  id: string;
  url: string;
  title: string;
  description: string;
  info: string;
  image: string;
}

export const services: Service[] = [
  {
    id: "1",
    title: "Sondagem SPT (Simples de Penetração)",
    url:"/services/sondagem-spt",
    description: "Investigação do solo para análise de resistência e características geotécnicas.",
    info:"Sondagem SPT também conhecida como sondagem à percussão ou sondagem de simples reconhecimento, é um método de reconhecimento do solo largamente utilizado na engenharia civil subsidiando a definição do tipo e o dimensionamento das fundações que servirão de base para uma edificação.<br> A sigla SPT tem origem no inglês (standard penetration test) e significa ensaio de penetração padrão.",
    image: "https://ik.imagekit.io/q5tv5x3k8/imagens%20f%C3%A1bio/sondagem.png?updatedAt=1747697259247",
  },
  {
    id: "2",
    title: "Projetos Estruturais",
    url:"/services/projetos-estruturais",
    description: "Desenvolvimento de projetos que garantem a estabilidade e segurança das construções.",
    info:"Projetos estruturais são responsáveis por dimensionar os elementos que sustentam a construção, como pilares, vigas e lajes, assegurando a integridade e estabilidade da edificação. Eles consideram o tipo de solo, os materiais utilizados e as cargas que a estrutura irá suportar, sendo fundamentais para prevenir falhas e colapsos.",
    image: "https://ik.imagekit.io/q5tv5x3k8/imagens%20f%C3%A1bio/crop-architect-opening-blueprint_23-2147710985.avif?updatedAt=1747697669629",
  },
  {
    id: "3",
    title: "Projetos Arquitetônicos e Geotécnicos",
    url:"/services/projetos-arquitetonicos",
    description: "Concepção visual da obra e análise técnica do solo para construção segura.",
    info:"Projetos arquitetônicos definem a forma, estética e funcionalidade dos espaços construídos, atendendo às necessidades dos usuários e normas urbanísticas. Já os projetos geotécnicos analisam as condições do solo e sua interação com as estruturas, oferecendo dados essenciais para uma fundação segura e eficiente.",
    image: "https://ik.imagekit.io/q5tv5x3k8/imagens%20f%C3%A1bio/image-engineering-objects-workplace-top-view-construction-concept-engineering-tools-vintage-tone-retro-filter-effect-soft-focus-selective-focus.jpg?updatedAt=1747687741140",
  },
  {
    id: "4",
    title: "Projetos Elétricos e Hidrossanitários",
    url:"/services/projetos-eletricos",
    description: "Planejamento das instalações elétricas e de água/esgoto conforme normas técnicas.",
    info:"Projetos elétricos e hidrossanitários garantem o funcionamento seguro e eficiente das instalações prediais. O projeto elétrico contempla desde a entrada de energia até a distribuição nos ambientes. Já o hidrossanitário trata do abastecimento de água potável, escoamento de esgoto e águas pluviais, respeitando as normas técnicas e ambientais.",
    image: "https://ik.imagekit.io/q5tv5x3k8/imagens%20f%C3%A1bio/male-electrician-works-switchboard-with-electrical-connecting-cable.jpg?updatedAt=1747687739805",
  },
  {
    id: "5",
    title: "Projetos de Combate a Incêndio",
    url:"/services/projetos-combate-incendio",
    description: "Elaboração de sistemas preventivos contra incêndios para aprovação em órgãos competentes.",
    info:"Projetos de combate a incêndio são desenvolvidos para proteger vidas e patrimônios. Eles envolvem o dimensionamento e posicionamento correto de equipamentos como extintores, hidrantes, alarmes e saídas de emergência. Esses projetos seguem normas do Corpo de Bombeiros e são essenciais para obtenção de alvarás e licenças.",
    image: "https://ik.imagekit.io/q5tv5x3k8/imagens%20f%C3%A1bio/safety-extinguisher-instrument-utility-faucet.jpg?updatedAt=1747687740539",
  },
  {
    id: "6",
    title: "Regularização de Obras e Imóveis",
    url:"/services/regularizacao-imoveis",
    description: "Adequação legal de imóveis e construções para garantir segurança jurídica e técnica.",
    info:"A regularização de obras e imóveis consiste na legalização de construções perante os órgãos públicos, corrigindo pendências documentais, fiscais e técnicas. Isso permite ao proprietário obter certidões, averbações e financiamento, além de evitar multas e embargos.",
    image: "https://ik.imagekit.io/q5tv5x3k8/imagens%20f%C3%A1bio/african-american-lady-safety-helmet-writing-notepad-near-building-construction.jpg?updatedAt=1747687737922",
  },
  {
    id: "7",
    title: "Licenciamento Ambiental",
    url:"/services/licenciamento-ambiental",
    description: "Processo para obtenção das licenças necessárias para obras com impacto ambiental.",
    info:"O licenciamento ambiental é um instrumento legal que autoriza a localização, instalação, operação e ampliação de empreendimentos com potencial impacto ambiental. O processo garante que a atividade atenda aos requisitos ambientais e minimize danos à natureza, sendo obrigatório para diversas obras e empresas.",
    image: "https://ik.imagekit.io/q5tv5x3k8/imagens%20f%C3%A1bio/side-view-man-working-eco-friendly-wind-power-project-with-paper-plans.jpg?updatedAt=1747697581849",
  },
  {
    id: "8",
    title: "Emissão de Habite-se",
    url:"/services/habite-se",
    description: "Documento que comprova que a construção foi concluída conforme as exigências legais.",
    info:"O Habite-se é um documento emitido pela prefeitura que atesta que a construção foi realizada conforme o projeto aprovado e que está apta para ser habitada. Ele é indispensável para ligações definitivas de água e energia, financiamentos, escrituração e venda do imóvel.",
    image: "https://ik.imagekit.io/q5tv5x3k8/imagens%20f%C3%A1bio/hand-holding-key-outdoors.jpg?updatedAt=1747687737691",
  },
];


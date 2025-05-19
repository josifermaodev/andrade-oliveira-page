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
    image: "/sondagem.png",
  },
  {
    id: "2",
    title: "Projetos Estruturais",
    description: "Desenvolvimento de projetos que garantem a estabilidade e segurança das construções.",
    image: "/estruturais.jpg",
  },
  {
    id: "3",
    title: "Projetos Arquitetônicos e Geotécnicos",
    description: "Concepção visual da obra e análise técnica do solo para construção segura.",
    image: "/arquitetura.jpg",
  },
  {
    id: "4",
    title: "Projetos Elétricos e Hidrossanitários",
    description: "Planejamento das instalações elétricas e de água/esgoto conforme normas técnicas.",
    image: "/eletricos.jpg",
  },
  {
    id: "5",
    title: "Projetos de Combate a Incêndio",
    description: "Elaboração de sistemas preventivos contra incêndios para aprovação em órgãos competentes.",
    image: "/incendio.jpg",
  },
  {
    id: "6",
    title: "Regularização de Obras e Imóveis",
    description: "Adequação legal de imóveis e construções para garantir segurança jurídica e técnica.",
    image: "/regularizacao.jpg",
  },
  {
    id: "7",
    title: "Licenciamento Ambiental",
    description: "Processo para obtenção das licenças necessárias para obras com impacto ambiental.",
    image: "/ambiental.jpg",
  },
  {
    id: "8",
    title: "Emissão de Habite-se",
    description: "Documento que comprova que a construção foi concluída conforme as exigências legais.",
    image: "/habite-se.jpg",
  },
  
];

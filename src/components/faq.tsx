'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

type FaqItem = {
  question: string;
  answer: string;
};

const faqData: FaqItem[] = [
  {
    question: 'O que é a Sondagem SPT e por que ela é importante?',
    answer:
      'A Sondagem SPT (Standard Penetration Test) é um ensaio geotécnico que avalia as características do solo, como resistência e capacidade de carga. É essencial para projetar fundações seguras e adequadas ao tipo de solo do terreno.',
  },
  {
    question: 'Qual a função de um Projeto Estrutural?',
    answer:
      'O Projeto Estrutural define como uma edificação deve ser construída, garantindo segurança e estabilidade. Ele considera fatores como tipo de solo, materiais e cargas atuantes, seguindo normas técnicas para evitar falhas.',
  },
  {
    question: 'O que envolvem os Projetos Arquitetônicos e Geotécnicos?',
    answer:
      'Projetos Arquitetônicos definem a estética e funcionalidade dos espaços, enquanto os Geotécnicos analisam as propriedades do solo para garantir a estabilidade da construção.',
  },
  {
    question: 'Para que servem os Projetos Elétricos e Hidrossanitários?',
    answer:
      'Esses projetos detalham as instalações elétricas e os sistemas de abastecimento de água e esgoto, assegurando eficiência, segurança e conformidade com as normas técnicas.',
  },
  {
    question: 'Qual a importância dos Projetos de Combate a Incêndio?',
    answer:
      'Eles estabelecem medidas de prevenção e combate a incêndios, como saídas de emergência, extintores e alarmes, visando proteger vidas e patrimônios.',
  },
  {
    question: 'Como funciona a Regularização de Obras e Imóveis?',
    answer:
      'É o processo de legalizar construções que foram realizadas sem as devidas autorizações, garantindo que atendam às normas urbanísticas e evitando multas ou demolições.',
  },
  {
    question: 'O que é o Licenciamento Ambiental?',
    answer:
      'É um procedimento legal que avalia e autoriza a localização, instalação e operação de empreendimentos que utilizam recursos naturais ou possam causar impactos ambientais.',
  },
  {
    question: 'Como obter o Habite-se?',
    answer:
      'O Habite-se é um documento emitido pela prefeitura que atesta que a construção foi concluída conforme as exigências legais, permitindo sua ocupação.',
  },
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="container mx-auto px-4 py-10">
      <h2 className="text-4xl mb-6 font-bold text-[#E6B902] border-l-4 border-[#1d1d1d] pl-4">
        Perguntas Frequentes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {faqData.map((item, index) => (
          <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
            <button
              onClick={() => toggle(index)}
              className={`w-full flex items-center justify-between text-left px-6 py-4 bg-white hover:bg-[#E6B902] focus:outline-none ${
                activeIndex === index ? 'bg-[#E6B902]' : ''
              }`}
            >
              <span className="font-medium text-lg">{item.question}</span>
              <ChevronDown
                className={`h-5 w-5 transform transition-transform duration-300 ${
                  activeIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>
            {activeIndex === index && (
              <div className="px-6 pb-4 text-gray-700 animate-fade-in">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

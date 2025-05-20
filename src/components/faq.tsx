'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { WhatsappLogoIcon } from '@phosphor-icons/react';
import Link from 'next/link';

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
    <section className="flex justify-center bg-gray-50 py-16">
        <div className="container mx-auto px-4">
            <div className="text-start mb-12">
                    <h2 className="text-4xl font-bold mb-4 text-[#E6B902] inline-block">
                        Perguntas Frequentes
                    </h2>
                    <p className="text-gray-600 mx-auto">
                        Encontre respostas para as dúvidas mais comuns sobre nossos serviços de engenharia e consultoria
                    </p>
                </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqData.map((item, index) => (
                <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border-l-4 border-transparent hover:border-l-4 hover:border-[#E6B902]"
                >
                <button
                    onClick={() => toggle(index)}
                    className={`w-full flex items-center gap-4 justify-between text-left px-6 py-5 focus:outline-none transition-colors duration-300 group ${
                    activeIndex === index ? 'bg-[#E6B902] text-white' : 'text-gray-800 hover:bg-gray-100'
                    }`}
                >
                    <span className={`font-medium text-lg ${activeIndex === index ? 'text-white' : ''}`}>
                    {item.question}
                    </span>
                    <ChevronDown
                    className={`h-5 w-5 transform transition-transform duration-300 ${
                        activeIndex === index ? 'rotate-180 text-white' : 'text-[#E6B902]'
                    }`}
                    />
                </button>
                
                {activeIndex === index && (
                    <div className="bg-white px-6 py-5 text-gray-700 animate-[fadeIn_0.5s_ease-in-out]">
                        <p className="leading-relaxed">{item.answer}</p>
                    </div>
                )}
                </div>
            ))}
            </div>

            <div className="text-center mt-12">
                <p className="text-gray-600 mb-4">Ainda tem dúvidas? Entre em contato conosco</p>
                <Link href='https://api.whatsapp.com/send/?phone=5527992856966&text=Gostaria+de+fazer+um+or%C3%A7amento%21&type=phone_number&app_absent=0' target='_blank' className="bg-[#E6B902] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#c49e02] transition-colors shadow-md hover:shadow-lg">
                    <WhatsappLogoIcon className="inline-block mr-2" size={20} />
                    Fale Conosco
                </Link>
            </div>
        </div>
    </section>
  );
}
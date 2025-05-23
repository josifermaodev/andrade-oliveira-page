"use client";

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Historia() {
  const [, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-6"
          >
            <span className="text-4xl md:text-5xl font-bold text-[#E6B902] items-center">
              Andrade Oliveira
            </span>
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            <span className="text-[#E6B902]">Engenharia</span> com{" "}
            <span className="">Excelência</span>
          </motion.h1>
        </div>

        <div className="mx-auto py-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12">
            <div className="space-y-8 relative">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className=""
              >
                <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
                  Na{" "}
                  <strong className="text-[#E6B902]">Andrade Oliveira</strong>,
                  transformamos desafios estruturais em soluções inovadoras
                  através de nossa abordagem multidisciplinar única.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1 mr-4 text-[#E6B902]">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-600">
                      <strong>Sondagem inteligente:</strong> Tecnologia de ponta
                      para análise geotécnica precisa
                    </p>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1 mr-4 text-[#E6B902]">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-600">
                      <strong>Engenharia integrada:</strong> Projetos
                      estruturais e arquitetônicos em perfeita sintonia
                    </p>
                  </div>
                </div>
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-sm shadow-lg border border-gray-100 mt-4">
                  <h3 className="font-bold text-xl text-gray-900 mb-2">
                    Precisão que constrói confiança
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Cada projeto começa com análise rigorosa e termina com
                    execução impecável.
                  </p>
                  <Link
                    href="/services"
                    className="inline-flex items-center px-5 py-2.5 rounded-sm bg-[#E6B902] hover:bg-[#d4a502] text-white font-medium transition-colors shadow-md hover:shadow-lg"
                  >
                    Conheça nossos serviços
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            </div>

            <div className="h-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className=" overflow-hidden rounded-sm shadow-md"
              >
                <Image
                  src="/fabio.jpg"
                  alt="Engenheiros da Andrade Oliveira analisando projetos"
                  width={800}
                  height={1000}
                  className="w-full h-full object-cover"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </div>

      </div>
    </motion.section>
  );
}

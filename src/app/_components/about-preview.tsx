'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { HardHat, ArrowRight } from "lucide-react";

export function SobreResumido() {
  return (
    <section className="bg-[#fafafa] py-16 lg:py-24 overflow-hidden">
      <div className="container flex flex-col mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Imagem com efeitos aprimorados */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative group order-2 lg:order-1"
          >
            <div className="relative overflow-hidden rounded-sm shadow-2xl">
              <Image
                src="/engenheiro2.jpg"
                alt="Equipe da Andrade Oliveira em obra"
                width={600}
                height={700}
                className="object-cover w-full h-[400px] sm:h-[500px] lg:h-[600px] transition-all duration-700 group-hover:scale-110"
                priority
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
              
              
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-sm shadow-lg">
                <span className="text-sm font-semibold text-gray-800">Desde 2022</span>
              </div>
            </div>
            
            
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#E6B902]/20 rounded-full blur-xl -z-10"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#E6B902]/10 rounded-full blur-2xl -z-10"></div>
          </motion.div>

          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="space-y-8 order-1 lg:order-2"
          >
            
            {/* Cabeçalho aprimorado */}
            <div className="text-center lg:text-left">
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-[#E6B902] rounded-sm shadow-lg mb-6"
              >
                <HardHat className="text-white w-8 h-8" />
              </motion.div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-#0f0f0f mb-6 leading-tight">
                Nossa{' '}
                <span className="relative inline-block text-[#E6B902]">
                  Jornada
                </span>
              </h2>
              
              <p className="text-lg text-neutral-600 leading-relaxed">
                De pequeno escritório a referência em engenharia estrutural, construímos 
                nossa história projeto a projeto, sempre com excelência e inovação.
              </p>
            </div>

            {/* Timeline aprimorada */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 sm:gap-8"
            >
              {[
                { value: "2022", label: "Fundação"},
                { value: "50+", label: "Projetos" },
                { value: "Hoje", label: "Referência" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5  }}
                  className="text-center group"
                >
                  <div className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300`}>
                    {item.value}
                  </div>
                  <p className="text-sm sm:text-base text-neutral-600 font-medium">{item.label}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA aprimorado */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center lg:text-left pt-6"
            >
              <button className="group inline-flex items-center px-6 py-3 bg-[#E6B902] text-[#0f0f0f] font-semibold rounded-sm shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                <span>Conheça mais sobre nós</span>
                <ArrowRight className="ml-3 w-5 h-5 transition-all duration-300 group-hover:translate-x-2" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-20 right-10 w-2 h-2 bg-[#E6B902] rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute bottom-40 left-20 w-1 h-1 bg-[#E6B902] rounded-full opacity-40 animate-pulse delay-1000"></div>
    </section>
  );
}
'use client';

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function FullImage() {
  return (
    <div className="container relative h-[500px] overflow-hidden group rounded-sm mx-2 md:mx-0">
      
        <Image
            src="/engenheiro2.jpg"
            alt="Canteiro de obras da Andrade Oliveira Engenharia"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
            priority
        />

      
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50 z-10" />

        
        <div className="relative z-20 h-full flex items-center justify-center md:justify-start md:pl-16 text-center md:text-left px-6">
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
            >
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Transformando Ideias em Realidade
                </h3>
                
                <p className="text-lg text-white/90 mb-6">
                    Com equipamentos modernos e uma equipe técnica qualificada,
                    atuamos desde a investigação do solo até a criação de estruturas
                    bem pensadas.
                </p>

                
                <Link
                    href="/projects"
                    className="inline-flex items-center px-6 py-3 bg-[#E6B902] hover:bg-[#d4a502] text-gray-900 font-medium rounded-sm transition-all duration-300 group/button"
                >
                    Ver nossos projetos
                    <ChevronRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover/button:translate-x-1" />
                </Link>
            </motion.div>
        </div>
    </div>
  );
}
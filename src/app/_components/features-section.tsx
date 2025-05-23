'use client';

import { motion } from "framer-motion";
import { Award, Building, Users, Zap } from "lucide-react";

export default function FeaturesSection() {

    const features = [
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Inovação Técnica",
      description:
        "Tecnologia de ponta aplicada em cada projeto para resultados excepcionais.",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Equipe Qualificada",
      description:
        "Profissionais experientes e certificados para garantir a excelência.",
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: "Padrão de Qualidade",
      description:
        "Compromisso com as normas técnicas mais rigorosas do setor.",
    },
    {
      icon: <Building className="w-5 h-5" />,
      title: "Soluções Integradas",
      description: "Do solo ao acabamento, oferecemos serviços completos.",
    },
  ];

    return (
        <div className="container">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Nossos <span className="text-[#E6B902]">Diferenciais</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature, index) => (
                <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="bg-white p-6 rounded-sm shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-[#E6B902]/30 group"
                >
                    <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-[#E6B902]/10 rounded-lg group-hover:bg-[#E6B902]/20 transition-colors">
                        {feature.icon}
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg">
                        {feature.title}
                    </h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                    </p>
                </motion.div>
                ))}
            </div>
        </div>
    )
    
    
}
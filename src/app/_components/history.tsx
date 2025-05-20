'use client';

import { useState, useEffect } from 'react';
import { TrendingUp, Zap } from 'lucide-react';
import { Button } from '../../components/ui/button';
import Link from 'next/link';

export default function Historia() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        
        setIsVisible(true);
    }, []);

    return (
        <section className="py-10 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4 md:px-8 lg:px-12">
                
                <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        
                        <div className="relative">
                            <div className="absolute inset-0 bg-[#E6B902] translate-x-3 translate-y-3 rounded-lg"></div>
                            <div className="relative overflow-hidden rounded-lg shadow-xl bg-white">
                                <img 
                                    src="/engenheiro2.jpg" 
                                    alt="Engenheiro civil em ação" 
                                    className="w-full md:h-160 object-cover transform hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>

                        
                        <div className="space-y-6">
                            <div className="inline-block">
                                <p className="text-lg font-medium text-gray-700 relative px-2">
                                    Bem-vindos à
                                    <span className="absolute bottom-0 left-0 w-full h-1 bg-[#E6B902]"></span>
                                </p>
                            </div>
                            
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                                <span className="text-[#E6B902]">Andrade Oliveira</span> Engenharia
                            </h2>
                            
                            <div className="text-gray-700 space-y-4 leading-relaxed">
                                <p>
                                    Nós somos a Andrade Oliveira, uma empresa especializada em sondagem de solos, 
                                    projetos estruturais e arquitetônicos. Nascemos com o compromisso de oferecer soluções 
                                    seguras, inteligentes e integradas para quem deseja construir com confiança e qualidade.
                                </p>
                                
                                <p>
                                    Acreditamos que todo grande projeto começa com um bom planejamento e uma base sólida — 
                                    e é exatamente isso que entregamos. Com uma equipe técnica qualificada e equipamentos modernos, 
                                    atuamos desde a investigação do solo até a criação de estruturas bem pensadas, funcionais e seguras.
                                </p>
                                
                                <div className="md:grid md:grid-cols-2 gap-4 space-y-4 md:space-y-0">
                                    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                        <div className="flex items-center gap-2 text-[#E6B902] font-semibold">
                                            <Zap size={20} />
                                            <h3>Experiência e Inovação</h3>
                                        </div>
                                        <p className="mt-2 text-sm">
                                            Nosso diferencial está na união entre experiência e inovação, atuando de forma 
                                            estratégica e alinhada às normas técnicas mais rigorosas.
                                        </p>
                                    </div>
                                    
                                    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                        <div className="flex items-center gap-2 text-[#E6B902] font-semibold">
                                            <TrendingUp size={20} /> 
                                            <h3>Do Solo ao Acabamento</h3>
                                        </div>
                                        <p className="mt-2 text-sm">
                                            Construímos parcerias duradouras e resultados que fazem a diferença. 
                                            Estamos prontos para transformar o seu projeto em realidade.
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="pt-4">
                                    <Link href="/contacts">
                                        <Button className="bg-[#E6B902] hover:bg-[#c99e00] text-white text-md py-4 px-6 h-auto transition-all transform hover:-translate-y-1">Conheça nossos Serviços</Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
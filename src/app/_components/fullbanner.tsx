"use client";

import { Button } from "../../components/ui/button";

export default function FullBanner() {
    
  return (
    <section className="relative w-full h-auto max-h-screen overflow-hidden">
        <video
            className="w-full h-full min-h-[50vh] object-cover blur-[2px]"
            autoPlay
            loop
            muted
            playsInline
        >
            <source src="https://ik.imagekit.io/q5tv5x3k8/V%C3%ADdeos/12229450_1920_1080_30fps.mp4?updatedAt=1747671590133" type="video/mp4" />
        </video>

      
        <div className="absolute inset-0 flex items-center justify-center bg-black/60 text-white text-center p-4">
                <div className="flex flex-col items-center gap-3">
                    <div className="flex flex-col items-center gap-3">
                        <img src="/icone-branco.svg" alt="icone da logo" className="w-40"/>
                        <h1 className="text-4xl md:text-6xl font-bold">Andrade Oliveira</h1>  
                    </div>
                    
                    <p className="text-lg md:text-xl">Transformando projetos em estruturas que duram gerações.</p>
                    <Button className="mt-6 text-lg py-6 px-6 bg-[#E6B902] hover:bg-white text-black font-semibold">Solicitar Orçamento</Button>
                </div>
        </div>
    </section>
  );
}

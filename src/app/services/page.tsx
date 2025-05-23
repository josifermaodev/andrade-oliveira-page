import { MoveRightIcon } from "lucide-react";
import Link from "next/link";
import { services } from "../../lib/service";
import Image from "next/image";

export default function Servicos() {
  return (
    <main className="min-h-screen py-16 px-4 sm:px-8 bg-[#fafafa]">
      <div className="max-w-6xl mx-auto">
        {/* Cabeçalho */}
        <div className="mb-20 text-center">
          <span className="inline-block px-3 py-1 text-sm font-medium text-[#0f0f0f] mb-4">
            O que oferecemos
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0f0f0f] mb-4">
            Serviços <span className="text-[#E6B902]">Premium</span>
          </h1>
          <div className="w-24 h-1 bg-[#E6B902] mx-auto"></div>
        </div>

        
        <div className="space-y-24">
          {services.map((item, index) => (
            <div 
              key={item.id}
              className={`relative group overflow-hidden rounded-3xl ${index % 2 === 0 ? 'bg-[#0f0f0f]' : 'bg-white shadow-xl'}`}
            >
              <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                {/* Imagem */}
                <div className="md:w-1/2 h-80 md:h-auto relative overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30"></div>
                </div>

                
                <div className={`md:w-1/2 p-8 md:p-12 flex flex-col justify-center ${index % 2 === 0 ? 'text-white' : 'text-[#0f0f0f]'}`}>
                  <span className="text-sm font-medium text-[#E6B902] mb-2">
                    0{index + 1}
                  </span>
                  <h2 className="text-3xl font-bold mb-4">{item.title}</h2>
                  <p className="mb-6 opacity-90">{item.description}</p>
                  
                  <Link
                    href={item.url}
                    className={`inline-flex items-center gap-2 font-medium ${index % 2 === 0 ? 'text-white hover:text-[#E6B902]' : 'text-[#0f0f0f] hover:text-[#E6B902]'}`}
                  >
                    <span>Saiba mais</span>
                    <MoveRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        
        <div className="mt-24 text-center">
          <p className="text-lg text-[#0f0f0f] mb-6">
            Precisa de algo diferente? Fale conosco sobre seu projeto.
          </p>
          <Link
            href="/contato"
            className="inline-block px-8 py-3 bg-[#E6B902] text-[#0f0f0f] font-medium rounded-sm hover:bg-[#0f0f0f] hover:text-white transition-colors"
          >
            Entrar em contato
          </Link>
        </div>
      </div>
    </main>
  );
}
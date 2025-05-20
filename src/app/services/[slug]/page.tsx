import Image from "next/image";
import { notFound } from "next/navigation";
import { services } from "../../../lib/service";
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";

// Modificando a definição de Props para ser compatível com o PageProps do Next.js
type Props = {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

export default function ServicePage({ params }: Props) {
  const service = services.find(
    (item) => item.url === `/services/${params.slug}`
  );

  if (!service) return notFound();

  // Encontrar serviços relacionados (excluindo o atual)
  const relatedServices = services
    .filter((item) => item.id !== service.id)
    .slice(0, 3);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      {/* Hero Section com imagem de fundo */}
      <div className="relative w-full h-64 md:h-96">
        {/* Tag img padrão para evitar problemas com o Next Image */}
        <Image 
          src={service.image} 
          alt={service.title}
          className="absolute top-0 left-0 w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        
        {/* Overlay escuro */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
        
        {/* Conteúdo */}
        <div className="relative h-full flex flex-col justify-end z-5 p-6 md:p-12">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex items-center text-white mb-2 opacity-80 hover:opacity-100 transition-opacity">
              <Link href="/services" className="flex items-center">
                <ArrowLeft size={16} className="mr-2" />
                <span>Voltar para serviços</span>
              </Link>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{service.title}</h1>
          </div>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Conteúdo Principal */}
          <div className="flex-grow md:w-2/3">
            <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 mb-8">
              {/* Breve descrição */}
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-[#E6B902] mb-2">Sobre este serviço</h2>
                <p className="text-gray-700 leading-relaxed">{service.description}</p>
              </div>

              {/* Linha divisória */}
              <div className="border-t border-gray-200 my-6"></div>

              {/* Informações detalhadas */}
              <article className="prose prose-gray max-w-none">
                <h2 className="text-xl font-semibold text-[#E6B902] mb-4">Detalhes</h2>
                <div 
                  className="text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: service.info || "" }}
                />
              </article>

              {/* CTA */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link href="https://wa.me/5527992856966?text=Estou%20com%20d%C3%BAvidas%20em%20alguns%20servi%C3%A7os%2C%20pode%20me%20ajudar%3F" target="_blank">
                    <button className="bg-[#E6B902] hover:bg-[#b49102] text-white font-medium py-3 px-6 rounded-lg transition-colors">
                    Tirar dúvidas
                    </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:w-1/3">
            {/* Card de destaque */}
            <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
              <div className="flex items-center mb-4">
                <FileText className="text-[#E6B902] w-6 h-6 mr-2" />
                <h3 className="text-lg font-semibold">Solicite um orçamento</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Nossos especialistas estão disponíveis para fornecer um orçamento detalhado 
                para seu projeto específico.
              </p>
            </div>

            {/* Serviços relacionados */}
            {relatedServices.length > 0 && (
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-4">Serviços relacionados</h3>
                <div className="space-y-4">
                  {relatedServices.map((item) => (
                    <Link 
                      href={item.url} 
                      key={item.url}
                      className="group block"
                    >
                      <div className="flex gap-3">
                        <div className="relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden">
                          {/* Usando tag img padrão para as miniaturas também */}
                          <Image
                            src={item.image}
                            alt={item.title}
                            width={64}
                            height={64}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 group-hover:text-[#E6B902] transition-colors">
                            {item.title}
                          </h4>
                          <p className="text-sm text-gray-500 line-clamp-2">{item.description}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          
        </div>
      </main>

      {/* Footer com CTA */}
      <div className="bg-gradient-to-r from-[#E6B902] to-[#b49102] text-white py-12 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Precisa de ajuda com seu projeto?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Nossa equipe de engenheiros e especialistas está pronta para ajudar 
            com soluções personalizadas para o seu projeto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacts" className="bg-white text-[#E6B902] hover:bg-blue-50 font-medium py-3 px-8 rounded-lg transition-colors">
              Solicitar orçamento
            </Link>
            <Link href="/services" className="bg-transparent border border-white hover:bg-white/10 text-white font-medium py-3 px-8 rounded-lg transition-colors inline-block">
              Ver todos os serviços
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
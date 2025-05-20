import Image from "next/image";
import { notFound } from "next/navigation";
import { services } from "../../../lib/service";
import Link from "next/link";
import { ArrowLeft, FileText, Phone, MessageSquare } from "lucide-react";

type Props = {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

export default function ServicePage({ params }: Props) {
  const service = services.find(
    (item) => item.url === `/services/${params.slug}`
  );

  if (!service) return notFound();

  const relatedServices = services
    .filter((item) => item.id !== service.id)
    .slice(0, 3);

  return (
    <div className="bg-gray-50 min-h-screen">
      
      <div className="relative w-full h-80 md:h-[480px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/40 z-1"></div>
        
        <Image 
          src={service.image} 
          alt={service.title}
          fill
          className="object-cover"
          priority
          quality={80}
        />
        
        <div className="relative z-2 h-full flex flex-col justify-end p-6 md:p-12">
          <div className="max-w-7xl mx-auto w-full">
            <Link 
              href="/services" 
              className="inline-flex items-center text-white/90 hover:text-white mb-4 transition-colors group"
            >
              <ArrowLeft size={18} className="mr-2 group-hover:-translate-x-1 transition-transform" />
              <span>Voltar para serviços</span>
            </Link>
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
              <div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                  {service.title}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

     
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          <div className="flex-grow lg:w-2/3">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              
              <section className="p-8 border-b border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-2 h-8 bg-[#E6B902] mr-3 rounded-full"></span>
                  Sobre este serviço
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {service.description}
                </p>
              </section>

              
              <section className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-2 h-8 bg-[#E6B902] mr-3 rounded-full"></span>
                  Detalhes do serviço
                </h2>
                <div 
                  className="prose prose-lg max-w-none text-gray-600"
                  dangerouslySetInnerHTML={{ __html: service.info || "" }}
                />
              </section>

              
              <div className="p-8 bg-gradient-to-r from-[#0f0f0f] to-[#1f1f1f]">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Pronto para começar?</h3>
                    <p className="text-gray-300">Entre em contato para um atendimento personalizado</p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                    <Link 
                      href="https://wa.me/5527992856966" 
                      target="_blank"
                      className="flex items-center justify-center gap-2 bg-[#E6B902] hover:bg-[#d4a902] text-black font-medium py-3 px-6 rounded-lg transition-colors"
                    >
                      <MessageSquare size={18} />
                      WhatsApp
                    </Link>
                    <Link 
                      href="tel:+5527992856966" 
                      className="flex items-center justify-center gap-2 bg-transparent border border-white hover:bg-white/10 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                    >
                      <Phone size={18} />
                      Ligar agora
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
          <div className="lg:w-1/3 space-y-6">
            
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-100 bg-[#0f0f0f]">
                <h3 className="text-xl font-bold text-white flex items-center">
                  <FileText className="text-[#E6B902] mr-2" size={20} />
                  Solicite um orçamento
                </h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">
                  Preencha nosso formulário e receba uma proposta detalhada para seu projeto em até 24h.
                </p>
                <Link 
                  href="/contacts" 
                  className="block w-full bg-[#E6B902] hover:bg-[#d4a902] text-black font-medium py-3 px-6 rounded-lg text-center transition-colors"
                >
                  Solicitar agora
                </Link>
              </div>
            </div>

            
            {relatedServices.length > 0 && (
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="p-6 border-b border-gray-100 bg-[#0f0f0f]">
                  <h3 className="text-xl font-bold text-white">Serviços relacionados</h3>
                </div>
                <div className="divide-y divide-gray-100">
                  {relatedServices.map((item) => (
                    <Link 
                      href={item.url} 
                      key={item.url}
                      className="group block p-6 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex gap-4">
                        <div className="relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden">
                          <Image
                            src={item.image}
                            alt={item.title}
                            width={64}
                            height={64}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 group-hover:text-[#E6B902] transition-colors">
                            {item.title}
                          </h4>
                          <p className="text-sm text-gray-500 mt-1 line-clamp-2">{item.description}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-100 bg-[#0f0f0f]">
                <h3 className="text-xl font-bold text-white">Contato rápido</h3>
              </div>
              <div className="p-6 space-y-4">
                <Link 
                  href="mailto:contato@andradeoliveira.com" 
                  className="flex items-center text-gray-600 hover:text-[#E6B902] transition-colors"
                >
                  <svg className="w-5 h-5 mr-3 text-[#E6B902]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  contato@andradeoliveira.com
                </Link>
                <Link 
                  href="tel:+5527992856966" 
                  className="flex items-center text-gray-600 hover:text-[#E6B902] transition-colors"
                >
                  <Phone className="w-5 h-5 mr-3 text-[#E6B902]" />
                  (27) 99285-6966
                </Link>
                <Link 
                  href="https://wa.me/5527992856966" 
                  target="_blank"
                  className="flex items-center text-gray-600 hover:text-[#E6B902] transition-colors"
                >
                  <svg className="w-5 h-5 mr-3 text-[#E6B902]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path>
                  </svg>
                  Conversar no WhatsApp
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      
      <div className="bg-[#0f0f0f] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Precisa de uma solução personalizada?</h2>
              <p className="text-lg text-gray-300 mb-6">
                Nossa equipe está pronta para entender suas necessidades e oferecer a melhor solução para seu projeto.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contacts" 
                  className="bg-[#E6B902] hover:bg-[#d4a902] text-black font-medium py-3 px-8 rounded-lg text-center transition-colors"
                >
                  Fale com um especialista
                </Link>
                <Link 
                  href="/services" 
                  className="bg-transparent border border-white hover:bg-white/10 text-white font-medium py-3 px-8 rounded-lg text-center transition-colors"
                >
                  Conheça todos os serviços
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md h-64 bg-gray-800 rounded-xl overflow-hidden">
                <Image
                  src="/engenheiro2.jpg"
                  alt="Equipe de especialistas"
                  fill
                  className="object-cover opacity-80"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
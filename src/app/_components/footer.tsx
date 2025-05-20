'use client';

import { InstagramLogoIcon, LinkedinLogoIcon, WhatsappLogoIcon } from '@phosphor-icons/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import BackToTop from './topo';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#1d1d1d] text-white">
      {/* Parte superior do footer */}
      <div className="container w-full mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Coluna 1 - Sobre */}
          <div>
            <h3 className="text-[#E6B902] font-bold text-xl mb-4 border-l-4 border-[#E6B902] pl-3">
              Sobre Nós
            </h3>
            <div className="mb-4">
              <Image
                src="/logo-clara-png.svg" 
                alt="Logo da Empresa" 
                className="h-40 mb-4"
              />
            </div>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              Somos uma empresa especializada em engenharia e consultoria, 
              oferecendo soluções completas para projetos de construção civil, 
              desde análises de solo até regularização de imóveis.
            </p>
            <div className="flex space-x-3 mt-6">
              
                <Link href="https://www.instagram.com/andrade.oliveira.engenharia/" target='_blank' className="bg-white/10 hover:bg-[#E6B902] p-2 rounded-full transition-colors duration-300">
                    <InstagramLogoIcon size={25} />
                </Link>
                <Link href="https://www.linkedin.com/in/f%C3%A1bio-oliveira-02b58368/" target='_blank' className="bg-white/10 hover:bg-[#E6B902] p-2 rounded-full transition-colors duration-300">
                    <LinkedinLogoIcon size={25} />
                </Link>
                <Link href="https://api.whatsapp.com/send/?phone=5527992856966&text=Gostaria+de+fazer+um+or%C3%A7amento%21&type=phone_number&app_absent=0" target='_blank' className="bg-white/10 hover:bg-[#E6B902] p-2 rounded-full transition-colors duration-300">
                    <WhatsappLogoIcon size={25} />
                </Link>
            </div>
          </div>
          
          {/* Coluna 2 - Serviços */}
          <div>
            <h3 className="text-[#E6B902] font-bold text-xl mb-4 border-l-4 border-[#E6B902] pl-3">
              Nossos Serviços
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-[#E6B902] transition-colors">
                <Link href="/services/sondagem-spt" className="flex items-center">
                  <span className="mr-2">›</span> Sondagem SPT
                </Link>
              </li>
              <li className="hover:text-[#E6B902] transition-colors">
                <Link href="/services/projetos-estruturais" className="flex items-center">
                  <span className="mr-2">›</span> Projetos Estruturais
                </Link>
              </li>
              <li className="hover:text-[#E6B902] transition-colors">
                <Link href="/services/projetos-arquitetonicos" className="flex items-center">
                  <span className="mr-2">›</span> Projetos Arquitetônicos
                </Link>
              </li>
              <li className="hover:text-[#E6B902] transition-colors">
                <Link href="/services/projetos-eletricos" className="flex items-center">
                  <span className="mr-2">›</span> Projetos Elétricos
                </Link>
              </li>
              <li className="hover:text-[#E6B902] transition-colors">
                <Link href="/services/projetos-combate-incendio" className="flex items-center">
                  <span className="mr-2">›</span> Projetos de Combate a Incêndio
                </Link>
              </li>
              <li className="hover:text-[#E6B902] transition-colors">
                <Link href="/services/regularizacao-imoveis" className="flex items-center">
                  <span className="mr-2">›</span> Regularização de Imóveis
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Coluna 3 - Links Úteis */}
          <div>
            <h3 className="text-[#E6B902] font-bold text-xl mb-4 border-l-4 border-[#E6B902] pl-3">
              Links Úteis
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-[#E6B902] transition-colors">
                <Link href="/" className="flex items-center">
                  <span className="mr-2">›</span> Início
                </Link>
              </li>
              <li className="hover:text-[#E6B902] transition-colors">
                <Link href="/about" className="flex items-center">
                  <span className="mr-2">›</span> Sobre Nós
                </Link>
              </li>
              <li className="hover:text-[#E6B902] transition-colors">
                <Link href="/services" className="flex items-center">
                  <span className="mr-2">›</span> Serviços
                </Link>
              </li>
              <li className="hover:text-[#E6B902] transition-colors">
                <Link href="/projects" className="flex items-center">
                  <span className="mr-2">›</span> Projetos
                </Link>
              </li>
              
              <li className="hover:text-[#E6B902] transition-colors">
                <Link href="/contacts" className="flex items-center">
                  <span className="mr-2">›</span> Contato
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Coluna 4 - Contato */}
          <div>
            <h3 className="text-[#E6B902] font-bold text-xl mb-4 border-l-4 border-[#E6B902] pl-3">
              Contato
            </h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-[#E6B902] mt-1 mr-3 flex-shrink-0" />
                <span>Grande Vitória - ES</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-[#E6B902] mr-3 flex-shrink-0" />
                <span>(27) 99285-6966</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-[#E6B902] mr-3 flex-shrink-0" />
                <span>andrade.oliveira.eng@hotmail.com</span>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-[#E6B902] mt-1 mr-3 flex-shrink-0" />
                <span>Segunda a Sexta: 8h às 18h<br />Sábado: 8h às 12h</span>
              </li>
            </ul>
            <div className="mt-6">
              <button className="bg-[#E6B902] hover:bg-[#c49e02] text-white px-4 py-2 rounded transition-colors duration-300">
                Solicitar Orçamento
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Parte inferior do footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center max-w-6xl">
            <div className='text-center md:text-left'>
                <p className="text-gray-400 text-sm mb-4 md:mb-0">
                    © {currentYear} Andrade Oliveira. Todos os direitos reservados.
                </p>
                <p className="text-gray-400 text-sm mb-4 md:mb-0">Desenvolvido por <a href="https://github.com/josifermaodev" target='_blank' className='text-[#E6B902]'>josifermaodev</a></p>
            </div>
          
          <div className="flex flex-wrap justify-center">
            <Link href="#" className="text-gray-400 hover:text-[#E6B902] text-sm mx-2 transition-colors">
              Termos de Uso
            </Link>
            <Link href="#" className="text-gray-400 hover:text-[#E6B902] text-sm mx-2 transition-colors">
              Política de Privacidade
            </Link>
            <Link href="#" className="text-gray-400 hover:text-[#E6B902] text-sm mx-2 transition-colors">
              Política de Cookies
            </Link>
          </div>
        </div>
        <BackToTop />
      </div>
    </footer>
  );
}
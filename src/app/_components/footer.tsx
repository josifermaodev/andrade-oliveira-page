'use client';

import { InstagramLogoIcon, LinkedinLogoIcon, WhatsappLogoIcon } from '@phosphor-icons/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import BackToTop from './topo';
import Link from 'next/link';
import { Button } from '../../components/ui/button';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#0f0f0f] text-white border-t border-[#E6B902]">
      
      <div className="container w-full mx-auto px-4 py-12">
        <div className="flex justify-between flex-col lg:flex-row items-center gap-8">
          
          <div>
            
            <div className="mb-4">
              <img
                src="/logo-clara-png.svg" 
                alt="Logo da Empresa" 
                className="h-40 mb-8"
              />
            </div>
          </div>
          
          
          <div>
            
            <div className='flex flex-col xl:flex-row gap-10'>
                <div>
                    <ul className="space-y-4 text-gray-300 ">
                        <li className="flex items-start">
                            <MapPin className="h-5 w-5 text-[#E6B902] mt-1 mr-3 flex-shrink-0" />
                            <span>Grande Vitória - ES</span>
                        </li>
                        <li className="flex items-center">
                            <Clock className="h-5 w-5 text-[#E6B902] mt-1 mr-3 flex-shrink-0" />
                            <span>Segunda a Sexta: 8h às 18h<br />Sábado: 8h às 12h</span>
                        </li>
                    </ul>
                </div>
                
                <div>
                    <ul className="space-y-4 text-gray-300">
                        <li className="flex items-center">
                            <Mail className="h-5 w-5 text-[#E6B902] mr-3 flex-shrink-0" />
                            <span>andrade.oliveira.eng@hotmail.com</span>
                        </li>
                        <li className="flex items-start">
                            
                            <Phone className="h-5 w-5 text-[#E6B902] mr-3 flex-shrink-0" />
                            <span>(27) 99285-6966</span>
                        </li>
                    </ul>
                </div>
            </div>
            
          </div>
            <div className="flex flex-col gap-8 text-center">
                <div className="flex justify-around items-center">
                  
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
                <Button className="bg-[#E6B902] hover:bg-[#fafafa] text-black py-6 px-6 text-lg rounded transition-colors duration-300">
                  Solicitar Orçamento
                </Button>
                
            </div>
            
        </div>
        
      </div>
      
      
      <div className="flex justify-center border-t border-gray-800 py-4">
        <div className="container flex flex-col md:flex-row justify-between items-center">
            <div className='text-center md:text-left'>
                <p className="text-gray-400 text-sm">
                    © {currentYear} Andrade Oliveira. Todos os direitos reservados.
                </p>
                <p className="text-gray-400 text-sm mb-4 md:mb-0">Desenvolvido por <a href="https://github.com/josifermaodev" target='_blank' className='text-[#E6B902]'>josifermaodev</a></p>
            </div>
          
          <div className="flex flex-wrap justify-center md:justify-end items-center lg:gap-15 ">
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
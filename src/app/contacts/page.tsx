import ContactForm from "../_components/contact-form";
import { FiMail, FiPhone, FiMapPin, FiClock } from "react-icons/fi";
import { FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Contatos() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f8f9fa] to-[#e9ecef] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1 text-sm font-medium text-[#0f0f0f] mb-4">
            Fale conosco
          </span>
          
          <h1 className="text-4xl md:text-5xl font-bold text-[#0f0f0f] mb-4">
            Entre em <span className="text-[#E6B902]">Contato</span>
          </h1>
          <div className="w-24 h-1 bg-[#E6B902] mx-auto"></div>
          <p className="text-lg text-[#0f0f0f] max-w-2xl mx-auto">
            Nosso time está pronto para responder suas dúvidas e transformar suas ideias em realidade.
          </p>
        </div>

        {/* Modern Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Form Section */}
          <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow p-8 sm:p-10">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Envie sua mensagem
              </h2>
              
              <div className="w-16 h-1 bg-[#E6B902]"></div>
              <p className="text-gray-600">Preencha o formulário abaixo e retornaremos em breve</p>
            </div>
            <ContactForm />
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow p-8">
              <h2 className="text-2xl font-bold text-[#0f0f0f] mb-6">
                Informações de Contato
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start group">
                  <div className="flex-shrink-0 bg-[#E6B902]/10 p-3 rounded-lg text-[#E6B902] group-hover:bg-[#E6B902] group-hover:text-white transition-colors">
                    <FiMail className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-[#0f0f0f]">Email</h3>
                    <a href="mailto:andrade.oliveira.eng@hotmail.com" className="block text-[#0f0f0f] hover:text-[#E6B902] transition-colors">
                      andrade.oliveira.eng@hotmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="flex-shrink-0 bg-[#25D366]/10 p-3 rounded-lg text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                    <FaWhatsapp className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-800">WhatsApp</h3>
                    <a href="https://wa.me/5527992856966" className="block text-gray-600 hover:text-[#E6B902] transition-colors">
                      +55 (27) 99285-6966
                    </a>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="flex-shrink-0 bg-[#6B46C1]/10 p-3 rounded-lg text-[#6B46C1] group-hover:bg-[#6B46C1] group-hover:text-white transition-colors">
                    <FiMapPin className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-800">Endereço</h3>
                    <p className="text-gray-600">Grande Vitória</p>
                    <p className="text-gray-600">E região</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="flex-shrink-0 bg-[#F59E0B]/10 p-3 rounded-lg text-[#F59E0B] group-hover:bg-[#F59E0B] group-hover:text-white transition-colors">
                    <FiClock className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-800">Horário</h3>
                    <p className="text-gray-600">Segunda a Sexta: 9h às 18h</p>
                    <p className="text-gray-600">Sábado: 9h às 12h</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Nossas Redes
              </h2>
              <div className="flex space-x-6">
                <a 
                  href="https://www.linkedin.com/in/f%C3%A1bio-oliveira-02b58368/" 
                  className="bg-[#0077B5]/10 p-3 rounded-full text-[#0077B5] hover:bg-[#0077B5] hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="h-6 w-6" />
                </a>
                <a 
                  href="https://www.instagram.com/andrade.oliveira.engenharia/" 
                  className="bg-[#E1306C]/10 p-3 rounded-full text-[#E1306C] hover:bg-[#E1306C] hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Map */}
        <div className="mt-20 bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Onde estamos</h2>
            <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.322097943983!2d-40.337661924987!3d-20.32236388100005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb8160a92eb5bd9%3A0x4eaf2f2766e991fe!2sVit%C3%B3ria%2C%20ES!5e0!3m2!1spt-BR!2sbr!4v1716321234567!5m2!1spt-BR!2sbr"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                aria-label="Mapa da localização na Grande Vitória-ES"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Precisa de ajuda imediata?</h3>
          <a 
            href="tel:+5511999999999" 
            className="inline-flex items-center px-8 py-4 bg-[#E6B902] text-[#2A2A2A] font-bold rounded-full hover:bg-[#2A2A2A] hover:text-white transition-colors shadow-lg hover:shadow-xl"
          >
            <FiPhone className="mr-2" />
            Ligue agora: (27) 99285-6966
          </a>
        </div>
      </div>
    </main>
  );
}
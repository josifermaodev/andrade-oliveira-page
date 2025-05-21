'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser'
import toast, { Toaster } from 'react-hot-toast'
import { ClipLoader } from 'react-spinners'

const serviceOptions = [
  'Sondagem SPT (Simples de Penetração)',
  'Projetos Estruturais',
  'Projetos Arquitetônicos e Geotécnicos',
  'Projetos Elétricos e Hidrossanitários',
  'Projetos de Combate a Incêndio',
  'Regularização de Obras e Imóveis',
  'Licenciamento Ambiental',
  'Emissão de Habite-se',
  'Reunião para Orçamento',
  'Outros',
]

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [selectedServices, setSelectedServices] = useState<string[]>([])

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    )
  }

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!name || !email || !phone || !message || selectedServices.length === 0) {
      toast.error('Por favor, preencha todos os campos e selecione ao menos um serviço.')
      return
    }

    setLoading(true)

    const templateParams = {
      name,
      email,
      phone,
      message,
      services: selectedServices.join(', '),
    }

    try {
      await emailjs.send(
        'service_oti7mag',
        'template_6nxpssb',
        templateParams,
        '5IAkUV8gjTfCADOon'
      )

      toast.success('Mensagem enviada com sucesso! 🎉')
      setName('')
      setEmail('')
      setPhone('')
      setMessage('')
      setSelectedServices([])
    } catch (err) {
      console.error('Erro ao enviar:', err)
      toast.error('Ocorreu um erro. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: '#ffffff',
            color: '#0f0f0f',
            border: '1px solid #E6B902',
          },
        }}
      />

      <form onSubmit={sendEmail} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Nome Completo <span className="text-[#E6B902]">*</span>
          </label>
          <input
            id="name"
            type="text"
            placeholder="Seu nome completo"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#E6B902] focus:border-[#E6B902]"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              E-mail <span className="text-[#E6B902]">*</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="seu@email.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#E6B902] focus:border-[#E6B902]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Telefone <span className="text-[#E6B902]">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="(00) 00000-0000"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#E6B902] focus:border-[#E6B902]"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Multi Select com Cards */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Serviços desejados <span className="text-[#E6B902]">*</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {serviceOptions.map((service) => (
              <label
                key={service}
                className={`cursor-pointer flex items-center gap-2 border rounded-lg px-4 py-3 text-sm ${
                  selectedServices.includes(service)
                    ? 'bg-[#E6B902]/10 border-[#E6B902] text-[#0f0f0f] font-medium'
                    : 'bg-white border-gray-300 text-gray-700'
                } hover:border-[#E6B902] transition-colors`}
              >
                <input
                  type="checkbox"
                  checked={selectedServices.includes(service)}
                  onChange={() => toggleService(service)}
                  className="accent-[#E6B902]"
                />
                {service}
              </label>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Mensagem <span className="text-[#E6B902]">*</span>
          </label>
          <textarea
            id="message"
            placeholder="Como podemos ajudar?"
            className="w-full h-32 px-4 py-3 border border-gray-300 rounded-lg resize-none focus:ring-[#E6B902] focus:border-[#E6B902]"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>

        <div className="pt-2">
          <button
            type="submit"
            disabled={loading}
            className="w-full flex justify-center items-center gap-2 bg-[#0f0f0f] hover:bg-[#E6B902] text-white hover:text-[#0f0f0f] font-medium py-3 px-6 rounded-lg transition-all duration-300 group border border-[#0f0f0f] hover:border-[#E6B902]"
          >
            {loading ? (
              <>
                <ClipLoader color="#ffffff" size={20} />
                <span className="group-hover:translate-x-1 transition-transform">Enviando...</span>
              </>
            ) : (
              <span className="group-hover:translate-x-1 transition-transform">
                Enviar Mensagem
              </span>
            )}
          </button>
        </div>
      </form>
    </div>
  )
}

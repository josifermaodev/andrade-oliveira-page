'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser'
import toast, { Toaster } from 'react-hot-toast'
import { ClipLoader } from 'react-spinners'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!name || !email || !phone || !message) {
      toast.error('Por favor, preencha todos os campos.')
      return
    }

    setLoading(true)

    const templateParams = {
      name,
      email,
      phone,
      message,
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
    } catch (err) {
      console.error('Erro ao enviar:', err)
      toast.error('Ocorreu um erro. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto px-8 py-12 bg-white rounded-lg shadow-md relative border border-gray-100">
      <Toaster position="top-right" toastOptions={{
        style: {
          background: '#ffffff',
          color: '#0f0f0f',
          border: '1px solid #E6B902'
        }
      }} />

      <div className="text-center mb-10">
        <h1 className="text-3xl font-serif font-bold text-[#0f0f0f] mb-2">Entre em Contato</h1>
        <div className="w-20 h-1 bg-[#E6B902] mx-auto mb-4"></div>
        <p className="text-gray-600">Preencha o formulário abaixo e retornaremos em breve</p>
      </div>

      <form onSubmit={sendEmail} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Nome Completo <span className="text-[#E6B902]">*</span>
          </label>
          <input
            id="name"
            type="text"
            placeholder="Seu nome completo"
            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#E6B902] focus:border-[#E6B902] text-gray-800 placeholder-gray-400"
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
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#E6B902] focus:border-[#E6B902] text-gray-800 placeholder-gray-400"
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
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#E6B902] focus:border-[#E6B902] text-gray-800 placeholder-gray-400"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Mensagem <span className="text-[#E6B902]">*</span>
          </label>
          <textarea
            id="message"
            placeholder="Como podemos ajudar?"
            className="w-full h-32 px-4 py-3 bg-white border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-1 focus:ring-[#E6B902] focus:border-[#E6B902] text-gray-800 placeholder-gray-400"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>

        <div className="pt-2">
          <button
            type="submit"
            className="w-full flex justify-center items-center gap-2 bg-[#0f0f0f] hover:bg-[#E6B902] text-white hover:text-[#0f0f0f] font-medium py-3 px-6 rounded-lg transition-all duration-300 disabled:opacity-70 group border border-[#0f0f0f] hover:border-[#E6B902]"
            disabled={loading}
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
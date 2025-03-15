"use client"

import type React from "react"

import { useState } from "react"
import { Phone, Building, Mail, MapPin, Globe, Languages, Clock } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você implementaria a lógica de envio do formulário
    alert("Mensagem enviada com sucesso!")
  }

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-b from-[#1A2129] to-[#2D3339]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Entre em <span className="text-[#00A3FF]">Contato</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Estamos à disposição para atender suas necessidades. Entre em contato por qualquer um dos nossos canais.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 max-w-6xl mx-auto">
          {/* Informações de Contato */}
          <div className="lg:w-2/5 space-y-6">
            {/* Card de Informações */}
            <div className="bg-[#2D3339] rounded-xl p-8 border border-[#00A3FF]/20">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="bg-[#00A3FF] w-1 h-8 mr-3 rounded-full"></span>
                Informações de Contato
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#00A3FF]/10 p-3 rounded-lg">
                    <Phone className="text-[#00A3FF] h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Telefone</h4>
                    <p className="text-gray-300">+55 (47) 98406-4678</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#00A3FF]/10 p-3 rounded-lg">
                    <Mail className="text-[#00A3FF] h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Email</h4>
                    <p className="text-gray-300">ana@southwavesexportadora.com.br</p>
                    <p className="text-gray-300">sales@southwavesexportadora.com.br</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#00A3FF]/10 p-3 rounded-lg">
                    <Building className="text-[#00A3FF] h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Endereço</h4>
                    <p className="text-gray-300">São Francisco do Sul - Brazil</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card de Diferenciais */}
            <div className="bg-[#2D3339] rounded-xl p-8 border border-[#00A3FF]/20">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="bg-[#00A3FF] w-1 h-8 mr-3 rounded-full"></span>
                Nossos Diferenciais
              </h3>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-[#00A3FF]/10 p-2 rounded-lg">
                    <MapPin className="text-[#00A3FF] h-5 w-5" />
                  </div>
                  <p className="text-gray-300">Localização estratégica entre os principais portos</p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-[#00A3FF]/10 p-2 rounded-lg">
                    <Languages className="text-[#00A3FF] h-5 w-5" />
                  </div>
                  <p className="text-gray-300">Atendimento multilíngue disponível</p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-[#00A3FF]/10 p-2 rounded-lg">
                    <Clock className="text-[#00A3FF] h-5 w-5" />
                  </div>
                  <p className="text-gray-300">Disponibilidade 24/7 para emergências</p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-[#00A3FF]/10 p-2 rounded-lg">
                    <Globe className="text-[#00A3FF] h-5 w-5" />
                  </div>
                  <p className="text-gray-300">Atendemos embarcações de todas as bandeiras</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulário de Contato */}
          <div className="lg:w-3/5">
            <div className="bg-white rounded-xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-[#1A2129] mb-6">Envie sua Mensagem</h3>
              <p className="text-gray-600 mb-8">
                Preencha o formulário abaixo e nossa equipe entrará em contato o mais breve possível.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00A3FF]"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00A3FF]"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Empresa ou Nome do Navio
                    </label>
                    <input
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00A3FF]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Assunto
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00A3FF]"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Sua Mensagem <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Digite sua mensagem aqui..."
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 min-h-[150px] focus:outline-none focus:ring-2 focus:ring-[#00A3FF]"
                  ></textarea>
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-[#00A3FF] hover:bg-[#0088D1] text-white font-medium px-12 py-3 rounded-lg transition-colors"
                  >
                    Enviar Mensagem
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


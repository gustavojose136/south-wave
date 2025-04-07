"use client"

import type React from "react"

import { useState } from "react"
import { Phone, Building, Mail, MapPin } from "lucide-react"
import { useTranslation } from "react-i18next"

// Função auxiliar para obter texto traduzido de forma segura
const safeTranslate = (t: any, key: string): string => {
  try {
    const translated = t(key)
    return typeof translated === "string" ? translated : key
  } catch (error) {
    return key
  }
}

// Função auxiliar para obter arrays de forma segura
const safeTranslateArray = (t: any, key: string): string[] => {
  try {
    const result = t(key, { returnObjects: true })
    if (!Array.isArray(result)) {
      return []
    }

    // Converte cada item para string e filtra valores inválidos
    return result
      .map((item) => (typeof item === "string" ? item : null))
      .filter((item): item is string => item !== null)
  } catch (error) {
    return []
  }
}

export default function Contact() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  })

  // Obter itens diferenciais de forma segura
  const differentialItems = safeTranslateArray(t, "contact.differentialsCard.items")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Construir o corpo do e-mail com os dados do formulário
    const subject = encodeURIComponent(
      formData.subject || safeTranslate(t, "contact.form.defaultSubject") || "Contato do site",
    )
    const body = encodeURIComponent(
      `${safeTranslate(t, "contact.form.fields.company")}: ${formData.company || safeTranslate(t, "contact.form.notProvided")}\n` +
        `${safeTranslate(t, "contact.form.fields.phone")}: ${formData.phone || safeTranslate(t, "contact.form.notProvided")}\n` +
        `${safeTranslate(t, "contact.form.fields.message")}:\n${formData.message}\n\n` +
        `${safeTranslate(t, "contact.form.sentBy")}: ${formData.email}`,
    )

    // Obter o e-mail de destino das traduções
    const toEmail = safeTranslate(t, "contact.infoCard.email.value1")

    // Abrir o cliente de e-mail com os dados preenchidos
    window.location.href = `mailto:${toEmail}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-b from-[#1A2129] to-[#2D3339]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
            dangerouslySetInnerHTML={{ __html: safeTranslate(t, "contact.header.title") }}
          ></h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">{safeTranslate(t, "contact.header.subtitle")}</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 max-w-6xl mx-auto">
          {/* Informações de Contato */}
          <div className="lg:w-2/5 space-y-6">
            {/* Card de Informações */}
            <div className="bg-[#2D3339] rounded-xl p-8 border border-[#00A3FF]/20">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="bg-[#00A3FF] w-1 h-8 mr-3 rounded-full"></span>
                {safeTranslate(t, "contact.infoCard.title")}
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#00A3FF]/10 p-3 rounded-lg">
                    <Phone className="text-[#00A3FF] h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">{safeTranslate(t, "contact.infoCard.phone.label")}</h4>
                    <p className="text-gray-300">{safeTranslate(t, "contact.infoCard.phone.value")}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-[#00A3FF]/10 p-3">
                    <Mail className="h-6 w-6 text-[#00A3FF]" />
                  </div>
                  <div className="w-full min-w-0">
                    <h4 className="mb-1 font-medium text-white">{safeTranslate(t, "contact.infoCard.email.label")}</h4>
                    <a
                      href={`mailto:${safeTranslate(t, "contact.infoCard.email.value1")}`}
                      className="overflow-hidden whitespace-normal break-all text-gray-300 hover:text-[#00A3FF] transition-colors block"
                    >
                      {safeTranslate(t, "contact.infoCard.email.value1")}
                    </a>
                    <a
                      href={`mailto:${safeTranslate(t, "contact.infoCard.email.value2")}`}
                      className="overflow-hidden whitespace-normal break-all text-gray-300 hover:text-[#00A3FF] transition-colors block"
                    >
                      {safeTranslate(t, "contact.infoCard.email.value2")}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#00A3FF]/10 p-3 rounded-lg">
                    <Building className="text-[#00A3FF] h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">
                      {safeTranslate(t, "contact.infoCard.address.label")}
                    </h4>
                    <p className="text-gray-300">{safeTranslate(t, "contact.infoCard.address.value")}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card de Diferenciais */}
            <div className="bg-[#2D3339] rounded-xl p-8 border border-[#00A3FF]/20">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="bg-[#00A3FF] w-1 h-8 mr-3 rounded-full"></span>
                {safeTranslate(t, "contact.differentialsCard.title")}
              </h3>

              <div className="space-y-4">
                {differentialItems.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="bg-[#00A3FF]/10 p-2 rounded-lg">
                      <MapPin className="text-[#00A3FF] h-5 w-5" />
                    </div>
                    <p className="text-gray-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Formulário de Contato */}
          <div className="lg:w-3/5">
            <div className="bg-white rounded-xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-[#1A2129] mb-6">{safeTranslate(t, "contact.form.title")}</h3>
              <p className="text-gray-600 mb-8">{safeTranslate(t, "contact.form.description")}</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    {safeTranslate(t, "contact.form.fields.email")} <span className="text-red-500">*</span>
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
                      {safeTranslate(t, "contact.form.fields.phone")}
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
                      {safeTranslate(t, "contact.form.fields.company")}
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
                    {safeTranslate(t, "contact.form.fields.subject")}
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
                    {safeTranslate(t, "contact.form.fields.message")} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={safeTranslate(t, "contact.form.placeholders.message")}
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 min-h-[150px] focus:outline-none focus:ring-2 focus:ring-[#00A3FF]"
                  ></textarea>
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-[#00A3FF] hover:bg-[#0088D1] text-white font-medium px-12 py-3 rounded-lg transition-colors"
                  >
                    {safeTranslate(t, "contact.form.submit")}
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


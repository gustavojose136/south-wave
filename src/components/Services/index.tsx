"use client"

import { useRef } from "react"
import Image from "next/image"
import { Ship, Package, FileText, Wrench, Anchor, Clock, CheckCircle, ArrowRight } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"
import { useTranslation } from "react-i18next"

export default function Services() {
  const { t } = useTranslation()
  const containerRef = useRef<HTMLDivElement>(null)
  const isMobile = useIsMobile()

  // Função auxiliar para obter features como array
  const getFeatures = (path: string): string[] => {
    const features = t(path, { returnObjects: true })

    if (!Array.isArray(features)) {
      return []
    }

    // Converte cada item para string e filtra valores inválidos
    return features
      .map((item) => {
        if (typeof item === "string") {
          return item
        } else if (item && typeof item === "object" && "toString" in item) {
          return item.toString()
        }
        return null
      })
      .filter((item): item is string => item !== null)
  }

  // Serviços oferecidos com traduções
  const services = [
    {
      icon: <Package className="h-12 w-12 text-[#0D6EFD]" />,
      title: t("services.serviceList.service1.title"),
      description: t("services.serviceList.service1.description"),
      features: getFeatures("services.serviceList.service1.features"),
      image: "/images/servicos/pecas-origi.jpg",
    },
    {
      icon: <Clock className="h-12 w-12 text-[#0D6EFD]" />,
      title: t("services.serviceList.service2.title"),
      description: t("services.serviceList.service2.description"),
      features: getFeatures("services.serviceList.service2.features"),
      image: "/images/servicos/entrega-express.png",
    },
    {
      icon: <Wrench className="h-12 w-12 text-[#0D6EFD]" />,
      title: t("services.serviceList.service3.title"),
      description: t("services.serviceList.service3.description"),
      features: getFeatures("services.serviceList.service3.features"),
      image: "/images/servicos/tec.jpg",
    },
    {
      icon: <FileText className="h-12 w-12 text-[#0D6EFD]" />,
      title: t("services.serviceList.service4.title"),
      description: t("services.serviceList.service4.description"),
      features: getFeatures("services.serviceList.service4.features"),
      image: "/images/servicos/doc.jpg",
    },
  ]

  // Features da seção de emergência
  const emergencyFeatures = getFeatures("services.emergency.features")

  return (
    <section
      id="services"
      ref={containerRef}
      className="relative bg-gradient-to-b from-[#0A1A2F] to-[#0F2A47] py-24 text-white"
    >
      {/* Elementos decorativos */}
      {!isMobile && (
        <>
          <div className="absolute right-0 top-0 text-[#0D6EFD] opacity-5">
            <Ship className="h-96 w-96" />
          </div>
          <div className="absolute bottom-0 left-0 text-[#0D6EFD] opacity-5">
            <Anchor className="h-80 w-80" />
          </div>
        </>
      )}

      <div className="container relative z-10 mx-auto px-4">
        {/* Cabeçalho da seção */}
        <div className="mb-16 px-4 text-center">
          <div className="mb-4 inline-flex items-center justify-center rounded-full border border-[#0D6EFD]/30 bg-[#0D6EFD]/20 px-4 py-2 font-medium text-[#0D6EFD]">
            <Wrench className="mr-2 h-4 w-4" />
            {t("services.header.badge")}
          </div>

          <h2 className="mb-6 text-3xl font-bold md:text-5xl">
            {t("services.header.title.main")}
            <span className="ml-2 text-[#0D6EFD]">{t("services.header.title.highlight")}</span>
          </h2>

          <p className="mx-auto max-w-3xl text-base text-gray-300 md:text-lg">{t("services.header.description")}</p>
        </div>

        {/* Grid de serviços */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-xl border border-[#0D6EFD]/20 bg-[#0F2A47] transition-all duration-300 hover:border-[#0D6EFD]/50"
            >
              {/* Imagem na parte superior */}
              <div className="relative h-48 w-full overflow-visible">
                <Image
                  src={service.image || "/placeholder.svg?height=300&width=400"}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A2F]/90 to-transparent"></div>

                {/* Badge de serviço premium */}
                <div className="absolute right-4 top-4 rounded-full bg-[#0D6EFD] px-3 py-1 text-xs font-bold text-white">
                  {t("services.premiumBadge")}
                </div>

                {/* Ícone do serviço */}
                <div className="absolute bottom-0 left-1/2 z-50 -translate-x-1/2 translate-y-1/2 transform">
                  <div className="rounded-full border-4 border-[#0F2A47] bg-[#0D6EFD] p-3 shadow-lg">
                    {service.title.includes(t("services.serviceList.service1.title")) && (
                      <Package className="h-8 w-8 text-white" />
                    )}
                    {service.title.includes(t("services.serviceList.service2.title")) && (
                      <Clock className="h-8 w-8 text-white" />
                    )}
                    {service.title.includes(t("services.serviceList.service3.title")) && (
                      <Wrench className="h-8 w-8 text-white" />
                    )}
                    {service.title.includes(t("services.serviceList.service4.title")) && (
                      <FileText className="h-8 w-8 text-white" />
                    )}
                  </div>
                </div>
              </div>

              {/* Conteúdo do serviço */}
              <div className="p-6 pt-10">
                <h3 className="mb-4 text-center text-xl font-bold text-white">{service.title}</h3>
                <p className="mb-6 text-center text-gray-300">{service.description}</p>

                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#0D6EFD]" />
                      <span className="text-gray-200">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Seção de emergência */}
        <div className="mt-16 overflow-hidden rounded-xl border border-[#0D6EFD]/30 bg-gradient-to-r from-[#0D6EFD]/20 to-[#0F2A47]">
          <div className="relative w-full">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A1A2F]/90 to-[#0A1A2F]/70"></div>
            </div>

            <div className="relative z-10 p-8">
              <div className="flex flex-col items-center text-center md:items-start md:text-left">
                <div className="mb-6 inline-flex items-center justify-center rounded-full bg-[#0D6EFD] px-4 py-2 font-medium text-white">
                  <Clock className="mr-2 h-4 w-4" />
                  {t("services.emergency.badge")}
                </div>

                <h3 className="mb-4 text-2xl font-bold text-white md:text-3xl">{t("services.emergency.title")}</h3>

                <p className="mb-6 max-w-2xl text-gray-300">{t("services.emergency.description")}</p>

                <div className="mb-6 grid w-full max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2">
                  {emergencyFeatures.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#0D6EFD]" />
                      <span className="text-gray-200">{feature}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center rounded-lg bg-[#0D6EFD] px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-[#0747A6]"
                >
                  <span className="flex items-center">
                    {t("services.emergency.cta")}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


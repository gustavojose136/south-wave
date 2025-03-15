"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import {
  Package,
  Clipboard,
  FileText,
  ShieldCheck,
  Truck,
  Wrench,
  Anchor,
  LifeBuoy,
  ChevronRight,
  CheckCircle,
  CreditCard,
  DollarSign,
  Users,
} from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeTab, setActiveTab] = useState("supplies")
  const isMobile = useIsMobile()

  const tabs = [
    { id: "supplies", label: "Suprimentos", icon: <Package className="w-5 h-5" /> },
    { id: "agency", label: "Agenciamento", icon: <FileText className="w-5 h-5" /> },
    { id: "logistics", label: "Logística", icon: <Truck className="w-5 h-5" /> },
    { id: "financial", label: "Financeiro", icon: <CreditCard className="w-5 h-5" /> },
  ]

  const services = {
    supplies: [
      {
        title: "Provisões de Bordo",
        description:
          "Alimentos, bebidas e suprimentos essenciais para a tripulação e passageiros, com opções para diferentes requisitos dietéticos e culturais.",
        icon: <Package />,
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        title: "Equipamentos de Segurança",
        description:
          "Coletes salva-vidas, botes, extintores de incêndio e outros equipamentos de segurança em conformidade com as regulamentações internacionais.",
        icon: <ShieldCheck />,
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        title: "Peças e Componentes",
        description:
          "Peças de reposição para motores, sistemas elétricos, hidráulicos e outros componentes essenciais para o funcionamento da embarcação.",
        icon: <Wrench />,
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        title: "Materiais de Limpeza",
        description:
          "Produtos de limpeza especializados para ambientes marítimos, incluindo opções biodegradáveis e ecologicamente responsáveis.",
        icon: <LifeBuoy />,
        image: "/placeholder.svg?height=400&width=600",
      },
    ],
    agency: [
      {
        title: "Customs Clearance",
        description:
          "Assistência completa com processos de importação e exportação, garantindo conformidade com as regulamentações brasileiras.",
        icon: <Clipboard />,
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        title: "Crew Change",
        description: "Suporte para troca de tripulação, incluindo transporte, hospedagem e documentação necessária.",
        icon: <Users />,
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        title: "Documentação de Carga",
        description:
          "Preparação e processamento de conhecimentos de embarque, manifestos de carga e outros documentos essenciais.",
        icon: <FileText />,
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        title: "Certificações e Licenças",
        description:
          "Suporte para obtenção e renovação de certificações e licenças necessárias para operação em águas brasileiras.",
        icon: <ShieldCheck />,
        image: "/placeholder.svg?height=400&width=600",
      },
    ],
    logistics: [
      {
        title: "Transporte Refrigerado",
        description:
          "Caminhões e depósitos implementados com câmara frigorífica, garantindo a climatização ideal para cada item.",
        icon: <Truck />,
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        title: "Armazenamento",
        description:
          "Instalações de armazenamento seguras e climatizadas para diferentes tipos de carga, incluindo itens perecíveis e perigosos.",
        icon: <Package />,
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        title: "Rastreamento de Remessas",
        description:
          "Sistemas avançados de rastreamento para monitorar o status e a localização de suas remessas em tempo real.",
        icon: <Anchor />,
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        title: "Entrega Expressa",
        description:
          "Opções de entrega urgente para situações críticas, garantindo que suprimentos essenciais cheguem rapidamente.",
        icon: <Truck />,
        image: "/placeholder.svg?height=400&width=600",
      },
    ],
    financial: [
      {
        title: "Descontos Atrativos",
        description:
          "Grandes pedidos significam grandes economias. Oferecemos condições especiais para clientes de longo prazo.",
        icon: <DollarSign />,
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        title: "Crédito Flexível",
        description: "Possibilidade de crédito com prazos de 30-60-45 dias para clientes com bom histórico.",
        icon: <CreditCard />,
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        title: "Opções de Pagamento",
        description:
          "Aceitamos diversas formas de pagamento, incluindo cartão de crédito, para facilitar suas operações.",
        icon: <CreditCard />,
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        title: "Cash & Carry",
        description: "Opções de pagamento à vista com descontos especiais para agilizar suas operações.",
        icon: <DollarSign />,
        image: "/placeholder.svg?height=400&width=600",
      },
    ],
  }

  return (
    <div className="min-h-screen bg-[#1A2129] text-white" ref={containerRef}>
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A2129] to-[#2D3339]"></div>
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=500&width=1000')] bg-cover bg-center opacity-10"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-gradient-to-r from-[#00A3FF]/20 to-transparent text-[#00A3FF] font-medium mb-4 border border-[#00A3FF]/20 backdrop-blur-sm">
                Nossos Serviços
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Soluções{" "}
                <span className="relative">
                  <span className="relative z-10 text-[#00A3FF]">Marítimas</span>
                  <span className="absolute -bottom-2 left-0 right-0 h-3 bg-[#00A3FF]/20 rounded-full -z-0"></span>
                </span>{" "}
                Completas
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Nossa equipe está pronta para atender da melhor forma e agilizar a entrega no fornecimento.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="services-tabs" className="py-20 bg-[#1A2129] relative">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00A3FF] via-transparent to-[#00A3FF] opacity-30"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Nossos{" "}
                <span className="relative">
                  <span className="relative z-10 text-[#00A3FF]">Serviços</span>
                  <span className="absolute -bottom-2 left-0 right-0 h-3 bg-[#00A3FF]/20 rounded-full -z-0"></span>
                </span>
              </h2>

              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Escolha a categoria de serviço que você precisa e descubra como podemos ajudar sua operação marítima.
              </p>
            </motion.div>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    relative overflow-hidden flex items-center gap-2 px-8 py-4 rounded-xl font-medium transition-all duration-300
                    ${
                      activeTab === tab.id
                        ? "bg-gradient-to-r from-[#00A3FF] to-[#0088D1] text-white shadow-lg shadow-[#00A3FF]/20"
                        : "bg-[#2D3339] text-gray-300 hover:bg-[#2D3339]/80 border border-[#00A3FF]/10"
                    }
                  `}
                >
                  <span className="relative z-10 flex items-center">
                    {tab.icon}
                    <span className="ml-2">{tab.label}</span>
                  </span>
                </button>
              ))}
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#2D3339]/90 to-[#1A2129]/90 p-8 rounded-2xl border border-[#00A3FF]/20 shadow-2xl backdrop-blur-sm relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {services[activeTab as keyof typeof services].map((service, index) => (
                    <div key={index} className="group relative overflow-hidden">
                      <div className="relative bg-gradient-to-br from-[#1A2129]/80 to-[#2D3339] p-6 rounded-xl border border-[#00A3FF]/10 hover:border-[#00A3FF]/30 transition-all duration-300 h-full">
                        <div className="absolute -right-3 -top-3 bg-gradient-to-r from-[#00A3FF] to-[#0088D1] p-3 rounded-xl shadow-lg shadow-[#00A3FF]/20 z-10">
                          {service.icon}
                        </div>

                        <h3 className="text-xl font-bold mb-3 group-hover:text-[#00A3FF] transition-colors duration-300">
                          {service.title}
                        </h3>

                        <p className="text-gray-300 mb-4">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-5xl mx-auto mt-16">
            <div className="relative">
              <div className="bg-gradient-to-r from-[#2D3339]/90 to-[#1A2129]/90 p-8 rounded-2xl border border-[#00A3FF]/30 backdrop-blur-sm relative z-10">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/2">
                    <h2 className="text-2xl font-bold mb-6 flex items-center">
                      <span className="bg-[#00A3FF] w-1 h-8 mr-3 rounded-full"></span>
                      Por que escolher a <span className="text-[#00A3FF] ml-2">South Waves</span>?
                    </h2>

                    <p className="text-gray-300 mb-6">
                      Para qualquer necessidade adicional, entre em contato. Somos flexíveis e prontos para oferecer
                      soluções sob medida para sua embarcação.
                    </p>

                    <Link
                      href="/contact"
                      className="inline-flex items-center bg-gradient-to-r from-[#00A3FF] to-[#0088D1] text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[#00A3FF]/20"
                    >
                      <span className="flex items-center">
                        Solicitar Cotação
                        <ChevronRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </Link>
                  </div>

                  <div className="md:w-1/2">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        "Atendimento 24/7 para emergências",
                        "Equipe técnica altamente qualificada",
                        "Preços competitivos e transparentes",
                        "Presença em todos os principais portos",
                        "Soluções personalizadas para cada cliente",
                        "Mais de 25 anos de experiência no setor",
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3 group">
                          <div className="bg-[#00A3FF]/20 p-2 rounded-lg group-hover:bg-[#00A3FF]/30 transition-all duration-300">
                            <CheckCircle className="w-5 h-5 text-[#00A3FF]" />
                          </div>
                          <p className="text-gray-300">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


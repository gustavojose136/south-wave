"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import {
  Ship,
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
  ArrowRight,
  Zap,
  Globe,
  Navigation,
} from "lucide-react"

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6])

  const [activeTab, setActiveTab] = useState("supplies")
  const [wavePhase, setWavePhase] = useState(0)

  useEffect(() => {
    setIsVisible(true)

    // Wave animation
    const waveInterval = setInterval(() => {
      setWavePhase((prev) => (prev + 0.05) % (2 * Math.PI))
    }, 50)

    return () => clearInterval(waveInterval)
  }, [])

  // Generate wave path
  const generateWavePath = (phase: number) => {
    const width = typeof window !== "undefined" ? window.innerWidth : 1000
    const height = 50
    const segments = 20
    const segmentWidth = width / segments

    let path = `M 0 ${height} `

    for (let i = 0; i <= segments; i++) {
      const x = i * segmentWidth
      const y = Math.sin(i * 0.5 + phase) * 15 + height
      path += `L ${x} ${y} `
    }

    path += `L ${width} ${height + 50} L 0 ${height + 50} Z`
    return path
  }

  const tabs = [
    { id: "supplies", label: "Suprimentos", icon: <Package className="w-5 h-5" /> },
    { id: "documentation", label: "Documentação", icon: <FileText className="w-5 h-5" /> },
    { id: "logistics", label: "Logística", icon: <Truck className="w-5 h-5" /> },
    { id: "maintenance", label: "Manutenção", icon: <Wrench className="w-5 h-5" /> },
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
    documentation: [
      {
        title: "Despacho Aduaneiro",
        description:
          "Assistência completa com processos de importação e exportação, garantindo conformidade com as regulamentações brasileiras.",
        icon: <Clipboard />,
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
      {
        title: "Relatórios de Conformidade",
        description:
          "Elaboração de relatórios detalhados para garantir conformidade com regulamentações ambientais e de segurança.",
        icon: <Clipboard />,
        image: "/placeholder.svg?height=400&width=600",
      },
    ],
    logistics: [
      {
        title: "Transporte de Carga",
        description:
          "Serviços de transporte terrestre, aéreo e marítimo para entrega de suprimentos e equipamentos em qualquer porto brasileiro.",
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
    maintenance: [
      {
        title: "Manutenção Preventiva",
        description:
          "Serviços regulares de manutenção para prevenir falhas e garantir o funcionamento ideal de todos os sistemas da embarcação.",
        icon: <Wrench />,
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        title: "Reparos de Emergência",
        description:
          "Equipe técnica disponível para reparos urgentes, minimizando o tempo de inatividade e os custos operacionais.",
        icon: <Wrench />,
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        title: "Inspeções Técnicas",
        description:
          "Inspeções detalhadas para identificar problemas potenciais antes que se tornem falhas graves e dispendiosas.",
        icon: <Clipboard />,
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        title: "Atualizações de Sistemas",
        description: "Instalação e configuração de atualizações para sistemas de navegação, comunicação e segurança.",
        icon: <ShieldCheck />,
        image: "/placeholder.svg?height=400&width=600",
      },
    ],
  }

  return (
    <div className="min-h-screen bg-[#1A2129] text-white" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Elements */}
        <motion.div className="absolute inset-0 z-0" style={{ y, opacity }}>
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A2129] to-[#2D3339]"></div>
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=500&width=1000')] bg-cover bg-center opacity-10"></div>

          {/* Animated Particles */}
          <div className="absolute inset-0">
            {Array.from({ length: 15 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-[#00A3FF]"
                style={{
                  width: Math.random() * 10 + 5,
                  height: Math.random() * 10 + 5,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  opacity: Math.random() * 0.3 + 0.1,
                }}
                animate={{
                  y: [0, -30, 0],
                  x: [0, Math.random() * 20 - 10, 0],
                }}
                transition={{
                  duration: Math.random() * 5 + 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* Decorative Elements */}
          <motion.div
            className="absolute top-20 right-20 text-[#00A3FF] opacity-20"
            animate={{
              rotate: [0, 10, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          >
            <Anchor className="w-40 h-40" />
          </motion.div>

          <motion.div
            className="absolute bottom-20 left-20 text-[#00A3FF] opacity-20"
            animate={{
              x: [0, 50, 0],
            }}
            transition={{
              duration: 30,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          >
            <Ship className="w-60 h-60" />
          </motion.div>
        </motion.div>

        {/* Glowing Orb */}
        <motion.div
          className="absolute left-1/4 top-1/4 w-64 h-64 rounded-full bg-[#00A3FF]/5"
          style={{
            filter: "blur(60px)",
            background: "radial-gradient(circle, rgba(0,163,255,0.3) 0%, rgba(0,163,255,0) 70%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-gradient-to-r from-[#00A3FF]/20 to-transparent text-[#00A3FF] font-medium mb-4 border border-[#00A3FF]/20 backdrop-blur-sm">
                <Zap className="w-4 h-4 mr-2" />
                Nossos Serviços
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Soluções{" "}
                <span className="relative">
                  <span className="relative z-10 text-[#00A3FF]">Marítimas</span>
                  <span className="absolute -bottom-2 left-0 right-0 h-3 bg-[#00A3FF]/20 rounded-full -z-0"></span>
                </span>{" "}
                Completas
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
              >
                Oferecemos uma ampla gama de serviços para atender às necessidades específicas de embarcações em todos
                os principais portos do Brasil.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-6 justify-center"
              >
                <Link
                  href="#services-tabs"
                  className="group relative overflow-hidden bg-gradient-to-r from-[#00A3FF] to-[#0088D1] text-white px-10 py-4 rounded-xl font-bold transition-all duration-500 transform hover:scale-105 shadow-lg shadow-[#00A3FF]/20 flex items-center justify-center"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#00A3FF] to-[#0088D1] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></span>
                  <span className="absolute -inset-x-1 -bottom-1 h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"></span>
                  <span className="relative flex items-center">
                    Ver Serviços
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>

                <Link
                  href="/contact"
                  className="group relative overflow-hidden bg-transparent border-2 border-[#00A3FF] text-white px-10 py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center hover:bg-[#00A3FF]/10"
                >
                  <span className="absolute -inset-x-1 -bottom-1 h-1 bg-gradient-to-r from-transparent via-[#00A3FF] to-transparent opacity-30"></span>
                  <span className="relative flex items-center">
                    Solicitar Cotação
                    <ChevronRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* ONDAS ANIMADAS NA PARTE INFERIOR */}
        <div className="absolute bottom-0 left-0 right-0 z-10 overflow-hidden">
          <svg width="100%" height="100" viewBox="0 0 1440 100" preserveAspectRatio="none">
            <motion.path
              d={generateWavePath(wavePhase)}
              fill="rgba(0, 163, 255, 0.2)"
              animate={{
                d: [
                  generateWavePath(wavePhase),
                  generateWavePath(wavePhase + Math.PI / 4),
                  generateWavePath(wavePhase + Math.PI / 2),
                  generateWavePath(wavePhase + (3 * Math.PI) / 4),
                  generateWavePath(wavePhase + Math.PI),
                ],
              }}
              transition={{
                duration: 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
          </svg>
          <svg width="100%" height="80" viewBox="0 0 1440 100" preserveAspectRatio="none" className="-mt-20">
            <motion.path
              d={generateWavePath(wavePhase + Math.PI / 2)}
              fill="rgba(0, 163, 255, 0.15)"
              animate={{
                d: [
                  generateWavePath(wavePhase + Math.PI / 2),
                  generateWavePath(wavePhase + (3 * Math.PI) / 4),
                  generateWavePath(wavePhase + Math.PI),
                  generateWavePath(wavePhase + (5 * Math.PI) / 4),
                  generateWavePath(wavePhase + (3 * Math.PI) / 2),
                ],
              }}
              transition={{
                duration: 15,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
          </svg>
        </div>
      </section>

      {/* Services Tabs Section */}
      <section id="services-tabs" className="py-20 bg-[#1A2129] relative">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00A3FF] via-transparent to-[#00A3FF] opacity-30"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="inline-block"
            >
              <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-gradient-to-r from-[#00A3FF]/20 to-transparent text-[#00A3FF] font-medium mb-4 border border-[#00A3FF]/20 backdrop-blur-sm">
                <Globe className="w-4 h-4 mr-2" />
                Categorias de Serviços
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Soluções{" "}
              <span className="relative">
                <span className="relative z-10 text-[#00A3FF]">Especializadas</span>
                <span className="absolute -bottom-2 left-0 right-0 h-3 bg-[#00A3FF]/20 rounded-full -z-0"></span>
              </span>{" "}
              para sua Embarcação
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Escolha a categoria de serviço que você precisa e descubra como podemos ajudar sua operação marítima com
              soluções de alta qualidade.
            </motion.p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Tabs Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              {tabs.map((tab, index) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: activeTab === tab.id ? 1 : 1.05,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`
                    relative overflow-hidden flex items-center gap-2 px-8 py-4 rounded-xl font-medium transition-all duration-300
                    ${
                      activeTab === tab.id
                        ? "bg-gradient-to-r from-[#00A3FF] to-[#0088D1] text-white shadow-lg shadow-[#00A3FF]/20"
                        : "bg-[#2D3339] text-gray-300 hover:bg-[#2D3339]/80 border border-[#00A3FF]/10"
                    }
                  `}
                >
                  {activeTab === tab.id && (
                    <motion.span
                      className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#00A3FF] to-[#0088D1] opacity-0 blur-xl"
                      animate={{ opacity: [0, 0.5, 0] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    />
                  )}
                  <span className="relative z-10 flex items-center">
                    {tab.icon}
                    <span className="ml-2">{tab.label}</span>
                  </span>
                </motion.button>
              ))}
            </motion.div>

            {/* Tab Content */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#00A3FF]/20 via-[#00A3FF]/5 to-[#00A3FF]/20 rounded-2xl blur-xl opacity-50"></div>
              <div className="bg-gradient-to-br from-[#2D3339]/90 to-[#1A2129]/90 p-8 rounded-2xl border border-[#00A3FF]/20 shadow-2xl backdrop-blur-sm relative z-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                  >
                    {services[activeTab as keyof typeof services].map((service, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group relative overflow-hidden"
                      >
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#00A3FF] to-[#0088D1] rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-300"></div>
                        <div className="relative bg-gradient-to-br from-[#1A2129]/80 to-[#2D3339] p-6 rounded-xl border border-[#00A3FF]/10 hover:border-[#00A3FF]/30 transition-all duration-300 h-full">
                          <div className="absolute -right-3 -top-3 bg-gradient-to-r from-[#00A3FF] to-[#0088D1] p-3 rounded-xl shadow-lg shadow-[#00A3FF]/20 z-10">
                            {service.icon}
                          </div>

                          <div className="mb-4 relative overflow-hidden rounded-lg h-40">
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1A2129] to-transparent z-10"></div>
                            <Image
                              src={service.image || "/placeholder.svg"}
                              alt={service.title}
                              width={600}
                              height={400}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                          </div>

                          <h3 className="text-xl font-bold mb-3 group-hover:text-[#00A3FF] transition-colors duration-300">
                            {service.title}
                          </h3>

                          <p className="text-gray-300 mb-4">{service.description}</p>

                          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00A3FF] to-transparent transform translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Additional Services Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto mt-16"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#00A3FF]/10 via-[#00A3FF]/5 to-transparent rounded-2xl blur-xl opacity-50"></div>
              <div className="bg-gradient-to-r from-[#2D3339]/90 to-[#1A2129]/90 p-8 rounded-2xl border border-[#00A3FF]/30 backdrop-blur-sm relative z-10">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/2">
                    <h2 className="text-2xl font-bold mb-6 flex items-center">
                      <span className="bg-[#00A3FF] w-1 h-8 mr-3 rounded-full"></span>
                      Por que escolher a <span className="text-[#00A3FF] ml-2">South Waves</span> para seus serviços
                      marítimos?
                    </h2>

                    <p className="text-gray-300 mb-6">
                      Com mais de 20 anos de experiência no setor marítimo, oferecemos soluções completas e
                      personalizadas para atender às necessidades específicas da sua embarcação, garantindo qualidade,
                      agilidade e preços competitivos.
                    </p>

                    <Link
                      href="/contact"
                      className="group relative overflow-hidden inline-flex items-center bg-gradient-to-r from-[#00A3FF] to-[#0088D1] text-white px-8 py-3 rounded-xl font-medium transition-all duration-500 transform hover:scale-105 shadow-lg shadow-[#00A3FF]/20"
                    >
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#00A3FF] to-[#0088D1] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></span>
                      <span className="absolute -inset-x-1 -bottom-1 h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"></span>
                      <span className="relative flex items-center">
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
                        "Mais de 20 anos de experiência no setor",
                      ].map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: i * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3 group"
                        >
                          <div className="bg-[#00A3FF]/20 p-2 rounded-lg group-hover:bg-[#00A3FF]/30 transition-all duration-300">
                            <CheckCircle className="w-5 h-5 text-[#00A3FF]" />
                          </div>
                          <p className="text-gray-300">{item}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ports Coverage Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=500&width=1000')] bg-cover bg-fixed opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A2129] to-[#2D3339]/95"></div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00A3FF] to-transparent opacity-30"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00A3FF] via-transparent to-[#00A3FF] opacity-30"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="inline-block"
            >
              <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-gradient-to-r from-[#00A3FF]/20 to-transparent text-[#00A3FF] font-medium mb-4 border border-[#00A3FF]/20 backdrop-blur-sm">
                <Navigation className="w-4 h-4 mr-2" />
                Cobertura Nacional
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Presentes nos{" "}
              <span className="relative">
                <span className="relative z-10 text-[#00A3FF]">Principais Portos</span>
                <span className="absolute -bottom-2 left-0 right-0 h-3 bg-[#00A3FF]/20 rounded-full -z-0"></span>
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Oferecemos nossos serviços em todos os principais portos do Brasil, garantindo suporte onde quer que sua
              embarcação esteja.
            </motion.p>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#00A3FF]/20 via-[#00A3FF]/5 to-[#00A3FF]/20 rounded-2xl blur-xl opacity-30"></div>
            <div className="bg-gradient-to-br from-[#2D3339]/90 to-[#1A2129]/90 p-8 rounded-2xl border border-[#00A3FF]/20 shadow-2xl backdrop-blur-sm relative z-10 max-w-4xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
                {[
                  "Santos",
                  "Rio de Janeiro",
                  "Paranaguá",
                  "Vitória",
                  "São Francisco do Sul",
                  "Recife",
                  "Itaqui",
                  "Rio Grande",
                  "Outros Portos",
                ].map((port, index) => (
                  <motion.div
                    key={port}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.2 },
                    }}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00A3FF]/20 to-[#00A3FF]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur-sm"></div>
                    <div className="p-4 rounded-xl hover:bg-[#1A2129] transition-all duration-300 border border-transparent group-hover:border-[#00A3FF]/20 relative z-10">
                      <div className="flex items-center justify-center mb-2 opacity-0 group-hover:opacity-100 transition-all duration-300 h-0 group-hover:h-6 overflow-hidden">
                        <Anchor className="w-5 h-5 text-[#00A3FF]" />
                      </div>
                      <p className="font-medium text-[#00A3FF] group-hover:scale-110 transition-all duration-300">
                        {port}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <p className="text-gray-300 mb-6">
                  Não encontrou o porto que procura? Entre em contato conosco para verificar a disponibilidade em outras
                  localidades.
                </p>
                <Link
                  href="/contact"
                  className="group relative overflow-hidden inline-flex items-center bg-transparent hover:bg-[#00A3FF]/10 text-[#00A3FF] border border-[#00A3FF] px-6 py-3 rounded-xl font-medium transition-all duration-300"
                >
                  <span className="absolute -inset-x-1 -bottom-1 h-1 bg-gradient-to-r from-transparent via-[#00A3FF] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                  <span className="relative flex items-center">
                    Fale Conosco
                    <ChevronRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1A2129]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-[#00A3FF]/30 via-[#00A3FF]/10 to-[#00A3FF]/30 rounded-3xl blur-xl opacity-30"></div>
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#2D3339]/90 to-[#1A2129]/90 p-10 rounded-3xl border border-[#00A3FF]/30 backdrop-blur-sm relative z-10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <h2 className="text-3xl font-bold mb-4">
                    Pronto para simplificar suas <span className="text-[#00A3FF]">operações marítimas?</span>
                  </h2>
                  <p className="text-gray-300">
                    Entre em contato hoje mesmo e descubra como podemos ajudar sua embarcação.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="group relative overflow-hidden bg-gradient-to-r from-[#00A3FF] to-[#0088D1] text-white px-8 py-4 rounded-xl font-bold transition-all duration-500 transform hover:scale-105 shadow-lg shadow-[#00A3FF]/20 whitespace-nowrap flex items-center"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#00A3FF] to-[#0088D1] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></span>
                  <span className="absolute -inset-x-1 -bottom-1 h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"></span>
                  <span className="relative flex items-center">
                    Solicitar Cotação
                    <ChevronRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}


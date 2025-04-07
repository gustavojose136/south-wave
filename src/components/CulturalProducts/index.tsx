"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Award, Check, ShoppingBag, ArrowRight, Heart, Shield, Utensils, Leaf } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"
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
const safeTranslateArray = (t: any, key: string): any[] => {
  try {
    const result = t(key, { returnObjects: true })
    return Array.isArray(result) ? result : []
  } catch (error) {
    return []
  }
}

// Características da carne bovina Halal
const halalFeatures = [
  {
    icon: <Shield className="w-6 h-6 text-[#47A5FF]" />,
    title: "culturalProducts.features.halalFeatures.0.title",
    description: "culturalProducts.features.halalFeatures.0.description",
  },
  {
    icon: <Leaf className="w-6 h-6 text-[#47A5FF]" />,
    title: "culturalProducts.features.halalFeatures.1.title",
    description: "culturalProducts.features.halalFeatures.1.description",
  },
  {
    icon: <Utensils className="w-6 h-6 text-[#47A5FF]" />,
    title: "culturalProducts.features.halalFeatures.2.title",
    description: "culturalProducts.features.halalFeatures.2.description",
  },
  {
    icon: <Heart className="w-6 h-6 text-[#47A5FF]" />,
    title: "culturalProducts.features.halalFeatures.3.title",
    description: "culturalProducts.features.halalFeatures.3.description",
  },
]

// Cortes de carne bovina Halal
const beefCuts = [
  {
    name: "culturalProducts.beefCuts.items.0.name",
    image: "/images/halal/file-mignon.jpg",
    description: "culturalProducts.beefCuts.items.0.description",
    price: "culturalProducts.beefCuts.items.0.price",
  },
  {
    name: "culturalProducts.beefCuts.items.1.name",
    image: "/images/halal/picanha-halal.jpg",
    description: "culturalProducts.beefCuts.items.1.description",
    price: "culturalProducts.beefCuts.items.1.price",
  },
  {
    name: "culturalProducts.beefCuts.items.2.name",
    image: "/images/halal/costela-halal.png",
    description: "culturalProducts.beefCuts.items.2.description",
    price: "culturalProducts.beefCuts.items.2.price",
  },
]

const CulturalProducts = () => {
  const { t } = useTranslation()
  const isMobile = useIsMobile()

  // Obter certificações de forma segura
  const certifications = safeTranslateArray(t, "culturalProducts.certification.certifications")

  return (
    <section id="halal-beef" className="relative py-12 sm:py-24 overflow-hidden">
      {/* Gradiente de fundo moderno */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A1A2F] via-[#0D2240] to-[#0F2A47] -z-10"></div>

      {/* Elementos decorativos */}
      <div className="absolute inset-0 overflow-hidden -z-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#47A5FF]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#47A5FF]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center gap-8 mb-16">
          {/* Left: Content */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-left"
            >
              <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-[#47A5FF]/20 text-[#47A5FF] font-medium mb-4 border border-[#47A5FF]/30">
                <Heart className="w-4 h-4 mr-2" />
                {safeTranslate(t, "culturalProducts.hero.badge")}
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                {safeTranslate(t, "culturalProducts.hero.title.part1")}{" "}
                <span className="text-[#47A5FF]">{safeTranslate(t, "culturalProducts.hero.title.highlight")}</span>{" "}
                {safeTranslate(t, "culturalProducts.hero.title.part2")}
              </h2>

              <p className="text-gray-300 text-lg mb-8">{safeTranslate(t, "culturalProducts.hero.description")}</p>

              <div className="flex flex-wrap gap-3 mb-8">
                <span className="bg-[#1E2837] text-[#47A5FF] text-sm px-4 py-2 rounded-full border border-[#47A5FF]/30 flex items-center">
                  <Check className="w-4 h-4 mr-2" />
                  {safeTranslate(t, "culturalProducts.hero.featureBadges.0")}
                </span>
                <span className="bg-[#1E2837] text-[#47A5FF] text-sm px-4 py-2 rounded-full border border-[#47A5FF]/30 flex items-center">
                  <Check className="w-4 h-4 mr-2" />
                  {safeTranslate(t, "culturalProducts.hero.featureBadges.1")}
                </span>
                <span className="bg-[#1E2837] text-[#47A5FF] text-sm px-4 py-2 rounded-full border border-[#47A5FF]/30 flex items-center">
                  <Check className="w-4 h-4 mr-2" />
                  {safeTranslate(t, "culturalProducts.hero.featureBadges.2")}
                </span>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#47A5FF] to-[#2D8BE5] text-white font-bold rounded-xl hover:shadow-lg hover:shadow-[#47A5FF]/20 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <ShoppingBag className="w-5 h-5" />
                  {safeTranslate(t, "culturalProducts.hero.buttonSolicitarAgora")}
                </a>
                <a
                  href="#beef-cuts"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-[#47A5FF] text-[#47A5FF] font-bold rounded-xl hover:bg-[#47A5FF]/10 transition-all duration-300"
                >
                  {safeTranslate(t, "culturalProducts.hero.buttonVerCortes")}
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right: Image */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-[300px] sm:h-[350px] md:h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/halal/carne-bovina-halal-premium.jpg"
                  alt={safeTranslate(t, "culturalProducts.hero.imageAlt")}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A2F] to-transparent opacity-60"></div>

                {/* Badge de certificação */}
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-white/90 rounded-full p-2 sm:p-3 shadow-lg">
                  <Award className="w-8 h-8 sm:w-12 sm:h-12 text-[#47A5FF]" />
                </div>

                {/* Texto sobreposto */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <div className="bg-[#0A1A2F]/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-[#47A5FF]/20">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">
                      {safeTranslate(t, "culturalProducts.hero.overlayTitle")}
                    </h3>
                    <p className="text-gray-300 text-xs sm:text-sm">
                      {safeTranslate(t, "culturalProducts.hero.overlayDescription")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Elementos decorativos */}
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#47A5FF]/10 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#47A5FF]/10 rounded-full blur-3xl -z-10"></div>
            </motion.div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              {safeTranslate(t, "culturalProducts.features.title")}
            </h3>
            <p className="text-gray-300 max-w-3xl mx-auto">
              {safeTranslate(t, "culturalProducts.features.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {halalFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#1E2837] to-[#0F2A47] rounded-xl p-6 border border-[#47A5FF]/20 hover:border-[#47A5FF]/50 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-full bg-[#47A5FF]/10 flex items-center justify-center mb-4 group-hover:bg-[#47A5FF]/20 transition-all duration-300">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{safeTranslate(t, feature.title)}</h4>
                <p className="text-gray-300 text-sm">{safeTranslate(t, feature.description)}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Beef Cuts Section */}
        <div id="beef-cuts" className="mb-20 scroll-mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              {safeTranslate(t, "culturalProducts.beefCuts.title")}
            </h3>
            <p className="text-gray-300 max-w-3xl mx-auto">
              {safeTranslate(t, "culturalProducts.beefCuts.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {beefCuts.map((cut, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#1E2837] to-[#0F2A47] rounded-xl overflow-hidden border border-[#47A5FF]/20 group hover:border-[#47A5FF]/50 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <div className="relative h-48 sm:h-60 overflow-hidden">
                  <Image
                    src={cut.image || "/placeholder.svg?height=240&width=320"}
                    alt={safeTranslate(t, cut.name)}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A2F] to-transparent opacity-60"></div>

                  {/* Badge de certificação */}
                  <div className="absolute top-4 right-4 bg-[#47A5FF] text-white text-xs font-bold px-3 py-1 rounded-full">
                    {safeTranslate(t, "culturalProducts.beefCuts.badge")}
                  </div>
                </div>

                <div className="p-4 sm:p-6">
                  <h4 className="text-lg sm:text-xl font-bold text-white mb-2">{safeTranslate(t, cut.name)}</h4>
                  <p className="text-gray-300 text-xs sm:text-sm mb-4">{safeTranslate(t, cut.description)}</p>

                  <div className="flex justify-between items-center">
                    <span className="text-[#47A5FF] font-bold">{safeTranslate(t, cut.price)}</span>
                    <button className="px-3 py-1 sm:px-4 sm:py-2 bg-[#47A5FF]/10 text-[#47A5FF] rounded-lg hover:bg-[#47A5FF] hover:text-white transition-colors duration-300 text-sm font-medium">
                      {safeTranslate(t, "culturalProducts.beefCuts.button")}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certificação Halal */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-[#1E2837] to-[#0F2A47] rounded-2xl p-8 border border-[#47A5FF]/20 shadow-lg">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3 flex justify-center">
                <div className="relative w-60 h-60">
                  <div className="absolute inset-0 bg-[#47A5FF]/10 rounded-full animate-pulse"></div>
                  <div className="absolute inset-4 bg-[#47A5FF]/20 rounded-full"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Award className="w-32 h-32 text-[#47A5FF]" />
                  </div>
                </div>
              </div>

              <div className="md:w-2/3">
                <h3 className="text-3xl font-bold text-white mb-4">
                  {safeTranslate(t, "culturalProducts.certification.title")}
                </h3>
                <p className="text-gray-300 mb-6">{safeTranslate(t, "culturalProducts.certification.description")}</p>

                <div className="flex flex-wrap gap-4">
                  {certifications.map((cert: any, idx: number) => (
                    <div
                      key={idx}
                      className="bg-[#0A1A2F] text-white px-5 py-3 rounded-xl border border-[#47A5FF]/30 flex items-center"
                    >
                      {/* As imagens dos certificados podem ser estáticas ou também traduzidas se necessário */}
                      <div className="mr-3">
                        <Image
                          src={cert.image || "/placeholder-cert.png"}
                          alt={safeTranslate(t, cert.title)}
                          width={40}
                          height={40}
                        />
                      </div>
                      <div>
                        <p className="font-bold">{safeTranslate(t, cert.title)}</p>
                        <p className="text-xs text-gray-300">{safeTranslate(t, cert.description)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-[#0A1A2F] to-[#0F2A47] rounded-2xl p-10 border border-[#47A5FF]/20 max-w-4xl mx-auto shadow-lg"
          >
            <h3 className="text-3xl font-bold text-white mb-4">{safeTranslate(t, "culturalProducts.cta.title")}</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              {safeTranslate(t, "culturalProducts.cta.description")}
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-[#47A5FF] to-[#2D8BE5] text-white font-bold rounded-xl hover:shadow-lg hover:shadow-[#47A5FF]/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              {safeTranslate(t, "culturalProducts.cta.button")}
              <ArrowRight className="w-6 h-6 ml-1" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CulturalProducts


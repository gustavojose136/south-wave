"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Award, Check, ShoppingBag, ArrowRight, Heart, Shield, Utensils, Leaf } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"

// Características da carne bovina Halal
const halalFeatures = [
  {
    icon: <Shield className="w-6 h-6 text-[#47A5FF]" />,
    title: "100% Certificada",
    description: "Certificação Halal garantida por autoridades islâmicas reconhecidas",
  },
  {
    icon: <Leaf className="w-6 h-6 text-[#47A5FF]" />,
    title: "Qualidade Premium",
    description: "Carne de alta qualidade, de animais criados com os melhores cuidados",
  },
  {
    icon: <Utensils className="w-6 h-6 text-[#47A5FF]" />,
    title: "Cortes Especiais",
    description: "Variedade de cortes preparados de acordo com tradições islâmicas",
  },
  {
    icon: <Heart className="w-6 h-6 text-[#47A5FF]" />,
    title: "Respeito às Tradições",
    description: "Abate realizado com respeito total aos princípios islâmicos",
  },
]

// Cortes de carne bovina Halal
const beefCuts = [
  {
    name: "Filé Mignon Halal",
    image: "/images/halal/file-mignon.jpg",
    description: "Corte nobre e macio, perfeito para ocasiões especiais",
    price: "Sob consulta",
  },
  {
    name: "Picanha Halal",
    image: "/images/halal/picanha-halal.jpg",
    description: "Corte suculento com camada de gordura característica",
    price: "Sob consulta",
  },
  {
    name: "Costela Bovina Halal",
    image: "/images/halal/costela-halal.png",
    description: "Ideal para preparações lentas e saborosas",
    price: "Sob consulta",
  },
]

const CulturalProducts = () => {
  const isMobile = useIsMobile()

  return (
    <section id="halal-beef" className="relative py-24 overflow-hidden">
      {/* Gradiente de fundo moderno */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A1A2F] via-[#0D2240] to-[#0F2A47] -z-10"></div>

      {/* Elementos decorativos */}
      <div className="absolute inset-0 overflow-hidden -z-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#47A5FF]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#47A5FF]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
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
                Carne Bovina Halal Premium
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Carne <span className="text-[#47A5FF]">Halal</span> da Mais Alta{" "}
                <span className="text-[#47A5FF]">Qualidade</span>
              </h2>

              <p className="text-gray-300 text-lg mb-8">
                Oferecemos carne bovina Halal premium, preparada com o máximo respeito às tradições islâmicas. Cada
                corte é cuidadosamente selecionado e certificado, garantindo qualidade excepcional e conformidade com os
                princípios da sua fé.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                <span className="bg-[#1E2837] text-[#47A5FF] text-sm px-4 py-2 rounded-full border border-[#47A5FF]/30 flex items-center">
                  <Check className="w-4 h-4 mr-2" />
                  100% Certificado
                </span>
                <span className="bg-[#1E2837] text-[#47A5FF] text-sm px-4 py-2 rounded-full border border-[#47A5FF]/30 flex items-center">
                  <Check className="w-4 h-4 mr-2" />
                  Abate Tradicional
                </span>
                <span className="bg-[#1E2837] text-[#47A5FF] text-sm px-4 py-2 rounded-full border border-[#47A5FF]/30 flex items-center">
                  <Check className="w-4 h-4 mr-2" />
                  Qualidade Premium
                </span>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#47A5FF] to-[#2D8BE5] text-white font-bold rounded-xl hover:shadow-lg hover:shadow-[#47A5FF]/20 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <ShoppingBag className="w-5 h-5" />
                  Solicitar Agora
                </a>
                <a
                  href="#beef-cuts"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-[#47A5FF] text-[#47A5FF] font-bold rounded-xl hover:bg-[#47A5FF]/10 transition-all duration-300"
                >
                  Ver Cortes Disponíveis
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right: Image */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/halal/carne-bovina-halal-premium.jpg"
                  alt="Carne Bovina Halal Premium"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A2F] to-transparent opacity-60"></div>

                {/* Badge de certificação */}
                <div className="absolute top-6 right-6 bg-white/90 rounded-full p-3 shadow-lg">
                  <Award className="w-12 h-12 text-[#47A5FF]" />
                </div>

                {/* Texto sobreposto */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="bg-[#0A1A2F]/80 backdrop-blur-sm p-6 rounded-xl border border-[#47A5FF]/20">
                    <h3 className="text-xl font-bold text-white mb-2">Certificação Halal Garantida</h3>
                    <p className="text-gray-300 text-sm">
                      Nossa carne bovina segue rigorosamente os princípios islâmicos em todo o processo, do abate à
                      embalagem, garantindo total conformidade com as exigências Halal.
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
            <h3 className="text-3xl font-bold text-white mb-4">Por Que Escolher Nossa Carne Bovina Halal</h3>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Comprometidos com a excelência e o respeito às tradições, oferecemos carne bovina Halal que atende aos
              mais altos padrões de qualidade e conformidade religiosa.
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
                <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Beef Cuts Section */}
        <div id="beef-cuts" className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Cortes Premium Disponíveis</h3>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Oferecemos uma seleção de cortes bovinos Halal da mais alta qualidade, preparados com cuidado e respeito
              às tradições islâmicas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {beefCuts.map((cut, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#1E2837] to-[#0F2A47] rounded-xl overflow-hidden border border-[#47A5FF]/20 group hover:border-[#47A5FF]/50 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={cut.image || "/placeholder.svg"}
                    alt={cut.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A2F] to-transparent opacity-60"></div>

                  {/* Badge de certificação */}
                  <div className="absolute top-4 right-4 bg-[#47A5FF] text-white text-xs font-bold px-3 py-1 rounded-full">
                    Certificado Halal
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="text-xl font-bold text-white mb-2">{cut.name}</h4>
                  <p className="text-gray-300 text-sm mb-4">{cut.description}</p>

                  <div className="flex justify-between items-center">
                    <span className="text-[#47A5FF] font-bold">{cut.price}</span>
                    <button className="px-4 py-2 bg-[#47A5FF]/10 text-[#47A5FF] rounded-lg hover:bg-[#47A5FF] hover:text-white transition-colors duration-300 text-sm font-medium">
                      Solicitar
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
                <h3 className="text-3xl font-bold text-white mb-4">Certificação Halal Garantida</h3>
                <p className="text-gray-300 mb-6">
                  Nossa carne bovina Halal é certificada por autoridades islâmicas reconhecidas, garantindo que todo o
                  processo, desde a criação dos animais até o abate e processamento, segue rigorosamente os princípios
                  islâmicos. Você pode confiar na autenticidade e na qualidade de cada corte que oferecemos.
                </p>

                <div className="flex flex-wrap gap-4">
                  <div className="bg-[#0A1A2F] text-white px-5 py-3 rounded-xl border border-[#47A5FF]/30 flex items-center">
                    <Image
                      src="/images/certificados/FAMBRAS.png"
                      alt="FAMBRAS"
                      width={40}
                      height={40}
                      className="mr-3"
                    />
                    <div>
                      <p className="font-bold">Certificado FAMBRAS</p>
                      <p className="text-xs text-gray-300">Federação das Associações Muçulmanas do Brasil</p>
                    </div>
                  </div>

                  <div className="bg-[#0A1A2F] text-white px-5 py-3 rounded-xl border border-[#47A5FF]/30 flex items-center">
                    <Image
                      src="/images/certificados/CDIAL-HALAL.png"
                      alt="CDIAL HALAL"
                      width={40}
                      height={40}
                      className="mr-3"
                    />
                    <div>
                      <p className="font-bold">Certificado CDIAL HALAL</p>
                      <p className="text-xs text-gray-300">Centro de Divulgação do Islam para América Latina</p>
                    </div>
                  </div>
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
            <h3 className="text-3xl font-bold text-white mb-4">Pronto para Experimentar Nossa Carne Bovina Halal?</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Entre em contato conosco hoje mesmo para solicitar nossos cortes premium de carne bovina Halal. Garantimos
              qualidade, autenticidade e respeito total às suas tradições.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-[#47A5FF] to-[#2D8BE5] text-white font-bold rounded-xl hover:shadow-lg hover:shadow-[#47A5FF]/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              <ShoppingBag className="w-6 h-6" />
              Solicitar Carne Bovina Halal
              <ArrowRight className="w-6 h-6 ml-1" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CulturalProducts


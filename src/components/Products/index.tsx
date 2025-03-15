"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Box,
  Clipboard,
  Shield,
  Shirt,
  Flame,
  Compass,
  Sparkles,
  Swords,
  Paintbrush,
  Tv,
  Rocket,
  ArrowRight,
  Anchor,
} from "lucide-react"

// Updated product data based on client requirements
const productData = [
  {
    title: "Fitas",
    icon: <Box className="w-10 h-10 mb-4" />,
    description: "Fitas adesivas e materiais de vedação para uso marítimo.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Papelaria",
    icon: <Clipboard className="w-10 h-10 mb-4" />,
    description: "Material de escritório e documentação para sua embarcação.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Equipamentos de Segurança",
    icon: <Shield className="w-10 h-10 mb-4" />,
    description: "Equipamentos de segurança certificados e de alta qualidade.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Roupas de Proteção",
    icon: <Shirt className="w-10 h-10 mb-4" />,
    description: "Roupas de proteção para todas as condições de trabalho.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Amarração",
    icon: <Anchor className="w-10 h-10 mb-4" />,
    description: "Equipamentos de amarração e fixação para embarcações.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Combate a Incêndios",
    icon: <Flame className="w-10 h-10 mb-4" />,
    description: "Equipamentos de combate a incêndio e prevenção.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Lojas de Convés",
    icon: <Compass className="w-10 h-10 mb-4" />,
    description: "Suprimentos especializados para operações de convés.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Limpeza",
    icon: <Sparkles className="w-10 h-10 mb-4" />,
    description: "Produtos de limpeza industrial e marítima.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Anti-Pirataria",
    icon: <Swords className="w-10 h-10 mb-4" />,
    description: "Soluções de segurança contra pirataria marítima.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Tintas",
    icon: <Paintbrush className="w-10 h-10 mb-4" />,
    description: "Tintas marítimas de alta durabilidade e resistência.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Eletrodomésticos",
    icon: <Tv className="w-10 h-10 mb-4" />,
    description: "Eletrodomésticos e conforto para a tripulação.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Pirotécnicos Marítimos",
    icon: <Rocket className="w-10 h-10 mb-4" />,
    description: "Sinalizadores e pirotecnia marítima certificada.",
    image: "/placeholder.svg?height=200&width=300",
  },
]

const Products = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="products" className="relative py-24 bg-[#0A1A2F] text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nossos <span className="text-[#00A3FF]">Produtos</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Oferecemos uma ampla variedade de produtos e embalagens econômicas, incluindo produtos de limpeza,
            equipamentos para convés, ferramentas, tintas, bandeiras e cartas náuticas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {productData.map((product, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <div className="bg-[#1E2837] border border-[#00A3FF]/20 rounded-lg p-6 transition-all duration-300 hover:border-[#00A3FF]/50">
                <div className="bg-gradient-to-r from-[#00A3FF] to-[#0088D1] p-4 rounded-lg mb-4 inline-block">
                  {product.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#00A3FF]">{product.title}</h3>
                <p className="text-gray-300">{product.description}</p>

                <button className="mt-4 px-6 py-2 bg-[#00A3FF]/10 text-[#00A3FF] rounded-lg border border-[#00A3FF]/20 hover:bg-[#00A3FF]/20 transition-all duration-300">
                  Ver Detalhes
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#00A3FF] text-white font-bold rounded-lg hover:bg-[#0088D1] transition-all duration-300"
          >
            Solicitar Cotação
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Products


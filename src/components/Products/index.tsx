"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
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
} from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"

// Definição dos produtos com ícones e descrições
const productData = [
  {
    title: "Tops",
    icon: <Box className="w-10 h-10 mb-4" />,
    description: "Suprimentos essenciais para o convés e operações diárias.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Stationery",
    icon: <Clipboard className="w-10 h-10 mb-4" />,
    description: "Material de escritório e documentação para sua embarcação.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Safety Equipments",
    icon: <Shield className="w-10 h-10 mb-4" />,
    description: "Equipamentos de segurança certificados e de alta qualidade.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Protection Clothes",
    icon: <Shirt className="w-10 h-10 mb-4" />,
    description: "Roupas de proteção para todas as condições de trabalho.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Clothing",
    icon: <Shirt className="w-10 h-10 mb-4" />,
    description: "Uniformes e roupas para tripulação com personalização.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Firefighting",
    icon: <Flame className="w-10 h-10 mb-4" />,
    description: "Equipamentos de combate a incêndio e prevenção.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Deck Stores",
    icon: <Compass className="w-10 h-10 mb-4" />,
    description: "Suprimentos especializados para operações de convés.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Cleaning",
    icon: <Sparkles className="w-10 h-10 mb-4" />,
    description: "Produtos de limpeza industrial e marítima.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Anti-Piracy",
    icon: <Swords className="w-10 h-10 mb-4" />,
    description: "Soluções de segurança contra pirataria marítima.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Paints",
    icon: <Paintbrush className="w-10 h-10 mb-4" />,
    description: "Tintas marítimas de alta durabilidade e resistência.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Home Appliance",
    icon: <Tv className="w-10 h-10 mb-4" />,
    description: "Eletrodomésticos e conforto para a tripulação.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Marine Pyrotechnics",
    icon: <Rocket className="w-10 h-10 mb-4" />,
    description: "Sinalizadores e pirotecnia marítima certificada.",
    image: "/placeholder.svg?height=200&width=300",
  },
]

const Products = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const isMobile = useIsMobile()

  // Variantes de animação para o container - simplificadas para mobile
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0 : 0.1,
      },
    },
  }

  return (
    <section id="products" className="relative py-24 bg-[#0A1A2F] text-white">
      {/* Elementos decorativos reduzidos para mobile */}
      {!isMobile && (
        <div className="absolute right-0 top-0 text-[#47A5FF] opacity-5">
          <Box className="w-96 h-96" />
        </div>
      )}

      {/* TÍTULO E SUBTÍTULO */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#47A5FF] to-[#69B6FF]">
              Nossos Produtos & Serviços
            </span>
          </h2>
          <p className="text-gray-100 text-lg max-w-3xl mx-auto">
            <span className="italic font-medium">You name it, we take it.</span> Confira abaixo alguns dos principais
            itens que fornecemos para embarcações e operações portuárias.
          </p>
        </div>
      </div>

      {/* LISTA DE PRODUTOS */}
      <motion.div
        className="container mx-auto px-4 mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {productData.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            index={index}
            isHovered={hoveredIndex === index}
            onHover={() => setHoveredIndex(index)}
            onLeave={() => setHoveredIndex(null)}
            isMobile={isMobile}
          />
        ))}
      </motion.div>

      {/* CTA */}
      <div className="container mx-auto px-4 mt-20 text-center">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-[#47A5FF] text-white font-bold rounded-lg hover:bg-[#2D8BE5] transition-all duration-300"
        >
          Solicite um Orçamento
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  )
}

export default Products

// Componente de card de produto com animações simplificadas
const ProductCard = ({
  product,
  index,
  isHovered,
  onHover,
  onLeave,
  isMobile,
}: {
  product: (typeof productData)[0]
  index: number
  isHovered: boolean
  onHover: () => void
  onLeave: () => void
  isMobile: boolean
}) => {
  // Variantes de animação para cada card - simplificadas para mobile
  const cardVariants = {
    hidden: { opacity: 0, y: isMobile ? 0 : 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: isMobile ? 0 : index * 0.1,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.div
      variants={cardVariants}
      className="relative group"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      whileHover={isMobile ? {} : { scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <div
        className={`
        relative 
        bg-[#1E2837]
        border border-[#47A5FF]/20
        rounded-lg
        overflow-hidden
        h-full
        flex flex-col
        z-10
      `}
      >
        {/* Image */}
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A2F] to-transparent opacity-60"></div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col items-center text-center flex-grow">
          {/* Icon */}
          <div
            className={`
            relative
            w-16 h-16
            rounded-full
            flex items-center justify-center
            bg-[#47A5FF]
            -mt-14
            mb-4
            text-white
            border-4 border-[#1E2837]
            transition-all duration-300
            ${isHovered && !isMobile ? "scale-110" : "scale-100"}
          `}
          >
            {product.icon}
          </div>

          <h3 className="text-xl font-bold mb-3 text-[#47A5FF]">{product.title}</h3>

          <p className="text-sm text-gray-300">{product.description}</p>
        </div>

        {/* Button */}
        <div className="p-4 pt-0 mt-auto">
          <button className="w-full py-2 border border-[#47A5FF] text-[#47A5FF] rounded-md hover:bg-[#47A5FF] hover:text-white transition-colors duration-300 text-sm font-medium">
            Ver Detalhes
          </button>
        </div>
      </div>
    </motion.div>
  )
}


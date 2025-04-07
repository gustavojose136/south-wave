"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import {
  Box,
  Clipboard,
  Shield,
  Sparkles,
  Utensils,
  Bed,
  Rocket,
  ArrowRight,
  Search,
  User,
  Laptop,
  CassetteTapeIcon as Tape,
  ShoppingBag,
  Wine,
  FlaskRoundIcon as Flask,
  Filter,
  ChevronDown,
  ChevronUp,
} from "lucide-react"
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

// Dados dos produtos (as strings serão extraídas para o JSON)
const productData = [
  {
    title: "products.productData.product1.title",
    icon: <Tape className="h-10 w-10 text-white" />,
    description: "products.productData.product1.description",
    image: "/images/produtos/hatch-cover-tapes.jpg",
    featured: true,
    category: "deck",
  },
  {
    title: "products.productData.product2.title",
    icon: <User className="h-10 w-10 text-white" />,
    description: "products.productData.product2.description",
    image: "/images/produtos/crew-personal.jpeg",
    featured: true,
    category: "personal",
  },
  {
    title: "products.productData.product3.title",
    icon: <Bed className="h-10 w-10 text-white" />,
    description: "products.productData.product3.description",
    image: "/images/produtos/cabin-stores.jpg",
    category: "accommodation",
  },
  {
    title: "products.productData.product4.title",
    icon: <Utensils className="h-10 w-10 text-white" />,
    description: "products.productData.product4.description",
    image: "/images/produtos/galley-stores.jpg",
    category: "accommodation",
  },
  {
    title: "products.productData.product5.title",
    icon: <Sparkles className="h-10 w-10 text-white" />,
    description: "products.productData.product5.description",
    image: "/images/produtos/cleaning-material.jpg",
    category: "maintenance",
  },
  {
    title: "products.productData.product6.title",
    icon: <Flask className="h-10 w-10 text-white" />,
    description: "products.productData.product6.description",
    image: "/images/produtos/chemical-gases.jpg",
    category: "technical",
  },
  {
    title: "products.productData.product7.title",
    icon: <Rocket className="h-10 w-10 text-white" />,
    description: "products.productData.product7.description",
    image: "/images/produtos/pyrotechnics.jpg",
    category: "safety",
  },
  {
    title: "products.productData.product8.title",
    icon: <Clipboard className="h-10 w-10 text-white" />,
    description: "products.productData.product8.description",
    image: "/images/produtos/stationery.jpg",
    category: "office",
  },
  {
    title: "products.productData.product9.title",
    icon: <Laptop className="h-10 w-10 text-white" />,
    description: "products.productData.product9.description",
    image: "/images/produtos/computing.jpg",
    category: "office",
  },
  {
    title: "products.productData.product10.title",
    icon: <Shield className="h-10 w-10 text-white" />,
    description: "products.productData.product10.description",
    image: "/images/produtos/safety-equipment.jpg",
    category: "safety",
  },
  {
    title: "products.productData.product11.title",
    icon: <ShoppingBag className="h-10 w-10 text-white" />,
    description: "products.productData.product11.description",
    image: "/images/produtos/provisions.jpg",
    category: "food",
  },
  {
    title: "products.productData.product12.title",
    icon: <Wine className="h-10 w-10 text-white" />,
    description: "products.productData.product12.description",
    image: "/images/produtos/bonded.jpg",
    category: "food",
  },
]

// Categorias com tradução
const categories = [
  { id: "all", name: "products.categories.all" },
  { id: "deck", name: "products.categories.deck" },
  { id: "personal", name: "products.categories.personal" },
  { id: "accommodation", name: "products.categories.accommodation" },
  { id: "maintenance", name: "products.categories.maintenance" },
  { id: "technical", name: "products.categories.technical" },
  { id: "safety", name: "products.categories.safety" },
  { id: "office", name: "products.categories.office" },
  { id: "food", name: "products.categories.food" },
]

const Products = () => {
  const { t } = useTranslation()
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredProducts, setFilteredProducts] = useState(productData)
  const [showCategories, setShowCategories] = useState(false)
  const isMobile = useIsMobile()

  // Filtrar produtos com base na categoria e pesquisa
  useEffect(() => {
    let filtered = productData

    if (activeCategory !== "all") {
      filtered = filtered.filter((product) => product.category === activeCategory)
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (product) =>
          safeTranslate(t, product.title).toLowerCase().includes(query) ||
          safeTranslate(t, product.description).toLowerCase().includes(query),
      )
    }

    setFilteredProducts(filtered)
  }, [activeCategory, searchQuery, t])

  // Variantes de animação para o container
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
    <section
      id="products"
      className="relative overflow-hidden bg-gradient-to-b from-[#0A1A2F] to-[#0F2A47] py-24 text-white"
    >
      {/* Elementos decorativos */}
      <div className="-z-5 absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#47A5FF]/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[#47A5FF]/5 blur-3xl"></div>
      </div>

      {/* TÍTULO E SUBTÍTULO */}
      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="mb-4 inline-flex items-center justify-center rounded-full border border-[#47A5FF]/30 bg-[#47A5FF]/20 px-4 py-2 font-medium text-[#47A5FF]">
            <Box className="mr-2 h-4 w-4" />
            {safeTranslate(t, "products.header.badge")}
          </div>

          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            {safeTranslate(t, "products.header.title.main")}
            <span className="text-[#47A5FF]"> {safeTranslate(t, "products.header.title.highlight")}</span>
            {safeTranslate(t, "products.header.title.suffix")}
          </h2>

          <p className="mx-auto mb-12 max-w-3xl text-lg text-gray-300">
            <span className="font-medium italic">{safeTranslate(t, "products.header.tagline")}</span>{" "}
            {safeTranslate(t, "products.header.description")}
          </p>
        </motion.div>

        {/* Barra de pesquisa e filtros */}
        <div className="mx-auto mb-12 max-w-4xl">
          <div className="flex flex-col gap-4 md:flex-row">
            {/* Barra de pesquisa */}
            <div className="relative flex-grow">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full rounded-lg border border-[#47A5FF]/30 bg-[#1E2837] py-3 pl-10 pr-4 text-white placeholder-gray-400 transition-all focus:outline-none focus:ring-2 focus:ring-[#47A5FF]/50"
                placeholder={safeTranslate(t, "products.search.placeholder")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Filtro de categorias (mobile) */}
            <div className="relative md:hidden">
              <button
                onClick={() => setShowCategories(!showCategories)}
                className="flex w-full items-center justify-between rounded-lg border border-[#47A5FF]/30 bg-[#1E2837] px-4 py-3 text-white"
              >
                <div className="flex items-center">
                  <Filter className="mr-2 h-5 w-5 text-[#47A5FF]" />
                  <span>
                    {safeTranslate(
                      t,
                      categories.find((c) => c.id === activeCategory)?.name || "products.categories.all",
                    )}
                  </span>
                </div>
                {showCategories ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
              </button>

              {showCategories && (
                <div className="absolute z-20 mt-2 w-full rounded-lg border border-[#47A5FF]/30 bg-[#1E2837] py-2 shadow-xl">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      className={`w-full px-4 py-2 text-left hover:bg-[#47A5FF]/10 ${
                        activeCategory === category.id ? "font-medium text-[#47A5FF]" : "text-white"
                      }`}
                      onClick={() => {
                        setActiveCategory(category.id)
                        setShowCategories(false)
                      }}
                    >
                      {safeTranslate(t, category.name)}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Filtro de categorias (desktop) */}
          <div className="mt-6 hidden flex-wrap justify-center gap-3 md:flex">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`
                  rounded-full px-4 py-2 text-sm font-medium transition-all duration-300
                  ${
                    activeCategory === category.id
                      ? "bg-[#47A5FF] text-white"
                      : "border border-[#47A5FF]/30 bg-[#1E2837] text-gray-300 hover:bg-[#1E2837]/80"
                  }
                `}
                onClick={() => setActiveCategory(category.id)}
              >
                {safeTranslate(t, category.name)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Resultados da busca */}
      <div className="container mx-auto mb-8 px-4 text-gray-300">
        <span>
          {filteredProducts.length}{" "}
          {filteredProducts.length === 1
            ? safeTranslate(t, "products.results.singular")
            : safeTranslate(t, "products.results.plural")}
        </span>
      </div>

      {/* LISTA DE PRODUTOS */}
      {filteredProducts.length > 0 ? (
        <motion.div
          className="container mx-auto grid grid-cols-1 gap-8 px-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              index={index}
              isHovered={hoveredIndex === index}
              onHover={() => setHoveredIndex(index)}
              onLeave={() => setHoveredIndex(null)}
              isMobile={isMobile}
              t={t}
            />
          ))}
        </motion.div>
      ) : (
        <div className="container mx-auto px-4 py-16 text-center">
          <Box className="mx-auto mb-4 h-16 w-16 text-[#47A5FF]/50" />
          <h3 className="mb-2 text-xl font-bold">{safeTranslate(t, "products.noResults.title")}</h3>
          <p className="mb-6 text-gray-400">{safeTranslate(t, "products.noResults.description")}</p>
          <button
            onClick={() => {
              setActiveCategory("all")
              setSearchQuery("")
            }}
            className="rounded-lg bg-[#47A5FF] px-6 py-3 font-medium text-white transition-colors hover:bg-[#2D8BE5]"
          >
            {safeTranslate(t, "products.noResults.button")}
          </button>
        </div>
      )}

      {/* CTA */}
      <div className="container mx-auto mt-20 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl rounded-2xl border border-[#47A5FF]/20 bg-gradient-to-r from-[#0A1A2F] to-[#0F2A47] p-10 shadow-lg"
        >
          <h3 className="mb-4 text-3xl font-bold text-white">{safeTranslate(t, "products.cta.title")}</h3>
          <p className="mx-auto mb-8 max-w-2xl text-gray-300">{safeTranslate(t, "products.cta.description")}</p>

          <a
            href="#contact"
            className="inline-flex transform items-center gap-2 rounded-xl bg-gradient-to-r from-[#47A5FF] to-[#2D8BE5] px-8 py-4 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#47A5FF]/20"
          >
            {safeTranslate(t, "products.cta.button")}
            <ArrowRight className="h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Products

// Componente de card de produto
const ProductCard = ({
  product,
  index,
  isHovered,
  onHover,
  onLeave,
  isMobile,
  t,
}: {
  product: (typeof productData)[0]
  index: number
  isHovered: boolean
  onHover: () => void
  onLeave: () => void
  isMobile: boolean
  t: any
}) => {
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
      className="group relative"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      whileHover={isMobile ? {} : { y: -10 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <div
        className={`
          relative 
          z-10 flex h-full flex-col overflow-hidden rounded-xl border border-[#47A5FF]/20 bg-gradient-to-br from-[#1E2837] to-[#0F2A47] shadow-lg transition-all duration-300 hover:border-[#47A5FF]/50 hover:shadow-xl
        `}
      >
        {/* Imagem */}
        <div className="relative h-52 w-full overflow-hidden">
          <Image
            src={product.image || "/placeholder.svg?height=300&width=400"}
            alt={safeTranslate(t, product.title)}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A2F] to-transparent opacity-60"></div>

          {/* Badge para produtos em destaque */}
          {product.featured && (
            <div className="absolute right-4 top-4 rounded-full bg-[#47A5FF] px-3 py-1 text-xs font-bold text-white">
              {safeTranslate(t, "products.productCard.featured")}
            </div>
          )}
        </div>

        {/* Conteúdo */}
        <div className="flex flex-grow flex-col items-center p-6 text-center">
          {/* Ícone */}
          <div
            className={`
              relative -mt-14 mb-4 flex h-16 w-16 items-center justify-center rounded-full border-4 border-[#1E2837] bg-gradient-to-br from-[#47A5FF] to-[#2D8BE5] shadow-lg transition-all duration-300 ${
                isHovered && !isMobile ? "scale-110" : "scale-100"
              }
            `}
          >
            {product.icon}
          </div>

          <h3 className="mb-3 text-xl font-bold text-white">{safeTranslate(t, product.title)}</h3>

          <p className="mb-6 text-sm text-gray-300">{safeTranslate(t, product.description)}</p>
        </div>

        {/* Botão */}
        <div className="mt-auto p-6 pt-0">
          <button className="w-full rounded-lg border border-[#47A5FF]/50 bg-[#47A5FF]/10 py-3 text-sm font-medium text-[#47A5FF] transition-colors duration-300 hover:bg-[#47A5FF] hover:text-white">
            {safeTranslate(t, "products.productCard.button")}
          </button>
        </div>
      </div>
    </motion.div>
  )
}


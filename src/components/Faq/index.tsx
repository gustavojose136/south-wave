"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useScroll, useTransform, useInView } from "framer-motion"
import { ChevronDown, Search, HelpCircle, Anchor, Ship, Compass, MessageSquare, PlusCircle } from "lucide-react"
import { useTranslation } from "react-i18next"

// Dados das perguntas frequentes (as strings foram substituídas por chaves de tradução)
const faqData = [
  {
    id: 1,
    question: "faq.data.1.question",
    answer: "faq.data.1.answer",
    icon: <HelpCircle className="w-5 h-5" />,
    category: "empresa",
  },
  {
    id: 2,
    question: "faq.data.2.question",
    answer: "faq.data.2.answer",
    icon: <Compass className="w-5 h-5" />,
    category: "logística",
  },
  {
    id: 3,
    question: "faq.data.3.question",
    answer: "faq.data.3.answer",
    icon: <MessageSquare className="w-5 h-5" />,
    category: "financeiro",
  },
  {
    id: 4,
    question: "faq.data.4.question",
    answer: "faq.data.4.answer",
    icon: <MessageSquare className="w-5 h-5" />,
    category: "documentação",
  },
  {
    id: 5,
    question: "faq.data.5.question",
    answer: "faq.data.5.answer",
    icon: <HelpCircle className="w-5 h-5" />,
    category: "produtos",
  },
  {
    id: 6,
    question: "faq.data.6.question",
    answer: "faq.data.6.answer",
    icon: <Ship className="w-5 h-5" />,
    category: "serviços",
  },
]

// Categorias para filtrar as perguntas (as chaves serão traduzidas)
const categories = [
  { id: "all", name: "faq.categories.all" },
  { id: "empresa", name: "faq.categories.empresa" },
  { id: "logística", name: "faq.categories.logistica" },
  { id: "financeiro", name: "faq.categories.financeiro" },
  { id: "documentação", name: "faq.categories.documentacao" },
  { id: "produtos", name: "faq.categories.produtos" },
  { id: "serviços", name: "faq.categories.servicos" },
]

const Faq = () => {
  const { t } = useTranslation()
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [expandedId, setExpandedId] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.1 })

  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const parallaxBg = useTransform(scrollYProgress, [0, 1], [0, -100])

  // Filtrar perguntas com base na categoria e pesquisa
  const filteredFaqs = faqData
    .filter((faq) => activeCategory === "all" || faq.category === activeCategory)
    .filter(
      (faq) =>
        searchQuery === "" ||
        t(faq.question).toLowerCase().includes(searchQuery.toLowerCase()) ||
        t(faq.answer).toLowerCase().includes(searchQuery.toLowerCase())
    )

  // Alternar expansão da pergunta
  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <section
      id="faq"
      ref={containerRef}
      className="relative py-24 bg-gradient-to-b from-[#0b0e2a] to-[#101645] text-white overflow-hidden"
    >
      {/* ELEMENTOS DECORATIVOS */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Âncora decorativa */}
        <motion.div
          className="absolute -right-40 top-20 text-[#8ab6d6] opacity-5"
          style={{ y: parallaxBg }}
          animate={{
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        >
          <Anchor className="w-80 h-80" />
        </motion.div>

        {/* Navio decorativo */}
        <motion.div
          className="absolute -left-20 bottom-40 text-[#8ab6d6] opacity-5"
          style={{ y: useTransform(scrollYProgress, [0, 1], [-20, 20]) }}
          animate={{
            x: [0, 30, 0],
          }}
          transition={{
            duration: 30,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        >
          <Ship className="w-60 h-60" />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* TÍTULO E SUBTÍTULO COM ANIMAÇÕES */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8ab6d6] to-[#a8d8ff]">
              {t("faq.header.title")}
            </span>
          </h2>
          <motion.p
            className="text-gray-100 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {t("faq.header.subtitle")}
          </motion.p>
        </motion.div>

        {/* BARRA DE PESQUISA */}
        <motion.div
          className="max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-[#8ab6d6]" />
            </div>
            <input
              type="text"
              className="
                block 
                w-full 
                pl-10 
                pr-4 
                py-3 
                bg-[#131a5e]/50 
                backdrop-blur-sm 
                border 
                border-[#8ab6d6]/30 
                rounded-lg 
                text-white 
                placeholder-[#8ab6d6]/70
                focus:outline-none 
                focus:ring-2 
                focus:ring-[#8ab6d6]/50
                transition-all
                duration-300
              "
              placeholder={t("faq.search.placeholder")}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </motion.div>

        {/* FILTRO DE CATEGORIAS */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              className={`
                px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${
                  activeCategory === category.id
                    ? "bg-[#8ab6d6] text-[#0b0e2a]"
                    : "bg-[#131a5e]/50 text-white hover:bg-[#131a5e] border border-[#8ab6d6]/30"
                }
              `}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
            >
              {t(category.name)}
            </motion.button>
          ))}
        </motion.div>

        {/* LISTA DE PERGUNTAS FREQUENTES */}
        <div className="max-w-3xl mx-auto space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <FaqItem
                key={faq.id}
                faq={faq}
                isExpanded={expandedId === faq.id}
                onToggle={() => toggleExpand(faq.id)}
                index={index}
                isInView={isInView}
              />
            ))
          ) : (
            <motion.div
              className="text-center py-8 bg-[#131a5e]/30 backdrop-blur-sm border border-[#8ab6d6]/20 rounded-lg"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <HelpCircle className="w-12 h-12 text-[#8ab6d6] mx-auto mb-4" />
              <p className="text-gray-200">{t("faq.noResults.text")}</p>
            </motion.div>
          )}
        </div>

        {/* SEÇÃO DE PERGUNTAS ADICIONAIS */}
        <motion.div
          className="max-w-3xl mx-auto mt-12 p-6 bg-[#131a5e]/30 backdrop-blur-sm border border-[#8ab6d6]/20 rounded-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="flex items-center mb-4">
            <PlusCircle className="w-6 h-6 text-[#8ab6d6] mr-2" />
            <h3 className="text-xl font-bold text-[#8ab6d6]">{t("faq.additional.title")}</h3>
          </div>
          <p className="text-gray-100 mb-4">
            {t("faq.additional.text")}
          </p>
          <motion.a
            href="#contact"
            className="
              inline-flex
              items-center
              bg-[#8ab6d6]/20
              hover:bg-[#8ab6d6]
              text-[#8ab6d6]
              hover:text-[#0b0e2a]
              px-6
              py-3
              rounded-lg
              font-medium
              transition-colors
              duration-300
              border
              border-[#8ab6d6]/30
            "
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageSquare className="w-5 h-5 mr-2" />
            <span>{t("faq.additional.button")}</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

// Componente de item de FAQ com animações
const FaqItem = ({
  faq,
  isExpanded,
  onToggle,
  index,
  isInView,
}: {
  faq: (typeof faqData)[0]
  isExpanded: boolean
  onToggle: () => void
  index: number
  isInView: boolean
}) => {
  const { t } = useTranslation()
  return (
    <motion.div
      className="overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
    >
      <motion.div
        className={`
          bg-gradient-to-r from-[#131a5e]/80 to-[#0b0e2a]/90
          backdrop-blur-sm
          border border-[#8ab6d6]/20
          rounded-lg
          overflow-hidden
          transition-all
          duration-300
          ${isExpanded ? "shadow-lg shadow-[#8ab6d6]/10" : ""}
        `}
        whileHover={{ scale: isExpanded ? 1 : 1.01 }}
      >
        {/* Cabeçalho da pergunta */}
        <button
          className="
            w-full 
            p-6 
            flex 
            items-center 
            justify-between 
            text-left
            focus:outline-none
          "
          onClick={onToggle}
        >
          <div className="flex items-center">
            <div className="mr-3 text-[#8ab6d6]">{faq.icon}</div>
            <h3 className="text-xl font-bold text-[#8ab6d6]">{t(faq.question)}</h3>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-[#8ab6d6] flex-shrink-0 ml-4"
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </button>

        {/* Conteúdo da resposta */}
        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-6 pb-6 pt-0 border-t border-[#8ab6d6]/10">
                <p className="text-gray-100 mt-2">{t(faq.answer)}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}

export default Faq

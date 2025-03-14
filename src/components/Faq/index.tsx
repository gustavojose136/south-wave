"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useScroll, useTransform, useInView } from "framer-motion"
import { ChevronDown, Search, HelpCircle, Anchor, Ship, Compass, MessageSquare, PlusCircle } from "lucide-react"

// Dados das perguntas frequentes
const faqData = [
  {
    id: 1,
    question: "Há quanto tempo vocês atuam no mercado?",
    answer:
      "Estamos no ramo desde 1999, com mais de 20 anos de experiência em suprimentos marítimos e serviços portuários. Nossa trajetória nos permitiu construir uma rede sólida de fornecedores e parceiros, garantindo a melhor qualidade e preços competitivos para nossos clientes.",
    icon: <HelpCircle className="w-5 h-5" />,
    category: "empresa",
  },
  {
    id: 2,
    question: "Quais benefícios de localização vocês oferecem?",
    answer:
      "Estamos estrategicamente em São Francisco do Sul, SC, facilitando o acesso aos portos de Paranaguá, Itajaí e Imbituba, reduzindo fretes e prazos de entrega. Nossa localização privilegiada nos permite atender com agilidade toda a costa sul e sudeste do Brasil, otimizando a logística e reduzindo custos operacionais.",
    icon: <Compass className="w-5 h-5" />,
    category: "logística",
  },
  {
    id: 3,
    question: "Vocês oferecem condições de pagamento especiais?",
    answer:
      "Sim. Para clientes com bom histórico, podemos oferecer crédito e condições diferenciadas. Também trabalhamos com cash & carry. Nosso departamento financeiro está sempre disponível para discutir as melhores opções de pagamento que se adequem às necessidades específicas de cada cliente e operação.",
    icon: <MessageSquare className="w-5 h-5" />,
    category: "financeiro",
  },
  {
    id: 4,
    question: "E se eu precisar de ajuda extra com documentação?",
    answer:
      "Oferecemos suporte em trâmites de alfândega, liberação de cargas e demais documentos necessários para operações portuárias. Nossa equipe especializada possui ampla experiência em processos aduaneiros e está preparada para auxiliar em todas as etapas burocráticas, garantindo conformidade e agilidade nos processos.",
    icon: <MessageSquare className="w-5 h-5" />,
    category: "documentação",
  },
  {
    id: 5,
    question: "Quais são os principais produtos que vocês fornecem?",
    answer:
      "Fornecemos uma ampla gama de produtos, incluindo equipamentos de segurança, suprimentos de convés, materiais de limpeza, tintas marítimas, uniformes, equipamentos de combate a incêndio, entre outros. Nosso catálogo é constantemente atualizado para atender às demandas específicas do setor marítimo e portuário.",
    icon: <HelpCircle className="w-5 h-5" />,
    category: "produtos",
  },
  {
    id: 6,
    question: "Vocês atendem embarcações internacionais?",
    answer:
      "Sim, atendemos embarcações de todas as bandeiras que aportam nos portos brasileiros. Temos experiência em lidar com requisitos específicos de diferentes países e tipos de embarcações, garantindo que todos os suprimentos estejam em conformidade com as normas internacionais de navegação.",
    icon: <Ship className="w-5 h-5" />,
    category: "serviços",
  },
]

// Categorias para filtrar as perguntas
const categories = [
  { id: "all", name: "Todas" },
  { id: "empresa", name: "Sobre a Empresa" },
  { id: "logística", name: "Logística" },
  { id: "financeiro", name: "Financeiro" },
  { id: "documentação", name: "Documentação" },
  { id: "produtos", name: "Produtos" },
  { id: "serviços", name: "Serviços" },
]

const Faq = () => {
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
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
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
              FAQ & Outras Vantagens
            </span>
          </h2>
          <motion.p
            className="text-gray-100 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Tire suas dúvidas e saiba mais sobre como podemos ajudar o seu negócio.
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
              placeholder="Pesquisar perguntas..."
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
              {category.name}
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
              <p className="text-gray-200">Nenhuma pergunta encontrada. Tente outra pesquisa ou categoria.</p>
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
            <h3 className="text-xl font-bold text-[#8ab6d6]">Tem mais perguntas?</h3>
          </div>
          <p className="text-gray-100 mb-4">
            Não encontrou o que procurava? Entre em contato conosco diretamente e teremos prazer em ajudar com qualquer
            dúvida específica sobre nossos produtos e serviços.
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
            <span>Enviar Mensagem</span>
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
            <h3 className="text-xl font-bold text-[#8ab6d6]">{faq.question}</h3>
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
                <p className="text-gray-100 mt-2">{faq.answer}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}

export default Faq


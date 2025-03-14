"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { Percent, CreditCard, FileText, Users, Clock, Award, Anchor, Ship, Compass, MapPin } from "lucide-react"

// Dados dos diferenciais
const benefits = [
  {
    id: 1,
    title: "Descontos Atraentes",
    content:
      "Grandes pedidos significam grandes economias. Oferecemos condições especiais para clientes de longo prazo.",
    icon: <Percent className="w-10 h-10" />,
    color: "from-blue-400 to-cyan-300",
  },
  {
    id: 2,
    title: "Crédito & Cash Carry",
    content: "Possibilidade de crédito para bons históricos, além de opções cash & carry para facilitar sua operação.",
    icon: <CreditCard className="w-10 h-10" />,
    color: "from-indigo-400 to-purple-300",
  },
  {
    id: 3,
    title: "Documentação Extra",
    content:
      "Auxiliamos com documentação necessária, liberações alfandegárias e demais processos para garantir tranquilidade.",
    icon: <FileText className="w-10 h-10" />,
    color: "from-teal-400 to-emerald-300",
  },
  {
    id: 4,
    title: "Atendimento Personalizado",
    content:
      "Para qualquer necessidade adicional, entre em contato. Somos flexíveis e prontos para oferecer soluções sob medida.",
    icon: <Users className="w-10 h-10" />,
    color: "from-orange-400 to-amber-300",
  },
]

// Dados de estatísticas
const stats = [
  { id: 1, value: "20+", label: "Anos de Experiência", icon: <Clock className="w-6 h-6" /> },
  { id: 2, value: "500+", label: "Clientes Satisfeitos", icon: <Users className="w-6 h-6" /> },
  { id: 3, value: "15+", label: "Portos Atendidos", icon: <Anchor className="w-6 h-6" /> },
  { id: 4, value: "99%", label: "Taxa de Satisfação", icon: <Award className="w-6 h-6" /> },
]

const WhyChooseUs = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.2 })

  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const parallaxBg = useTransform(scrollYProgress, [0, 1], [0, -100])

  // Variantes de animação para os cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  }

  // Variantes de animação para as estatísticas
  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.2 * i,
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    }),
  }

  return (
    <section
      id="why-choose-us"
      ref={containerRef}
      className="relative py-24 bg-gradient-to-b from-[#101645] to-[#0b0e2a] text-white overflow-hidden"
    >
      {/* ELEMENTOS DECORATIVOS */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Âncora decorativa */}
        <motion.div
          className="absolute -left-40 top-20 text-[#8ab6d6] opacity-5"
          style={{ y: parallaxBg }}
          animate={{
            rotate: [0, -5, 0],
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
          className="absolute -right-20 bottom-40 text-[#8ab6d6] opacity-5"
          style={{ y: useTransform(scrollYProgress, [0, 1], [-20, 20]) }}
          animate={{
            x: [0, -30, 0],
          }}
          transition={{
            duration: 30,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        >
          <Ship className="w-60 h-60" />
        </motion.div>

        {/* Bússola decorativa */}
        <motion.div
          className="absolute left-[10%] bottom-[10%] text-[#8ab6d6] opacity-5"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 60,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          <Compass className="w-40 h-40" />
        </motion.div>

        {/* Pontos de mapa decorativos */}
        {Array.from({ length: 8 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute text-[#8ab6d6] opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: Math.random() * 2,
            }}
          >
            <MapPin className="w-8 h-8" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* TÍTULO E SUBTÍTULO COM ANIMAÇÕES */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8ab6d6] to-[#a8d8ff]">
              Por que escolher a South Waves?
            </span>
          </h2>
          <motion.p
            className="text-gray-100 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Entenda os diferenciais que fazem de nós a melhor escolha para o seu negócio marítimo e portuário.
          </motion.p>
        </motion.div>

        {/* ESTATÍSTICAS IMPRESSIONANTES */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              className="bg-[#131a5e]/50 backdrop-blur-sm border border-[#8ab6d6]/20 rounded-lg p-6 text-center"
              variants={statsVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={index}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(19, 26, 94, 0.7)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 rounded-full bg-[#8ab6d6]/20 flex items-center justify-center text-[#8ab6d6]">
                  {stat.icon}
                </div>
              </div>
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5, type: "spring" }}
              >
                <div className="text-3xl md:text-4xl font-extrabold text-[#8ab6d6] mb-1">{stat.value}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* LISTA DE DIFERENCIAIS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              className="relative group"
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={index}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {/* Efeito de brilho no hover */}
              <div className="absolute inset-0 bg-gradient-to-r rounded-xl blur-sm opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>

              <div
                className="
                relative 
                p-8 
                bg-gradient-to-b from-[#131a5e]/80 to-[#0b0e2a]/90
                backdrop-blur-sm
                border border-[#8ab6d6]/20
                rounded-xl 
                shadow-xl
                overflow-hidden
                z-10
              "
              >
                {/* Círculo de gradiente para o ícone */}
                <div
                  className={`
                  w-16 h-16
                  rounded-full
                  bg-gradient-to-br ${benefit.color}
                  flex items-center justify-center
                  mb-4
                  text-[#101645]
                  shadow-lg
                `}
                >
                  {benefit.icon}
                </div>

                <h3 className="text-xl font-bold text-[#8ab6d6] mb-3">{benefit.title}</h3>
                <p className="text-gray-100">{benefit.content}</p>

                {/* Elemento decorativo no canto */}
                <motion.div
                  className="absolute -bottom-10 -right-10 w-20 h-20 bg-[#8ab6d6] rounded-full opacity-0 group-hover:opacity-10 blur-xl"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* DEPOIMENTO OU SELO DE QUALIDADE */}
        <motion.div
          className="mt-16 max-w-3xl mx-auto bg-[#131a5e]/30 backdrop-blur-sm border border-[#8ab6d6]/20 rounded-xl p-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="flex justify-center mb-4">
            <Award className="w-12 h-12 text-[#8ab6d6]" />
          </div>
          <h3 className="text-xl font-bold text-[#8ab6d6] mb-3">Certificação de Excelência</h3>
          <p className="text-gray-100 italic">
            A South Waves tem sido nossa parceira confiável por mais de 10 anos. Seu compromisso com a qualidade e a
            pontualidade é incomparável no setor marítimo.
          </p>
          <div className="mt-4 text-sm text-gray-300">— Capitão Roberto Silva, Diretor de Operações Marítimas</div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <a
            href="#contact"
            className="
              inline-block 
              px-8 
              py-4
              bg-gradient-to-r from-[#8ab6d6] to-[#6a9cc0]
              text-[#0b0e2a]
              font-bold
              rounded-full
              shadow-lg
              hover:shadow-[#8ab6d6]/30
              transition-all
              duration-300
              transform
              hover:-translate-y-1
            "
          >
            Entre em Contato Agora
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs


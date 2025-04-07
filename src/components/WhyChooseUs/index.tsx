"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Percent, CreditCard, Users, Clock, Award, Anchor, Wallet } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"
import { useTranslation } from "react-i18next"

const WhyChooseUs = () => {
  const { t } = useTranslation()
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.2 })
  const isMobile = useIsMobile()

  // Dados dos diferenciais com traduções
  const benefits = [
    {
      id: 1,
      title: t("whyChooseUs.benefits.progressiveDiscounts.title"),
      content: t("whyChooseUs.benefits.progressiveDiscounts.content"),
      icon: <Percent className="w-10 h-10" />,
      color: "from-blue-400 to-cyan-300",
    },
    {
      id: 2,
      title: t("whyChooseUs.benefits.multiplePaymentOptions.title"),
      content: t("whyChooseUs.benefits.multiplePaymentOptions.content"),
      icon: <Wallet className="w-10 h-10" />,
      color: "from-indigo-400 to-purple-300",
    },
    {
      id: 3,
      title: t("whyChooseUs.benefits.flexiblePrices.title"),
      content: t("whyChooseUs.benefits.flexiblePrices.content"),
      icon: <CreditCard className="w-10 h-10" />,
      color: "from-teal-400 to-emerald-300",
    },
    {
      id: 4,
      title: t("whyChooseUs.benefits.personalizedService.title"),
      content: t("whyChooseUs.benefits.personalizedService.content"),
      icon: <Users className="w-10 h-10" />,
      color: "from-orange-400 to-amber-300",
    },
  ]

  // Dados de estatísticas com traduções
  const stats = [
    { id: 1, value: "20+", label: t("whyChooseUs.stats.stat1.label"), icon: <Clock className="w-6 h-6" /> },
    { id: 2, value: "500+", label: t("whyChooseUs.stats.stat2.label"), icon: <Users className="w-6 h-6" /> },
    { id: 3, value: "15+", label: t("whyChooseUs.stats.stat3.label"), icon: <Anchor className="w-6 h-6" /> },
    { id: 4, value: "99%", label: t("whyChooseUs.stats.stat4.label"), icon: <Award className="w-6 h-6" /> },
  ]

  return (
    <section
      id="why-choose-us"
      ref={containerRef}
      className="relative py-24 bg-gradient-to-b from-[#101645] to-[#0b0e2a] text-white overflow-hidden"
    >
      {/* Elementos decorativos modernos */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 text-[#8ab6d6] opacity-5">
          <Anchor className="w-80 h-80" />
        </div>
        {!isMobile && (
          <>
            <div className="absolute right-0 top-0 w-96 h-96 bg-[#8ab6d6]/5 rounded-full blur-3xl"></div>
            <div className="absolute left-0 bottom-0 w-80 h-80 bg-[#6a9cc0]/5 rounded-full blur-3xl"></div>
          </>
        )}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* TÍTULO E SUBTÍTULO */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8ab6d6] to-[#a8d8ff]">
              {t("whyChooseUs.title")}
            </span>
          </h2>
          <p className="text-gray-100 text-lg max-w-2xl mx-auto">
            {t("whyChooseUs.subtitle")}
          </p>
        </motion.div>

        {/* ESTATÍSTICAS IMPRESSIONANTES */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#131a5e]/50 backdrop-blur-sm border border-[#8ab6d6]/20 rounded-lg p-6 text-center hover:border-[#8ab6d6]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#8ab6d6]/10"
            >
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 rounded-full bg-[#8ab6d6]/20 flex items-center justify-center text-[#8ab6d6]">
                  {stat.icon}
                </div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-extrabold text-[#8ab6d6] mb-1">{stat.value}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* LISTA DE DIFERENCIAIS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
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
                  transition-all
                  duration-300
                  group-hover:border-[#8ab6d6]/40
                  group-hover:shadow-[#8ab6d6]/10
                "
              >
                {/* Efeito de brilho no hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#8ab6d6]/0 via-[#8ab6d6]/30 to-[#8ab6d6]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-xl"></div>

                {/* Círculo de gradiente para o ícone */}
                <div
                  className={`w-16 h-16 rounded-full bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-4 text-[#101645] shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  {benefit.icon}
                </div>

                <h3 className="text-xl font-bold text-[#8ab6d6] mb-3">{benefit.title}</h3>
                <p className="text-gray-100">{benefit.content}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* DEPOIMENTO OU SELO DE QUALIDADE */}
        <motion.div
          className="mt-16 max-w-3xl mx-auto bg-[#131a5e]/30 backdrop-blur-sm border border-[#8ab6d6]/20 rounded-xl p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-[#8ab6d6]/20 flex items-center justify-center">
              <Award className="w-8 h-8 text-[#8ab6d6]" />
            </div>
          </div>
          <h3 className="text-xl font-bold text-[#8ab6d6] mb-3">{t("whyChooseUs.testimonial.title")}</h3>
          <p className="text-gray-100 italic">
            {t("whyChooseUs.testimonial.content")}
          </p>
          <div className="mt-4 text-sm text-gray-300">{t("whyChooseUs.testimonial.author")}</div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.6 }}
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
              hover:scale-105
            "
          >
            {t("whyChooseUs.cta")}
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs

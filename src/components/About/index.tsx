"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Shield, MapPin, Clock, Award, Anchor, Ship, Navigation } from "lucide-react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });
  
  // Animações baseadas no scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const imageY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const parallaxBg = useTransform(scrollYProgress, [0, 1], [0, -100]);
  
  // Valores da empresa (utilizando traduções)
  const companyValues = [
    {
      icon: <Shield className="w-8 h-8 text-[#8ab6d6]" />,
      title: t("about.companyValues.safetyFirst.title"),
      description: t("about.companyValues.safetyFirst.description")
    },
    {
      icon: <MapPin className="w-8 h-8 text-[#8ab6d6]" />,
      title: t("about.companyValues.strategicLocation.title"),
      description: t("about.companyValues.strategicLocation.description")
    },
    {
      icon: <Clock className="w-8 h-8 text-[#8ab6d6]" />,
      title: t("about.companyValues.agility.title"),
      description: t("about.companyValues.agility.description")
    },
    {
      icon: <Award className="w-8 h-8 text-[#8ab6d6]" />,
      title: t("about.companyValues.certifiedQuality.title"),
      description: t("about.companyValues.certifiedQuality.description")
    }
  ];

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative py-32 overflow-hidden bg-gradient-to-b from-[#0b0e2a] to-[#101645] text-white"
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
            repeat: Infinity,
            repeatType: "reverse" 
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
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        >
          <Ship className="w-60 h-60" />
        </motion.div>
      </div>

      {/* IMAGEM DE FUNDO COM PARALAXE */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        style={{ y: parallaxBg }}
      >
        <Image
          src="/images/imagemPorto.png"
          alt={t("about.backgroundAlt")}
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </motion.div>

      <div className="container relative z-10 mx-auto px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* TEXTO COM ANIMAÇÕES */}
          <motion.div 
            className="lg:w-1/2 text-left"
            style={{ y: textY }}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8ab6d6] to-[#a8d8ff]">
                  {t("about.heading")}
                </span>
              </h2>
            </motion.div>
            
            <motion.p 
              className="text-lg text-gray-100 mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {t("about.description")}
            </motion.p>
            
            {/* CARDS DE VALORES */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {companyValues.map((value, index) => (
                <motion.div
                  key={index}
                  className="bg-[#131a5e]/50 backdrop-blur-sm border border-[#8ab6d6]/20 rounded-lg p-4 flex items-start gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.03, backgroundColor: "rgba(19, 26, 94, 0.7)" }}
                >
                  <div className="mt-1">{value.icon}</div>
                  <div>
                    <h3 className="font-bold text-[#8ab6d6]">{value.title}</h3>
                    <p className="text-sm text-gray-200">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.p 
              className="text-lg text-gray-100 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              {t("about.locationDescription")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <a
                href="#contact"
                className="
                  inline-block 
                  px-8 
                  py-4
                  text-lg 
                  font-semibold 
                  rounded-lg 
                  bg-gradient-to-r from-[#8ab6d6] to-[#6a9cc0]
                  text-[#0b0e2a]
                  shadow-lg
                  hover:shadow-[#8ab6d6]/30
                  transition-all
                  duration-300
                  transform
                  hover:-translate-y-1
                "
              >
                {t("about.contactButton")}
              </a>
            </motion.div>
          </motion.div>

          {/* IMAGEM DESTAQUE COM ANIMAÇÕES */}
          <motion.div 
            className="lg:w-1/2 flex justify-center mt-16 lg:mt-0"
            style={{ y: imageY }}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative w-full max-w-md">
              {/* Elemento decorativo atrás da imagem */}
              <motion.div 
                className="absolute -top-6 -left-6 w-full h-full rounded-lg bg-gradient-to-br from-[#8ab6d6]/30 to-transparent"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
              
              {/* Imagem principal */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="relative z-10"
              >
                <Image
                  src="/images/porto.jpg"
                  alt={t("about.featuredImageAlt")}
                  width={500}
                  height={300}
                  className="rounded-lg shadow-2xl border-2 border-[#8ab6d6]/70"
                />
              </motion.div>
              
              {/* Badge de experiência */}
              <motion.div
                className="
                  absolute 
                  -bottom-10 
                  -right-10 
                  w-44 
                  h-44 
                  bg-gradient-to-br from-[#8ab6d6] to-[#6a9cc0]
                  flex 
                  flex-col 
                  items-center 
                  justify-center 
                  rounded-xl 
                  shadow-xl 
                  border-2 
                  border-[#0b0e2a]
                  z-20
                "
                initial={{ opacity: 0, scale: 0, rotate: -10 }}
                animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0, rotate: -10 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.8,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ 
                  scale: 1.05,
                  rotate: 5,
                  transition: { duration: 0.3 }
                }}
              >
                <span className="text-5xl font-extrabold text-[#0b0e2a]">
                  {t("about.experience.years")}
                </span>
                <span className="text-sm font-medium text-[#0b0e2a] text-center px-2">
                  {t("about.experience.text")}
                </span>
              </motion.div>
              
              {/* Elemento decorativo flutuante */}
              <motion.div
                className="absolute -bottom-4 -left-16 z-0 opacity-70"
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <Navigation className="w-12 h-12 text-[#8ab6d6]" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

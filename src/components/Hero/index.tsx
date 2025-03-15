"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { MessageSquare, Ship, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useIsMobile } from "@/hooks/use-mobile"

export default function Hero() {
  const vidRef = useRef<HTMLVideoElement>(null)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const isMobile = useIsMobile()

  useEffect(() => {
    if (vidRef.current) {
      vidRef.current.muted = true
      vidRef.current.play().catch(() => {})

      vidRef.current.addEventListener("loadeddata", () => {
        setIsVideoLoaded(true)
      })
    }
  }, [])

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* VÍDEO DE FUNDO COM FADE IN */}
      <div className="absolute inset-0 z-[-2] bg-[#0A1A2F]">
        {!isMobile && (
          <video
            ref={vidRef}
            className="absolute inset-0 h-full w-full object-cover opacity-40"
            src="/videos/dronePorto.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        )}
        {/* Fallback para quando o vídeo não carrega ou em mobile */}
        <div className="absolute inset-0 bg-[url('/images/porto.jpg')] bg-cover bg-center opacity-30"></div>
      </div>

      {/* OVERLAY */}
      <div className="absolute inset-0 z-[-1]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1A2F]/90 via-[#0A1A2F]/70 to-[#0D6EFD]/20" />
      </div>

      {/* CONTEÚDO CENTRAL */}
      <div className="relative z-10 max-w-[800px] text-center px-4 mt-20 md:mt-0">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-[#0D6EFD]/20 text-[#0D6EFD] font-medium mb-4 border border-[#0D6EFD]/30">
            <Ship className="w-4 h-4 mr-2" />
            Since 1999
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            South Waves
            <span className="text-[#0D6EFD] relative ml-2">Ship Supply</span>
          </h1>
        </motion.div>

        <h2 className="text-2xl md:text-3xl font-medium mb-4 text-white">
          <span className="text-[#0D6EFD] italic">You name it, we supply it!</span>
        </h2>

        <div className="mb-8">
          <div className="h-1 w-40 bg-gradient-to-r from-[#0D6EFD] to-transparent rounded-full mx-auto"></div>
        </div>

        <p className="text-xl md:text-2xl mb-10 text-gray-300 leading-relaxed">
          Com a South Waves, sua empresa tem a garantia de produtos e serviços de qualidade.
          <br />
          Priorizamos a excelência e estamos continuamente buscando as melhores soluções.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link
            href="#products"
            className="group bg-gradient-to-r from-[#0D6EFD] to-[#0747A6] text-white px-10 py-5 rounded-xl font-bold transition-all duration-300 hover:shadow-lg hover:shadow-[#0D6EFD]/20 flex items-center justify-center"
          >
            <span className="flex items-center">
              Ver Produtos
              <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Link>

          <Link
            href="#contact"
            className="group bg-transparent border-2 border-[#0D6EFD] text-white px-10 py-5 rounded-xl font-bold transition-all duration-300 flex items-center justify-center hover:bg-[#0D6EFD]/10"
          >
            <span className="flex items-center">
              Solicitar Cotação
              <MessageSquare className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}


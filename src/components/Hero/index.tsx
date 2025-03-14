"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { MessageSquare, Anchor, Ship, Navigation, Star, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  const vidRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  // Scroll-based animations
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  // Wave animation parameters
  const [wavePhase, setWavePhase] = useState(0)

  useEffect(() => {
    if (vidRef.current) {
      vidRef.current.muted = true
      vidRef.current.play().catch(() => {})

      vidRef.current.addEventListener("loadeddata", () => {
        setIsVideoLoaded(true)
      })
    }

    // Wave animation
    const waveInterval = setInterval(() => {
      setWavePhase((prev) => (prev + 0.05) % (2 * Math.PI))
    }, 50)

    return () => clearInterval(waveInterval)
  }, [])

  // Generate wave path
  const generateWavePath = (phase: number) => {
    const width = typeof window !== "undefined" ? window.innerWidth : 1000
    const height = 50
    const segments = 20
    const segmentWidth = width / segments

    let path = `M 0 ${height} `

    for (let i = 0; i <= segments; i++) {
      const x = i * segmentWidth
      const y = Math.sin(i * 0.5 + phase) * 15 + height
      path += `L ${x} ${y} `
    }

    path += `L ${width} ${height + 50} L 0 ${height + 50} Z`
    return path
  }

  // Floating elements for background
  const floatingElements = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 30 + 10,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 5,
  }))

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* VÍDEO DE FUNDO COM FADE IN */}
      <AnimatePresence>
        {isVideoLoaded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 z-[-2]"
          >
            <video
              ref={vidRef}
              className="absolute inset-0 h-full w-full object-cover"
              src="/placeholder.svg?height=1080&width=1920"
              autoPlay
              loop
              muted
              playsInline
            />
            {/* Fallback para quando o vídeo não carrega */}
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center"></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* OVERLAY AVANÇADO */}
      <div className="absolute inset-0 z-[-1]">
        {/* Gradiente base */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A2129]/90 via-[#1A2129]/70 to-[#00A3FF]/40" />

        {/* Vinheta para dar profundidade */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-[#1A2129]/70" />

        {/* Elementos flutuantes */}
        {floatingElements.map((el) => (
          <motion.div
            key={el.id}
            className="absolute rounded-full bg-[#00A3FF] opacity-10"
            style={{
              width: el.size,
              height: el.size,
              left: `${el.x}%`,
              top: `${el.y}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: el.duration,
              delay: el.delay,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Âncora decorativa */}
        <motion.div
          className="absolute -right-20 top-20 text-[#00A3FF] opacity-5"
          animate={{
            rotate: [0, 10, 0],
            x: [0, 10, 0],
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
          className="absolute -left-20 bottom-40 text-[#00A3FF] opacity-5"
          animate={{
            x: [0, 100, 0],
          }}
          transition={{
            duration: 60,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        >
          <Ship className="w-60 h-60" />
        </motion.div>
      </div>

      {/* CONTEÚDO CENTRAL COM ANIMAÇÕES */}
      <motion.div className="relative z-10 max-w-[800px] text-center px-4" style={{ y, opacity }}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white">
            Sea{" "}
            <span className="text-[#00A3FF] relative">
              Star
              <motion.span
                className="absolute -top-10 -right-10 text-yellow-400"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <Star className="w-12 h-12" />
              </motion.span>
            </span>
          </h1>
        </motion.div>

        <motion.h2
          className="text-2xl md:text-3xl font-medium mb-4 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Desde 1999 - <span className="text-[#00A3FF] italic">"You name it, we take it!"</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mb-8"
        >
          <div className="h-1 w-40 bg-gradient-to-r from-[#00A3FF] to-transparent rounded-full mx-auto"></div>
        </motion.div>

        <motion.p
          className="text-xl md:text-2xl mb-10 text-gray-300 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          Logística marítima, fornecimento de suprimentos e serviços de qualidade.
          <br />
          Segurança e eficiência para sua operação portuária.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <Link
            href="/services"
            className="group relative overflow-hidden bg-gradient-to-r from-[#00A3FF] to-[#0088D1] text-white px-10 py-5 rounded-xl font-bold transition-all duration-500 transform hover:scale-105 shadow-lg shadow-[#00A3FF]/20 flex items-center justify-center"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#00A3FF] to-[#0088D1] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></span>
            <span className="absolute -inset-x-1 -bottom-1 h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"></span>
            <span className="relative flex items-center">
              Ver Produtos
              <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Link>

          <Link
            href="/contact"
            className="group relative overflow-hidden bg-transparent border-2 border-[#00A3FF] text-white px-10 py-5 rounded-xl font-bold transition-all duration-300 flex items-center justify-center hover:bg-[#00A3FF]/10"
          >
            <span className="absolute -inset-x-1 -bottom-1 h-1 bg-gradient-to-r from-transparent via-[#00A3FF] to-transparent opacity-30"></span>
            <span className="relative flex items-center">
              Entre em Contato
              <MessageSquare className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 2, duration: 1 },
          y: { delay: 2, duration: 1.5, repeat: Number.POSITIVE_INFINITY },
        }}
      >
        <div className="flex flex-col items-center">
          <p className="text-white/70 text-sm mb-2">Scroll para explorar</p>
          <Navigation className="h-6 w-6 text-[#00A3FF]" />
        </div>
      </motion.div>

      {/* ONDAS ANIMADAS NA PARTE INFERIOR */}
      <div className="absolute bottom-0 left-0 right-0 z-10 overflow-hidden">
        <svg width="100%" height="100" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <motion.path
            d={generateWavePath(wavePhase)}
            fill="rgba(0, 163, 255, 0.2)"
            animate={{
              d: [
                generateWavePath(wavePhase),
                generateWavePath(wavePhase + Math.PI / 4),
                generateWavePath(wavePhase + Math.PI / 2),
                generateWavePath(wavePhase + (3 * Math.PI) / 4),
                generateWavePath(wavePhase + Math.PI),
              ],
            }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        </svg>
        <svg width="100%" height="80" viewBox="0 0 1440 100" preserveAspectRatio="none" className="-mt-20">
          <motion.path
            d={generateWavePath(wavePhase + Math.PI / 2)}
            fill="rgba(0, 163, 255, 0.15)"
            animate={{
              d: [
                generateWavePath(wavePhase + Math.PI / 2),
                generateWavePath(wavePhase + (3 * Math.PI) / 4),
                generateWavePath(wavePhase + Math.PI),
                generateWavePath(wavePhase + (5 * Math.PI) / 4),
                generateWavePath(wavePhase + (3 * Math.PI) / 2),
              ],
            }}
            transition={{
              duration: 15,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        </svg>
      </div>

      {/* Experience Badge */}
      <motion.div
        className="absolute bottom-20 right-10 md:right-20"
        initial={{ opacity: 0, scale: 0, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{
          duration: 0.6,
          delay: 1.5,
          type: "spring",
          stiffness: 200,
        }}
      >
        <div className="relative">
          <div className="absolute inset-0 bg-[#00A3FF] rounded-xl blur-xl opacity-30 animate-pulse"></div>
          <div className="relative bg-gradient-to-br from-[#00A3FF] to-[#0088D1] w-32 h-32 md:w-40 md:h-40 rounded-xl flex flex-col items-center justify-center shadow-2xl border-4 border-[#1A2129] transform rotate-3 hover:rotate-0 transition-all duration-300">
            <span className="text-4xl md:text-5xl font-extrabold text-white">20+</span>
            <span className="text-sm font-medium text-white text-center px-2">Anos de Experiência</span>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

  
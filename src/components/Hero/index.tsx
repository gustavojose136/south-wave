"use client";

import React, { useEffect, useRef } from "react";
import { Icon } from "@iconify/react";

const Hero = () => {
  const vidRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (vidRef.current) {
      vidRef.current.muted = true;
      vidRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section
      id="home"
      className="
        relative 
        h-screen 
        w-full 
        overflow-hidden 
        flex 
        items-center 
        justify-center
      "
    >
      {/* VÍDEO DE FUNDO */}
      <video
        ref={vidRef}
        className="absolute inset-0 h-full w-full object-cover z-[-1]"
        src="/videos/dronePorto.mp4"
        autoPlay
        loop
        muted
      />

      {/* OVERLAY EM GRADIENTE (NAVY -> BABY BLUE) */}
      <div
        className="
          absolute 
          inset-0 
          z-[-1] 
          bg-gradient-to-b 
          from-[#0b0e2a]/80 
          to-[#8ab6d6]/30
        "
      />

      {/* CONTEÚDO CENTRAL */}
      <div className="relative z-10 max-w-[800px] text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
          South Waves
        </h1>
        <h2 className="text-xl md:text-2xl text-white font-semibold mb-8">
          Since 1999 - <span className="text-[#8ab6d6]">“You name it, we take it!”</span>
        </h2>

        <p className="text-white text-lg md:text-xl mb-8">
          Logística marítima, fornecimento de suprimentos e serviços de qualidade.
          Segurança e eficiência para sua operação portuária.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#products"
            className="
              inline-flex 
              items-center 
              justify-center 
              rounded-full 
              bg-[#8ab6d6] 
              px-8 
              py-3 
              text-sm 
              font-bold 
              text-[#0b0e2a]
              hover:bg-[#78a0bf]
              transition
            "
          >
            <Icon icon="mdi:warehouse" className="mr-2 text-lg" />
            Ver Produtos
          </a>

          <a
            href="#contact"
            className="
              inline-flex 
              items-center 
              justify-center 
              rounded-full 
              bg-white 
              bg-opacity-20 
              px-8 
              py-3 
              text-sm 
              font-bold 
              text-white
              hover:bg-opacity-30
              transition
            "
          >
            <Icon icon="mdi:chat-processing-outline" className="mr-2 text-lg" />
            Entre em Contato
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

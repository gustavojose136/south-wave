"use client";

import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react";

const Hero = () => {
  const vidRef = useRef<HTMLVideoElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    if (vidRef.current) {
      vidRef.current.muted = true;
      vidRef.current
        .play()
        .catch(() => {
        });
    }
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden pt-[120px] md:pt-[130px] lg:pt-[160px]"
    >
      {/* Vídeo de fundo */}
      <video
        ref={vidRef}
        className="absolute inset-0 h-full w-full object-cover z-[-1]"
        src="/images/videos/dronePorto.mp4"
        autoPlay
        loop
        muted
      ></video>

      {/* Overlay mais marcante (gradiente ou cor sólida) */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-blue-950 via-blue-950/80 to-blue-950/90 z-0"></div> */}

      {/* Conteúdo central */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
        <div
          className="hero-content wow fadeInUp max-w-[780px]"
          data-wow-delay=".2s"
        >
          <h1 className="mb-6 text-4xl font-extrabold leading-snug sm:text-5xl lg:text-6xl lg:leading-[1.2]">
            {/* Ajuste conforme sua i18n ou texto fixo */}
            {t("hero.slogan")}
          </h1>

          <p className="mx-auto mb-8 max-w-[600px] text-base font-medium text-gray-200 sm:text-lg sm:leading-relaxed">
            {/*
              Exemplo de subtítulo / descrição. Ajuste as chaves de tradução
              ou coloque texto fixo em PT-BR
            */}
            {t("hero.subtitle") || "Equipamentos, soluções e tecnologia para sua indústria."}
          </p>

          {/* Botões de ação (CTA) */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <a
              href="shop"
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark focus:outline-none"
            >
              <Icon icon="mdi:warehouse" className="mr-2 text-lg" />
              {t("hero.verProdutos") || "Ver Produtos"}
            </a>

            <a
              href="contact"
              className="inline-flex items-center justify-center rounded-full bg-white bg-opacity-20 px-8 py-3 text-sm font-semibold text-white transition hover:bg-opacity-30 focus:outline-none"
            >
              <Icon icon="mdi:chat-processing-outline" className="mr-2 text-lg" />
              {t("hero.contato") || "Entre em Contato"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

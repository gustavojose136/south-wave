"use client";

import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import { useTranslation } from "react-i18next";

// Exemplo de background (vídeo). Se quiser imagem estática, basta trocar o <video> por <img>.
const Features = () => {
  const { t } = useTranslation();

  return (
    <section
      className="
        relative
        pb-8
        pt-20
        text-white
        dark:bg-dark
        lg:pb-[70px]
        lg:pt-[120px]
        overflow-hidden
      "
      id="features-section"
    >
      {/* VÍDEO DE FUNDO */}
      <video
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          z-[-2]
        "
        src="/images/videos/dronePorto.mp4"
        autoPlay
        loop
        muted
      />

      {/* OVERLAY EM GRADIENTE/TONS ESCUROS para contraste */}
      <div
        className="
          absolute
          inset-0
          z-[-1]
          bg-gradient-to-b
          from-[#0d123a]/90
          to-[#151b43]/90
        "
      />

      <div className="container relative z-10">
        <SectionTitle
          subtitle={t("features.subtitle")}
          title={t("features.title")}
          paragraph={t("features.paragraph")}
        />

        {/* A classe `items-stretch` garante que as colunas tenham altura uniforme */}
        <div className="-mx-4 mt-12 flex flex-wrap items-stretch lg:mt-20">
          {featuresData.map((feature, i) => (
            <div
              key={feature.id}
              className="w-full px-4 md:w-1/2 lg:w-1/4 flex p-6"
            >
              <SingleFeature feature={feature} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

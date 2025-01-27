'use client'

import React, { useEffect, useRef } from "react";

const Hero = () => {
  const vidRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (vidRef.current) {
      vidRef.current.muted = true;
      vidRef.current.play().catch((err) => {
        // console.error("Erro ao reproduzir o vídeo: ", err);
      });
    }
  }, []);
  return (
    <>
      <section
        id="home"
        className="relative overflow-hidden bg-cover bg-center bg-no-repeat pt-[120px] md:pt-[130px] lg:pt-[160px]"
      >
        <video
        ref={vidRef}
          className="absolute inset-0 w-full h-full object-cover z-[-1]"
          src="https://video.wixstatic.com/video/11062b_49290d29f68c4c989d8bdd24e53bb3d5/1080p/mp4/file.mp4"
          autoPlay
          loop
          muted
        ></video>

        {/* Máscara de Sobreposição */}
        <div className="absolute inset-0 z-[1] bg-blue-950 bg-opacity-75"></div>

        {/* Conteúdo */}
        <div className="container relative z-[2]">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4">
              <div
                className="hero-content wow fadeInUp mx-auto max-w-[780px] text-center"
                data-wow-delay=".2s"
              >
                <h1 className="mb-6 text-3xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]">
                  Gálatas Serviços Marítimos e Terrestres
                </h1>
                <p className="mx-auto mb-9 max-w-[600px] text-base font-medium text-white sm:text-lg sm:leading-[1.44]">
                  A Gálatas entrega uma variedade de serviços: transporte de
                  cargas, movimentação portuária, serviços terrestres e
                  marítimos, além de consultoria logística. Atuamos no Porto de
                  Vitória e Vila Velha há 29 anos, sempre garantindo excelência
                  e compromisso!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

"use client";

import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="
        relative 
        py-24 
        overflow-hidden 
        bg-[#0b0e2a]
        text-white
      "
    >
      {/* IMAGEM DE FUNDO (opcional) */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/images/imagemPorto.png"
          alt="Fundo Porto"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* TEXTO */}
          <div className="lg:w-1/2 text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#8ab6d6]">
              Sobre a South Waves
            </h2>
            <p className="text-lg text-gray-100 mb-6 leading-relaxed">
              Com a <strong>South Waves</strong>, sua empresa tem a garantia de 
              produtos e serviços de qualidade. Priorizamos a excelência e estamos 
              continuamente buscando as melhores soluções. 
              <br /><br />
              <strong>Safety First</strong> é um valor inquestionável para nós. 
              Atendemos às normas e possuímos certificações que asseguram 
              confiabilidade e segurança em cada operação.
            </p>
            <p className="text-lg text-gray-100 mb-6 leading-relaxed">
              Estamos estrategicamente localizados em <strong>São Francisco do Sul, SC</strong>, 
              entre <strong>Paranaguá, Itajaí e Imbituba</strong>. 
              Isso garante facilidade logística, redução de trajeto e mais agilidade 
              para seus fornecimentos.
            </p>

            <a
              href="#contact"
              className="
                inline-block 
                px-8 
                py-3 
                text-lg 
                font-semibold 
                rounded-lg 
                bg-[#8ab6d6] 
                text-[#0b0e2a]
                shadow-lg
                hover:bg-[#78a0bf]
                transition
              "
            >
              Fale Conosco
            </a>
          </div>

          {/* IMAGEM DESTAQUE */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <Image
                src="/images/porto.jpg"
                alt="Porto e logística"
                width={500}
                height={300}
                className="rounded-lg shadow-2xl border-4 border-[#8ab6d6]"
              />
              <div
                className="
                  absolute 
                  -bottom-10 
                  -right-10 
                  w-44 
                  h-44 
                  bg-[#8ab6d6] 
                  flex 
                  flex-col 
                  items-center 
                  justify-center 
                  rounded-xl 
                  shadow-xl 
                  border-4 
                  border-[#0b0e2a]
                "
              >
                <span className="text-4xl md:text-5xl font-extrabold text-[#0b0e2a]">
                  20+
                </span>
                <span className="text-sm font-medium text-[#0b0e2a]">
                  Anos de Experiência
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

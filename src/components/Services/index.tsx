"use client";

import Image from "next/image";
import React from "react";

/**
 * Lista dos serviços que você forneceu:
 * 1. Tops
 * 2. Stationery
 * 3. Safety equipments & protection clothes
 * 4. Clothing
 * 5. Firefighting
 * 6. Deck stores
 * 7. Cleaning
 * 8. Anti-piracy
 * 9. Paints
 * 10. Home appliance
 * 11. Marine pyrotechnics
 */

const servicesData = [
  {
    id: 1,
    title: "Tops",
    description:
      "Fornecemos equipamentos e suprimentos 'tops' para sua embarcação, garantindo qualidade e confiabilidade.",
    image: "/images/services/tops.jpg", // Ajuste o caminho da imagem
  },
  {
    id: 2,
    title: "Stationery",
    description:
      "Material de escritório e papelaria para atender às necessidades de documentação e organização a bordo.",
    image: "/images/services/stationery.jpg",
  },
  {
    id: 3,
    title: "Safety equipments & protection clothes",
    description:
      "Equipamentos de segurança e EPIs para proteção completa da tripulação, seguindo normas internacionais.",
    image: "/images/services/safety.jpg",
  },
  {
    id: 4,
    title: "Clothing",
    description:
      "Roupas e uniformes adequados para a tripulação, unindo conforto e resistência no ambiente marítimo.",
    image: "/images/services/clothing.jpg",
  },
  {
    id: 5,
    title: "Firefighting",
    description:
      "Soluções de combate a incêndio, incluindo extintores, mangueiras e sistemas especializados para embarcações.",
    image: "/images/services/firefighting.jpg",
  },
  {
    id: 6,
    title: "Deck stores",
    description:
      "Materiais e suprimentos para manutenção e organização do deck, garantindo eficiência e segurança.",
    image: "/images/services/deckstores.jpg",
  },
  {
    id: 7,
    title: "Cleaning",
    description:
      "Produtos de limpeza e higienização desenvolvidos para o ambiente marítimo, mantendo o padrão sanitário.",
    image: "/images/services/cleaning.jpg",
  },
  {
    id: 8,
    title: "Anti-piracy",
    description:
      "Equipamentos e sistemas de segurança anti-pirataria para proteção em águas internacionais.",
    image: "/images/services/antipiracy.jpg",
  },
  {
    id: 9,
    title: "Paints",
    description:
      "Tintas e revestimentos marítimos de alta performance para conservação do casco e estruturas do navio.",
    image: "/images/services/paints.jpg",
  },
  {
    id: 10,
    title: "Home appliance",
    description:
      "Eletrodomésticos e itens de conforto para a embarcação, melhorando a qualidade de vida a bordo.",
    image: "/images/services/home-appliance.jpg",
  },
  {
    id: 11,
    title: "Marine pyrotechnics",
    description:
      "Fogos de artifício marítimos, sinalizadores e pirotecnia para segurança e emergências no mar.",
    image: "/images/services/pyrotechnics.jpg",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="
        relative 
        py-16 
        bg-[#0b0e2a]
        text-white
      "
    >
      <div className="container mx-auto px-6">
        {/* Título e Subtítulo */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#8ab6d6] mb-4">
            Nossos Serviços
          </h2>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto">
            “You name it, we take it.” Confira os principais itens e soluções que oferecemos para sua operação marítima.
          </p>
        </div>

        {/* Lista de Serviços em Zigue-Zague */}
        <div className="flex flex-col space-y-16">
          {servicesData.map((service, index) => {
            // Definindo se o item é par ou ímpar para alternar o layout
            const isEven = index % 2 === 0;

            return (
              <div
                key={service.id}
                className={`
                  flex 
                  flex-col 
                  items-center 
                  gap-8 
                  md:gap-12
                  ${isEven ? "md:flex-row" : "md:flex-row-reverse"}
                `}
              >
                {/* Imagem */}
                <div className="md:w-1/2">
                  <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Conteúdo (Texto) */}
                <div className="md:w-1/2 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#8ab6d6] mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-100 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <a
                    href="#contact"
                    className="
                      inline-block
                      bg-[#8ab6d6]
                      text-[#0b0e2a]
                      px-6
                      py-3
                      rounded-full
                      font-semibold
                      hover:bg-[#78a0bf]
                      transition
                    "
                  >
                    Saiba Mais
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

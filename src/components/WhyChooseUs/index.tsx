"use client";

import React from "react";

const WhyChooseUs = () => {
  return (
    <section
      id="why-choose-us"
      className="
        relative 
        py-20 
        bg-[#0b0e2a] 
        text-white
      "
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#8ab6d6] mb-6">
          Por que escolher a South Waves?
        </h2>
        <p className="text-gray-100 text-lg max-w-2xl mx-auto mb-12">
          Entenda os diferenciais que fazem de nós a melhor escolha para o seu
          negócio marítimo e portuário.
        </p>

        {/* LISTA DE DIFERENCIAIS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card
            title="Descontos Atraentes"
            content="Grandes pedidos significam grandes economias. Oferecemos condições especiais para clientes de longo prazo."
          />
          <Card
            title="Crédito & Cash Carry"
            content="Possibilidade de crédito para bons históricos, além de opções cash & carry para facilitar sua operação."
          />
          <Card
            title="Documentação Extra"
            content="Auxiliamos com documentação necessária, liberações alfandegárias e demais processos para garantir tranquilidade."
          />
          <Card
            title="Atendimento Personalizado"
            content="Para qualquer necessidade adicional, entre em contato. Somos flexíveis e prontos para oferecer soluções sob medida."
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

const Card = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => (
  <div
    className="
      p-6 
      bg-[#101645]
      border 
      border-[#8ab6d6]/30
      rounded-lg 
      shadow-md 
      hover:shadow-xl
      transition
      text-left
    "
  >
    <h3 className="text-xl font-bold text-[#8ab6d6] mb-4">{title}</h3>
    <p className="text-gray-100">{content}</p>
  </div>
);

"use client";

import { Icon } from "@iconify/react";

type SingleFaqProps = {
  position: number;
  question: string;
  answer: string; // HTML string
};

const SingleFaq = ({ position, question, answer }: SingleFaqProps) => {
  return (
    <div
      className="
        mb-12
        flex
        items-start
        wow
        fadeInUp
        lg:mb-[70px]
        transition-transform
        duration-300
      "
      data-wow-delay={`${0.1 * position}s`}
    >
      {/* Bolha com número, agora em gradiente */}
      <div
        className="
          mr-4
          flex
          h-[50px]
          w-full
          max-w-[50px]
          items-center
          justify-center
          rounded-xl
          bg-gradient-to-br
          from-[#13C296]
          to-[#3793F9]
          text-white
          shadow-md
          sm:mr-6
          sm:h-[60px]
          sm:max-w-[60px]
          transform
          group-hover:scale-105
        "
      >
        <span className="text-lg font-semibold">{position}</span>
      </div>

      {/* Conteúdo da Pergunta/Resposta */}
      <div className="w-full">
        <h3 className="mb-3 text-xl font-semibold text-white sm:text-2xl lg:text-xl xl:text-2xl flex items-center gap-2">
          {/* Opcional: Ícone de pergunta */}
          <Icon icon="mdi:help-circle-outline" className="text-2xl text-[#13C296]" />
          {question}
        </h3>
        <p
          className="text-base text-gray-200 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: answer }}
        />
      </div>
    </div>
  );
};

export default SingleFaq;

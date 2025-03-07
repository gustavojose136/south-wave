"use client";

import React from "react";

const Faq = () => {
  return (
    <section
      id="faq"
      className="
        relative 
        py-20 
        bg-[#101645] 
        text-white
      "
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#8ab6d6]">
            FAQ & Outras Vantagens
          </h2>
          <p className="text-gray-100 text-lg max-w-xl mx-auto mt-4">
            Tire suas dúvidas e saiba mais sobre como podemos ajudar o seu negócio.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          <FaqItem
            question="1. Há quanto tempo vocês atuam no mercado?"
            answer="Estamos no ramo desde 1999, com mais de 20 anos de experiência em suprimentos marítimos e serviços portuários."
          />
          <FaqItem
            question="2. Quais benefícios de localização vocês oferecem?"
            answer="Estamos estrategicamente em São Francisco do Sul, SC, facilitando o acesso aos portos de Paranaguá, Itajaí e Imbituba, reduzindo fretes e prazos de entrega."
          />
          <FaqItem
            question="3. Vocês oferecem condições de pagamento especiais?"
            answer="Sim. Para clientes com bom histórico, podemos oferecer crédito e condições diferenciadas. Também trabalhamos com cash & carry."
          />
          <FaqItem
            question="4. E se eu precisar de ajuda extra com documentação?"
            answer="Oferecemos suporte em trâmites de alfândega, liberação de cargas e demais documentos necessários para operações portuárias."
          />
        </div>
      </div>
    </section>
  );
};

export default Faq;

const FaqItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => (
  <div className="bg-[#0b0e2a] p-6 rounded-lg border border-[#8ab6d6]/30">
    <h3 className="text-xl font-bold text-[#8ab6d6] mb-2">{question}</h3>
    <p className="text-gray-100">{answer}</p>
  </div>
);

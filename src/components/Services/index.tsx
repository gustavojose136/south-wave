"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  Ship,
  Package,
  FileText,
  Wrench,
  Anchor,
  Clock,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  // Serviços oferecidos
  const services = [
    {
      icon: <Package className="h-12 w-12 text-[#0D6EFD]" />,
      title: "Fornecimento de Peças Originais",
      description:
        "Fornecemos peças originais e homologadas para todos os tipos de embarcações, garantindo a autenticidade e qualidade dos componentes.",
      features: [
        "Peças com certificação de origem",
        "Garantia do fabricante",
        "Rastreabilidade completa",
      ],
      image: "/images/servicos/pecas-origi.jpg",
    },
    {
      icon: <Clock className="h-12 w-12 text-[#0D6EFD]" />,
      title: "Entrega Expressa",
      description:
        "Serviço de entrega expressa para peças urgentes em qualquer porto do Brasil, minimizando o tempo de inatividade da sua embarcação.",
      features: [
        "Entrega em 24-48h",
        "Rastreamento em tempo real",
        "Atendimento 24/7 para emergências",
      ],
      image: "/images/servicos/entrega-express.png",
    },
    {
      icon: <Wrench className="h-12 w-12 text-[#0D6EFD]" />,
      title: "Suporte Técnico Especializado",
      description:
        "Nossa equipe técnica oferece suporte na identificação e seleção das peças corretas para sua embarcação.",
      features: [
        "Consultoria técnica especializada",
        "Identificação precisa de componentes",
        "Recomendações de substituição",
      ],
      image: "/images/servicos/tec.jpg",
    },
    {
      icon: <FileText className="h-12 w-12 text-[#0D6EFD]" />,
      title: "Documentação e Certificação",
      description:
        "Fornecemos toda a documentação necessária para peças críticas, garantindo conformidade com regulamentações marítimas.",
      features: [
        "Certificados de conformidade",
        "Documentação para classificadoras",
        "Relatórios de testes e qualidade",
      ],
      image: "/images/servicos/doc.jpg",
    },
  ];

  return (
    <section
      id="services"
      ref={containerRef}
      className="relative bg-gradient-to-b from-[#0A1A2F] to-[#0F2A47] py-24 text-white"
    >
      {/* Elementos decorativos */}
      {!isMobile && (
        <>
          <div className="absolute right-0 top-0 text-[#0D6EFD] opacity-5">
            <Ship className="h-96 w-96" />
          </div>
          <div className="absolute bottom-0 left-0 text-[#0D6EFD] opacity-5">
            <Anchor className="h-80 w-80" />
          </div>
        </>
      )}

      <div className="container relative z-10 mx-auto px-4">
        {/* Cabeçalho da seção */}
        <div className="mb-16 px-4 text-center">
          <div className="mb-4 inline-flex items-center justify-center rounded-full border border-[#0D6EFD]/30 bg-[#0D6EFD]/20 px-4 py-2 font-medium text-[#0D6EFD]">
            <Wrench className="mr-2 h-4 w-4" />
            Nossos Serviços
          </div>

          <h2 className="mb-6 text-3xl font-bold md:text-5xl">
            Soluções Completas para
            <span className="ml-2 text-[#0D6EFD]">Reposição Naval</span>
          </h2>

          <p className="mx-auto max-w-3xl text-base text-gray-300 md:text-lg">
            Oferecemos serviços especializados para garantir que sua embarcação
            receba as peças certas no momento certo, minimizando o tempo de
            inatividade.
          </p>
        </div>

        {/* Grid de serviços - SEM ANIMAÇÕES */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-xl border border-[#0D6EFD]/20 bg-[#0F2A47] transition-all duration-300 hover:border-[#0D6EFD]/50"
            >
              {/* Imagem na parte superior para mobile e desktop */}
              <div className="relative h-48 w-full overflow-visible">
                <Image
                  src={service.image || "/placeholder.svg?height=300&width=400"}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A2F]/90 to-transparent"></div>

                {/* Badge de serviço premium */}
                <div className="absolute right-4 top-4 rounded-full bg-[#0D6EFD] px-3 py-1 text-xs font-bold text-white">
                  Serviço Premium
                </div>

                {/* Ícone do serviço */}
                <div className="absolute bottom-0 left-1/2 z-50 -translate-x-1/2 translate-y-1/2 transform">
                  <div className="rounded-full border-4 border-[#0F2A47] bg-[#0D6EFD] p-3 shadow-lg">
                    {service.title.includes("Peças") && (
                      <Package className="h-8 w-8 text-white" />
                    )}
                    {service.title.includes("Entrega") && (
                      <Clock className="h-8 w-8 text-white" />
                    )}
                    {service.title.includes("Suporte") && (
                      <Wrench className="h-8 w-8 text-white" />
                    )}
                    {service.title.includes("Documentação") && (
                      <FileText className="h-8 w-8 text-white" />
                    )}
                  </div>
                </div>
              </div>

              {/* Conteúdo do serviço */}
              <div className="p-6 pt-10">
                <h3 className="mb-4 text-center text-xl font-bold text-white">
                  {service.title}
                </h3>
                <p className="mb-6 text-center text-gray-300">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#0D6EFD]" />
                      <span className="text-gray-200">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Seção de emergência - SEM ANIMAÇÕES */}
        <div className="mt-16 overflow-hidden rounded-xl border border-[#0D6EFD]/30 bg-gradient-to-r from-[#0D6EFD]/20 to-[#0F2A47]">
          {/* Imagem de fundo para desktop e mobile */}
          <div className="relative w-full">
            <div className="absolute inset-0 z-0">
              {/* <Image
                src="/images/servicos/emergencia.jpg"
                alt="Serviço de emergência"
                fill
                className="object-cover"
              /> */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A1A2F]/90 to-[#0A1A2F]/70"></div>
            </div>

            <div className="relative z-10 p-8">
              <div className="flex flex-col items-center text-center md:items-start md:text-left">
                <div className="mb-6 inline-flex items-center justify-center rounded-full bg-[#0D6EFD] px-4 py-2 font-medium text-white">
                  <Clock className="mr-2 h-4 w-4" />
                  Atendimento 24/7
                </div>

                <h3 className="mb-4 text-2xl font-bold text-white md:text-3xl">
                  Serviço de Emergência para Reposição de Peças Críticas
                </h3>

                <p className="mb-6 max-w-2xl text-gray-300">
                  Entendemos que o tempo de inatividade de uma embarcação
                  representa custos significativos. Por isso, oferecemos um
                  serviço de emergência 24/7 para fornecimento e entrega de
                  peças críticas em qualquer porto do Brasil.
                </p>

                <div className="mb-6 grid w-full max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#0D6EFD]" />
                    <span className="text-gray-200">
                      Identificação rápida de peças críticas
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#0D6EFD]" />
                    <span className="text-gray-200">
                      Entrega expressa em até 24h
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#0D6EFD]" />
                    <span className="text-gray-200">
                      Suporte técnico especializado
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#0D6EFD]" />
                    <span className="text-gray-200">
                      Linha direta para emergências
                    </span>
                  </div>
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center rounded-lg bg-[#0D6EFD] px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-[#0747A6]"
                >
                  <span className="flex items-center">
                    Contato de Emergência
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

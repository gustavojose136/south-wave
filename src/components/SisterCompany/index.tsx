"use client"

import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { useTranslation } from "react-i18next"

export default function SisterCompany() {
  const { t } = useTranslation()

  return (
    <section className="py-16 bg-[#0F2A47] text-white">
      <div className="container mx-auto px-4">
        {/* Título com span estilizado */}
        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
          {t("sisterCompany.title.pre")}{" "}
          <span className="text-[#0D6EFD]">
            {t("sisterCompany.title.highlight")}
          </span>
        </h2>

        {/* Card minimalista */}
        <div className="max-w-4xl mx-auto bg-[#0A1A2F] rounded-xl overflow-hidden shadow-lg border border-[#0D6EFD]/20">
          <div className="flex flex-col md:flex-row items-center">
            {/* Logo da Galata */}
            <div className="md:w-1/2 p-8 flex justify-center">
              <div className="bg-white/5 rounded-xl p-6 w-48 h-48 flex items-center justify-center">
                <Image
                  src="/images/galatas-logo.svg"
                  alt="Galata"
                  width={160}
                  height={160}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Informação mínima */}
            <div className="md:w-1/2 p-8 text-center md:text-left">
              <h3 className="text-xl font-bold mb-3 text-white">
                {t("sisterCompany.name")}
              </h3>
              <p className="text-gray-300 mb-6">
                {t("sisterCompany.description")}
              </p>

              {/* Link comentado para referência futura */}
              {/*
              <Link
                href="https://www.galata.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-[#0D6EFD] text-white px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-[#0747A6]"
              >
                <span className="flex items-center">
                  {t("sisterCompany.visitWebsite")}
                  <ExternalLink className="ml-2 w-4 h-4" />
                </span>
              </Link>
              */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

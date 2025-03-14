import Link from "next/link"
import { useTranslation } from "react-i18next"
import {
  Ship,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  ExternalLink,
  ChevronRight,
} from "lucide-react"

const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className="relative z-10 bg-gradient-to-b from-[#1A2129] to-[#2D3339] pt-20 lg:pt-[100px]">
      {/* Elementos decorativos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-40 top-20 text-[#00A3FF] opacity-5">
          <Ship className="w-80 h-80" />
        </div>
      </div>

      {/* Ondas decorativas no topo */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          className="text-[#00A3FF] opacity-10 -translate-y-full"
        >
          <path
            fill="currentColor"
            fillOpacity="1"
            d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,96C960,107,1056,117,1152,112C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Coluna 1 - Informações da Empresa */}
          <div className="lg:col-span-1">
            <div className="mb-10">
              <Link href="/" className="flex items-center gap-3 mb-6">
                <div className="bg-[#00A3FF] p-2 rounded-lg">
                  <Ship className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold text-white">
                  Sea <span className="text-[#00A3FF]">Star</span>
                </span>
              </Link>

              <p className="mb-8 text-gray-300 leading-relaxed">
                {t(
                  "footer.description",
                  "Fornecendo suprimentos marítimos de qualidade para embarcações em todos os principais portos do Brasil desde 1999.",
                )}
              </p>

              <div className="flex items-center gap-4">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="bg-[#2D3339] hover:bg-[#00A3FF] p-2 rounded-lg transition-colors duration-300"
                >
                  <Facebook className="w-5 h-5 text-white" />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="bg-[#2D3339] hover:bg-[#00A3FF] p-2 rounded-lg transition-colors duration-300"
                >
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="bg-[#2D3339] hover:bg-[#00A3FF] p-2 rounded-lg transition-colors duration-300"
                >
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="bg-[#2D3339] hover:bg-[#00A3FF] p-2 rounded-lg transition-colors duration-300"
                >
                  <Twitter className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Coluna 2 - Serviços */}
          <div className="lg:col-span-1">
            <div className="mb-10">
              <h4 className="text-lg font-bold text-white mb-6 flex items-center">
                <span className="bg-[#00A3FF] w-1 h-6 mr-3 rounded-full"></span>
                {t("footer.services_title", "Nossos Serviços")}
              </h4>

              <ul className="space-y-4">
                <li>
                  <Link
                    href="/services"
                    className="flex items-center text-gray-300 hover:text-[#00A3FF] transition-colors duration-300 group"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 text-[#00A3FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {t("footer.service_transport", "Suprimentos Marítimos")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="flex items-center text-gray-300 hover:text-[#00A3FF] transition-colors duration-300 group"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 text-[#00A3FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {t("footer.service_port", "Documentação")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="flex items-center text-gray-300 hover:text-[#00A3FF] transition-colors duration-300 group"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 text-[#00A3FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {t("footer.service_consulting", "Logística")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="flex items-center text-gray-300 hover:text-[#00A3FF] transition-colors duration-300 group"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 text-[#00A3FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {t("footer.service_land_marine", "Manutenção")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Coluna 3 - Empresa */}
          <div className="lg:col-span-1">
            <div className="mb-10">
              <h4 className="text-lg font-bold text-white mb-6 flex items-center">
                <span className="bg-[#00A3FF] w-1 h-6 mr-3 rounded-full"></span>
                {t("footer.company_title", "Empresa")}
              </h4>

              <ul className="space-y-4">
                <li>
                  <Link
                    href="/about"
                    className="flex items-center text-gray-300 hover:text-[#00A3FF] transition-colors duration-300 group"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 text-[#00A3FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {t("footer.about", "Sobre Nós")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="flex items-center text-gray-300 hover:text-[#00A3FF] transition-colors duration-300 group"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 text-[#00A3FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {t("footer.contact", "Contato")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ports"
                    className="flex items-center text-gray-300 hover:text-[#00A3FF] transition-colors duration-300 group"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 text-[#00A3FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {t("footer.clients", "Portos")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="flex items-center text-gray-300 hover:text-[#00A3FF] transition-colors duration-300 group"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 text-[#00A3FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {t("footer.careers", "FAQ")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Coluna 4 - Contato */}
          <div className="lg:col-span-1">
            <div className="mb-10">
              <h4 className="text-lg font-bold text-white mb-6 flex items-center">
                <span className="bg-[#00A3FF] w-1 h-6 mr-3 rounded-full"></span>
                {t("footer.contact_title", "Contato")}
              </h4>

              <ul className="space-y-4">
                <li>
                  <a
                    href="mailto:southwaves@southwaves.com"
                    className="flex items-start text-gray-300 hover:text-[#00A3FF] transition-colors duration-300 group"
                  >
                    <Mail className="w-5 h-5 mr-3 mt-0.5 text-[#00A3FF] flex-shrink-0" />
                    <span>southwaves@southwaves.com</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+551335006918"
                    className="flex items-start text-gray-300 hover:text-[#00A3FF] transition-colors duration-300 group"
                  >
                    <Phone className="w-5 h-5 mr-3 mt-0.5 text-[#00A3FF] flex-shrink-0" />
                    <span>+55 (13) 3500-6918</span>
                  </a>
                </li>
                <li className="flex items-start text-gray-300">
                  <MapPin className="w-5 h-5 mr-3 mt-0.5 text-[#00A3FF] flex-shrink-0" />
                  <span>
                    {t("footer.address", "HQ - Tv. Doná Adelina, 35, Paquetá, Santos - SP, 11013-130 - Brazil")}
                  </span>
                </li>
              </ul>

              {/* Botão de Contato */}
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="
                    inline-flex 
                    items-center 
                    justify-center 
                    rounded-xl 
                    bg-[#00A3FF]
                    hover:bg-[#0088D1]
                    px-6 
                    py-3
                    text-sm 
                    font-medium 
                    text-white
                    shadow-lg
                    shadow-[#00A3FF]/20
                    transition-all
                    duration-300
                    transform
                    hover:-translate-y-1
                  "
                >
                  Solicitar Cotação
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Barra de Copyright */}
      <div className="mt-12 border-t border-[#00A3FF]/20 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400 text-center md:text-left">
                {t("footer.copyright", "© 2025 South Waves. Todos os direitos reservados.")}
              </p>
            </div>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-[#00A3FF] text-sm transition-colors duration-300"
              >
                Política de Privacidade
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-[#00A3FF] text-sm transition-colors duration-300">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


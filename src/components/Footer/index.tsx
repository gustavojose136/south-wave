import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer
      className="relative z-10 bg-[#0e1342] pt-20 lg:pt-[100px]"
      data-wow-delay=".15s"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-4/12 xl:w-3/12">
            <div className="mb-10 w-full">
              <Link href="/" className="mb-6 inline-block max-w-[160px]">
                <Image
                  src="/images/logo/logo-white.svg"
                  alt={t("footer.logo_alt")}
                  width={140}
                  height={30}
                  className="max-w-full"
                />
              </Link>
              <p className="mb-8 max-w-[270px] text-base text-white">
                {t("footer.description")}
              </p>
              <div className="-mx-3 flex items-center">
                <a
                  aria-label="Facebook link"
                  href="https://www.facebook.com/galatasservicos"
                  className="px-3 text-white hover:text-gray-300"
                >
                  {/* Ícone Facebook */}
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current"
                  ></svg>
                </a>
                <a
                  aria-label="LinkedIn link"
                  href="https://www.linkedin.com/company/galatasservicos"
                  className="px-3 text-white hover:text-gray-300"
                >
                  {/* Ícone LinkedIn */}
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current"
                  ></svg>
                </a>
                <a
                  aria-label="Instagram link"
                  href="https://www.instagram.com/galatasservicos"
                  className="px-3 text-white hover:text-gray-300"
                >
                  {/* Ícone Instagram */}
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current"
                  ></svg>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
            <div className="mb-10 w-full">
              <h4 className="mb-9 text-lg font-semibold text-white">
                {t("footer.services_title")}
              </h4>
              <ul>
                <li>
                  <a
                    href="/#"
                    className="mb-3 inline-block text-base text-white hover:text-gray-300"
                  >
                    {t("footer.service_transport")}
                  </a>
                </li>
                <li>
                  <a
                    href="/#"
                    className="mb-3 inline-block text-base text-white hover:text-gray-300"
                  >
                    {t("footer.service_port")}
                  </a>
                </li>
                <li>
                  <a
                    href="/#"
                    className="mb-3 inline-block text-base text-white hover:text-gray-300"
                  >
                    {t("footer.service_consulting")}
                  </a>
                </li>
                <li>
                  <a
                    href="/#"
                    className="mb-3 inline-block text-base text-white hover:text-gray-300"
                  >
                    {t("footer.service_land_marine")}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-2/12">
            <div className="mb-10 w-full">
              <h4 className="mb-9 text-lg font-semibold text-white">
                {t("footer.company_title")}
              </h4>
              <ul>
                <li>
                  <a
                    href="/#about"
                    className="mb-3 inline-block text-base text-white hover:text-gray-300"
                  >
                    {t("footer.about")}
                  </a>
                </li>
                <li>
                  <a
                    href="/#contact"
                    className="mb-3 inline-block text-base text-white hover:text-gray-300"
                  >
                    {t("footer.contact")}
                  </a>
                </li>
                <li>
                  <a
                    href="/#clients"
                    className="mb-3 inline-block text-base text-white hover:text-gray-300"
                  >
                    {t("footer.clients")}
                  </a>
                </li>
                <li>
                  <a
                    href="/#careers"
                    className="mb-3 inline-block text-base text-white hover:text-gray-300"
                  >
                    {t("footer.careers")}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full px-4 md:w-2/3 lg:w-6/12 xl:w-3/12">
            <div className="mb-10 w-full">
              <h4 className="mb-9 text-lg font-semibold text-white">
                {t("footer.contact_title")}
              </h4>
              <ul>
                <li>
                  <a
                    href="mailto:contato@galatasservicos.com.br"
                    className="mb-3 inline-block text-base text-white hover:text-gray-300"
                  >
                    contato@galatasservicos.com.br
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+552732321010"
                    className="mb-3 inline-block text-base text-white hover:text-gray-300"
                  >
                    +55 (27) 3232-1010
                  </a>
                </li>
                <li className="text-base text-white">
                  {t("footer.address")}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-white border-opacity-20 py-8 lg:mt-[60px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-2/3 lg:w-1/2">
              <p className="text-center text-base text-white md:text-left">
                {t("footer.copyright")}
              </p>
            </div>
            <div className="w-full px-4 md:w-1/3 lg:w-1/2">
              <div className="my-1 flex justify-center md:justify-end">
                <p className="text-base text-white">
                  {t("footer.developed_by")}{" "}
                  <a
                    href="https://www.linkedin.com/in/gustavo-jose-rosa-2aa375210/"
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                    className="text-gray-300 hover:underline"
                  >
                    Gustavo J.Rosa
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

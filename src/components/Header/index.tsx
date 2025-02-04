"use client";

import { signOut, useSession } from "next-auth/react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react"; // Biblioteca Iconify

import menuData from "./menuData";

const Header = () => {
  const { data: session } = useSession();
  const { i18n } = useTranslation();
  const pathUrl = usePathname();

  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => {
      window.removeEventListener("scroll", handleStickyNavbar);
    };
  }, []);

  // Submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  // Função para trocar idioma
  const handleLanguageChange = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  // Classes para exibir gradiente + fixo quando sticky
  const stickyClasses = sticky
    ? "fixed z-[999] w-full border-b border-[rgb(25,37,74)] bg-gradient-to-r from-[#19254a] to-[#304774] backdrop-blur-md shadow-md dark:border-dark-3/20 dark:bg-dark/80"
    : "absolute bg-transparent w-full";

  return (
    <header
      className={`ud-header left-0 top-0 z-40 flex items-center transition-colors duration-300 ${stickyClasses}`}
    >
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          {/* LOGO */}
          <div className="w-60 max-w-full px-4">
            <Link
              href="/"
              className={`navbar-logo block w-full ${sticky ? "py-2" : "py-5"}`}
            >
              {/* Alternando o logotipo conforme sticky / tema */}
              {pathUrl !== "/" ? (
                <>
                  <Image
                    src={`/images/logo/logo.svg`}
                    alt="logo"
                    width={240}
                    height={30}
                    className="header-logo w-full dark:hidden"
                  />
                  <Image
                    src={`/images/logo/logo-white.svg`}
                    alt="logo"
                    width={240}
                    height={30}
                    className="header-logo hidden w-full dark:block"
                  />
                </>
              ) : (
                <>
                  <Image
                    src={`${
                      sticky
                        ? "/images/logo/logo.svg"
                        : "/images/logo/logo-white.svg"
                    }`}
                    alt="logo"
                    width={140}
                    height={30}
                    className="header-logo w-full dark:hidden"
                  />
                  <Image
                    src={"/images/logo/logo-white.svg"}
                    alt="logo"
                    width={140}
                    height={30}
                    className="header-logo hidden w-full dark:block"
                  />
                </>
              )}
            </Link>
          </div>

          {/* MENU + BOTÃO HAMBURGUER */}
          <div className="flex w-full items-center justify-end px-4">
            <div>
              {/* Botão Mobile */}
              <button
                onClick={navbarToggleHandler}
                id="navbarToggler"
                aria-label="Mobile Menu"
                className="
                  absolute
                  right-4
                  top-1/2
                  block
                  -translate-y-1/2
                  rounded-lg
                  px-3
                  py-[6px]
                  ring-primary
                  focus:ring-2
                  lg:hidden
                "
              >
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-white transition-all duration-300 ${
                    navbarOpen ? " top-[7px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-white transition-all duration-300 ${
                    navbarOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-white transition-all duration-300 ${
                    navbarOpen ? " top-[-8px] -rotate-45" : ""
                  }`}
                />
              </button>

              {/* NAVBAR */}
              <nav
                id="navbarCollapse"
                className={`
                  navbar
                  absolute
                  right-0
                  z-30
                  w-[250px]
                  rounded
                  border-[.5px]
                  border-body-color/50
                  
                  ${
                    sticky 
                    ? "bg-[rgb(25,37,74)]"
                    : "bg-white"
                  }
                  px-6
                  py-4
                  duration-300
                  dark:border-body-color/20
                  dark:bg-dark-2
                  lg:visible
                  lg:static
                  lg:w-auto
                  lg:border-none
                  lg:!bg-transparent
                  lg:p-0
                  lg:opacity-100
                  lg:dark:bg-transparent
                  ${
                    navbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                  }
                `}
              >
                {/* LISTA DE MENU */}
                <ul className="block lg:ml-8 lg:flex lg:gap-x-8 xl:ml-14 xl:gap-x-12">
                  {menuData.map((menuItem, index) =>
                    menuItem.submenu ? (
                      // Se tiver submenu, exibe como dropdown
                      <li className="submenu-item group relative" key={index}>
                        <button
                          onClick={() => handleSubmenu(index)}
                          className={`
                            ud-menu-scroll
                            flex
                            items-center
                            justify-between
                            py-2
                            text-base
                            ${
                              sticky
                                ? "text-white"
                                : "text-black"
                            }
                            transition-colors
                            hover:text-primary
                            dark:text-white
                            dark:hover:texta-primary
                            lg:inline-flex
                            lg:px-0
                            lg:py-6
                          `}
                        >
                          <div className="flex items-center gap-2">
                            {menuItem.icon && (
                              <Icon icon={menuItem.icon} className="text-xl" />
                            )}
                            {menuItem.title}
                          </div>
                          <span className="pl-1">
                            <svg
                              className="duration-300 lg:group-hover:rotate-180"
                              width="16"
                              height="17"
                              viewBox="0 0 16 17"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.00039 11.9C7.85039 11.9 7.72539 11.85 7.60039 11.75L1.85039 6.10005C1.62539 5.87505 1.62539 5.52505 1.85039 5.30005C2.07539 5.07505 2.42539 5.07505 2.65039 5.30005L8.00039 10.525L13.3504 5.25005C13.5754 5.02505 13.9254 5.02505 14.1504 5.25005C14.3754 5.47505 14.3754 5.82505 14.1504 6.05005L8.40039 11.7C8.27539 11.825 8.15039 11.9 8.00039 11.9Z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                        </button>

                        {/* DROPDOWN */}
                        <div
                          className={`
                            submenu
                            relative
                            left-0
                            top-full
                            w-[250px]
                            rounded-sm
                            bg-white
                            p-4
                            transition-[top]
                            duration-300
                            group-hover:opacity-100
                            dark:bg-dark-2
                            lg:invisible
                            lg:absolute
                            lg:top-[110%]
                            lg:block
                            lg:opacity-0
                            lg:shadow-lg
                            lg:group-hover:visible
                            lg:group-hover:top-full
                            ${
                              openIndex === index ? "!-left-[25px]" : "hidden"
                            }
                          `}
                        >
                          {menuItem?.submenu?.map((submenuItem, i) => (
                            <button
                              key={i}
                              onClick={() =>
                                submenuItem.action
                                  ? handleLanguageChange(submenuItem.action)
                                  : null
                              }
                              className="
                                block
                                w-full
                                rounded
                                px-4
                                py-[10px]
                                text-left
                                text-sm
                                text-body-color
                                hover:text-primary
                                dark:text-dark-6
                                dark:hover:text-primary
                              "
                            >
                              {submenuItem.title}
                            </button>
                          ))}
                        </div>
                      </li>
                    ) : (
                      // Itens de menu sem submenu
                      <li key={index} className="group relative">
                        <Link
                          href={menuItem.path || "#"}
                          className={`
                            ud-menu-scroll
                            flex
                            items-center
                            gap-2
                            py-2
                            text-base
                            transition-colors
                            hover:text-primary
                            dark:text-white
                            dark:hover:text-primary
                            lg:inline-flex
                            lg:px-0
                            lg:py-6
                            ${
                              sticky
                                ? "text-white"
                                : "text-black"
                            }
                          `}
                        >
                          {menuItem.icon && (
                            <Icon icon={menuItem.icon} className="text-xl" />
                          )}
                          {menuItem.title}
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

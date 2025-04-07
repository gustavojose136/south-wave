"use client"

import { useSession } from "next-auth/react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { Icon } from "@iconify/react"
import { Ship, ChevronDown, Menu, X } from "lucide-react"

import menuData from "./menuData"

const Header = () => {
  const { data: session } = useSession()
  const { i18n, t } = useTranslation()
  const pathUrl = usePathname()

  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false)
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen)
  }

  // Sticky Navbar
  const [sticky, setSticky] = useState(false)
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true)
    } else {
      setSticky(false)
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar)
    return () => {
      window.removeEventListener("scroll", handleStickyNavbar)
    }
  }, [])

  // Submenu handler
  const [openIndex, setOpenIndex] = useState(-1)
  const handleSubmenu = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  // Função para trocar idioma
  const handleLanguageChange = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  // Classes para exibir gradiente + fixo quando sticky
  const stickyClasses = sticky
    ? "fixed z-[999] w-full border-b border-[#00A3FF]/20 bg-gradient-to-r from-[#1A2129] to-[#2D3339] backdrop-blur-md shadow-lg shadow-black/10"
    : "absolute bg-transparent w-full"

  return (
    <header className={`left-0 top-0 z-40 flex items-center transition-all duration-300 ${stickyClasses}`}>
      <div className="container mx-auto px-4">
        <div className="relative -mx-4 flex items-center justify-between">
          {/* LOGO */}
          <div className="w-60 max-w-full px-4">
            <Link href="/" className={`flex items-center gap-3 ${sticky ? "py-3" : "py-5"}`}>
              <div
                className={`bg-[#00A3FF] p-2 rounded-lg transition-all duration-300 ${sticky ? "shadow-md shadow-[#00A3FF]/20" : ""}`}
              >
                <Ship className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                Sea <span className="text-[#00A3FF]">Star</span>
              </span>
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
                  ring-[#00A3FF]
                  focus:ring-2
                  lg:hidden
                "
              >
                {navbarOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
              </button>

              {/* NAVBAR */}
              <nav
                id="navbarCollapse"
                className={`
                  absolute
                  right-4
                  top-full
                  z-30
                  w-[280px]
                  rounded-xl
                  border-[.5px]
                  border-[#00A3FF]/20
                  bg-[#1A2129]/95
                  px-6
                  py-4
                  duration-300
                  shadow-xl
                  backdrop-blur-md
                  lg:visible
                  lg:static
                  lg:w-auto
                  lg:border-none
                  lg:!bg-transparent
                  lg:p-0
                  lg:shadow-none
                  ${navbarOpen ? "visible opacity-100" : "invisible opacity-0 lg:visible lg:opacity-100"}
                `}
              >
                {/* LISTA DE MENU */}
                <ul className="block lg:flex lg:gap-x-8">
                  {menuData.map((menuItem, index) =>
                    menuItem.submenu ? (
                      // Se tiver submenu, exibe como dropdown
                      <li className="group relative" key={index}>
                        <button
                          onClick={() => handleSubmenu(index)}
                          className={`
                            flex
                            items-center
                            justify-between
                            py-3
                            text-base
                            text-white
                            transition-colors
                            hover:text-[#00A3FF]
                            lg:inline-flex
                            lg:px-0
                            lg:py-6
                            w-full
                            lg:w-auto
                          `}
                        >
                          <div className="flex items-center gap-2">
                            {menuItem.icon && <Icon icon={menuItem.icon} className="text-xl" />}
                            {menuItem.title.startsWith("menu.") ? t(menuItem.title) : menuItem.title}
                          </div>
                          <ChevronDown
                            className={`w-4 h-4 ml-1 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""} lg:group-hover:rotate-180`}
                          />
                        </button>

                        {/* DROPDOWN */}
                        <div
                          className={`
                            relative
                            left-0
                            top-full
                            w-full
                            rounded-xl
                            bg-[#2D3339]
                            border
                            border-[#00A3FF]/20
                            p-4
                            transition-all
                            duration-300
                            group-hover:opacity-100
                            lg:invisible
                            lg:absolute
                            lg:top-[110%]
                            lg:block
                            lg:min-w-[230px]
                            lg:opacity-0
                            lg:shadow-lg
                            lg:group-hover:visible
                            lg:group-hover:top-full
                            ${openIndex === index ? "block" : "hidden lg:block"}
                          `}
                        >
                          {menuItem?.submenu?.map((submenuItem, i) =>
                            submenuItem.action ? (
                              <button
                                key={i}
                                onClick={() => handleLanguageChange(submenuItem.action ?? "")}
                                className="
                                  block
                                  w-full
                                  rounded-lg
                                  px-4
                                  py-3
                                  text-left
                                  text-sm
                                  text-white
                                  hover:bg-[#00A3FF]/10
                                  hover:text-[#00A3FF]
                                  transition-colors
                                  duration-200
                                "
                              >
                                {submenuItem.title.startsWith("menu.") ? t(submenuItem.title) : submenuItem.title}
                              </button>
                            ) : (
                              <Link
                                key={i}
                                href={submenuItem.path || "#"}
                                className="
                                  block
                                  w-full
                                  rounded-lg
                                  px-4
                                  py-3
                                  text-left
                                  text-sm
                                  text-white
                                  hover:bg-[#00A3FF]/10
                                  hover:text-[#00A3FF]
                                  transition-colors
                                  duration-200
                                "
                                onClick={() => setNavbarOpen(false)}
                              >
                                {submenuItem.title.startsWith("menu.") ? t(submenuItem.title) : submenuItem.title}
                              </Link>
                            ),
                          )}
                        </div>
                      </li>
                    ) : (
                      // Itens de menu sem submenu
                      <li key={index} className="group relative">
                        <Link
                          href={menuItem.path || "#"}
                          className={`
                            flex
                            items-center
                            gap-2
                            py-3
                            text-base
                            text-white
                            transition-colors
                            hover:text-[#00A3FF]
                            lg:inline-flex
                            lg:px-0
                            lg:py-6
                            w-full
                            lg:w-auto
                          `}
                          onClick={() => setNavbarOpen(false)}
                        >
                          {menuItem.icon && <Icon icon={menuItem.icon} className="text-xl" />}
                          {menuItem.title.startsWith("menu.") ? t(menuItem.title) : menuItem.title}
                        </Link>
                      </li>
                    ),
                  )}
                </ul>

                {/* BOTÕES DE AÇÃO */}
                {/* <div className="mt-4 flex flex-col gap-3 lg:mt-0 lg:flex-row lg:items-center lg:ml-8">
                  {session ? (
                    <button
                      onClick={() => signOut()}
                      className="
                        inline-flex 
                        items-center 
                        justify-center 
                        rounded-xl 
                        bg-transparent
                        border
                        border-[#00A3FF]/30
                        px-6 
                        py-2.5
                        text-sm 
                        font-medium 
                        text-white
                        hover:bg-[#00A3FF]/10
                        transition-all
                        duration-300
                      "
                    >
                      Sair
                    </button>
                  ) : (
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
                        py-2.5
                        text-sm 
                        font-medium 
                        text-white
                        shadow-lg
                        shadow-[#00A3FF]/20
                        transition-all
                        duration-300
                      "
                      onClick={() => setNavbarOpen(false)}
                    >
                      Contato
                    </Link>
                  )}
                </div> */}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header


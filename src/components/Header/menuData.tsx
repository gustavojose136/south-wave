import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
    icon: "material-symbols:home",
  },
  {
    id: 2,
    title: "Sobre Nós",
    path: "/about",
    newTab: false,
    icon: "mdi:office-building-cog-outline",
  },
  {
    id: 3,
    title: "Serviços",
    path: "/features",
    newTab: false,
    icon: "mdi:cog-sync-outline",
  },
  {
    id: 5,
    title: "Contato",
    path: "/contact",
    newTab: false,
    icon: "mdi:contact-mail-outline",
  },
  {
    id: 6,
    title: "Loja",
    path: "/shop",
    newTab: false,
    icon: "mdi:cart-outline",
  },
  {
    id: 7,
    title: "Idioma / Language / 语言 [Beta]",
    newTab: false,
    icon: "mdi:translate-variant",
    submenu: [
      {
        id: 71,
        title: "English",
        path: "#",
        newTab: false,
        action: "en",
      },
      {
        id: 72,
        title: "Português",
        path: "#",
        newTab: false,
        action: "pt",
      },
      {
        id: 73,
        title: "中文",
        path: "#",
        newTab: false,
        action: "zh",
      },
    ],
  },
];

export default menuData;

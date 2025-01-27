import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 24 24"
      >
        <g fill="none" fill-rule="evenodd">
          <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
          <path
            fill="#fff"
            d="M10 3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1.32l3.329.554a2 2 0 0 1 1.67 1.973v3.432l2.06.686a1.25 1.25 0 0 1 .753 1.679l-2.521 5.883l1.156.579a1 1 0 1 1-.894 1.788l-2.659-1.329a2 2 0 0 0-1.788 0l-1.317.659a4 4 0 0 1-3.578 0l-1.317-.659a2 2 0 0 0-1.789 0l-2.658 1.33a1 1 0 1 1-.894-1.79l1.832-.916l-3.102-5.428a1.25 1.25 0 0 1 .69-1.806L5 10.279V6.847a2 2 0 0 1 1.67-1.973L10 4.32zM7.25 17.425a4 4 0 0 1 2.538.351l1.316.659a2 2 0 0 0 1.79 0l1.316-.659a4 4 0 0 1 3.282-.133l2.16-5.038L12 10.055l-7.527 2.508zM17 9.613V6.847l-5-.833l-5 .833v2.766l4.367-1.456a2 2 0 0 1 1.265 0z"
          />
        </g>
      </svg>
    ),
    title: "Navios",
    paragraph:
      "Realizamos a limpeza completa de porões, amuras e convés, além de colocação de lonas para descarga segura de granéis entre navios e costado, garantindo eficiência e proteção durante as operações.",
    btn: "Saiba Mais",
    btnLink: "/#",
  },
  {
    id: 2,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 24 24"
      >
        <path
          fill="#fff"
          d="m12 5.15l-8 3.2V19h2v-6q0-.825.588-1.412T8 11h8q.825 0 1.413.588T18 13v6h2V8.35zM2 19V8.35q0-.625.338-1.125T3.25 6.5l8-3.2q.35-.15.75-.15t.75.15l8 3.2q.575.225.913.725T22 8.35V19q0 .825-.587 1.413T20 21h-4v-8H8v8H4q-.825 0-1.412-.587T2 19m7 2v-2h2v2zm2-3v-2h2v2zm2 3v-2h2v2zM8 11h8z"
        />
      </svg>
    ),
    title: "Armazém",
    paragraph:
      "Oferecemos serviços de limpeza e manutenção em armazéns, incluindo pintura, pequenos reparos de alvenaria, e lonamento de granéis para separação e armazenamento adequado durante carga e descarga.",
    btn: "Saiba Mais",
    btnLink: "/#",
  },
  {
    id: 3,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50px"
        height="50px"
        viewBox="0 0 24 24"
      >
        <path
          fill="#fff"
          d="M20 21h-3v-2h3zm0-4h-3v-2h3zm0-4h-3v-2h3zm4-5.2C23.6 4.5 20.8 2 17.5 2c-1.7 0-3.4.7-4.6 1.9c-.7.7-1.2 1.4-1.5 2.3L15.6 9H22v13h2zM13.3 7c.6-1.8 2.3-3 4.2-3s3.6 1.2 4.2 3zM7.5 6L0 11v11h15V11zM13 20h-3v-6H5v6H2v-8l5.5-3.5L13 12z"
        />
      </svg>
    ),
    title: "Limpeza e Operação em Silos",
    paragraph:
      "Realizamos a limpeza interna e externa de silos, lavagem de estruturas metálicas para controle de pragas agrícolas e conservação. Oferecemos suporte e acompanhamento em operações de carregamento e descarregamento.",
    btn: "Saiba Mais",
    btnLink: "/#",
  },
  {
    id: 4,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50px"
        height="50px"
        viewBox="0 0 24 24"
      >
        <path
          fill="#fff"
          d="M20 10h-2l-4.79-3.5A1.85 1.85 0 0 0 14 5a2.03 2.03 0 0 0-1-1.721V2h-1v2a1 1 0 1 1-1 1h-1a1.85 1.85 0 0 0 .796 1.5L6 10H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h16a1.997 1.997 0 0 0 2-2v-8a2 2 0 0 0-2-2m-8-3c.006 0 4 3 4 3H8Zm8 13H4v-8h16Z"
        />
        <path
          fill="#fff"
          d="M14 19a1 1 0 0 0 1-1v-4a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1m4 0a1 1 0 0 0 1-1v-4a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1M6 19a1 1 0 0 0 1-1v-4a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1m4 0a1 1 0 0 0 1-1v-4a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1"
        />
      </svg>
    ),
    title: "Peação e Despeação",
    paragraph:
      "Especialistas na fixação e liberação de máquinas, veículos e equipamentos, garantindo segurança e agilidade nas operações de transporte e logística.",
    btn: "Saiba Mais",
    btnLink: "/#",
  },
  {
    id: 5,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50px"
        height="50px"
        viewBox="0 0 32 32"
      >
        <path
          fill="#fff"
          d="M16 24v-2a3.3 3.3 0 0 0 3-3h2a5.267 5.267 0 0 1-5 5"
        />
        <path
          fill="#fff"
          d="M16 28a9.01 9.01 0 0 1-9-9a10 10 0 0 1 1.494-4.955l6.659-10.608a1.04 1.04 0 0 1 1.694 0l6.63 10.556A10.06 10.06 0 0 1 25 19a9.01 9.01 0 0 1-9 9m0-22.152l-5.782 9.208A8 8 0 0 0 9 19a7 7 0 0 0 14 0a8.06 8.06 0 0 0-1.248-3.995Z"
        />
      </svg>
    ),
    title: "Limpeza de Equipamentos",
    paragraph:
      "Executamos a limpeza de equipamentos como moegas e GRABs utilizados na descarga de navios, assegurando eficiência operacional e prolongando a vida útil dos equipamentos.",
    btn: "Saiba Mais",
    btnLink: "/#",
  },
  {
    id: 6,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50px"
        height="50px"
        viewBox="0 0 32 32"
      >
        <path
          fill="#fff"
          d="M16 24v-2a3.3 3.3 0 0 0 3-3h2a5.267 5.267 0 0 1-5 5"
        />
        <path
          fill="#fff"
          d="M16 28a9.01 9.01 0 0 1-9-9a10 10 0 0 1 1.494-4.955l6.659-10.608a1.04 1.04 0 0 1 1.694 0l6.63 10.556A10.06 10.06 0 0 1 25 19a9.01 9.01 0 0 1-9 9m0-22.152l-5.782 9.208A8 8 0 0 0 9 19a7 7 0 0 0 14 0a8.06 8.06 0 0 0-1.248-3.995Z"
        />
      </svg>
    ),
    title: "Limpeza e Apoio na Expedição",
    paragraph:
      "Serviços completos de lacre e vistoria em caminhões, organização e separação de lacres, monitoramento de painéis e controles, além de limpeza e conservação de toda a área de expedição.",
    btn: "Saiba Mais",
    btnLink: "/#",
  },
  {
    id: 7,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50px"
        height="50px"
        viewBox="0 0 16 16"
      >
        <path
          fill="#fff"
          fill-rule="evenodd"
          d="M12.5 12.618c.307-.275.5-.674.5-1.118V6.977a1.5 1.5 0 0 0-.585-1.189l-3.5-2.692a1.5 1.5 0 0 0-1.83 0l-3.5 2.692A1.5 1.5 0 0 0 3 6.978V11.5A1.496 1.496 0 0 0 4.493 13H5V9.5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2V13h.507c.381-.002.73-.146.993-.382m2-1.118a3 3 0 0 1-3 3h-7a3 3 0 0 1-3-3V6.977A3 3 0 0 1 2.67 4.6l3.5-2.692a3 3 0 0 1 3.66 0l3.5 2.692a3 3 0 0 1 1.17 2.378zm-5-2A.5.5 0 0 0 9 9H7a.5.5 0 0 0-.5.5V13h3z"
          clip-rule="evenodd"
        />
      </svg>
    ),
    title: "Pátio",
    paragraph:
      "Manutenção de áreas externas, incluindo limpeza e conservação de pátios, capinas e remoção de resíduos, promovendo um ambiente limpo e seguro.",
    btn: "Saiba Mais",
    btnLink: "/#",
  },
  {
    id: 8,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50px"
        height="50px"
        viewBox="0 0 256 256"
      >
        <path
          fill="#fff"
          d="M232 104h-24V56h24a8 8 0 0 0 0-16h-26.17A16 16 0 0 0 192 32h-16a16 16 0 0 0-13.83 8H144A104.11 104.11 0 0 0 40 144v18.16A16 16 0 0 0 32 176v16a16 16 0 0 0 8 13.84V232a8 8 0 0 0 16 0v-24h48v24a8 8 0 0 0 16 0v-26.16a16 16 0 0 0 8-13.84v-16a16 16 0 0 0-8-13.84V144a24 24 0 0 1 24-24h18.17a16 16 0 0 0 13.83 8h16a16 16 0 0 0 13.83-8H232a8 8 0 0 0 0-16m-120 72v16H48v-16Zm-8-32v16H56v-16a88.1 88.1 0 0 1 88-88h16v48h-16a40 40 0 0 0-40 40m72-32V48h16v64Z"
        />
      </svg>
    ),
    title: "Forração e Recepção de Tubos",
    paragraph:
      "Serviço especializado de separação e forração de madeiras com EVA para recepção segura e organizada de tubos, garantindo proteção durante o manuseio e armazenamento.",
    btn: "Saiba Mais",
    btnLink: "/#",
  },
];

export default featuresData;

import { Metadata } from "next";
// import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contato | Gálatas Marítimos",
  description: "Entre em contato para saber mais",
};

const ContactPage = () => {
  return (
    <>
      {/* Se quiser usar o Breadcrumb, descomente abaixo: */}
      {/* <Breadcrumb pageName="Página de Contato" /> */}
      <Contact />
    </>
  );
};

export default ContactPage;

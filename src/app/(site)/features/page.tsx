import About from "@/components/About";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Features from "@/components/Features";
import Team from "@/components/Team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "About Us | Play SaaS Starter Kit and Boilerplate for Next.js",
  description: "This is About page description",
};

const FeaturePage = () => {
  return (
    <main>
      {/* <Breadcrumb pageName="Pagina de servicos" /> */}
      <Features />
    </main>
  );
};

export default FeaturePage;

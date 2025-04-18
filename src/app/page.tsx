import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import ScrollUp from "@/components/Common/ScrollUp";
import { Metadata } from "next";
import Services from "@/components/Services";
import CulturalProducts from "@/components/CulturalProducts";
import SisterCompany from "@/components/SisterCompany";

export const metadata: Metadata = {
  title: "South Waves - Since 1999",
  description: "Suprimentos marítimos, logística e qualidade em primeiro lugar.",
};

export default function Home() {
  return (
    <main>
      <ScrollUp />
      <Hero />
      <SisterCompany />
      <About /> 
      {/* <CallToAction /> */}
      {/* <Clients /> */}
      {/* <Pricing /> */}
      {/* <Testimonials /> */}
      <WhyChooseUs />
      <Services />
      <Products />
      <CulturalProducts />
      <Faq />
      {/* <Team /> */}
      {/* <HomeBlogSection posts={posts} /> */}
      <Contact />
    </main>
  );
}
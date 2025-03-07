"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import "../styles/index.css";
import "../styles/prism-vsc-dark-plus.css";
import ToasterContext from "./api/contex/ToasetContex";
import { useEffect, useState } from "react";
import PreLoader from "@/components/Common/PreLoader";
import { I18nextProvider } from "react-i18next";
import i18n from "@/i18n"; // Certifique-se de que o arquivo i18n.ts está configurado corretamente
import WhatsAppButton from "@/components/WhatsAppButton";
import WheChatButton from "@/components/WheChatButton";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <html suppressHydrationWarning={true} className="!scroll-smooth" lang="en">
      <head />

      <body>
        {loading ? (
          <PreLoader />
        ) : (
          <SessionProvider>
            <ThemeProvider
              attribute="class"
              enableSystem={false}
              defaultTheme="light"
            >
              <ToasterContext />
              <I18nextProvider i18n={i18n}>
                <Header />
                {children}
                <Footer />
                <ScrollToTop />
                <WhatsAppButton /> 
                <WheChatButton /> 
              </I18nextProvider>
            </ThemeProvider>
          </SessionProvider>
        )}
      </body>
    </html>
  );
}

"use client";

import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const phoneNumber = "5547984064678"; 

  const message = "Olá, gostaria de falar com vocês!";

  const handleWhatsAppClick = () => {
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(true);
      }
    };
    
    setIsVisible(true);
    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-20 right-8 z-[999]">
      {isVisible && (
        <button
          onClick={handleWhatsAppClick}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition duration-300 hover:bg-green-600"
          aria-label="Fale conosco no WhatsApp"
        >
          <Icon icon="logos:whatsapp-icon" className="text-3xl" />
        </button>
      )}
    </div>
  );
};

export default WhatsAppButton;

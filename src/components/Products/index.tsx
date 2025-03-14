"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Anchor, Box, Clipboard, Shield, Shirt, Flame, Compass, Sparkles, Swords, Paintbrush, Tv, Rocket } from 'lucide-react';

// Definição dos produtos com ícones e descrições
const productData = [
  {
    title: "Tops",
    icon: <Box className="w-10 h-10 mb-4" />,
    description: "Suprimentos essenciais para o convés e operações diárias.",
    color: "from-blue-400 to-cyan-300"
  },
  {
    title: "Stationery",
    icon: <Clipboard className="w-10 h-10 mb-4" />,
    description: "Material de escritório e documentação para sua embarcação.",
    color: "from-indigo-400 to-purple-300"
  },
  {
    title: "Safety Equipments",
    icon: <Shield className="w-10 h-10 mb-4" />,
    description: "Equipamentos de segurança certificados e de alta qualidade.",
    color: "from-red-400 to-orange-300"
  },
  {
    title: "Protection Clothes",
    icon: <Shirt className="w-10 h-10 mb-4" />,
    description: "Roupas de proteção para todas as condições de trabalho.",
    color: "from-yellow-400 to-amber-300"
  },
  {
    title: "Clothing",
    icon: <Shirt className="w-10 h-10 mb-4" />,
    description: "Uniformes e roupas para tripulação com personalização.",
    color: "from-blue-400 to-sky-300"
  },
  {
    title: "Firefighting",
    icon: <Flame className="w-10 h-10 mb-4" />,
    description: "Equipamentos de combate a incêndio e prevenção.",
    color: "from-red-500 to-rose-400"
  },
  {
    title: "Deck Stores",
    icon: <Compass className="w-10 h-10 mb-4" />,
    description: "Suprimentos especializados para operações de convés.",
    color: "from-teal-400 to-emerald-300"
  },
  {
    title: "Cleaning",
    icon: <Sparkles className="w-10 h-10 mb-4" />,
    description: "Produtos de limpeza industrial e marítima.",
    color: "from-cyan-400 to-blue-300"
  },
  {
    title: "Anti-Piracy",
    icon: <Swords className="w-10 h-10 mb-4" />,
    description: "Soluções de segurança contra pirataria marítima.",
    color: "from-slate-400 to-gray-300"
  },
  {
    title: "Paints",
    icon: <Paintbrush className="w-10 h-10 mb-4" />,
    description: "Tintas marítimas de alta durabilidade e resistência.",
    color: "from-purple-400 to-fuchsia-300"
  },
  {
    title: "Home Appliance",
    icon: <Tv className="w-10 h-10 mb-4" />,
    description: "Eletrodomésticos e conforto para a tripulação.",
    color: "from-green-400 to-emerald-300"
  },
  {
    title: "Marine Pyrotechnics",
    icon: <Rocket className="w-10 h-10 mb-4" />,
    description: "Sinalizadores e pirotecnia marítima certificada.",
    color: "from-orange-400 to-amber-300"
  }
];

const Products = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Variantes de animação para o container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Variantes de animação para os elementos flutuantes de fundo
  const floatingElements = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 10 + 5,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10
  }));

  return (
    <section
      id="products"
      className="relative py-24 bg-gradient-to-b from-[#0a0d30] to-[#101645] text-white overflow-hidden"
    >
      {/* Elementos decorativos flutuantes */}
      {floatingElements.map((el) => (
        <motion.div
          key={el.id}
          className="absolute rounded-full bg-[#8ab6d6] opacity-10"
          style={{
            width: el.size,
            height: el.size,
            left: `${el.x}%`,
            top: `${el.y}%`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{
            duration: el.duration,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Âncora decorativa */}
      <motion.div 
        className="absolute right-0 top-0 text-[#8ab6d6] opacity-5"
        initial={{ rotate: 0 }}
        animate={{ rotate: 10 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      >
        <Anchor className="w-96 h-96" />
      </motion.div>

      {/* TÍTULO E SUBTÍTULO */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8ab6d6] to-[#a8d8ff]">
              Nossos Produtos & Serviços
            </span>
          </h2>
          <motion.p 
            className="text-gray-100 text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="italic font-medium">"You name it, we take it."</span> Confira abaixo alguns dos principais itens
            que fornecemos para embarcações e operações portuárias.
          </motion.p>
        </motion.div>
      </div>

      {/* LISTA DE PRODUTOS */}
      <motion.div 
        className="container mx-auto px-4 mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {productData.map((product, index) => (
          <ProductCard 
            key={index} 
            product={product} 
            index={index}
            isHovered={hoveredIndex === index}
            onHover={() => setHoveredIndex(index)}
            onLeave={() => setHoveredIndex(null)}
          />
        ))}
      </motion.div>

      {/* CTA */}
      <motion.div 
        className="container mx-auto px-4 mt-20 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <a 
          href="#contact" 
          className="inline-block px-8 py-4 bg-gradient-to-r from-[#8ab6d6] to-[#6a9cc0] text-white font-bold rounded-full hover:shadow-lg hover:shadow-[#8ab6d6]/20 transition-all duration-300 transform hover:-translate-y-1"
        >
          Solicite um Orçamento
        </a>
      </motion.div>
    </section>
  );
};

export default Products;

// Componente de card de produto com animações
const ProductCard = ({ 
  product, 
  index, 
  isHovered, 
  onHover, 
  onLeave 
}: { 
  product: typeof productData[0], 
  index: number,
  isHovered: boolean,
  onHover: () => void,
  onLeave: () => void
}) => {
  // Variantes de animação para cada card
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      className="relative group"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r rounded-xl blur-sm opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className={`
        relative 
        bg-gradient-to-b from-[#131a5e]/80 to-[#0b0e2a]/90
        backdrop-blur-sm
        border border-[#8ab6d6]/20
        rounded-xl
        p-8
        text-center
        h-full
        flex flex-col items-center justify-center
        overflow-hidden
        z-10
      `}>
        {/* Círculo de gradiente para o ícone */}
        <div className={`
          relative
          w-20 h-20
          rounded-full
          flex items-center justify-center
          bg-gradient-to-br ${product.color}
          mb-2
          text-[#101645]
          transition-all duration-500
          ${isHovered ? 'scale-110' : 'scale-100'}
        `}>
          <motion.div
            animate={{ rotate: isHovered ? 360 : 0 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          >
            {product.icon}
          </motion.div>
        </div>

        <h3 className="text-xl font-bold mb-3 text-[#8ab6d6]">{product.title}</h3>
        
        <motion.p 
          className="text-sm text-gray-100"
          animate={{ opacity: isHovered ? 1 : 0.7 }}
          transition={{ duration: 0.3 }}
        >
          {product.description}
        </motion.p>

        {/* Brilho decorativo no canto */}
        <motion.div 
          className="absolute -top-10 -right-10 w-20 h-20 bg-[#8ab6d6] rounded-full opacity-0 group-hover:opacity-20 blur-xl"
          animate={{ 
            scale: isHovered ? [1, 1.2, 1] : 1,
          }}
          transition={{ 
            duration: 2, 
            repeat: isHovered ? Infinity : 0,
            repeatType: "reverse" 
          }}
        />
      </div>
    </motion.div>
  );
};

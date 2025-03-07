"use client";

import React from "react";

const Products = () => {
  return (
    <section
      id="products"
      className="
        relative 
        py-20 
        bg-[#101645] 
        text-white
        overflow-hidden
      "
    >
      {/* TÍTULO E SUBTÍTULO */}
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#8ab6d6] mb-4">
          Nossos Produtos & Serviços
        </h2>
        <p className="text-gray-100 text-lg max-w-3xl mx-auto">
          “You name it, we take it.” Confira abaixo alguns dos principais itens
          que fornecemos para embarcações e operações portuárias.
        </p>
      </div>

      {/* LISTA DE PRODUTOS */}
      <div className="container mx-auto px-4 mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/** Exemplo de cada item */}
        <ProductCard title="Tops" />
        <ProductCard title="Stationery" />
        <ProductCard title="Safety Equipments" />
        <ProductCard title="Protection Clothes" />
        <ProductCard title="Clothing" />
        <ProductCard title="Firefighting" />
        <ProductCard title="Deck Stores" />
        <ProductCard title="Cleaning" />
        <ProductCard title="Anti-Piracy" />
        <ProductCard title="Paints" />
        <ProductCard title="Home Appliance" />
        <ProductCard title="Marine Pyrotechnics" />
      </div>
    </section>
  );
};

export default Products;

/* COMPONENTE PARA CADA CARTÃO DE PRODUTO */
const ProductCard = ({ title }: { title: string }) => (
  <div
    className="
      bg-[#0b0e2a]
      border
      border-[#8ab6d6]/30
      rounded-lg
      p-6
      text-center
      shadow-md
      hover:shadow-xl
      transition
    "
  >
    <h3 className="text-xl font-bold mb-2 text-[#8ab6d6]">{title}</h3>
    <p className="text-sm text-gray-100">
      Fornecemos {title} com qualidade e confiabilidade.
    </p>
  </div>
);

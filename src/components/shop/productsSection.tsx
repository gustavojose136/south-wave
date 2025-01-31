"use client";

import { Product } from "@/types/product";
import { Icon } from "@iconify/react";
import Image from "next/image";
import React from "react";

interface ProductSectionProps {
  products: Product[];
  addItemToCart: (product: Product) => void;
}

function ProductSection({ products, addItemToCart }: ProductSectionProps) {
  return (
    <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="relative flex flex-col rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow"
        >
          {/* Imagem */}
          <div className="relative aspect-square overflow-hidden rounded-t-lg">
            <Image
              src={product.imageSrc}
              fill
              className="object-cover"
              alt={product.imageAlt}
            />
            <span className="absolute left-2 top-2 rounded-full bg-black/80 px-3 py-1 text-xs text-white">
              {product.category}
            </span>
          </div>

          {/* Conteúdo */}
          <div className="p-4 flex flex-col gap-3">
            {/* <div className="flex justify-between items-start">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <span className="text-sm bg-gray-100 px-2 py-1 rounded">
                Estoque: {product.stockQnt}
              </span>
            </div> */}

            {product.price && (
              <div className="text-lg font-bold text-primary flex items-center gap-1">
                <Icon icon="mdi:tag-outline" className="text-xl" />
                {product.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </div>
            )}

            {product.specifications && (
              <ul className="text-sm text-gray-600">
                {product.specifications.map((spec, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Icon icon="mdi:check" className="text-green-500" />
                    {spec}
                  </li>
                ))}
              </ul>
            )}

            <button
              onClick={() => addItemToCart(product)}
              className="mt-auto flex items-center justify-center gap-2 bg-primary text-white py-2 rounded-lg hover:bg-primary-dark transition-colors"
            >
              <Icon icon="tdesign:cart" className="text-lg" />
              Adicionar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductSection;

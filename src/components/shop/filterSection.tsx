"use client";

import { Icon } from "@iconify/react";
import { SetStateAction } from "react";

interface FilterSectionProps {
  openFilter: boolean;
  setOpenFilter: (value: SetStateAction<boolean>) => void;
  searchQuery: string;
  setSearchQuery: (value: SetStateAction<string>) => void;
  selectedCategory: string;
  setSelectedCategory: (value: SetStateAction<string>) => void;
  categories: string[];
}

export default function FilterSection({
  openFilter,
  setOpenFilter,
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  categories,
}: FilterSectionProps) {

  return (
    <div
      id="filterDiv"
      // Lado esquerdo: translate-x-[-100%] para esconder; 0 para mostrar
      className="
        fixed inset-y-0 left-0
        z-50  
        flex h-full w-full max-w-sm flex-col
        bg-white shadow-xl transition-transform duration-300 ease-in-out
      "
      style={{
        transform: openFilter ? "translateX(0)" : "translateX(-100%)",
      }}
    >
      {/* Cabeçalho do Painel de Filtro */}
      <div className="flex items-center justify-between px-4 py-4 border-b">
        <h2 className="flex items-center gap-2 text-xl font-medium text-gray-900">
          <Icon icon="material-symbols:filter-alt" className="text-2xl" />
          Filtros
        </h2>
        {/* Fechar painel (todas as telas ou só mobile) */}
        <button onClick={() => setOpenFilter(false)}>
          <Icon icon="zondicons:close" className="text-2xl" />
        </button>
      </div>

      {/* Conteúdo do Filtro */}
      <div className="px-4 py-6 flex flex-col gap-4">
        {/* Input de busca (com ícone de lupa embutido) */}
        <div className="relative">
          <Icon
            icon="mdi:magnify"
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Pesquisar produto..."
            className="w-full p-2 pl-10 border rounded-lg focus:outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Select de categoria */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-600">
            <Icon
              icon="mdi:filter-variant"
              className="inline-block mr-1 text-gray-500"
            />
            Categoria
          </label>
          <select
            className="p-2 border rounded-lg"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

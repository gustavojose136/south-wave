"use client";

import { useEffect, useState } from "react";
import { Product } from "@/types/product";
import FilterSection from "@/components/shop/filterSection";
import ProductSection from "@/components/shop/productsSection";
import CartSection from "@/components/shop/cartSection";
import { Icon } from "@iconify/react";

const ShopPage = () => {
  // Estados gerais
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [productsCart, setProductsCart] = useState<Product[]>([]);

  // Estados de abertura/fechamento de painéis
  const [openFilter, setOpenFilter] = useState<boolean>(false);
  const [openCart, setOpenCart] = useState<boolean>(false);

  // Estados de busca e categoria
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");

  // Número de WhatsApp (exemplo)
  const whatsappNumber = "5547996629988";

  // Exemplo de produtos fake
  const generateFakeProducts = () => {
    const fakeProducts: Product[] = [
      {
        id: "1",
        name: "Balcão Comercial em Aço",
        category: "Móveis Industriais",
        imageSrc: "/images/produtos/teste.jpg",
        imageAlt: "Balcão comercial em aço inoxidável",
        stockQnt: 8,
        price: 2450.0,
        specifications: ["Aço inoxidável", "2.0m x 0.8m", "Resistente à corrosão"],
      },
      {
        id: "2",
        name: "Estante Metálica Industrial",
        category: "Armazenamento",
        imageSrc: "/images/produtos/teste.jpg",
        imageAlt: "Estante metálica para armazenamento",
        stockQnt: 15,
        price: 899.9,
        specifications: ["Capacidade 500kg", "5 níveis", "Aço galvanizado"],
      },
      {
        id: "3",
        name: "Carrinho Hidráulico",
        category: "Equipamentos",
        imageSrc: "/images/produtos/teste.jpg",
        imageAlt: "Carrinho hidráulico para carga",
        stockQnt: 5,
        price: 3270.0,
        specifications: ["Capacidade 1 ton", "Rodas giratórias", "Alça ergonômica"],
      },
      {
        id: "4",
        name: "Prateleira para Estoques",
        category: "Armazenamento",
        imageSrc: "/images/produtos/teste.jpg",
        imageAlt: "Prateleira para organização de estoque",
        stockQnt: 20,
        price: 450.0,
        specifications: ["Modular", "Ajustável", "Fácil montagem"],
      },
    ];

    setProducts(fakeProducts);
    setFilteredProducts(fakeProducts);
  };

  // Inicialmente gera os produtos
  useEffect(() => {
    generateFakeProducts();
  }, []);

  // Filtro por categoria e busca
  useEffect(() => {
    let filtered = products;
    if (selectedCategory !== "Todos") {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }
    if (searchQuery) {
      filtered = filtered.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }
    setFilteredProducts(filtered);
  }, [products, selectedCategory, searchQuery]);

  // Opções de categorias
  const categories = ["Todos", ...new Set(products.map((p) => p.category))];

  // -------------------
  // Função: Adicionar item ao carrinho
  // -------------------
  const addItemToCart = (product: Product) => {
    setProductsCart((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        // Se já existe no carrinho, incrementa a quantidade
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, cartQntd: (item.cartQntd || 1) + 1 }
            : item,
        );
      } else {
        // Se não existe, adiciona
        return [...prev, { ...product, cartQntd: 1 }];
      }
    });
  };

  // -------------------
  // Função: Remover item do carrinho
  // -------------------
  const removeItemFromCart = (product: Product) => {
    setProductsCart((prev) => prev.filter((item) => item.id !== product.id));
  };

  // -------------------
  // Função: Alterar quantidade (incrementar/decrementar)
  // -------------------
  const increaseQuantity = (product: Product) => {
    setProductsCart((prev) =>
      prev.map((p) =>
        p.id === product.id
          ? { ...p, cartQntd: (p.cartQntd || 1) + 1 }
          : p,
      ),
    );
  };

  const decreaseQuantity = (product: Product) => {
    setProductsCart((prev) =>
      prev.map((p) => {
        if (p.id !== product.id) return p;
        const newQty = (p.cartQntd || 1) - 1;
        return { ...p, cartQntd: newQty < 1 ? 1 : newQty };
      }),
    );
  };

  // -------------------
  // Função: Solicitar via WhatsApp
  // -------------------
  const solicitar = () => {
    if (productsCart.length === 0) return;
    let text = "Olá, gostaria de solicitar estes itens:\n\n";
    productsCart.forEach((item) => {
      const quantidade = item.cartQntd || 1;
      text += `- ${item.name} (Qnt: ${quantidade})\n`;
    });
    text += "\nPoderia me ajudar com esses produtos?";

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="relative flex flex-col h-full min-h-screen bg-gray-50">

      {/* Painel Lateral de Filtro (z-50 para ficar sobre a tela cinza) */}
      <FilterSection
        openFilter={openFilter}
        setOpenFilter={setOpenFilter}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categories={categories}
      />

      {/* Painel Lateral do Carrinho:
          - Sempre aberto em telas grandes (desktop)
          - Em telas menores, abre/fecha via translateX
      */}
      <CartSection
        productsCart={productsCart}
        removeItemFromCart={removeItemFromCart}
        solicitar={solicitar}
        openCart={openCart}
        setOpenCart={setOpenCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
      />

      {/* Botão de Filtro (sempre visível, mas você pode ocultar em desktop se quiser) */}
      <div className="absolute left-4 top-4 z-50">
        <button
          onClick={() => setOpenFilter(!openFilter)}
          className="relative rounded-full bg-black p-4"
        >
          <Icon icon="material-symbols:filter-list" className="text-xl text-white" />
        </button>
      </div>

      {/* Botão de Carrinho:
          - Em telas grandes, o carrinho fica sempre aberto, mas deixamos o botão aqui
            caso queira permitir fechar em desktop. Se não quiser, pode ocultar.
      */}
      <div className="absolute right-4 top-4 z-50">
        <button
          onClick={() => setOpenCart(!openCart)}
          className="relative rounded-full bg-black p-4"
        >
          <Icon icon="tdesign:cart" className="text-xl font-bold text-white" />
          {productsCart.length > 0 && (
            <span className="absolute right-0 top-0 z-10 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary text-sm text-white">
              {productsCart.length}
            </span>
          )}
        </button>
      </div>

      {/* Lista de Produtos */}
      {/* Dê um padding lateral maior se quiser deixar espaço pro carrinho fixo em desktop */}
      <div className="flex flex-col gap-6 px-4 pt-24 pb-10 mx-auto max-w-7xl w-full lg:pr-[22rem]">
        <ProductSection products={filteredProducts} addItemToCart={addItemToCart} />
      </div>

      {/* Fundo escuro se o filtro estiver aberto */}
      {openFilter && (
        <div
          onClick={() => setOpenFilter(false)}
          className="absolute inset-0 z-40 bg-black/40"
        />
      )}

      {/* Fundo escuro se o carrinho estiver aberto (apenas em mobile) */}
      {openCart && (
        <div
          onClick={() => setOpenCart(false)}
          className="absolute inset-0 z-40 bg-black/40 lg:hidden"
        />
      )}
    </div>
  );
};

export default ShopPage;

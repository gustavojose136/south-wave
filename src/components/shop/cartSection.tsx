"use client";

import { Product } from "@/types/product";
import { Icon } from "@iconify/react";
import { SetStateAction, useEffect, useMemo } from "react";

interface CartSectionProps {
  productsCart: Product[];
  removeItemFromCart: (product: Product) => void;
  solicitar: () => void;
  openCart: boolean;
  setOpenCart: (value: SetStateAction<boolean>) => void;
  increaseQuantity: (product: Product) => void;
  decreaseQuantity: (product: Product) => void;
}

const CartSection = ({
  productsCart,
  removeItemFromCart,
  solicitar,
  openCart,
  setOpenCart,
  increaseQuantity,
  decreaseQuantity,
}: CartSectionProps) => {
  // Controla a rolagem quando há muitos itens
  useEffect(() => {
    const cartListDiv = document.getElementById("cartList");
    if (cartListDiv) {
      if (productsCart.length > 2) cartListDiv.classList.add("overflow-y-auto");
      else cartListDiv.classList.remove("overflow-y-auto");
    }
  }, [productsCart]);

  // Soma total (somando price * cartQntd)
  const totalPrice = useMemo(() => {
    return productsCart.reduce((acc, item) => {
      return acc + (item.price * (item.cartQntd || 1));
    }, 0);
  }, [productsCart]);

  // Em telas >= lg, carrinho fica sempre visível (translate-x-0)
  // Em telas < lg, usamos openCart para exibir ou não
  return (
    <div
      id="cartDiv"
      className={`
        fixed inset-y-0 right-0
        z-[9999] flex h-full w-full max-w-md flex-col
        bg-white shadow-xl
        transition-transform duration-300 ease-in-out
        
        // Sempre aberto em telas grandes (desktop):
        lg:translate-x-0
        // Em telas pequenas:
        ${openCart ? "translate-x-0" : "translate-x-full"}
      `}
    >
      {/* Header */}
      <div className="z-50 flex-1 px-4 py-6 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-2">
          <div className="flex w-full flex-row items-center justify-between gap-2">
            <h1 className="text-gray-900 text-xl font-medium flex items-center gap-2">
              <Icon icon="mdi:cart" className="text-2xl" />
              Carrinho
            </h1>
            {/* Botão fechar (mobile) */}
            <Icon
              onClick={() => setOpenCart(false)}
              icon="zondicons:close"
              className="text-xl font-bold text-black cursor-pointer lg:hidden"
            />
          </div>

          {productsCart.length < 1 && (
            <span className="text-gray-900 text-md font-normal">
              Nenhum item adicionado ao carrinho.
            </span>
          )}
        </div>

        {/* Lista de produtos no carrinho */}
        <div id="cartList" className="mt-8 max-h-[400px] py-2 3xl:max-h-[620px]">
          <ul role="list" className="divide-gray-200 -my-6 h-full divide-y">
            {productsCart.map((product) => {
              const qnt = product.cartQntd || 1;
              const itemTotal = product.price * qnt;

              return (
                <li key={product.id} className="flex py-6">
                  <div className="border-gray-200 h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border">
                    <img
                      alt={product.imageAlt}
                      src={product.imageSrc}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="ml-4 flex flex-1 flex-col justify-between">
                    {/* Título e Botão de Remover */}
                    <div className="flex items-start justify-between">
                      <h3 className="text-gray-900 text-base font-medium mr-4">
                        {product.name}
                      </h3>
                      <button
                        type="button"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                        onClick={() => removeItemFromCart(product)}
                      >
                        <Icon
                          icon="ph:trash-thin"
                          className="text-2xl font-bold"
                        />
                      </button>
                    </div>

                    {/* Quantidade e Subtotal */}
                    <div className="mt-1 text-sm flex items-center justify-between">
                      {/* Botões de quantidade */}
                      <div className="flex items-center gap-3">
                        <button
                          className="w-8 h-8 flex items-center justify-center border rounded font-bold text-lg"
                          onClick={() => decreaseQuantity(product)}
                        >
                          -
                        </button>
                        <span className="w-5 text-center">
                          {product.cartQntd ?? 1}
                        </span>
                        <button
                          className="w-8 h-8 flex items-center justify-center border rounded font-bold text-lg"
                          onClick={() => increaseQuantity(product)}
                        >
                          +
                        </button>
                      </div>
                      {/* Subtotal do item */}
                      <span className="text-gray-700 font-semibold ml-2">
                        {itemTotal.toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </span>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Footer */}
      <div className="border-gray-200 z-50 border-t px-4 py-6 sm:px-6">
        {/* Total de itens e valor total */}
        <div className="flex flex-col gap-2 text-xl font-medium text-gray-900">
          <p>
            Itens:{" "}
            {productsCart.reduce(
              (total, item) => total + (item.cartQntd || 0),
              0,
            )}
          </p>
          <p>
            Valor total:{" "}
            {totalPrice.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </div>

        <p className="text-gray-500 text-md mt-0.5 text-justify">
          Após solicitar os itens, a aprovação pode demorar até 24 horas.
        </p>

        <div className="mt-6">
          <button
            onClick={solicitar}
            className="flex w-full items-center justify-center rounded-md bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 gap-2"
          >
            <Icon icon="mdi:whatsapp" className="text-2xl" />
            Solicitar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartSection;

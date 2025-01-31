export interface Product {
  id: string;
  name: string;
  category: string;
  imageSrc: string;
  imageAlt: string;
  stockQnt: number;
  price: number;
  specifications?: string[];

  // Campos extras usados no carrinho
  color?: string;
  size?: string;
  cartQntd?: number;
}


export interface EquipamentosExitModel {
  Produtos: CategoriaEquipamentoExitModel[];
}

export interface CategoriaEquipamentoExitModel {
  Categoria: string;
  Produtos: ProdutosPorTamanhoExitModel[];
}

export interface ProdutosPorTamanhoExitModel {
  Size: string;
  Produtos: ProdutoExitModel[];
}

export interface ProdutoExitModel {
  id: string;
  name: string;
  category: string;
  stockQnt: number;
  size: string;
  imageSrc?: string;
  imageAlt?: string;
}

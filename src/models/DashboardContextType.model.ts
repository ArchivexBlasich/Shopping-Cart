import type { Product } from "./Product.model";

type UpdateProductInList = (id: number) => void;

export interface DashboardContextType {
  products: Product[],
  productHandlers: {
    handleAddToCart: UpdateProductInList,
    handleRemoveFromCart: UpdateProductInList,
    incrementQuantity: UpdateProductInList,
    decrementQuantity: UpdateProductInList,
  }
}
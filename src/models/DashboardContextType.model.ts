import type { Product } from "./Product.model";

export interface DashboardContextType {
  products: Product[],
  productHandlers: {
    handleAddToCart: (id: number) => void,
    handleRemoveFromCart: (id: number) => void,
  }
}
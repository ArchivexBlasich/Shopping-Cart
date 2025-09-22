import type { Product } from "./Product.model";

export interface DashboardContextType {
  products: Product[],
  toggleIsCart: (id: number) => void,
}
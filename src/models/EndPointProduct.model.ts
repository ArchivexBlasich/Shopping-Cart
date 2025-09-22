export interface EndPointProduct {
  category: string;
  description: string;
  id: number;
  image: string;
  price: string | number;
  rating: { rate: number; count: number };
  title: string;
}

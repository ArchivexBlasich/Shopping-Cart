import { useDashboardContext } from "../hooks/useDashboardContextType";
import Carousel from "./components/HomeCarousel";

export default function HomeContainer() {
  const { products } = useDashboardContext();
  const images = products.map(product => product.image);
  return (
    <Carousel images={images} />
  );
}

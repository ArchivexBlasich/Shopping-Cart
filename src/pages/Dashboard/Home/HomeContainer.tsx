import { useDashboardContext } from "../hooks/useDashboardContextType";
import Carousel from "./components/HomeCarousel";

export default function HomeContainer() {
  const { products } = useDashboardContext();
  const images = products.map(product => product.image);
  return (
    <main className="container">
      <Carousel images={images} autoPlay={true} showButtons={true}/>
    </main>
  );
}

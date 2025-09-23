import { useDashboardContext } from "../hooks/useDashboardContextType";
import Carousel from "./components/HomeCarousel";
import style from "./HomeContainer.module.css";
import colors from "@/styles/colors.module.css";

export default function HomeContainer() {
  const { products } = useDashboardContext();
  const images = products.map((product) => product.image);

  return (
    <main
      className={`container ${style.homeContainer} ${colors.pageBackground}`}
    >
      <div className={`${colors.primaryText} ${style.hero}`}>
        <h1>Welcome to Fabricio Store</h1>
        <p>Check out our featured products</p>
      </div>
      <Carousel images={images} autoPlay={true} showButtons={true} />
    </main>
  );
}

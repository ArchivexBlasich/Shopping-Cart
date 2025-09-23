import NotFound from "./NotFound";
import { useDashboardContext } from "../hooks/useDashboardContextType";
import { Link, useParams } from "react-router";
import { PublicRoutes } from "../../../models/routes";
import { printRateWithStars } from "../utils/showProductStars";
import AddCartButton from "./AddCartButton";

export function ProductFullView() {
  const { id } = useParams();
  const { products, productHandlers } = useDashboardContext();

  const index = products.findIndex((product) => `${product.id}` === id);

  if (index === -1) return <NotFound />;

  const product = products[index];

  return (
    <main className="container">
      <nav>
        <Link to={`/${PublicRoutes.SHOP}`}>← Back to Shop</Link>
      </nav>

      <article>
        <header>
          <span>{product.category}</span>
          <h1>{product.title}</h1>
        </header>

        <figure>
          <img src={product.image} alt={product.title} />
        </figure>

        <section>
          <p>{product.description}</p>
        </section>

        <aside>
          <p>${product.price}</p>
          <div>
            <span>Rating: {printRateWithStars(product.rating)}</span>
          </div>
          <AddCartButton id={product.id} addToCartHandler={productHandlers.incrementQuantity}/>
        </aside>
      </article>
    </main>
  );
}

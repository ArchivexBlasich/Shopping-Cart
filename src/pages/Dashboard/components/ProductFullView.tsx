import NotFound from "./NotFound";
import { useDashboardContext } from "../hooks/useDashboardContextType";
import { Link, useParams } from "react-router";
import { PublicRoutes } from "../../../models/routes";
import { printRateWithStars } from "../utils/showProductStars";
import AddCartButton from "./AddCartButton";
import styles from "../styles/ProductFullView.module.css"

export function ProductFullView() {
  const { id } = useParams();
  const { products, productHandlers } = useDashboardContext();

  const index = products.findIndex((product) => `${product.id}` === id);

  if (index === -1) return <NotFound />;

  const product = products[index];
  console.log(product.rating)

  return (
    <main className="container">
      <nav className={`${styles.nav}`}>
        <Link to={`/${PublicRoutes.SHOP}`}>← Back to Shop</Link>
      </nav>

      <article className={`${styles.article}`}>
        <header className={`${styles.header}`}>
          <h1>{product.title}</h1>
        </header>

        <figure className={`${styles.figure}`}>
          <img src={product.image} alt={product.title} />
        </figure>

        <section className={`${styles.section}`}>
          <p>{product.description}</p>
        </section>

        <aside className={`${styles.aside}`}>
          <p>Price: ${product.price}</p>
          <div>
            <span>Category: {product.category}</span>
            <span>Rating: {printRateWithStars(product.rating)}</span>
          </div>
          <AddCartButton id={product.id} addToCartHandler={productHandlers.handleAddToCart}/>
        </aside>
      </article>
    </main>
  );
}

import { useDashboardContext } from "../hooks/useDashboardContextType";
import QuantityButton from "./components/QuantityButton";
import { ProductCard } from "../components/ProductCard";
import styles from "./CartContainer.module.css"

export default function CartContainer() {
  const { products, productHandlers } = useDashboardContext();

  return (
    <main className="container">
      {products.map((product) => {
        if (product.isCart) {
          return (
            <article key={product.id} className={`${styles.cart}`}>
              <ProductCard
                id={product.id}
                title={product.title}
                price={product.price}
                imageURL={product.image}
                rating={Math.round(product.rating)}
              >
                <button
                  onClick={() =>
                    productHandlers.handleRemoveFromCart(product.id)
                  }
                  className={`${styles.removeFromCartBtn}`}
                >
                  Remove
                </button>
              </ProductCard>

              <div className={`${styles.totalSection}`}>
                <QuantityButton
                  quantity={product.quantity}
                  handleDecrement={() =>
                    productHandlers.decrementQuantity(product.id)
                  }
                  handleIncrement={() =>
                    productHandlers.incrementQuantity(product.id)
                  }
                />
                <p>Total: ${product.quantity * product.price}</p>
              </div>
            </article>
          );
        }
      })}
    </main>
  );
}

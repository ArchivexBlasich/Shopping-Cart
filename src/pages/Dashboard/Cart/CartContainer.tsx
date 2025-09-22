import { Fragment } from "react/jsx-runtime";
import { useDashboardContext } from "../hooks/useDashboardContextType";
import QuantityButton from "./components/QuantityButton";

export default function CartContainer() {
  const { products, productHandlers } = useDashboardContext();

  return (
    <>
      {products.map((product) => {
        if (product.isCart) {
          return (
            <Fragment key={product.id}>
              <div>{product.title}</div>
              <button
                onClick={() => productHandlers.handleRemoveFromCart(product.id)}
              >
                Remove
              </button>
              <QuantityButton
                quantity={product.quantity}
                handleDecrement={() =>
                  productHandlers.decrementQuantity(product.id)
                }
                handleIncrement={() => productHandlers.incrementQuantity(product.id)}
              />

              <div>Total: ${product.quantity*product.price}</div>
            </Fragment>
          );
        }
      })}
    </>
  );
}

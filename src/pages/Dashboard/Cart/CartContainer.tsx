import { Fragment } from "react/jsx-runtime";
import { useDashboardContext } from "../hooks/useDashboardContextType";

export default function CartContainer() {
  const { products, productHandlers } = useDashboardContext();

  return (
    <>
      {products.map((product) => {
        if (product.isCart) {
          return (
            <Fragment key={product.id}>
              <div>{product.title}</div>
              <button onClick={() => productHandlers.handleRemoveFromCart(product.id)}>Remove</button>
            </Fragment>
          );
        }
      })}
    </>
  );
}

import { Fragment } from "react/jsx-runtime";
import { useDashboardContext } from "../hooks/useDashboardContextType";

export default function ShopContainer() {
  const { products, productHandlers } = useDashboardContext();
  return (
    <>
      {products.map((product) => (
        <Fragment key={product.id}>
          {product.title}{" "}
          <button onClick={() => productHandlers.handleAddToCart(product.id)}>
            Add
          </button>
          <br />
        </Fragment>
      ))}
    </>
  );
}

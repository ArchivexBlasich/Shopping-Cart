import { Fragment } from "react/jsx-runtime";
import { useDashboardContext } from "../hooks/useDashboardContextType";
import { ProductCard } from "../components/ProductCard";
import AddCartButton from "../components/AddCartButton";

export default function ShopContainer() {
  const { products, productHandlers } = useDashboardContext();

  return (
    <>
      {products.map((product) => (
        <Fragment key={product.id}>
          <ProductCard
            id={product.id}
            title={product.title}
            price={product.price}
            imageURL={product.image}
            rating={Math.round(product.rating)}
          >
            <AddCartButton
              id={product.id}
              addToCartHandler={productHandlers.handleAddToCart}
            />
          </ProductCard>
          <br />
        </Fragment>
      ))}
    </>
  );
}

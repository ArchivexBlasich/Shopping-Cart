import { Fragment } from "react/jsx-runtime";
import { useDashboardContext } from "../hooks/useDashboardContextType";

export default function HomeContainer() {
  const {products} = useDashboardContext()

  return (
  <>
  {products.map(product => (
    < Fragment key={product.id}>
    {product.title}
    <br />
    </ Fragment>
    ))}
  </>
  );
}

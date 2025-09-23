import { useState, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router";
import HomeContainer from "./pages/Dashboard/Home/HomeContainer";
import ShopContainer from "./pages/Dashboard/Shop/ShopContainer";
import CartContainer from "./pages/Dashboard/Cart/CartContainer";
import { PublicRoutes } from "./models/routes";
import PageLayout from "./pages/Dashboard/components/PageLayout";
import NotFound from "./pages/Dashboard/components/NotFound";
import type { Product } from "./models/Product.model";
import "./App.css";
import type { EndPointProduct } from "./models/EndPointProduct.model";
import { createUserAdapter } from "./adapters/product.adapter";
import { ProductFullView } from "./pages/Dashboard/components/ProductFullView";

const url = "https://fakestoreapi.com/products";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);

    const fetchData = async () => {
      try {
        const response = await fetch(url, controller);

        if (!response.ok) {
          throw new Error("Error in the request");
        }

        const jsonData: EndPointProduct[] = await response.json();

        setProducts(jsonData.map((product) => createUserAdapter(product)));
        setError(null);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, []);

  function updateIsCartState(id: number, newIsCart: boolean) {
    setProducts(
      products.map((product) => {
        if (product.id === id) return { ...product, isCart: newIsCart };
        return product;
      })
    );
  }

  function handleAddToCart(id: number) {
    updateIsCartState(id, true);
  }

  function handleRemoveFromCart(id: number) {
    updateIsCartState(id, false);
  }

  function updateQuantity(id: number, add: boolean) {
    setProducts(
      products.map((product) => {
        if (product.id === id)
          return {
            ...product,
            quantity: add
              ? product.quantity + 1
              : product.quantity > 1
              ? product.quantity - 1
              : 1,
          };
        return product;
      })
    );
  }

  function incrementQuantity(id: number) {
    updateQuantity(id, true);
  }

  function decrementQuantity(id: number) {
    updateQuantity(id, false);
  }

  if (loading) {
    return <div>Loading Products...</div>;
  }

  if (error) {
    return <div>UPS! there was an error: {error.message}</div>;
  }

  return (
    <>
      <Routes>
        <Route
          element={
            <PageLayout
              products={products}
              productHandlers={{
                handleAddToCart,
                handleRemoveFromCart,
                incrementQuantity,
                decrementQuantity,
              }}
            />
          }
        >
          <Route path="/" element={<Navigate to={PublicRoutes.HOME} />} />
          <Route path={PublicRoutes.HOME} element={<HomeContainer />} />
          <Route path={PublicRoutes.SHOP} element={<ShopContainer />} />
          <Route path={`${PublicRoutes.PRODUCT}/:id`} element={<ProductFullView />} />
          <Route path={PublicRoutes.CART} element={<CartContainer />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

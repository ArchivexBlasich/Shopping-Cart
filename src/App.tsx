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

  function removeOrAddFromCart(id: number, isCart: boolean) {
    return setProducts(
      products.map((product) => {
        if (product.id === id) return { ...product, isCart: isCart };
        return product;
      })
    );
  }

  function handleAddToCart(id: number) {
    removeOrAddFromCart(id, true);
  }

  function handleRemoveFromCart(id: number) {
    removeOrAddFromCart(id, false);
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
              productHandlers={{ handleAddToCart, handleRemoveFromCart }}
            />
          }
        >
          <Route path="/" element={<Navigate to={PublicRoutes.HOME} />} />
          <Route path={PublicRoutes.HOME} element={<HomeContainer />} />
          <Route path={PublicRoutes.SHOP} element={<ShopContainer />} />
          <Route path={PublicRoutes.CART} element={<CartContainer />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

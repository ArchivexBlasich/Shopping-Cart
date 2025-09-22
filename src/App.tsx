import { Navigate, Route, Routes } from "react-router";
import HomeContainer from "./pages/Dashboard/Home/HomeContainer";
import ShopContainer from "./pages/Dashboard/Shop/ShopContainer";
import CartContainer from "./pages/Dashboard/Cart/CartContainer";
import "./App.css";
import { PublicRoutes } from "./models/routes";
import PageLayout from "./pages/Dashboard/components/PageLayout";
import NotFound from "./pages/Dashboard/components/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route element={<PageLayout />}>
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

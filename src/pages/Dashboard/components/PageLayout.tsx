import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar";

import type { DashboardContextType } from "../../../models/DashboardContextType.model";

export default function PageLayout(context: DashboardContextType) {
  const numberOfItemsInChart = context.products.reduce((acc, product) => {
    if (product.isCart) return acc + product.quantity;
    return acc;
  }, 0);
  return (
    <>
      <Navbar numberOfItemsInChart={numberOfItemsInChart} />
      <Outlet context={context} />
    </>
  );
}

import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar";

import type { DashboardContextType } from "../../../models/DashboardContextType.model";

export default function PageLayout(context: DashboardContextType) {
  return (
    <>
      <Navbar />
      <main>
        <Outlet context={context}/>
      </main>
    </>
  );
}

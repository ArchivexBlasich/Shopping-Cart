import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar";

export default function PageLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

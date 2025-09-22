import { Link } from "react-router";
import { PublicRoutes } from "../../../models/routes";

export default function Navbar() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={PublicRoutes.HOME}>Home</Link>
          </li>
          <li>
            <Link to={PublicRoutes.SHOP}>Shop</Link>
          </li>
          <li>
            <Link to={PublicRoutes.CART}>Cart</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

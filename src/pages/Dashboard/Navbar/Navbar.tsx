import { Link } from "react-router";
import { PublicRoutes } from "../../../models/routes";

interface Props {
  numberOfItemsInChart: number
}

export default function Navbar(props : Props) {
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
            <Link to={PublicRoutes.CART}>Cart ({props.numberOfItemsInChart})</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

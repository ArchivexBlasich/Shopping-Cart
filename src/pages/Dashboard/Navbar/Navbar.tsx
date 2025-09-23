import { Link } from "react-router";
import { PublicRoutes } from "../../../models/routes";
import HomeImage from "@/assets/icons/home_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg";
import ShopImage from "@/assets/icons/shopping_bag_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg";
import CartImage from "@/assets/icons/shopping_cart_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg";
import style from "./Navbar.module.css";
import colors from "@/styles/colors.module.css";

interface Props {
  numberOfItemsInChart: number;
}

export default function Navbar(props: Props) {
  return (
    <>
      <header
        className={`container ${style.header} ${colors.headerBackground} ${colors.border}`}
      >
        <nav className={`${style.navbarContainer} ${colors.icon}`}>
          <ul>
            <li>
              <Link to={PublicRoutes.HOME}>
                <img src={HomeImage} alt="Home icon" />
              </Link>
            </li>
            <li>
              <Link to={PublicRoutes.SHOP}>
                <img src={ShopImage} alt="Home icon" />
              </Link>
            </li>
            <li>
              <Link to={PublicRoutes.CART} className={style.link}>
                <p className={style.cartIcon}>
                  <img src={CartImage} alt="Home icon" /> (
                  {props.numberOfItemsInChart})
                </p>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

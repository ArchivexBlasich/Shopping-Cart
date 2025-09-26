import type { ReactElement } from "react";
import { Link } from "react-router";
import { PublicRoutes } from "../../../models/routes";
import { printRateWithStars } from "../utils/showProductStars";
import styles from "../styles/ProductCard.module.css";
import colors from "@/styles/colors.module.css";

interface Props {
  id: number;
  title: string;
  price: number;
  rating: number;
  imageURL: string;
  children: ReactElement;
}

export function ProductCard(props: Props) {
  return (
    <article
      className={`${styles.productContainer} ${colors.cardBackground} ${colors.border} ${colors.cardShadow}`}
    >
      <header className={`${styles.header}`}>
        <h4>{props.title}</h4>
      </header>
      <figure className={`${styles.figure}`}>
        <nav>
          <Link to={`${PublicRoutes.PRODUCT}/${props.id}`}>
            <img src={props.imageURL} alt={props.title} />
          </Link>
        </nav>
      </figure>
      <div className={`${styles.productDetails}`}>
        <p>Price: ${props.price}</p>
        <p>Rating: {printRateWithStars(props.rating)}</p>
        {props.children}
      </div>
    </article>
  );
}

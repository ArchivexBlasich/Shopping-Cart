import styles from "../styles/AddCartButton.module.css"

interface Props {
    id: number
    addToCartHandler: (id: number) => void;
}

export default function AddCartButton(props : Props) {
  return (
    <>
      <button onClick={() => props.addToCartHandler(props.id)} className={`${styles.addToCartBtn}`}>
        Add to Cart
      </button>
    </>
  );
}

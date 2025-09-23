interface Props {
    id: number
    addToCartHandler: (id: number) => void;
}

export default function AddCartButton(props : Props) {
  return (
    <>
      <button onClick={() => props.addToCartHandler(props.id)}>
        Add to Cart
      </button>
    </>
  );
}

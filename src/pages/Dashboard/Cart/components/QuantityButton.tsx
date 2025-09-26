import styles from "./QuantityButton.module.css"

interface Props {
    quantity: number,
    handleIncrement: () => void;
    handleDecrement: () => void;
}

export default function QuantityButton(props : Props) {
    console.log(props.quantity)
    return (
        <div className={`${styles.quantityButtonContainer}`}>
        <button onClick={props.handleDecrement}>-</button>
        <span>{props.quantity}</span>
        <button onClick={props.handleIncrement}>+</button>
        </ div>
    )
}
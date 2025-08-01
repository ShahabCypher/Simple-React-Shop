import { MdDeleteOutline } from "react-icons/md";

import { shortenText } from "../helpers/helper";

import styles from "./styles/CartCard.module.css";

const CartCard = ({ data, clickHandler }) => {
  const { image, title, price, quantity } = data;

  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <p>
        {shortenText(title)} | {price * quantity} $
      </p>
      <div className={styles.actions}>
        {quantity === 1 && (
          <button onClick={() => clickHandler("REMOVE_ITEM", data)}>
            <MdDeleteOutline />
          </button>
        )}
        {quantity > 1 && (
          <button onClick={() => clickHandler("DECREASE", data)}>-</button>
        )}
        <span>{quantity}</span>
        <button onClick={() => clickHandler("INCREASE", data)}>+</button>
      </div>
    </div>
  );
};

export default CartCard;

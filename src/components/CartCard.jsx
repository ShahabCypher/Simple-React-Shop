import { useDispatch } from "react-redux";
import { MdDeleteOutline } from "react-icons/md";

import { removeItem, increase, decrease } from "../features/cart/cartSlice";
import { shortenText } from "../helpers/helper";

import styles from "./styles/CartCard.module.css";

const CartCard = ({ data }) => {
  const { image, title, price, quantity } = data;

  const dispatch = useDispatch();

  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <p>
        {shortenText(title)} | {price * quantity} $
      </p>
      <div className={styles.actions}>
        {quantity === 1 && (
          <button onClick={() => dispatch(removeItem(data))}>
            <MdDeleteOutline />
          </button>
        )}
        {quantity > 1 && (
          <button onClick={() => dispatch(decrease(data))}>-</button>
        )}
        <span>{quantity}</span>
        <button onClick={() => dispatch(increase(data))}>+</button>
      </div>
    </div>
  );
};

export default CartCard;

import { TbChecklist } from "react-icons/tb";
import { FaHashtag } from "react-icons/fa";
import { BsPatchCheck } from "react-icons/bs";

import styles from "./styles/CartSidebar.module.css";

const CartSidebar = ({ state, clickHandler }) => {
  const { totalPrice, itemsCounter, checkout } = state;

  return (
    <div className={styles.sidebar}>
      <div>
        <TbChecklist />
        <p>Total Price:</p>
        <span>{totalPrice}</span>
      </div>
      <div>
        <FaHashtag />
        <p>Quantity:</p>
        <span>{itemsCounter}</span>
      </div>
      <div>
        <BsPatchCheck />
        <p>Status:</p>
        <span>{!checkout && "Pending..."}</span>
      </div>
      <button onClick={() => clickHandler("CHECKOUT")}>Checkout</button>
    </div>
  );
};

export default CartSidebar;

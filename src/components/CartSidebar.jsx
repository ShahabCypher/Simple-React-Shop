import { useDispatch } from "react-redux";
import { TbChecklist } from "react-icons/tb";
import { FaHashtag } from "react-icons/fa";
import { BsPatchCheck } from "react-icons/bs";

import { checkout as checkoutAction } from "../features/cart/cartSlice";

import styles from "./styles/CartSidebar.module.css";

const CartSidebar = ({ state }) => {
  const { totalPrice, itemsCounter, checkout } = state;

  const dispatch = useDispatch();

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
      <button onClick={() => dispatch(checkoutAction())}>Checkout</button>
    </div>
  );
};

export default CartSidebar;

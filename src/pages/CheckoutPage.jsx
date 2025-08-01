import CartCard from "../components/CartCard";
import { useCart } from "../context/CartContext";

import styles from "./styles/CheckoutPage.module.css";

const CheckoutPage = () => {
  const [state, dispatch] = useCart();

  const clickHandler = (type, payload) => dispatch({ type, payload });

  return (
    <div>
      <div>
        {!state.selectedItems.length && (
          <div className={styles.empty}>
            <span>Empty Cart</span>
          </div>
        )}
        {state.selectedItems.map((product) => (
          <CartCard
            key={product.id}
            data={product}
            clickHandler={clickHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default CheckoutPage;

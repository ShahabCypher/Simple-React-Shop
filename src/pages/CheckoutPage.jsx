import CartCard from "../components/CartCard";
import CartSidebar from "../components/CartSidebar";
import { useCart } from "../context/CartContext";

import styles from "./styles/CheckoutPage.module.css";

const CheckoutPage = () => {
  const [state, dispatch] = useCart();

  const clickHandler = (type, payload) => dispatch({ type, payload });

  if (!state.itemsCounter) {
    return (
      <div className={styles.empty}>
        <span>Empty Cart</span>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <CartSidebar state={state} clickHandler={clickHandler} />
      <div className={styles.products}>
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

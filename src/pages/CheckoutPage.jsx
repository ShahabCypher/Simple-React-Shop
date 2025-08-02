import { IoBagHandleOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

import CartCard from "../components/CartCard";
import CartSidebar from "../components/CartSidebar";

import styles from "./styles/CheckoutPage.module.css";

const CheckoutPage = () => {
  const state = useSelector((store) => store.cart);

  if (!state.itemsCounter) {
    return (
      <div className={styles.empty}>
        <IoBagHandleOutline />
        <span>No products selected yet...</span>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <CartSidebar state={state} />
      <div className={styles.products}>
        {state.selectedItems.map((product) => (
          <CartCard key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default CheckoutPage;

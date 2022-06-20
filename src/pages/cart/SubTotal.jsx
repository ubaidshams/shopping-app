import React, { useEffect } from "react";
import styles from "./cart.module.css";

import { useSelector, useDispatch } from "react-redux";
import { getCartTotal } from "../../features/cart/cartSlice";

const SubTotal = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);
  return (
    <div className={styles.subtotalContainer}>
      <h2>
        Subtotal ({cart.cartItems.length} Items): ₹{cart.cartTotal}
      </h2>
      <div className={styles.formControl}>
        <input type="checkbox" name="gift" id="gift" />
        <label htmlFor="gift">This order contains a gift</label>
      </div>
      <button>Proceed to Buy</button>
    </div>
  );
};

export default SubTotal;

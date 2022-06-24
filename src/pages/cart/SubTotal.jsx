import React, { useEffect } from "react";
import styles from "./cart.module.css";

import { useSelector, useDispatch } from "react-redux";
import { getCartTotal } from "../../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";

const SubTotal = () => {
  let navigate = useNavigate();

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  const buyProduct = () => {
    navigate("/checkout");
  };

  return (
    <div className={styles.subtotalContainer}>
      <h2>
        Subtotal ({cart.cartItems.length} Items): ₹{cart.cartTotal}
      </h2>
      <div className={styles.formControl}>
        <input type="checkbox" name="gift" id="gift" />
        <label htmlFor="gift">This order contains a gift</label>
      </div>
      <button onClick={buyProduct}>Proceed to Buy</button>
    </div>
  );
};

export default SubTotal;

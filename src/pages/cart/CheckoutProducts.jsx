import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./cart.module.css";
import { removeFromCart } from "../../features/cart/cartSlice";

const CheckoutProducts = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  return (
    <div className={styles.checkoutProductContainer}>
      {cart.cartItems.map((product, index) => {
        let {
          id,
          title,
          price,
          description,
          discountPercentage,
          thumbnail,
          rating,
          brand,
        } = product;
        return (
          <div className={styles.cartProduct} key={id}>
            <img src={thumbnail} alt={title} />
            <div className={styles.productDetails}>
              <h3>{brand}</h3>
              <p>{title}</p>
              <p>{description}</p>
            </div>
            <div className={styles.moreDetails}>
              <span>{rating}⭐</span>
              <span>{discountPercentage}% Off</span>
              <span>${price}</span>
              <button onClick={() => dispatch(removeFromCart(index))}>
                Remove from Cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CheckoutProducts;

import React from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import { AiOutlineShoppingCart } from "react-icons/ai";

import { useSelector } from "react-redux";

const Auth = () => {
  let cartValue = useSelector(state => state.cart.cartItems.length);
  return (
    <div className={styles.authBlock}>
      <Link to="/cart" className={styles.cartIcon}>
        <AiOutlineShoppingCart />
        <span>{cartValue}</span>
      </Link>
      <button>Login</button>
      <Link to="/signup">Signup</Link>
    </div>
  );
};

export default Auth;

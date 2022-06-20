import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./navbar.module.css";
import { AiOutlineShoppingCart } from "react-icons/ai";

import { useSelector } from "react-redux";

const Auth = () => {
  const location = useLocation()
  
  let cartValue = useSelector(state => state.cart.cartItems.length);
  return (
    <div className={styles.authBlock}>
      {location.pathname !== "/signup" && (
        <Link to="/cart" className={styles.cartIcon}>
          <AiOutlineShoppingCart />
          <span>{cartValue}</span>
        </Link>
      )}
      {/*  */}
      {location.pathname === "/signup" ? "" : <button>Login</button>}
      {/*  */}
      <Link to="/signup">Signup</Link>
    </div>
  );
};

export default Auth;

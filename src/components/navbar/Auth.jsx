import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./navbar.module.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsHeart } from "react-icons/bs";

import { useSelector } from "react-redux";
import { useEffect } from "react";

const Auth = () => {
  const location = useLocation();
  let cartValue = useSelector(state => state.cart.cartItems.length);
  const [count, setCount] = useState(cartValue);
  let cartCount = useSelector(state =>
    state.cart.cartItems.map(item => item.productsid)
  );
  let set = new Set(cartCount);
  cartCount = [...set].length;
  useEffect(() => {
    setCount(cartCount);
  }, [cartCount]);
  return (
    <div className={styles.authBlock}>
      <Link to="/wishlist">
        <BsHeart />
      </Link>
      {location.pathname !== "/signup" && (
        <Link to="/cart" className={styles.cartIcon}>
          <AiOutlineShoppingCart />
          <span>{count}</span>
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

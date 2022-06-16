import React from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Auth = () => {
  return (
    <div className={styles.authBlock}>
      <Link to="/cart" className={styles.cartIcon}>
        <AiOutlineShoppingCart />
        <span>0</span>
      </Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
    </div>
  );
};

export default Auth;

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./cart.module.css";
import { removeFromCart } from "../../features/cart/cartSlice";
import { Card } from "@material-ui/core";
import { useState } from "react";
const CheckoutProducts = () => {
  // for the card
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  console.log(cart.cartItems.length);
  const cartSet = cart.cartItems.map(JSON.stringify);
  const uniqueSet = new Set(cartSet);
  let uniqueArray = Array.from(uniqueSet).map(JSON.parse);
  // for quantity
  const productQuantityCounter = {};
  const cartQnty = useSelector(state => state.cart);
  cartQnty.cartItems.map(element => {
    productQuantityCounter[element.productsid] =
      (productQuantityCounter[element.productsid] || 0) + 1;
  });
  console.log(productQuantityCounter["HPH1"]);
  return (
    <div className={styles.checkoutProductContainer}>
      {cart.cartItems.length === 0 ? (
        <h1>
          Uh Oh ... Looks like your cart is empty. Please go back an shop some
          products
        </h1>
      ) : (
        uniqueArray.map((product, index) => {
          let {
            productsid,
            title,
            price,
            description,

            thumbnail_URL,
            rating,
            brand,
          } = product;

          return (
            <Card elevation={5} className={styles.cartProduct} key={productsid}>
              <img src={thumbnail_URL} alt={title} />
              <div className={styles.productDetails}>
                <h3>{brand}</h3>
                <p>{title}</p>
                <p>{description}</p>
              </div>
              <div className={styles.moreDetails}>
                <span>{rating}⭐</span>

                <span>₹{price}</span>
                <span>Qty:{productQuantityCounter[productsid]}</span>
                <button onClick={() => dispatch(removeFromCart(index))}>
                  Remove from Cart
                </button>
              </div>
            </Card>
          );
        })
      )}
    </div>
  );
};

export default CheckoutProducts;

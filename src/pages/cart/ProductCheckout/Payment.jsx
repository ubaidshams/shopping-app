import React from 'react';
import style from "./payment.module.css";
import {AiFillRightCircle}  from "react-icons/ai"

const Payment = () => {

    let orderId = Math.floor((Math.random() * 2664645) );
    console.log(orderId);


  return (
    
  
    <div className={style.checkoutcard}>
      <h1 style={{ textAlign: "center" }}>CheckOut</h1>
      <div className={style.radiodiv}>
        <div className={style.arc}>
          <AiFillRightCircle />
          Shipping address
        </div>
        <div className={style.arc}>
          {" "}
          <AiFillRightCircle />
          Order Details{" "}
        </div>
        <div className={style.arc}>
          {" "}
          <AiFillRightCircle />``
          Review Your Order
        </div>
      </div>

      <div>
        <h2 style={{ textAlign: "center" }}>Thank you for your order </h2>
        <p style={{ textAlign: "center", fontSize: "large" }}>
          <br />
          Your order number is <h4> #{`${orderId}`} </h4>  we update you when
          your order has shipped.{" "}
        </p>
      </div>
    </div>
  );
}

export default Payment
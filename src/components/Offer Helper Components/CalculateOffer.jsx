import React, { useEffect, useState } from "react";
import Style from "./CalculateOffer.module.css";

const CalculateOffer = ({ originPrice, offerPercentage }) => {
  const [offerPrice, setofferPrice] = useState(0);

  const calculatePrice = (originPrice, offerPercentage) => {
    let offerAmount = (offerPercentage / 100) * originPrice;

    return originPrice - Math.trunc(offerAmount);
  };
  useEffect(() => {
    let offerValue = calculatePrice(originPrice, offerPercentage);
    setofferPrice(offerValue);
  }, []);
  return (
    <div>
      <p className={Style.wrapper}>
        <span>₹{offerPrice}</span>
        <span>₹{originPrice}</span>
        <span>{Math.floor(Math.random() * (15 - 5) + 5)}% off</span>
      </p>
    </div>
  );
};

export default CalculateOffer;

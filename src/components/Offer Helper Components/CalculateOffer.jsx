import React, { useEffect, useState } from "react";
import Style from "./CalculateOffer.module.css"

const CalculateOffer = ({ originPrice, offerPercentage }) => {
  const [offerPrice, setofferPrice] = useState(0);

  const calculatePrice = (originPrice, offerPercentage) => {
    console.log(originPrice, offerPercentage);
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
        <span>₹{originPrice}</span>
        <span>₹{offerPrice}</span>
      </p>
    </div>
  );
};

export default CalculateOffer;

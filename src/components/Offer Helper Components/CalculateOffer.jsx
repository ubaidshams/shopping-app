import React, { useEffect, useState } from "react";

const CalculateOffer = ({ originPrice, offerPercentage }) => {
  const [offerPrice, setofferPrice] = useState(0);

    const calculatePrice = (originPrice, offerPercentage) => {
      console.log(originPrice,offerPercentage)
      let offerAmount = Math.trunc(offerPercentage / 100) * originPrice;
      console.log(offerAmount)

    return originPrice - offerAmount;
  };
  useEffect(() => {
    let offerValue = calculatePrice(originPrice, offerPercentage);
    setofferPrice(offerValue);
  }, []);
  return (
    <div>
      <p>
        <span>{originPrice}</span>
        <span>{offerPrice}</span>
      </p>
    </div>
  );
};

export default CalculateOffer;

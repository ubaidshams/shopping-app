import React from "react";
import StarRating from "react-star-ratings";
import Style from "./StarRatings.module.css"

const StarRatings = ({ rating }) => {
  return (
    <div className={Style.star}>
      <StarRating
        rating={rating}
        starDimension="20px"
        starSpacing="3.5px"
        starRatedColor="#FFA41C"
        numberOfStars={5}
      />
    </div>
  );
};

export default StarRatings;

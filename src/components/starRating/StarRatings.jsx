import React from 'react'
import StarRating from "react-star-ratings";

const StarRatings = ({ rating}) => {
  return (
    <div>
      <StarRating
        rating={rating}
        starDimension="20px"
        starSpacing="3.5px"
        starRatedColor="#FFA41C"
        numberOfStars={5}
      />
    </div>
  );
}

export default StarRatings
import { Button, Card } from "@mui/material";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import style2 from "../featured products/featuredProducts.module.css";
import style from "./cat.module.css";
import { addToCart } from "../../features/cart/cartSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToWishlist } from "../../features/wishlist/wishlistSlice";
import { useEffect } from "react";
import CalculateOffer from "../Offer Helper Components/CalculateOffer";
import StarRatings from "../starRating/StarRatings";
const MapProduct = ({ data, getSort, sortingType, objKey }) => {
  // console.log("sdklfsjdkl",sortingType)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(objKey);
    getSort(objKey);
  }, [sortingType]);
  return (
    <div className={style.box}>
      {data.map(data => {
        let { productsid, brand, rating, thumbnailURL, price, title, offer } =
          data;
        return (
          <Card
            data-aos="zoom-in"
            data-aos-offset="200"
            onClick={() => navigate(`/products_page/${productsid}`)}
            className={style2.productCard}
            style={{
              background: "#efefef",
              border: "#d2cdcd 0.1px solid",
            }}
            key={productsid}
          >
            <div className={style2.cardBody}>
              <img src={thumbnailURL} alt={title} />
            </div>
            <div className={style2.cardHeader}>
              <StarRatings rating={rating} />
              {/* <span>{rating}⭐</span> */}
              {/* {rating > 4.6 ? <span>Featured</span> : null} */}
            </div>
            <div className={style2.cardFooter}>
              <div className={style2.footerLeft}>
                <span>{brand}</span>
                <span>{title.slice(0, 10) + `...`}</span>
                <CalculateOffer originPrice={price} offerPercentage={offer} />
              </div>
              <div className={style2.footerRight}>
                <Button
                  size="small"
                  varient="outlined"
                  onClick={e => {
                    e.stopPropagation();
                    dispatch(addToCart(data));
                  }}
                >
                  Add to cart
                </Button>
                <AiOutlineHeart
                  onClick={e => {
                    e.stopPropagation();
                    dispatch(addToWishlist(data));
                  }}
                />
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default MapProduct;

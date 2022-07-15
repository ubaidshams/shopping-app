import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../features/products/productSlice";

import styles from "../../../components/featured products/featuredProducts.module.css";
import { addToCart } from "../../../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";

import { AiOutlineHeart } from "react-icons/ai";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../../features/wishlist/wishlistSlice";
import Card from "@material-ui/core/Card";
import { Button } from "@mui/material";
import CalculateOffer from "../../../components/Offer Helper Components/CalculateOffer";
import StarRatings from "../../../components/spinner/Spinner";
import { sx } from "@mui/joy/styles/styleFunctionSx";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { useContext } from "react";
import { MyContext } from "../../../apis/MyContext";


const Search = () => {
  let { search, setsearch } = useContext(MyContext);

  let product = useSelector(state => state.product);
  let cartList = useSelector(state => state.wishlist.wishList);
  let [productIdList, setIdList] = useState([]);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let [prodList, setProdList] = useState([]);
  
  useEffect(() => {
    setProdList(product.productList);
  },[])
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  useEffect(() => {
    setIdList(cartList.map(item => item.productsid));
  }, [cartList]);
  console.log(prodList);
  return (
    <section className={styles.featuredProducts}>
      <article>
        <h1>Featured Products</h1>
      

        <div className={styles.cardContainer}>
          { 
            prodList
              .filter(term => {
                if (search == "") {
                  return term;
                } else if (
                  term.brand
                    .toLocaleUpperCase()
                    .includes(search.toLocaleUpperCase()) ||
                  term.title
                    .toLocaleUpperCase()
                    .includes(search.toLocaleUpperCase())
                ) {
                  return term;
                }
              })
              .map((product, index) => {
                let {
                  productsid,
                  title,
                  price,
                  thumbnailURL,
                  offer,
                  rating,
                  brand,
                } = product;

                return (
                  <Card
                    data-aos="zoom-in"
                    data-aos-offset="200"
                    onClick={() => navigate(`/products_page/${productsid}`)}
                    className={styles.productCard}
                    key={productsid}
                  >
                    <div className={styles.cardBody}>
                      <img src={thumbnailURL} alt={title} />
                    </div>
                    <div className={styles.cardHeader}>
                      <span>{rating.toFixed(1)}</span>
                      <StarRatings rating={rating} left="2.5" />
                      {/* <span style={{color:"black"}}>{rating}</span> */}
                      {rating > 4.6 ? <span>Featured</span> : null}
                    </div>
                    <div className={styles.cardFooter}>
                      <div className={styles.footerLeft}>
                        <span>{brand.toUpperCase()}</span>
                        <span>
                          {title.length > 38
                            ? title.slice(0, 38) + "..."
                            : title}
                        </span>
                        <span>
                          <CalculateOffer
                            originPrice={price}
                            offerPercentage={offer}
                          />
                        </span>
                      </div>
                      <div className={styles.footerRight}>
                        <Button
                          variant="outlined"
                          size="small"
                          onClick={e => {
                            e.stopPropagation();
                            dispatch(addToCart(product));
                          }}
                        >
                          Add to cart
                        </Button>
                        <FavoriteIcon
                          onClick={e => {
                            e.stopPropagation();
                            if (productIdList.includes(productsid)) {
                              dispatch(removeFromWishlist(productsid));
                              return;
                            }
                            dispatch(addToWishlist(product));
                          }}
                          style={{
                            fill: productIdList.includes(productsid)
                              ? "red"
                              : "#c0bfbf",
                          }}
                        />
                      </div>
                    </div>
                  </Card>
                );
              })
          }
        </div>
      </article>
    </section>
  );
};

export default Search;








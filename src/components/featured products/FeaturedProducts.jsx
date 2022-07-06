import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/products/productSlice";
import Spinner from "./../spinner/Spinner";
import styles from "./featuredProducts.module.css";
import { addToCart } from "../../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";
import PaginationComp from "../pagination/PaginationComp";
import { AiOutlineHeart } from "react-icons/ai";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../features/wishlist/wishlistSlice";
import Card from "@material-ui/core/Card";
import { Button } from "@mui/material";
import CalculateOffer from "../Offer Helper Components/CalculateOffer";
import StarRatings from "../starRating/StarRatings";
import { sx } from "@mui/joy/styles/styleFunctionSx";
import FavoriteIcon from "@mui/icons-material/Favorite";

const FeaturedProducts = () => {
  let product = useSelector(state => state.product);
  let cartList = useSelector(state => state.wishlist.wishList);
  let [productIdList, setIdList] = useState([]);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let [prodList, setProdList] = useState([]);
  let [currentPage, setCurrentPage] = useState(1);
  let cardPerPage = 12;
  let totalPages = Math.ceil(product.productList.length / cardPerPage);

  const setPage = () => {
    let start, end;
    if (currentPage === 1) {
      start = 0;
      end = currentPage * cardPerPage;
    } else {
      start = currentPage * cardPerPage - cardPerPage;
      end = currentPage * cardPerPage;
    }
    setProdList(product.productList.slice(start, end));
  };
  useEffect(() => {
    setPage();
  }, [currentPage, product]);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  useEffect(() => {
    setIdList(cartList.map(item => item.productsid));
  }, [cartList]);

  return (
    <section className={styles.featuredProducts}>
      <article>
        <h1>Featured Products</h1>
        <div className={styles.cardContainer}>
          {prodList.length === 0 ? (
            <Spinner />
          ) : (
            prodList.map((product, index) => {
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
                        {title.length > 38 ? title.slice(0, 38) + "..." : title}
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
          )}
        </div>
        <PaginationComp
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
      </article>
    </section>
  );
};

export default FeaturedProducts;

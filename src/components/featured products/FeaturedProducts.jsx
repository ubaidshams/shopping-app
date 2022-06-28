import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/products/productSlice";
import Spinner from "./../spinner/Spinner";
import styles from "./featuredProducts.module.css";
import { addToCart } from "../../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";
import PaginationComp from "../pagination/PaginationComp";
import { AiOutlineHeart } from "react-icons/ai";
import { addToWishlist } from "../../features/wishlist/wishlistSlice";

import Card from "@material-ui/core/Card";
import { Button } from "@mui/material";
const FeaturedProducts = () => {
  let product = useSelector(state => state.product);
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

  return (
    <section className={styles.featuredProducts}>
      <article>
        <h1>Featured Products</h1>
        <div className={styles.cardContainer}>
          {prodList.length === 0 ? (
            <Spinner />
          ) : (
            prodList.map(product => {
              let {
                productsid,
                title,
                price,
                thumbnail_URL,

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
                    <img src={thumbnail_URL} alt={title} />
                  </div>
                  <div className={styles.cardHeader}>
                    <span>{rating}⭐</span>
                    {rating > 4.6 ? <span>Featured</span> : null}
                  </div>
                  <div className={styles.cardFooter}>
                    <div className={styles.footerLeft}>
                      <span>{brand}</span>
                      <span>{title.slice(0, 15) + `...`}</span>
                      <span>₹{price}</span>
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
                      <AiOutlineHeart
                        onClick={e => {
                          e.stopPropagation();
                          dispatch(addToWishlist(product));
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

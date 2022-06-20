import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/products/productSlice";
import Spinner from "./../spinner/Spinner";
import styles from "./featuredProducts.module.css";
import { addToCart } from "../../features/cart/cartSlice";

const FeaturedProducts = () => {
  let product = useSelector(state => state.product);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <section className={styles.featuredProducts}>
      <article>
        <h1>Featured Products</h1>
        <div className={styles.cardContainer}>
          {product.productList.length === 0 ? (
            <Spinner />
          ) : (
            product.productList.map(product => {
              let {
                id,
                title,
                price,
                thumbnail,
                discountPercentage,
                rating,
                brand,
              } = product;
              return (
                <div className={styles.productCard} key={id}>
                  <div className={styles.cardBody}>
                    <img src={thumbnail} alt={title} />
                  </div>
                  <div className={styles.cardHeader}>
                    <span>{rating}⭐</span>
                    {rating > 4.6 ? <span>Featured</span> : null}
                  </div>
                  <div className={styles.cardFooter}>
                    <div className={styles.footerLeft}>
                      <span>{brand}</span>
                      <span>{title.slice(0, 12) + `...`}</span>
                      <span>${price}</span>
                    </div>
                    <div className={styles.footerRight}>
                      <span>{discountPercentage}% OFF</span>
                      <button onClick={() => dispatch(addToCart(product))}>
                        Add to cart{" "}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </article>
    </section>
  );
};

export default FeaturedProducts;

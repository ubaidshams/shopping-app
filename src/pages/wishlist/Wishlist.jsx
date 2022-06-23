import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../../features/wishlist/wishlistSlice";
import styles from "./wishlist.module.css";
import { AiOutlineDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
const Wishlist = () => {
  let navigate = useNavigate();
  let wishlist = useSelector(state => state.wishlist);
  const dispatch = useDispatch();
  return (
    <section className={styles.wishlist}>
      <article>
        <h1>My Wishlist ({wishlist.wishList.length})</h1>
        <div className={styles.listContainer}>
          {wishlist.wishList.map((product, index) => {
            let {
              productsid,
              brand,
              title,
              description,
              price,
              rating,
              thumbnail_URL,
            } = product;
            console.log(product);
            return (
              <div
                onClick={() => navigate(`/products_page/${productsid}`)}
                className={styles.wishlistProduct}
                key={productsid}
              >
                <div className={styles.prodImg}>
                  <img
                    src={thumbnail_URL}
                    alt={title}
                    height="200"
                    width="200"
                  />
                </div>
                <div className={styles.prodDetails}>
                  <h2>
                    {brand} {title}
                  </h2>
                  <p>{description}</p>
                  <span>{rating}⭐</span>
                  <h5>₹ {price}</h5>
                </div>
                <div
                  onClick={e => {
                    e.stopPropagation();
                    dispatch(removeFromWishlist(index));
                  }}
                  className={styles.deleteIcon}
                >
                  <AiOutlineDelete />
                </div>
              </div>
            );
          })}
        </div>
      </article>
    </section>
  );
};

export default Wishlist;

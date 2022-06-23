import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Wishlist = () => {
  let wishlist = useSelector(state => state.wishlist);
  const dispatch = useDispatch();
  return (
    <section className="wishlist">
      <article>
        <h1>My Wishlist ({wishlist.wishList.length})</h1>
        <div className="listContainer">
          {wishlist.wishList.map((index, product) => {
            let { productsid, brand, title, description, price } = product;
            return <div className="wishlistProduct"></div>;
          })}
        </div>
      </article>
    </section>
  );
};

export default Wishlist;

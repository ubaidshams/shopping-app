import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Cataxios from "../../apis/Cataxios";
import style from "./cat.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import { BiSort } from "react-icons/bi";
import { FaHeart, FaFilter } from "react-icons/fa";
import { addToCart } from "../../features/cart/cartSlice";
import { useDispatch } from "react-redux";
import { Button, Menu, MenuItem, IconButton } from "@mui/material";
import Card from "@material-ui/core/Card";
import style2 from "../featured products/featuredProducts.module.css";
import { useNavigate } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { addToWishlist } from "../../features/wishlist/wishlistSlice";
const Kids = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let [data, setdata] = useState({});
  const [sorting, setSorting] = useState(null);
  const [sortingType, setSortType] = useState("");
  const SortOpen = Boolean(sorting);
  const fetchdata = async () => {
    let { data } = await Cataxios.get("/kids");
    setdata(data);
    console.log(data);
  };
  function getSorting(){
    
  }
  useEffect(() => {
    fetchdata();
  },[]);
  useEffect(() => {
    getSorting()
  },[sortingType])
  const handleClick = event => {
    setSorting(event.currentTarget);
  };
  const handleClose = () => {
    setSorting(null);
  };
  const handleSort = (e) => {
    setSortType(e.target.innerText);
    handleClose();
  }
  return (
    <div>
      <div>
        <div>
          <h1>Kids Category</h1>
          <div className={style.block}>
            <input type="text" name="" id="" placeholder="Search " />
            <p>
              <AiOutlineSearch />
            </p>
            <IconButton
              id="demo-positioned-button"
              aria-controls={SortOpen ? "demo-positioned-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={SortOpen ? "true" : undefined}
              onClick={handleClick}
            >
              <BiSort />
            </IconButton>
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={sorting}
              open={SortOpen}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <MenuItem onClick={handleSort}>By Price</MenuItem>
              <MenuItem onClick={handleSort}>By rating</MenuItem>
            </Menu>

            <p>
              <FaFilter />
            </p>
            <p>
              <FaHeart />
            </p>
          </div>
        </div>
        <div>
          <h2>Toys :</h2>
        </div>
        <div className={style.box}>
          {data["Toys"] &&
            data.Toys.map(data => {
              let { productsid, brand, rating, thumbnail_URL, price, title } =
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
                    <img src={thumbnail_URL} alt={title} />
                  </div>
                  <div className={style2.cardHeader}>
                    <span>{rating}⭐</span>
                    {rating > 4.6 ? <span>Featured</span> : null}
                  </div>
                  <div className={style2.cardFooter}>
                    <div className={style2.footerLeft}>
                      <span>{brand}</span>
                      <span>{title.slice(0, 15) + `...`}</span>
                      <span>₹{price}</span>
                    </div>
                    <div className={style2.footerRight}>
                      <button
                        onClick={e => {
                          e.stopPropagation();
                          dispatch(addToCart(data));
                        }}
                      >
                        Add to cart
                      </button>
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
      </div>
    </div>
  );
};

export default Kids;

import * as React from "react";
import { useState } from "react";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemContent from "@mui/joy/ListItemContent";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import Typography from "@mui/joy/Typography";
import Style from "./CartDropdown.module.css";
import { useSelector } from "react-redux";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const filterProduct = cartItem => {
  let NonDuplicateProduct = {};
  return cartItem.filter(item => {
    if (item.productsid in NonDuplicateProduct) return false;
    else {
      NonDuplicateProduct[item.productsid] = 1;
      return true;
    }
  });
};

export default function CartDropdown() {
  let cartItem = useSelector(state => state.cart.cartItems);
  const currentUser = useSelector(state => state.user.currentUser);
  const [filter, setFilter] = useState([]);
  let DropDownLimit = 4;

  useEffect(() => {
    console.log(filterProduct(cartItem));
    setFilter(filterProduct(cartItem));
  }, [cartItem]);

  return (
    <div className={currentUser.email ? Style.container2 : Style.container}>
      <Box sx={{ width: 200 }}>
        <Typography
          id="ellipsis-list-demo"
          level="body4"
          textTransform="uppercase"
          textAlign="center"
          fontWeight="xl"
          mb={2}
          sx={{ letterSpacing: "0.15rem" }}
        >
          Cart
        </Typography>
        <div
          className={currentUser.email ? Style.arrowup2 : Style.arrowup}
        ></div>
        <List
          aria-labelledby="ellipsis-list-demo"
          sx={{ "--List-decorator-width": "56px" }}
        >
          {cartItem.length === 0 && (
            <ListItem>
              <ListItemDecorator sx={{ alignSelf: "flex-start" }}>
                <AddShoppingCartIcon />
              </ListItemDecorator>
              <ListItemContent>
                <Typography>Emtpty</Typography>
              </ListItemContent>
            </ListItem>
          )}

          {filter
            .slice(0, 4)

            .map((item, index) => {
              let { thumbnail_URL, description, title, price } = item;
              return (
                <>
                  <ListItem>
                    <ListItemDecorator sx={{ alignSelf: "flex-start" }}>
                      <Avatar src={thumbnail_URL} />
                    </ListItemDecorator>
                    <ListItemContent>
                      <Typography>{title}</Typography>
                      <Typography level="body2" noWrap>
                        {description.slice(0, 17) + "..."}
                      </Typography>
                      <Typography>₹{price}</Typography>
                    </ListItemContent>
                  </ListItem>
                </>
              );
            })}
        </List>
        {filter.length > 4 && (
          <Link to="/cart">{`${
            filter.length - DropDownLimit
          } more products`}</Link>
        )}
      </Box>
    </div>
  );
}

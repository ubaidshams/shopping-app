import React from "react";
import { useRoutes } from "react-router";
import Login from "../pages/auth/users/Login";
import MerchSignup from "../pages/auth/merchants/MerchSignup";
import Signup from "../pages/auth/users/Signup";
import Cart from "../pages/cart/Cart";
import Home from "../pages/home/Home";
import ProductDisplay from "../pages/productsDisplay/ProductDisplay";
import Checkout from "../pages/cart/ProductCheckout/Checkout";

import Forget from "../pages/auth/users/Forget";
import Maincategory from "../components/categories/Maincategory";
import Kids from "../components/categories/Kids";
import Women from "../components/categories/Women";
import Menpage from "../components/categories/Menpage";
import Electronics from "../components/categories/Electronics";
import Beauty from "../components/categories/Beauty";

import Wishlist from "../pages/wishlist/Wishlist";
import Profile from "./../pages/profile/Profile";
import Reset from "../pages/auth/users/Reset";
const CustomRoutes = () => {
  let myRoutes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/forgot", 
      element: <Forget />,
    },
    {
      path: "/reset",
      element: <Reset />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },

    {
      path: "/checkout",
      element: <Checkout />,
    },

    {
      path: `/products_page/:id`,
      element: <ProductDisplay />,
    },
    {
      path: "/merch-Signup",
      element: <MerchSignup />,
    },
    {
      path: "/main-category",
      element: <Maincategory />,
    },
    {
      path: "/men",
      element: <Menpage />,
    },
    {
      path: "/women",
      element: <Women />,
    },
    {
      path: "/kids",
      element: <Kids />,
    },
    {
      path: "/electronics",
      element: <Electronics />,
    },
    {
      path: "/beauty_products",
      element: <Beauty />,
    },
    {
      path: "/wishlist",
      element: <Wishlist />,
    },
    {
      path: "/my-profile",
      element: <Profile />,
    },
  ]);
  return myRoutes;
};

export default CustomRoutes;

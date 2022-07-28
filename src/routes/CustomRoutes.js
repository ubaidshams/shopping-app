import React from "react";
import { useRoutes } from "react-router";
import Login from "../pages/auth/users/Login";
import MerchSignup from "../pages/auth/merchants/MerchSignup";
import Signup from "../pages/auth/users/Signup";
import Cart from "../pages/cart/Cart";
import Home from "../pages/home/Home";
import ProductDisplay from "../pages/productsDisplay/ProductDisplay";
import Search from "../pages/productsDisplay/search/Search";
import Checkout from "../pages/cart/ProductCheckout/Checkout";
import Myorder from "../pages/cart/Myorder";
import Forget from "../pages/auth/users/Forget";
import Maincategory from "../components/categories/Maincategory";
import Kids from "../components/categories/Kids";
import Women from "../components/categories/Women";
import Menpage from "../components/categories/Menpage";
import Electronics from "../components/categories/Electronics";
import Beauty from "../components/categories/Beauty";
import SelectAddress from "../pages/cart/ProductCheckout/SelectAddress";
import Wishlist from "../pages/wishlist/Wishlist";
import Profile from "./../pages/profile/Profile";
import Reset from "../pages/auth/users/Reset";
import Order from "../pages/profile/Order";
import AddressForm from "../pages/auth/users/AddressForm";
import Right from "../pages/profile/ProfileInfo";
import ProfileInfo from "../pages/profile/ProfileInfo";
import MyAddresses from "../pages/profile/MyAddresses";
import EditAddress from "../pages/profile/EditAddress";
import PlaceOrder from "../pages/cart/ProductCheckout/PlaceOrder";
import Payment from "../pages/cart/ProductCheckout/Payment";
const CustomRoutes = () => {
  let myRoutes = useRoutes([
    {
      path: "/Home",
      element: <Home />,
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
      children: [
        {
          path: "my-profile-info",
          element: <ProfileInfo />,
        },
        {
          path: "my-addresses",
          element: <MyAddresses />,
        },
      ],
    },
    {
      path: "/myorder",
      element: <Myorder />,
    },
    {
      path: "/selectaddress",
      element: <SelectAddress />,
    },

    {
      path: "/addressform",
      element: <AddressForm />,
    },
    {
      path:`/editaddress/:addressId`,
      element: <EditAddress/>
    },
    {
      path: "/place-order",
      element: <PlaceOrder />,
    },
    {
      path: "payment",
      element: <Payment/>
    },
    {
      path:"/search",
      element: <Search/>
    }
  ]);
  return myRoutes;
};

export default CustomRoutes;

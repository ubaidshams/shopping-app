import React from "react";
import { useRoutes } from "react-router";
import Login from "../pages/auth/Login";

import Signup from "../pages/auth/Signup";
import Home from "../pages/home/Home";


import Forget from "./../pages/auth/Forget";

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
    
    
  ]);
  return myRoutes;
};

export default CustomRoutes;

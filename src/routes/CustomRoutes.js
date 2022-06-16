import React from "react";
import { useRoutes } from "react-router";
import Login from "../pages/auth/Login";

import Signup from "../pages/auth/Signup";
import Home from "../pages/home/Home";

const CustomRoutes = () => {
  let myRoutes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/login",
      element:<Login/>
    }
    
  ]);
  return myRoutes;
};

export default CustomRoutes;

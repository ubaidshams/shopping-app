import React from "react";
import { useRoutes } from "react-router";
import Home from "../pages/home/Home";

const CustomRoutes = () => {
  let myRoutes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
  ]);
  return myRoutes;
};

export default CustomRoutes;

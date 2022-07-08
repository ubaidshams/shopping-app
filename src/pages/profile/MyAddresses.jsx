import { Box } from "@material-ui/core";
import { Button, Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function MyAddresses() {
  let currUser = useSelector(state => state.user.currentUser);
  let { firstName, lastName, gender, email, phone, addressList } = currUser;
  return <section></section>;
}

export default MyAddresses;

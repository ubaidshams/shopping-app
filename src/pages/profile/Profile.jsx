import React, { useState } from "react";
import avatar from "./profile.module.css";
import Locations from "./Locations";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./profile.css";
import { useDispatch } from "react-redux";
import MEN from "../../menprofile.png";
import Axios from "../../apis/Axios";

import { createCurrentUser } from "../../features/User/userSlice";
import {
  Avatar,
  Box,
  Button,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import ProfileInfo from "./ProfileInfo";
import ProfileOutlet from "./ProfileOutlet";
import UserDashBoard from "./UserDashBoard";
const Profile = () => {
  let currUser = useSelector(state => state.user.currentUser);

  let { firstName, lastName, gender, email, phone } = currUser;

  return (
    <Container sx={{ display: "flex" }}>
      <UserDashBoard />
      <ProfileOutlet />
    </Container>
  );
};
export default Profile;

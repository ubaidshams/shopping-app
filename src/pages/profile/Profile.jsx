import React, { useState } from "react";
import avatar from "./profile.module.css";
import Locations from "./Locations";
import Order from "./Order";
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
const Profile = () => {
  let currUser = useSelector(state => state.user.currentUser);
  let { firstName, lastName, gender, email, phone } = currUser;
  let [UserGender, setGender] = useState("male");
  let [manage, setManage] = useState("personal");
  let [addAddress, setaddAddress] = useState([]);
  let [locations, setLocations] = useState(false);
  let [order, setOrder] = useState(false);
  let [edit, setEdit] = useState("");
  let [display, setDisplay] = useState({
    street: "",
    landMark: "",
    city: "",
    state: "",
    pincode: "",
    country: "",
  });
  let navigate = useNavigate();
  const dispatch = useDispatch();

  let changeOption = e => {
    setGender(e.target.value);
  };

  let changeAddress = () => {
    setManage("address");
  };

  let displayAddress = () => {
    setDisplay(setaddAddress);
  };

  let changeLocations = () => {
    setLocations(true);
  };
  const handleLogOut = async () => {
    try {
      await Axios.get("/user/logout", { withCredentials: true });
      navigate("/");
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(createCurrentUser({ token: "", currentUser: {} }));
    }
  };

  return (
    <>
      <section>
        <Container
          sx={{
            display: "flex",
            margin: "1rem auto",

            gap: 5,
          }}
        >
          <Box className={avatar.accsett}>
            <h1>Account Settings</h1>
            <ul>
              <li onClick={() => setManage("personal")}>Profile Info</li>
              <li onClick={() => setManage("address")}>My Addresses</li>
              <li>
                <Link to="/My-orders">My Orders</Link>
              </li>
              <li>
                <Button variant="contained" onClick={handleLogOut}>
                  LogOut
                </Button>
              </li>
            </ul>
          </Box>
          <Box className={avatar.userBox}>
            <h1>My Profile</h1>
            <div>
              <Avatar alt="" src="" />

              <h2>{firstName}</h2>
            </div>
            <div>
              <ul>
                <li>First Name:</li>
                <li>Last Name:</li>
                <li>Email:</li>
                <li>Phone:</li>
              </ul>
            </div>
          </Box>
        </Container>
      </section>
    </>
  );
};
export default Profile;

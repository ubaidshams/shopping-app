import { Card, Grid } from "@mui/material";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./profile.css";

function UserDashBoard() {
  const { pathname } = useLocation();
  let currUser = useSelector(state => state.user.currentUser);
  let { firstName, lastName, gender, email, phone } = currUser;
  return (
    <Card
      sx={{
        height: "60vh",
        margin: "1rem 0",
        boxShadow: "0px 1px 2px 2px #efefef",
        background: "#e4e4e4",
        width: "20vw",
      }}
    >
      <Grid
        sx={{
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          alt=""
          src="https://cdn.pixabay.com/photo/2016/12/28/11/56/headphones-1935971_960_720.png"
          className="userDashimage"
        />
        <h2>My Account</h2>
      </Grid>
      <Grid>
        <NavLink to="my-profile-info">
          <Grid
            className={
              pathname == "/my-profile/my-profile-info"
                ? "profileDashactive"
                : "ediprofileDashNavlink"
            }
          >
            {" "}
            My Profile
          </Grid>
        </NavLink>
        <NavLink to="my-addresses">
          <Grid
            className={
              pathname == "/my-profile/my-addresses"
                ? "profileDashactive"
                : "ediprofileDashNavlink"
            }
          >
            My Addresses
          </Grid>
        </NavLink>
      </Grid>
    </Card>
  );
}

export default UserDashBoard;

import { Card, Grid } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function UserDashBoard() {
  let currUser = useSelector(state => state.user.currentUser);
  let { firstName, lastName, gender, email, phone } = currUser;
  return (
    <Card sx={{ padding: "2rem", margin: "1rem", background: "lightblue" }}>
      <Grid>
        <h3>DashBoard</h3>
      </Grid>
      <Grid>
        <ul className="ediprofileDashbord">
          
          <li>
            <NavLink to="my-profile-info">My Profile</NavLink>
          </li>
          <li>
            <NavLink to="my-addresses">My Addresses</NavLink>
          </li>
        </ul>
      </Grid>
    </Card>
  );
}

export default UserDashBoard;

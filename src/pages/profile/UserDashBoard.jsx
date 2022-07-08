import { Card, Grid } from "@mui/material";
import React from "react";

function UserDashBoard() {
  return (
    <Card sx={{padding:'2rem'}}>
      <Grid>
        <h3>DashBoard</h3>
      </Grid>
      <Grid>
        <ul className="ediprofileDashbord" >
          <li>My Profile</li>
          <li>My Orders History</li>
          <li>My Addresses</li>
        </ul>
      </Grid>
    </Card>
  );
}

export default UserDashBoard;

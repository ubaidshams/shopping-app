// In this page called right contains the right part of the Profile

import React, { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import { Button } from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { useSelector } from "react-redux";

import "./right.css";
import EditProfile from "./EditProfile";
const Right = () => {
  const [openeditprofile, setOpeneditprofile] = useState(false);
  let currUser = useSelector(state => state.user.currentUser);
  let { firstName, lastName, gender, email, phone } = currUser;

  const handleClose = value => {
    setOpeneditprofile(false);
  };

  return (
    <>
      {openeditprofile && (
        <EditProfile open={openeditprofile} onClose={handleClose} />
      )}
      <div className="r1">
        <h1>
          <PersonIcon /> My Profile
        </h1>
        <Button variant="contained" onClick={() => setOpeneditprofile(true)}>
          Edit Profile &nbsp; <ModeEditIcon />
        </Button>
      </div>
      <div className="r2">
        <table>
          <tr>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Email</th>
            <th>Phone</th>

            <th>Gender</th>
          </tr>
          <tr>
            <td>{`${firstName}`}</td>
            <td>{`${lastName}`}</td>
            <td>{`${email}`}</td>
            <td>{`${phone}`}</td>
            <td>{`${gender}`}</td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default Right;

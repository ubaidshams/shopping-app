// In this page called right contains the right part of the Profile

import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import { Button } from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { useSelector } from "react-redux";

import "./right.css";
const Right = () => {
  let currUser = useSelector(state => state.user.currentUser);
  let { firstName, lastName, gender, email, phone } = currUser;

  return (
    <>
      <div className="r1">
        <h1>
          <PersonIcon /> My Profile
        </h1>
        <Button
          className="editbtn"
          variant="contained"
          href="#contained-buttons"
        >
          Edit Profile &nbsp; <ModeEditIcon />
        </Button>
      </div>
      <div className="r2">
        {/* <h2>{`firstname:${firstName}`}</h2> */}
        <table>
          <tr>
            <th>
              FirstName
            </th>
            <th>
              LastName
                      </th>
                      <th>
                          Email
                      </th>
                      <th>
                          Phone
                      </th>
                     
                      <th>
                          Gender
                      </th>
                  </tr>
                  <tr>
                      <td>{`${firstName}` }</td>
                      <td>{ `${lastName}`}</td>
                      <td>{`${email}` }</td>
                      <td>{`${phone}`}</td>
                      <td>{`${gender}` }</td>
                  </tr>
        </table>
      </div>
    </>
  );
};

export default Right;

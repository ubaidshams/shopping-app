import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useState } from "react";
import Spinner from "../spinner/Spinner";
import { Outlet } from "react-router-dom";
import { createCurrentUser } from "../../features/User/userSlice";

const PersistentLogin = ({ children }) => {
  let dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  let getNewToken = async () => {
    setLoading(true);
    try {
      // let { data } = await axios.get("http://localhost:3001/user/refresh", {
      //     withCredentials: true,
      // }
      let data;
      // );
      await fetch("http://localhost:3001/user/refresh", {
        credentials: "include",
      })
        .then(res => res.json())
        .then(result => (data = result));
      console.log(data);

      let detailsRes = await axios.get(
        "http://localhost:3001/api/user/detail",
        {
          headers: {
            "Context-Type": "application/json",
            Authorization: `Bearer ${data.token}`,
          },
        }
      );
      let token = data.token;
      console.log("persistentLogin....", detailsRes.data);
      dispatch(
        createCurrentUser({
          refreshToken: token,
          currentUser: detailsRes.data.userDetails,
        })
      );
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getNewToken();
  }, []);

  return (
    <>
      {loading
        ? (
          <div
            style={{
              width: "100%",
              height: "100vh",
              display: "grid",
              placeItems: "center",
            }}
          >
            <Spinner />
          </div>)
        : 
          children}
    </>
  );
};

export default PersistentLogin;

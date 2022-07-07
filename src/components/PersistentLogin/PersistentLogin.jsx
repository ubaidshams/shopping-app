import React, { useEffect } from "react";
import Axios from "../../apis/Axios";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Spinner from "../spinner/Spinner";
import { BrowserRouter, Outlet, useNavigate } from "react-router-dom";
import { createCurrentUser } from "../../features/User/userSlice";
import Welcome from "../welcomepage/Welcome";
import CustomRoutes from "../../routes/CustomRoutes";
import Navbar from "../navbar/Navbar";

const PersistentLogin = ({ children }) => {
  const navigate = useNavigate();
  let currentUser = useSelector(state => state.user.currentUser);
  let dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  let getNewToken = async () => {
    setLoading(true);
    try {
      let { data } = await Axios.get("/user/refresh", {
        withCredentials: true,
      });

      let detailsRes = await Axios.get("/api/user/detail", {
        headers: {
          "Context-Type": "application/json",
          Authorization: `Bearer ${data.token}`,
        },
      });
      let token = data.token;
      // console.log("persistentLogin....", detailsRes.data);
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
    if (!currentUser.email) {
      navigate("/");
    }
  }, []);

  return (
    <>
      {loading ? (
        <div
          style={{
            width: "100%",
            height: "100vh",
            display: "grid",
            placeItems: "center",
          }}
        >
          <Spinner />
        </div>
      ) : currentUser.email ? (
        children
      ) : (
        <>
          <Outlet />
        </>
      )}
    </>
  );
};

export default PersistentLogin;

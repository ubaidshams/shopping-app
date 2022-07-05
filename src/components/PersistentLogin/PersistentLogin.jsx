import React, { useEffect } from "react";
import Axios from "../../apis/Axios";
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
      ) : (
        children
      )}
    </>
  );
};

export default PersistentLogin;

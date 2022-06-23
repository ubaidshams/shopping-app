import { useEffect } from "react";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./navbar.module.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@material-ui/core";

import { useSelector } from "react-redux";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Auth = () => {
  const location = useLocation();
  let cartValue = useSelector(state => state.cart.cartItems.length);
  const [count, setCount] = useState(cartValue);
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [values, setValues] = useState({
    email: "",
    password: "",
    showPassword: false,
  });
  const handleChange = (e, prop) => {
    setValues({ ...values, [prop]: e.target.value });
  };
  const handleClickShowPassword = e => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  let cartCount = useSelector(state =>
    state.cart.cartItems.map(item => item.productsid)
  );
  let set = new Set(cartCount);
  cartCount = [...set].length;
  useEffect(() => {
    setCount(cartCount);
  }, [cartCount]);
  return (
    <div className={styles.authBlock}>
      {location.pathname !== "/signup" && (
        <Link to="/cart" className={styles.cartIcon}>
          <AiOutlineShoppingCart />
          <span>{count}</span>
        </Link>
      )}
      {/*  */}
      {location.pathname === "/signup" ? (
        ""
      ) : (
        <button onClick={() => setLoginOpen(true)}>Login</button>
      )}
      {/*  */}
      <Link to="/signup">Signup</Link>
      <Dialog
        open={isLoginOpen}
        onClose={() => setLoginOpen(false)}
        // maxWidth="md"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "1rem",
            color: "#3f51b5",
          }}
        >
          <h1>Login</h1>
          <span>or</span>
          <a href="" style={{ textDecoration: "underLine" }}>
            create a account
          </a>
        </div>
        <DialogContent>
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "22rem",
              margin: "0.2rem 0rem",
            }}
          >
            <FormControl
              sx={{ m: 1, width: "30rem", margin: "1rem" }}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Email or phone
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type="text"
                value={values.email}
                style={{ marginBottom: "2rem" }}
                onChange={e => handleChange(e, "email")}
                label="Email or phone"
              />
            </FormControl>
            <FormControl sx={{ m: 1, width: "30rem" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={e => handleChange(e, "password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setLoginOpen(false)}
            variant="contained"
            color="primary"
            style={{ width: "90%", margin: "0.7rem auto" }}
          >
            submit
          </Button>
        </DialogActions>
        <div
          style={{
            display: "grid",
            placeItems: "center",
            marginBottom: "1.5rem",
          }}
        >
          <a href="" style={{ textDecoration: "underLine" }}>
            Forgot Password?
          </a>
        </div>
      </Dialog>
    </div>
  );
};

export default Auth;

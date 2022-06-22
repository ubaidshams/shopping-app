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
  const [isLoginOpen, setLoginOpen] = useState(false);
  let cartValue = useSelector(state => state.cart.cartItems.length);
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

  return (
    <div className={styles.authBlock}>
      {location.pathname !== "/signup" && (
        <Link to="/cart" className={styles.cartIcon}>
          <AiOutlineShoppingCart />
          <span>{cartValue}</span>
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
        maxWidth="md"
      >
        <DialogTitle style={{ textAlign: "center" }}>Login</DialogTitle>
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
            style={{ marginRight: "9.3rem",marginBottom:"1rem" }}
          >
            submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Auth;

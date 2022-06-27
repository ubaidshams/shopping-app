const express = require("express");
const handleLogOut = require("../../Controller/logoutController");
const RefreshToken = require("../../Controller/refreshTokenController");
const {
  RegisterUser,
  SignInUser,
  getAllUsers,
  forgotPassword,
} = require("../../Controller/UserController");
const verifyAccessToken = require("../../middleware/verifyAccessToken");
const router = express.Router();

router.route("/signIn").post(SignInUser);

router.route("/signUp").post(RegisterUser);
router.route("/all").get(verifyAccessToken, getAllUsers);

router.get("/refresh", RefreshToken);
router.get("/logout", handleLogOut);

router.route("/forgot-password").post(forgotPassword);

// const formData = require("form-data");
// const Mailgun = require("mailgun.js");
// const mailgun = new Mailgun(formData);
// const mg = mailgun.client({
//   username: "api",
//   key: "37472fa2437adf20044e822d39f26998-4f207195-8769c2c4",
// });

module.exports = router;

const express = require("express");
const { RegisterUser, SignInUser, getAllUsers } = require("../../Controller/UserController");
const router = express.Router();

router.route("/signIn").post(SignInUser);

router.route("/signUp").post(RegisterUser);
router.route("/all").get(getAllUsers)


module.exports=router
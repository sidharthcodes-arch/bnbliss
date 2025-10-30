const express = require("express");
const router = express.Router();
const User = require("../models/user");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const userController = require("../controllers/user.js");

//User Backend

//signup route
router
  .route("/signup")
  .get(userController.renderSignUpPage)
  .post(wrapAsync(userController.SignUp));

//Login  Route
router
  .route("/login")
  .get(userController.renderLogInPage)
  .post(
    saveRedirectUrl,
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: true,
    }),
    userController.LogIn
  );

//Logout Route
router.get("/logout", userController.LogOut);

module.exports = router;

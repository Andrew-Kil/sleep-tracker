const express = require("express");
const router = express.Router();
const passport = require("../auth/local");
const { loginRequired } = require("../auth/helpers");
const {
  loginUser,
  isLoggedIn,
  logoutUser,
} = require("../db/queries/sessions.js");

router.post("/login", passport.authenticate("local", {}), loginUser);
router.get("/isLoggedIn", isLoggedIn);
router.post("/logout", loginRequired, logoutUser);

module.exports = router;

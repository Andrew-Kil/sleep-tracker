const express = require("express");
const router = express.Router();
const usersQueries = require("../db/queries/users");
// const passport = require("../auth/passport");
const local = require("../auth/local");

router.post("/signup", async (req, res, next) => {
  try {
    const user = req.body;
    const newUser = await usersQueries.createUser(user);
    res.send({
      payload: newUser,
      msg: "New user signup success",
      err: false,
    });
  } catch (err) {
    next(err);
  }
});

router.post("/login", local.authenticate("local"), async (req, res, next) => {
  res.json({
    payload: req.user,
    msg: `Welcome ${req.user.username}. You are logged in!`,
    err: false,
  });
});

module.exports = router;

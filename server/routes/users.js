const express = require("express");
const router = express.Router();
// const usersQueries = require("../db/queries/users");
const db = require("../db/queries/auth");
const passport = require("../auth/local");
const { loginRequired } = require("../auth/helpers");

// router.get("/", async (req, res, next) => {
//   try {
//     const users = await usersQueries.getAllUsers();
//     res.send({
//       payload: users,
//       msg: "Retrieved all users",
//       err: false,
//     });
//   } catch (err) {
//     next(err);
//   }
// });

router.get("/", loginRequired, db.getUsers);
router.post("/new", db.createUser);
router.post("/login", passport.authenticate("local", {}), db.loginUser);
router.get("/isLoggedIn", db.isLoggedIn);
router.post("/logout", loginRequired, db.logoutUser);

module.exports = router;

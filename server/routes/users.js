const express = require("express");
const router = express.Router();
const usersQueries = require("../db/queries/users");

router.get("/", async (req, res, next) => {
  try {
    const users = await usersQueries.getAllUsers();
    res.send({
      payload: users,
      msg: "Retrieved all users",
      err: false,
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;

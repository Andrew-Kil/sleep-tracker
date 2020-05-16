const express = require("express");
const router = express.Router();
const {
  createUser,
  updateUser,
  getUserByFirebaseID,
} = require("../db/queries/users");

router.post("/new", createUser);
router.patch("/profile/:id", updateUser);
router.get("/profile/:id", getUserByFirebaseID);

module.exports = router;

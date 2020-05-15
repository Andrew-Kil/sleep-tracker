const express = require("express");
const router = express.Router();
const { createUser, getUserByFirebaseID } = require("../db/queries/users");

router.post("/new", createUser);
router.get("/profile/:id", getUserByFirebaseID);

module.exports = router;

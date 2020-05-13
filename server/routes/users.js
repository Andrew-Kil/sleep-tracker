const express = require("express");
const router = express.Router();
const { createUser } = require("../db/queries/users");

router.post("/new", createUser);

module.exports = router;

const express = require("express");
const router = express.Router();

const {
  getAllSleepLogs,
  getOneSleepLog,
  getAllSleepLogsForUser,
  createSleepLog,
  // updateSleepLog,
  deleteSleepLog,
} = require("../db/queries/sleepLogs.js");

router.get("/", getAllSleepLogs);
router.get("/:id", getOneSleepLog);
router.get("/user/:id", getAllSleepLogsForUser);
router.post("/", createSleepLog);
// router.patch(":/id", updateSleepLog);
router.delete("/:id", deleteSleepLog);

module.exports = router;

const express = require("express");
const router = express.Router();

const {
  getAllDreamThemes,
  getOneDreamTheme,
  createDreamTheme,
  updateDreamTheme,
  deleteDreamTheme,
} = require("../db/queries/dreamThemes.js");

router.get("/", getAllDreamThemes);
router.get("/:id", getOneDreamTheme);
router.post("/", createDreamTheme);
router.patch(":/id", updateDreamTheme);
router.delete("/:id", deleteDreamTheme);

module.exports = router;

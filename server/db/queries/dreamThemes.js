const { db } = require("../index.js");

const getAllDreamThemes = (req, res, next) => {
  db.any("SELECT * FROM dream_themes")
    .then((data) => {
      res.status(200).json({
        status: "Success",
        data,
        message: "Received all dream themes",
      });
    })
    .catch((err) => next(err));
};

const getOneDreamTheme = (req, res, next) => {
  db.one(
    "SELECT * FROM dream_themes WHERE dream_themes.id = $1",
    +req.params.id
  )
    .then((data) => {
      res.status(200).json({
        status: "Success",
        data,
        messsage: "Received one dream theme",
      });
    })
    .catch((err) => next(err));
};

const createDreamTheme = (req, res, next) => {
  db.none(
    "INSERT INTO dream_themes(theme, info) VALUES(${theme}, ${info})",
    req.body
  )
    .then(() => {
      res.status(200).json({
        status: "Success",
        message: "Created new dream theme",
      });
    })
    .catch((err) => next(err));
};

const deleteDreamTheme = (req, res, next) => {
  db.result("DELETE FROM dream_themes WHERE id=$1", +req.params.id)
    .then((data) => {
      res.status(200).json({
        status: "Success",
        data,
        message: "Removed a dream theme",
      });
    })
    .catch((err) => next(err));
};

module.exports = {
  getAllDreamThemes,
  getOneDreamTheme,
  createDreamTheme,
  deleteDreamTheme,
};

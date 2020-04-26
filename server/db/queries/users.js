const { db } = require("./index.js");

const getAllUsers = (req, res, next) => {
  db.any("SELECT * FROM users")
    .then((data) => {
      res.status(200).json({
        status: "Success",
        data,
        message: "Received all users",
      });
    })
    .catch((err) => next(err));
};

const getOneUser = (req, res, next) => {
  db.one("SELECT * FROM users WHERE users.id = $1", +req.params.id)
    .then((data) => {
      res.status(200).json({
        status: "Success",
        data,
        messsage: "Received one user",
      });
    })
    .catch((err) => next(err));
};

const createUser = (req, res, next) => {
  db.none(
    "INSERT INTO users(name, sleeping_disorders, sleeping_aids) VALUES(${name}, ${sleeping_disorders}, ${sleeping_aids})",
    req.body
  )
    .then(() => {
      res.status(200).json({
        status: "Success",
        message: "Created new user",
      });
    })
    .catch((err) => next(err));
};

const deleteUser = (req, res, next) => {
  db.result("DELETE FROM users WHERE id=$1", +req.params.id)
    .then((data) => {
      res.status(200).json({
        status: "Success",
        data,
        message: "Removed a user",
      });
    })
    .catch((err) => next(err));
};

module.exports = {
  getAllUsers,
  getOneUser,
  createUser,
  deleteUser,
};

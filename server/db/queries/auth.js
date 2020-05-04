const db = require("../index");

const authHelpers = require("../../auth/helpers");

function createUser(req, res, next) {
  const hash = authHelpers.createHash(req.body.password);

  db.none(
    "INSERT INTO users (username, password_digest) VALUES (${username}, ${password})",
    { username: req.body.username, password: hash }
  )
    .then(() => {
      res.status(200).json({
        message: "Registration successful.",
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err,
      });
    });
}

function logoutUser(req, res, next) {
  req.logout();
  res.status(200).send("Log out successful.");
}

function loginUser(req, res) {
  res.json(req.user);
}

function isLoggedIn(req, res) {
  if (req.user) {
    res.json({ username: req.user });
  } else {
    res.json({ username: null });
  }
}

function getUsers(req, res) {
  db.manyOrNone("SELECT * FROM users")
    .then((results) => {
      res.json(results);
    })
    .catch((err) => {
      res.status(500).json({
        message: err,
      });
    });
}

module.exports = {
  createUser: createUser,
  logoutUser: logoutUser,
  loginUser: loginUser,
  isLoggedIn: isLoggedIn,
  getUsers: getUsers,
};

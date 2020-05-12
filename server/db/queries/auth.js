const { db } = require("../index");

const createUser = async (req, res, next) => {
  try {
    const { firebase_id, email } = req.body;
    await db.one(
      "INSERT INTO users (firebase_id, email) VALUES (${firebase_id}, ${email}) RETURNING *",
      {
        firebase_id,
        email,
      }
    );
    res.json({
      message: "Created new user",
    });
  } catch (err) {
    next(err);
  }
};

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
  createUser,
  logoutUser,
  loginUser,
  isLoggedIn,
  getUsers,
};

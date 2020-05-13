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

const getUserByUsername = async (username) => {
  try {
    const user = await db.one(
      "SELECT * FROM users WHERE username = $1",
      username
    );
    return user;
  } catch (err) {
    if (err.message === "No data returned from the query") {
      return null;
    }
  }
};

const getAllUsers = async () => {
  const users = await db.any("SELECT id, username FROM users");
  return users;
};

module.exports = {
  createUser,
  getUserByUsername,
  getAllUsers,
};

const { db } = require("../index.js");

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
  getUserByUsername,
  getAllUsers,
};

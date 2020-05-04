const { db } = require("../index.js");

const authHelpers = require("../../auth/helpers");

const createUser = async (user) => {
  const passwordDigest = await authHelpers.hashPassword(user.password);

  const insertUserQuery = `
      INSERT INTO users (username, password_digest) 
        VALUES ($/username/, $/password/)
        RETURNING *
    `;

  const newUser = await db.one(insertUserQuery, {
    username: user.username,
    password: passwordDigest,
  });

  delete newUser.password_digest;
  return newUser;
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

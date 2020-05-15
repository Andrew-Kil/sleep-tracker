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

const getUserByFirebaseID = async (req, res, next) => {
  try {
    await db
      .any("SELECT * FROM users WHERE firebase_id = $1", req.params.id)
      .then((data) => {
        res.status(200).json({
          status: "Success",
          data,
          message: "Received info about user",
        });
      });
  } catch (err) {
    next(err);
  }
};

const getAllUsers = async () => {
  const users = await db.any("SELECT id, username FROM users");
  return users;
};

module.exports = {
  createUser,
  getUserByFirebaseID,
  getAllUsers,
};

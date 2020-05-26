const { db } = require("../index");

const createUser = async (req, res, next) => {
  try {
    const {
      firebase_id,
      email,
      username,
      first_name,
      last_name,
      date_of_birth,
      occupation,
      location,
      about,
    } = req.body;
    await db.one(
      "INSERT INTO users (firebase_id, email, username, first_name, last_name, date_of_birth, occupation, location, about) VALUES (${firebase_id}, ${email}, ${username}, ${first_name}, ${last_name}, ${date_of_birth}, ${occupation}, ${location}, ${about}) RETURNING *",
      {
        firebase_id,
        email,
        username,
        first_name,
        last_name,
        date_of_birth,
        occupation,
        location,
        about,
      }
    );
    res.json({
      message: "Created new user",
    });
  } catch (err) {
    next(err);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const keys = Object.keys(req.body);
    const queryString = keys
      .reduce((acc, curr) => {
        return (acc += curr + "=${" + curr + "}, ");
      }, "")
      .slice(0, -2);

    await db
      .none(
        "UPDATE users SET " +
          queryString +
          " WHERE firebase_id=" +
          req.params.id,
        req.body
      )
      .then((data) => {
        res.status(200).json({
          status: "Success",
          data,
          message: "User profile updated",
        });
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
  updateUser,
  getUserByFirebaseID,
  getAllUsers,
};

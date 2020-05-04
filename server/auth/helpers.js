const bcrypt = require("bcryptjs");

const hashPassword = async (plainPassword) => {
  try {
    const passwordDigest = await bcrypt.hash(plainPassword, 10);
    return passwordDigest;
  } catch (err) {
    throw err;
  }
};

const comparePasswords = (plainPassword, passwordDigest) => {
  return bcrypt.compare(plainPassword, passwordDigest);
};

const loginRequired = (req, res, next) => {
  if (req.user) return next();
  res.status(401).json({
    payload: {
      message: "Unauthorized",
    },
    error: true,
  });
};

const logoutUser = (req, res) => {
  req.logout();
  res.status(200).send("log out success");
};

const isLoggedIn = (req, res) => {
  if (req.user) {
    res.json({
      username: req.user,
      msg: "User logged in",
    });
  } else {
    res.json({
      username: null,
      msg: "User not logged in",
    });
  }
};

module.exports = {
  hashPassword,
  comparePasswords,
  loginRequired,
  logoutUser,
  isLoggedIn,
};

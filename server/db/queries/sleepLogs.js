const { db } = require("../index.js");

const getAllSleepLogs = (req, res, next) => {
  db.any("SELECT * FROM sleep_logs")
    .then((data) => {
      res.status(200).json({
        status: "Success",
        data,
        message: "Received all sleep logs",
      });
    })
    .catch((err) => next(err));
};

const getAllPublicSleepLogs = (req, res, next) => {
  db.any(
    "SELECT users.firebase_id, users.first_name, users.last_name, sleep_logs.post_date, sleep_logs.remember_dream, sleep_logs.sleep_interrupted, sleep_logs.sleep_start, sleep_logs.sleep_end, sleep_logs.notes FROM sleep_logs JOIN users ON users.firebase_id = sleep_logs.user_id WHERE is_private = FALSE"
  )
    .then((data) => {
      res.status(200).json({
        status: "Success",
        data,
        message: "Received all public sleep logs",
      });
    })
    .catch((err) => next(err));
};

const getOneSleepLog = (req, res, next) => {
  db.one("SELECT * FROM sleep_logs WHERE sleep_logs.id = $1", +req.params.id)
    .then((data) => {
      res.status(200).json({
        status: "Success",
        data,
        messsage: "Received one sleep log",
      });
    })
    .catch((err) => next(err));
};

const getAllSleepLogsForUser = (req, res, next) => {
  db.any(
    "SELECT * FROM sleep_logs WHERE sleep_logs.user_id = $1",
    req.params.id
  )
    .then((data) => {
      res.status(200).json({
        status: "Success",
        data,
        messsage: "Received all sleep logs for User",
      });
    })
    .catch((err) => next(err));
};

const createSleepLog = (req, res, next) => {
  const {
    user_id,
    is_private,
    post_date,
    remember_dream,
    sleep_interrupted,
    sleep_start,
    sleep_end,
    notes,
  } = req.body;
  db.one(
    "INSERT INTO sleep_logs (user_id, is_private, post_date, remember_dream, sleep_interrupted, sleep_start, sleep_end, notes) VALUES (${user_id}, ${is_private}, ${post_date}, ${remember_dream}, ${sleep_interrupted}, ${sleep_start}, ${sleep_end}, ${notes}) RETURNING *",
    {
      user_id,
      is_private,
      post_date,
      remember_dream,
      sleep_interrupted,
      sleep_start,
      sleep_end,
      notes,
    }
  )
    .then(() => {
      res.status(200).json({
        status: "Success",
        message: "Created new sleep log",
      });
    })
    .catch((err) => next(err));
};

const deleteSleepLog = (req, res, next) => {
  db.result("DELETE FROM sleep_logs WHERE id=$1", +req.params.id)
    .then((data) => {
      res.status(200).json({
        status: "Success",
        data,
        message: "Removed a sleep log",
      });
    })
    .catch((err) => next(err));
};

module.exports = {
  getAllSleepLogs,
  getAllPublicSleepLogs,
  getOneSleepLog,
  getAllSleepLogsForUser,
  createSleepLog,
  deleteSleepLog,
};

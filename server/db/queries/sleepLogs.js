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

const createSleepLog = (req, res, next) => {
  const {
    post_date,
    remember_dream,
    sleep_interrupted,
    sleep_start,
    sleep_end,
    notes,
  } = req.body;
  db.one(
    "INSERT INTO sleep_logs (post_date, remember_dream, sleep_interrupted, sleep_start, sleep_end, notes) VALUES (${post_date}, ${remember_dream}, ${sleep_interrupted}, ${sleep_start}, ${sleep_end}, ${notes}) RETURNING *",
    {
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
  getOneSleepLog,
  createSleepLog,
  deleteSleepLog,
};

const { db } = require("./index.js");

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
  db.none("INSERT INTO sleep_logs(notes) VALUES(${notes})", req.body)
    .then(() => {
      res.status(200).json({
        status: "Success",
        message: "Created new sleep log",
      });
    })
    .catch((err) => next(err));
};

const deleteSleepLog = (req, res, next) => {
  db.result("DELETE FROM songs WHERE id=$1", +req.params.id)
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

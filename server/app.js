const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

const app = express();
const cors = require("cors");
const pool = require("./db/db");

app.use(cors());
app.use(express.json()); //req.body

// --- Routes ---

// create sleep log

app.post("/sleep-logs", async (req, res) => {
  try {
    // console.log(req.body);
    const { notes } = req.body;
    const newSleepLog = await pool.query(
      "INSERT INTO sleep_logs (notes) VALUES($1) RETURNING *",
      [notes]
    );
    res.json(newSleepLog.rows[0]);
  } catch (error) {
    console.error(err.message);
  }
});

// get all sleep logs

app.get("/sleep-logs", async (req, res) => {
  try {
    const allSleepLogs = await pool.query("SELECT * FROM sleep_logs");
    res.json(allSleepLogs.rows);
  } catch (error) {
    console.error(error.message);
  }
});

// get a sleep log

app.get("/sleep-logs/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const sleepLog = await pool.query(
      "SELECT * FROM sleep_logs WHERE id = $1",
      [id]
    );
    res.json(sleepLog.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

// update sleep log

app.put("/sleep-logs/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { notes } = req.body;
    const updateSleepLog = await pool.query(
      "UPDATE sleep_logs SET notes = $1 WHERE id = $2",
      [notes, id]
    );
    res.json("Sleep log was updated!");
  } catch (error) {
    console.error(error.message);
  }
});

// delete sleep log

app.delete("/sleep-logs/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteSleepLog = await pool.query(
      "DELETE FROM sleep_logs WHERE id = $1",
      [id]
    );
    res.json("Sleep log was deleted!");
  } catch (error) {
    console.error(error.message);
  }
});

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;

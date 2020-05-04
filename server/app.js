const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const session = require("express-session");
const passport = require("passport");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const sleepLogsRouter = require("./routes/sleepLogs");
const dreamThemesRouter = require("./routes/dreamThemes");
const authRouter = require("./routes/auth");

const app = express();

const cors = require("cors");

app.use(cors());
app.use(express.json());

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser("SUPER_SECRET_SECRET"));
app.use(express.static(path.join(__dirname, "public")));

app.use(
  session({
    secret: "SUPER_SECRET_SECRET",
    saveUninitialized: true,
    resave: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/sleep-logs", sleepLogsRouter);
app.use("/dream-themes", dreamThemesRouter);
app.use("/auth", authRouter);

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

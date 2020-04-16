const express = require("express");

const port = 3001;

const app = express();

app.listen(port, function () {
  console.log("Server is running on " + port + " port");
});

// app.get("/", (req, res) => res.send("API running"));

// app.use("/api/users", require("./routes/api/users"));
// app.use("/api/auth", require("./routes/api/auth"));
// app.use("/api/profile", require("./routes/api/profile"));
// app.use("/api/posts", require("./routes/api/posts"));

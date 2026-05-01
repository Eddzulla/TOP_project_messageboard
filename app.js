const express = require("express");
const path = require("node:path");
const indexRouter = require('./routes/indexRouter.js')

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routing
app.use("/", indexRouter);

// Set up views / EJS
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const PORT = 3000;
app.listen(PORT, (error) => {
  // This is important!
  // Without this, any startup errors will silently fail
  // instead of giving you a helpful error message.
  if (error) {
    throw error;
  }
  console.log(`My first Express app - listening on port http://localhost:${PORT}`);
});

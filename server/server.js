const express = require("express");
const app = express();
const logger = require("morgan");
const cors = require("cors");
const path = require("path");
const PORT = 3001;

app.get("/", (req, res) => {
  res.json(`Hello man`);
});

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}...`);
});

const express = require("express");

const app = express();
const port = 3000;

app.enable("trust proxy");

app.get("/", (req, res) => {
  res.status(200).send(`${new Date().getTime()}`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

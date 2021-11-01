const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.enable("trust proxy");

app.get("/", (req, res) => {
  res.status(200).send(`Welcome to node-demo-server ${new Date().getTime()}`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

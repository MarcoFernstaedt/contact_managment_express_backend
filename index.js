const express = require("express");

const app = express();

const { PORT = 3001 } = process.env;

app.listen(() => {
  console.log(`Listening to port: ${PORT}`);
});

const express = require("express");
const router = require("./routes");
const app = express();

app.use(express.json());

app.use("/", router);

const { PORT = 3001 } = process.env;

app.listen(PORT);

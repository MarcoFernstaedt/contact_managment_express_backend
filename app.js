const express = require("express");
const mongoose = require('mongoose')
const router = require("./routes");
const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/contact_managment_db")

app.use(express.json());

app.use("/", router);

const { PORT = 3001 } = process.env;

app.listen(PORT);

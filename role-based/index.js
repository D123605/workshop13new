const chalk = require("chalk");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const adminRouter = require("./src/router/adminRouter");

mongoose.connect(" mongodb+srv://Debarishi:Debarishi@cluster0.elslz.mongodb.net/middleware?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(adminRouter);

app.listen(5900, () => {
  console.log(chalk.green.inverse("Server connected to port"));
});

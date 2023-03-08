const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan");
// const multer = require("multer");
const userRoute = require("./routes/users");

dotenv.config(); //Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env

//Connecting to our database
mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to Database");
  }
);

app.use(express.json());
app.use(morgan("common"));

app.use("/api/users", userRoute);

app.listen(8800, () => {
  console.log("Backend Server is running!");
});

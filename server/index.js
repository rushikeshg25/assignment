const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const axios = require("axios");
const app = express();
const User = require("./models/User");
const PORT = 3001;
const URI =
  "mongodb+srv://rushikesh:rushikesh@ecommerce.alpg7vr.mongodb.net/?retryWrites=true&w=majority";

//Connection to MongoDB
mongoose
  .connect(URI, { useNewUrlParser: true })
  .then(() => {
    console.log("MONGO DB Connected");
  })
  .catch((err) => console.log(err));

//Checkout Logic

//Setting up the Port
app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});

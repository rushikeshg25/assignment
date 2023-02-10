const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const axios = require("axios");
const app = express();
const User = require("./models/User");
const PORT = 3001;
app.use(express.json());
const URI =
  "mongodb+srv://rushikesh:rushikesh@ecommerce.alpg7vr.mongodb.net/?retryWrites=true&w=majority";

//Connection to MongoDB
mongoose
  .connect(URI, { useNewUrlParser: true })
  .then(() => {
    console.log("MONGO DB Connected");
  })
  .catch((error) => console.log(error));

//Checkout Logic
app.post("/checkout", async (req, res) => {
  try {
    res.status(200).json(req.body.name);
    // console.log(JSON.stringify(req.body.name));
  } catch (error) {
    res.status(500).json(error);
  }
});

//Setting up the Port
app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});

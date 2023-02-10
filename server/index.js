const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const axios = require("axios");
const app = express();
const User = require("./models/User");
const PORT = 3001;
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
const URI =
  "mongodb+srv://rushikesh:rushikesh@ecommerce.alpg7vr.mongodb.net/?retryWrites=true&w=majority";

//Value of n for which you want to offer discount
const n = 5;

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
    const username = req.body.name;
    const user = await User.findOne({ name: req.body.name });
    //If user Exists in database
    if (user) {
      //Add his no. of orders by one
      const newOrders = user.orders + 1;
      const newUser = new User({
        name: req.body.name,
        orders: newOrders,
      });
      //Delete his old entry
      await User.deleteOne({ name: req.body.name });
      //save the new Entry with added one order
      await newUser.save();
      //Check whether his order is multiple of n
      if (newOrders != 0 && newOrders % n == 0) {
        //if yes send response
        res.send("Discount on this Order");
      } else {
        //Otherwise no Discount response
        res.send("No Discount");
      }
    } else {
      const newUser = new User({
        name: req.body.name,
        orders: 1,
      });
      newUser.save();
    }
    res.send("No Discount");
  } catch (error) {
    res.status(500).json(error);
  }
});

//Setting up the Port
app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});

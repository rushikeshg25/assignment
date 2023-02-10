//Defining User Schema
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  orders: {
    type: Number,
    required: true,
  },
});
module.exports = mongoose.model("User", UserSchema);

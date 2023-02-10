const express = require("express");
const dotenv = require("dotenv");
const app = express();
const PORT = 3001;

//Setting up the Port
app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});

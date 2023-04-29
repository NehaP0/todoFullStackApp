let mongoose = require("mongoose");
const dotenv = require("dotenv").config();
let connection = mongoose.connect(
  "mongodb+srv://anmol:sahota@cluster0.fdwxgxj.mongodb.net/DeployTodo?retryWrites=true&w=majority"
);
module.exports = { connection };

let mongoose = require("mongoose");
const dotenv = require("dotenv").config();
let connection = mongoose.connect(process.env.mongoURL);
module.exports = { connection };

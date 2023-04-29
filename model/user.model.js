let mongoose = require("mongoose");

let userSchema = mongoose.Schema(
  {
    firstName: String,
    LastName: String,
    email: String,
    pass: String,
  },
  {
    versionKey: false,
  }
);

let userModel = mongoose.model("user", userSchema);
module.exports = { userModel };

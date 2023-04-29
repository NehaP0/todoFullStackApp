let mongoose = require("mongoose");

let todoSchema = mongoose.Schema(
  {
    title: String,
    status: Boolean,
    author: String,
    authorId: String,
  },
  {
    versionKey: false,
  }
);

let todoModel = mongoose.model("todo", todoSchema);
module.exports = { todoModel };

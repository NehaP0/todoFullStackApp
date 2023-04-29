let express = require("express");
const { todoModel } = require("../model/todo.model");

let todoRoute = express.Router();

todoRoute.get("/", async (req, res) => {
  try {
    let todo = await todoModel.find({ authorId: req.body.authorId });
    res.send(todo);
  } catch (error) {
    res.send({
      msg: "error occured",
      err: error,
    });
  }
});
todoRoute.patch("/update/:id", async (req, res) => {
  let { id } = req.params;
  let check = await todoModel.findOne({ authorId: req.body.authorId, _id: id });
  if (check != null) {
    try {
      await todoModel.findByIdAndUpdate({ _id: id }, req.body);
      res.send({
        msg: "Todo updated",
      });
    } catch (error) {
      res.send({
        msg: "error occured",
        err: error,
      });
    }
  } else {
    res.send({ msg: "you are not authorize person to make changes" });
  }
});
todoRoute.delete("/delete/:id", async (req, res) => {
  let { id } = req.params;
  let check = await todoModel.findOne({ authorId: req.body.authorId, _id: id });

  if (check != null) {
    try {
      await todoModel.findByIdAndDelete({ _id: id });
      res.send({
        msg: "Todo deleted",
      });
    } catch (error) {
      res.send({
        msg: "error occured",
        err: error,
      });
    }
  } else {
    res.send({ msg: "you are not authorize person to make changes" });
  }
});
todoRoute.post("/create", async (req, res) => {
  try {
    let data = new todoModel(req.body);
    await data.save();
    res.send({
      msg: "Todo created",
    });
  } catch (error) {
    await todoModel.findByIdAndDelete({ _id: id });
    res.send({
      msg: "Todo deleted",
    });
  }
});

module.exports = { todoRoute };

let express = require("express");
const { userModel } = require("../model/user.model");
var jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
let userRoute = express.Router();

userRoute.post("/register", async (req, res) => {
  let { pass } = req.body;
  try {
    bcrypt.hash(pass, 5, async function (err, hash) {
      let user = new userModel({ ...req.body, pass: hash });
      await user.save();
      res.send({
        msg: "user register succefully",
      });
    });
  } catch (error) {
    res.send(error);
  }
});
userRoute.post("/login", async (req, res) => {
  let { email, pass } = req.body;
  let user = await userModel.findOne({ email });
  if (user) {
    bcrypt.compare(pass, user.pass, async function (err, result) {
      if (result) {
        var token = jwt.sign(
          { author: user.firstName, authorId: user.id },
          "full-stack"
        );
        res.send({
          msg: "Login succefully",
          token: token,
        });
      } else {
        res.status(401).send({
          msg: "wrong credential",
        });
      }
    });
  } else {
    res.status(401).send({
      msg: "wrong credential",
    });
  }
});

module.exports = { userRoute };

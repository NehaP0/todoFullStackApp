var jwt = require("jsonwebtoken");

let auth = (req, res, next) => {
  let token = req.headers.authorization;
  try {
    var decoded = jwt.verify(token, "full-stack");
    req.body.author = decoded.author;
    req.body.authorId = decoded.authorId;
    next();
  } catch (error) {
    res.send(error);
  }
};

module.exports = { auth };

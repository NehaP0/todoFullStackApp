let express = require("express");
const { connection } = require("./db");
const { todoRoute } = require("./Router/Todo.route");
const { userRoute } = require("./Router/user.Route");
const { auth } = require("./middleware/auth.midleware");
let cors = require("cors");
let app = express();
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Home-page");
});

app.use("/user", userRoute);

app.use(auth);
app.use("/todo", todoRoute);
app.listen(8080, async () => {
  try {
    await connection;
    console.log("DB Connected");
  } catch (error) {
    console.log("error occured");
  }
});

// {
//     "email": "anmol@gmail.com",
//     "pass": "anmol@123"
//   }

// {
//   "email": "pablo@gmail.com",
//   "pass": "pablo@123"
// }

// {
//     "title": "learn Node",
//     "status": true
//   }

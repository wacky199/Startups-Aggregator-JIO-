const express = require("express");
const cors = require("cors");
const {dbConnection} = require("./Db")
const app = express();
const port = 3000;

const News = require("./Routes/NewsApis");
dbConnection();

app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST,GET,OPTIONS");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});


// added the news apis
app.use("/api/news",News);


// to check if server is working
app.get("/", (req, res) => {
  res.send("here to get some messages!!!");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

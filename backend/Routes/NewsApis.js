const express = require("express");
const router = express.Router();
const { NewsModel } = require("../Schemas/NewsSchema");

// to get/fetch the news from the database
router.get("/", async (req, res) => {
  const doc = await NewsModel.find();
  const error = {
    error: "There isn't any doc!!!",
  };
  res.json(doc ? doc : error);
});

const tempData = {
  timestamp: +new Date(),
  source: "VS code",
  headline: "NO STIPEND, NO HEADLINE",
  body: "what can I write here!",
  imageLink: "dont know yet",
  startupName: "Fantasy",
};


// set/add news to the database
router.post("/post", async (req, res) => {
  const data = req.body;
  console.log(data);
  const news = new NewsModel(data);
  try {
    news.save();
    console.log("saved successfully", news)
    res.send("success");
  } catch (err) {
    console.log("Error!!", err);
    res.send("error");
  }
});

module.exports = router;

const express = require("express");
const router = express.Router();
const { IndividualStartupSchema } = require("../Schemas/IndividualStartupSchema");

const tempData = {
  timestamp: +new Date(),
  source: "VS code",
  headline: "NO STIPEND, NO HEADLINE",
  body: "what can I write here!",
  imageLink: "dont know yet",
  startupName: "Fantasy",
};

router.get("/", async (req, res) => {
  const doc = await IndividualStartupSchema.find();
  const error = {
    error: "There isn't any doc!!!",
  };
  res.json(doc ? doc : error);
});


// set/add news to the database
router.post("/post", async (req, res) => {
  const data = req.body;
  console.log(data);
  const startup = new IndividualStartupSchema(data);
  try {
    startup.save();
    console.log("saved successfully", startup)
    res.send("success");
  } catch (err) {
    console.log("Error!!", err);
    res.send("error");
  }
});

module.exports = router;
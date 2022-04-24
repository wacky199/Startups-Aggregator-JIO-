const express = require("express");
const router = express.Router();
const { InnovationZoneSchema } = require("../Schemas/InnovationZoneSchema");

const tempData = {
  timestamp: +new Date(),
  source: "VS code",
  headline: "NO STIPEND, NO HEADLINE",
  body: "what can I write here!",
  imageLink: "dont know yet",
  startupName: "Fantasy",
};

//get innovations

router.get("/", async (req, res) => {
  const doc = await InnovationZoneSchema.find();
  const error = {
    error: "There isn't any doc!!!",
  };
  res.json(doc ? doc : error);
});

// set/add innovations
router.post("/post", async (req, res) => {
  const data = req.body;
  console.log(data);
  const innovations = new InnovationZoneSchema(data);
  try {
    innovations.save();
    console.log("saved successfully", innovations)
    res.send("success");
  } catch (err) {
    console.log("Error!!", err);
    res.send("error");
  }
});
module.exports = router;

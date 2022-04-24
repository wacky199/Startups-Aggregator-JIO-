const express = require("express");
const router = express.Router();
const { StartupModel } = require("../Schemas/StartupSchema");

const LIMIT = 10;
// fetch all the startup from the database
router.get("/", async (req, res) => {
  const doc = await StartupModel.find().limit(LIMIT);
  const error = {
    error: "There isn't any doc!!!",
  };
  res.json(doc ? doc : error);
});

// fetch according to given parameter

// router.get("/:tag", async (req, res) => {
//   const tag = req.params.tag;
//   console.log(tag);
//   const query = await StartupModel.find({ tag: tag }).limit(LIMIT);
//   if (query.length > 0) {
//     res.json(query);
//     res.status(200);
//   } else {
//     res.json({ Error: "No specified tag found!" });
//     res.status(404);
//   }
// });

// temp object to check the apis
// const tempData = {
//   timestamp: +new Date(),
//   source: "VS code",
//   headline: "NO STIPEND, NO HEADLINE",
//   body: "what can I write here!",
//   imageLink: "dont know yet",
//   startupName: "Fantasy",
// };

// set/add startup to the database
// router.post("/post", async (req, res) => {
//   const data = req.body;
//   console.log(data);
//   const startup = new StartupModel(data);
//   try {
//     startup.save();
//     console.log("saved successfully", startup);
//     res.send("success");
//   } catch (err) {
//     console.log("Error!!", err);
//     res.send("error");
//   }
// });

module.exports = router;

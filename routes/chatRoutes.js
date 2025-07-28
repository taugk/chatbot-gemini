const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  // Render the chatbot page
  res.render("index", { title: "Chatbot" });
});

module.exports = router;

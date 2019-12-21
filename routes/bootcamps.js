const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ success: true, msg: "Show all" });
});
router.get("/:id", (req, res) => {
  res.status(200).json({ success: true, msg: "Show single" });
});

router.post("/", (req, res) => {
  res.status(201).json({ success: true, msg: "post created" });
});

router.put("/:id", (req, res) => {
  res.status(201).json({ success: true, msg: "post updated" + req.params.id });
});
router.delete("/:id", (req, res) => {
  res.status(201).json({ success: true, msg: "post deleted" + req.params.id });
});

module.exports = router;

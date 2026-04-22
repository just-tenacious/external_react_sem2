const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Restaurant = require("../models/Restaurant");

router.post("/", async (req, res) => {
  try {
    const addData = await Restaurant.create(req.body);
    res.json(addData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const restaurantInfo = await Restaurant.find();
    res.json(restaurantInfo);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const restaurantInfo = await Restaurant.findById(req.params.id);
    res.json(restaurantInfo);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updated = await Restaurant.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Restaurant.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
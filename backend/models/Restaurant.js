const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  restaurant_name: String,
  restaurant_location: String,
  restaurant_owner_name = String,
  restuarnt_owner_age = Number,
  restaurant_doe = String
}, { timestamps: true });

module.exports = mongoose.model("Restaurant", restaurantSchema);
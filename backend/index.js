import express from "express";
import mongoose, { get } from "mongoose";

const app = express();

const restaurant = new mongoose.Schema({
    restaurant_name = String,
    restaurant_location = String,
    restaurant_owner_name = String,
    restuarnt_owner_age = Number,
    restaurant_doe = String
});

app.get("/", () => {
    console.log("hello");
})

app.get("/get-data", () => {
});

app.post("/add");

app.put("/edit/:id");

app.delete("/delete/:id");

app.listen(5000, () => {
    console.log("server running on port 5000");
})
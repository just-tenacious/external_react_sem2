const express = require('express');
const cors = require('cors');
const app = express();
const connectDB = require("./config/db");

app.use(cors());
app.use(express.json());

connectDB();

app.get("/", () => {
    console.log("hello");
})

app.use("/api/restaurant", require("./routes/restaurantRoutes"));

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
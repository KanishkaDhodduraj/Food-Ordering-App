const express = require("express");
const cors = require("cors");

const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(cors());

const userRoutes = require("./routes/userRoutes");

app.use(express.json());
app.use("/api/users", userRoutes);
app.get("/", (req, res) => {
    res.send("Food Ordering Backend Running");
});

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected");

        app.listen(process.env.PORT, () => {
            console.log(`Server running on port ${process.env.PORT}`);
        });
    })
    .catch((error) => {
        console.log("MongoDB connection failed");
         console.log(error.message);
    });
const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
    res.send("Food Ordering Backend Running");
});
app.listen(5000, () => {
    console.log("Server running on port 5000");
});
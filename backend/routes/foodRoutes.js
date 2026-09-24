const express = require("express");

const {
    createFood,
    getFoods
} = require("../controllers/foodController");

const router = express.Router();

router.post("/", createFood);
router.get("/restaurant/:restaurantId", getFoods);

module.exports = router;
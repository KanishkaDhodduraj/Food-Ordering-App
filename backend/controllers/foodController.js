const Food = require("../models/Food");

const createFood = async (req, res) => {
    try {
        const food = await Food.create(req.body);

        res.status(201).json({
            message: "Food item created successfully",
            food
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to create food item"
        });
    }
};

const getFoods = async (req, res) => {
    try {
        const foods = await Food.find({
            restaurant: req.params.restaurantId,
            isAvailable: true
        });

        res.status(200).json(foods);
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch food items"
        });
    }
};

module.exports = {
    createFood,
    getFoods
};
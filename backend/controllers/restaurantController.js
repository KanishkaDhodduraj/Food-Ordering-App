const Restaurant = require("../models/Restaurant");

const createRestaurant = async (req, res) => {
    try {
        const restaurant = await Restaurant.create(req.body);

        res.status(201).json({
            message: "Restaurant created successfully",
            restaurant
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to create restaurant"
        });
    }
};

const getRestaurants = async (req, res) => {
    try {
        const restaurants = await Restaurant.find({ isActive: true });

        res.status(200).json(restaurants);
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch restaurants"
        });
    }
};

module.exports = {
    createRestaurant,
    getRestaurants
};
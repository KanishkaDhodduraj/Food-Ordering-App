const Cart = require("../models/Cart");

const addToCart = async (req, res) => {
    try {
        const { userId, foodId, quantity } = req.body;

        let cart = await Cart.findOne({ user: userId });

        if (!cart) {
            cart = await Cart.create({
                user: userId,
                items: [
                    {
                        food: foodId,
                        quantity: quantity || 1
                    }
                ]
            });
        } else {
            const existingItem = cart.items.find(
                item => item.food.toString() === foodId
            );

            if (existingItem) {
                existingItem.quantity += quantity || 1;
            } else {
                cart.items.push({
                    food: foodId,
                    quantity: quantity || 1
                });
            }

            await cart.save();
        }

        const updatedCart = await Cart.findById(cart._id)
            .populate("items.food");

        res.status(200).json({
            message: "Food added to cart",
            cart: updatedCart
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to add food to cart"
        });
    }
};

const getCart = async (req, res) => {
    try {
        const cart = await Cart.findOne({
            user: req.params.userId
        }).populate("items.food");

        if (!cart) {
            return res.status(404).json({
                message: "Cart is empty"
            });
        }

        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({
            message: "Failed to get cart"
        });
    }
};

module.exports = {
    addToCart,
    getCart
};
const Order = require("../models/Order");
const Cart = require("../models/Cart");

const placeOrder = async (req, res) => {
    try {
        const { userId, deliveryAddress } = req.body;

        const cart = await Cart.findOne({ user: userId }).populate("items.food");

        if (!cart || cart.items.length === 0) {
            return res.status(400).json({
                message: "Cart is empty"
            });
        }

        const items = cart.items.map(item => ({
            food: item.food._id,
            quantity: item.quantity,
            price: item.food.price
        }));

        const totalAmount = cart.items.reduce(
            (total, item) => total + item.food.price * item.quantity,
            0
        );

        const order = await Order.create({
            user: userId,
            items,
            totalAmount,
            deliveryAddress
        });

        cart.items = [];
        await cart.save();

        const createdOrder = await Order.findById(order._id)
            .populate("items.food");

        res.status(201).json({
            message: "Order placed successfully",
            order: createdOrder
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to place order"
        });
    }
};

const getUserOrders = async (req, res) => {
    try {
        const orders = await Order.find({
            user: req.params.userId
        })
            .populate("items.food")
            .sort({ createdAt: -1 });

        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({
            message: "Failed to get orders"
        });
    }
};

module.exports = {
    placeOrder,
    getUserOrders
};
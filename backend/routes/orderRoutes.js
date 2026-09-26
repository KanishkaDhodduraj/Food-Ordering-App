const express = require("express");
const { placeOrder, getUserOrders, updateOrderStatus } = require("../controllers/orderController");

const router = express.Router();

router.post("/place", placeOrder);
router.get("/:userId", getUserOrders);
router.put("/status/:orderId", updateOrderStatus);

module.exports = router;
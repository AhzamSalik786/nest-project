"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderSchema = void 0;
const mongoose = require("mongoose");
exports.OrderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    orderItem: [
        {
            book: { type: String, required: true },
            name: { type: String, required: true },
            countInStock: { type: String, required: true },
            image: { type: String, required: true },
            price: { type: String, required: true },
            qty: { type: String, required: true },
        },
    ],
    shippingAddress: {
        address: { type: String },
        city: { type: String },
        country: { type: String },
        postalCode: { type: String },
    },
    shippingLocation: {
        latitude: { type: Number, required: true },
        longitude: { type: Number, required: true },
    },
    paymentMethod: { type: String, required: true },
    itemsPrice: { type: String, required: true },
    shippingPrice: { type: String, required: true },
    taxPrice: { type: String, required: true },
    totalPrice: { type: String, required: true },
});
//# sourceMappingURL=order.model.js.map
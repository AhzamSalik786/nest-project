"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksSchema = void 0;
const mongoose = require("mongoose");
exports.BooksSchema = new mongoose.Schema({
    bookName: { type: String, required: true },
    image: { type: String },
    writter: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    rating: { type: Number, required: true },
    countInStock: { type: Number, required: true },
    numReviews: { type: Number, required: true },
    pages: { type: Number, required: true },
});
//# sourceMappingURL=books.model.js.map
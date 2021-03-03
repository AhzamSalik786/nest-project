"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GmailUserSchema = void 0;
const mongoose = require("mongoose");
exports.GmailUserSchema = new mongoose.Schema({
    gmail: { type: String, required: true },
});
//# sourceMappingURL=gmail-user,model.js.map
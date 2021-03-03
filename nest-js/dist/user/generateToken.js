"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
const user_constants_1 = require("./user.constants");
const generateToken = (email) => {
    return jwt.sign({ email }, user_constants_1.jwtConstants.secret, {
        expiresIn: '30d'
    });
};
exports.default = generateToken;
//# sourceMappingURL=generateToken.js.map
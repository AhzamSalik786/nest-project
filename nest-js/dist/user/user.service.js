"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const bcrypt = require("bcrypt");
const generateToken_1 = require("./generateToken");
let UserService = class UserService {
    constructor(userModel) {
        this.userModel = userModel;
        this.user = [];
    }
    async matchUser(email, password) {
        const user = await this.userModel.findOne({ email });
        console.log("user data", this.userModel);
        console.log("user datapass", user.password);
        if (user && (await bcrypt.compareSync(password, user.password))) {
            console.log("login complete", user);
            console.log("Token", generateToken_1.default(user.email));
            return {
                _id: user._id,
                name: user.name,
                email: user.email,
                token: generateToken_1.default(user.email),
            };
        }
        return null;
    }
    async insertUser(name, email, password) {
        var hash = await bcrypt.hashSync(password, 10);
        console.log("hash", hash);
        const newUser = new this.userModel({
            name,
            email,
            password: hash,
        });
        const result = await newUser.save();
        console.log(result);
        return result.id;
    }
};
UserService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('User')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map
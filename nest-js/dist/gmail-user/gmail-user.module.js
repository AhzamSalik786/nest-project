"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GmailUserModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const gmail_user_controller_1 = require("./gmail-user.controller");
const gmail_user_service_1 = require("./gmail-user.service");
const gmail_user_model_1 = require("./gmail-user.model");
let GmailUserModule = class GmailUserModule {
};
GmailUserModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'GmailUser', schema: gmail_user_model_1.GmailUserSchema }]),
        ],
        controllers: [gmail_user_controller_1.GmailUserController],
        providers: [gmail_user_service_1.GmailUserService],
    })
], GmailUserModule);
exports.GmailUserModule = GmailUserModule;
//# sourceMappingURL=gmail-user.module.js.map
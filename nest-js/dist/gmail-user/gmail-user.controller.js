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
exports.GmailUserController = void 0;
const common_1 = require("@nestjs/common");
const gmail_user_service_1 = require("./gmail-user.service");
let GmailUserController = class GmailUserController {
    constructor(gmailUserService) {
        this.gmailUserService = gmailUserService;
    }
    async addGmailUser(userGmail) {
        const generatedId = await this.gmailUserService.matchGmailUser(userGmail);
        return {
            user: 'Gmail user is valid ',
            id: generatedId
        };
    }
};
__decorate([
    common_1.Post('/loginWithGmail'),
    __param(0, common_1.Body('gmail')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GmailUserController.prototype, "addGmailUser", null);
GmailUserController = __decorate([
    common_1.Controller('gmailUser'),
    __metadata("design:paramtypes", [gmail_user_service_1.GmailUserService])
], GmailUserController);
exports.GmailUserController = GmailUserController;
//# sourceMappingURL=gmail-user.controller.js.map
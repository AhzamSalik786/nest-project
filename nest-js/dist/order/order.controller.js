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
exports.OrderController = void 0;
const common_1 = require("@nestjs/common");
const order_service_1 = require("./order.service");
let OrderController = class OrderController {
    constructor(orderService) {
        this.orderService = orderService;
    }
    async addOrder(orduser, ordorderItem, ordshippingAddress, ordshippingLocation, ordpaymentMethod, orditemsPrice, ordshippingPrice, ordtaxPrice, ordtotalPrice) {
        const generateOrderId = await this.orderService.insertOrder(orduser, ordorderItem, ordshippingAddress, ordshippingLocation, ordpaymentMethod, orditemsPrice, ordshippingPrice, ordtaxPrice, ordtotalPrice);
        return { id: generateOrderId };
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body('user')),
    __param(1, common_1.Body('orderItems')),
    __param(2, common_1.Body('shippingAddress')),
    __param(3, common_1.Body('shippingLocation')),
    __param(4, common_1.Body('paymentMethod')),
    __param(5, common_1.Body('itemsPrice')),
    __param(6, common_1.Body('shippingPrice')),
    __param(7, common_1.Body('taxPrice')),
    __param(8, common_1.Body('totalPrice')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object, Object, String, String, String, String, String]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "addOrder", null);
OrderController = __decorate([
    common_1.Controller('order'),
    __metadata("design:paramtypes", [order_service_1.OrderService])
], OrderController);
exports.OrderController = OrderController;
//# sourceMappingURL=order.controller.js.map
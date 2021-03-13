import { Order } from './order.model';
import { Model } from 'mongoose';
export declare class OrderService {
    private readonly orderModel;
    private orders;
    constructor(orderModel: Model<Order>);
    insertOrder(user: object, orderItem: object, shippingAddress: object, shippingLocation: object, paymentMethod: string, itemsPrice: string, shippingPrice: string, taxPrice: string, totalPrice: string): Promise<string>;
}

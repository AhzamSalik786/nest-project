import { OrderService } from './order.service';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    addOrder(orduser: object, ordorderItem: object, ordshippingAddress: object, ordshippingLocation: object, ordpaymentMethod: string, orditemsPrice: string, ordshippingPrice: string, ordtaxPrice: string, ordtotalPrice: string): Promise<{
        id: string;
    }>;
    getOrder(prodId: string): Promise<{
        id: any;
        user: any;
        name: any;
        orderItem: any;
        shippingAddress: any;
        shippingLocation: any;
        paymentMethod: any;
        itemsPrice: any;
        shippingPrice: any;
        taxPrice: any;
        totalPrice: any;
    }>;
}

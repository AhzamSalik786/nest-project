import { Body, Controller, Post } from '@nestjs/common';
import { OrderService } from './order.service';
@Controller('order')
export class OrderController {
    constructor(private readonly orderService: OrderService) { }
        @Post()
        async addOrder(
            @Body('user') orduser: object ,
            @Body('orderItems') ordorderItem: object ,
            @Body('shippingAddress') ordshippingAddress: object ,
            @Body('shippingLocation') ordshippingLocation: object ,
            @Body('paymentMethod') ordpaymentMethod: string ,
            @Body('itemsPrice') orditemsPrice: string ,
            @Body('shippingPrice') ordshippingPrice: string ,
            @Body('taxPrice') ordtaxPrice: string ,
            @Body('totalPrice') ordtotalPrice: string ,
        ){
            const generateOrderId = await this.orderService.insertOrder(
                orduser,
                ordorderItem,
               ordshippingAddress,
                ordshippingLocation,
               ordpaymentMethod,
             orditemsPrice,
                ordshippingPrice,
                 ordtaxPrice,
                ordtotalPrice,
            );
            return { id: generateOrderId}
        }
    
}


// user: object,
//         orderItem: object,
//         shippingAddress: object,
//         shippingLocation: object,
//         paymentMethod: string,
//         itemsPrice: string,
//         shippingPrice: string,
//         taxPrice: string,
//         totalPrice: string
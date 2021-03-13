import * as mongoose from 'mongoose';
export declare const OrderSchema: mongoose.Schema<mongoose.Document<any>, mongoose.Model<mongoose.Document<any>>, undefined>;
export interface Order extends mongoose.Document {
    id: string;
    user: object;
    name: string;
    orderItem: object;
    shippingAddress: {
        address: string;
        city: string;
        country: string;
        postalCode: string;
    };
    shippingLocation: {
        latitude: number;
        longitude: number;
    };
    paymentMethod: string;
    itemsPrice: string;
    shippingPrice: string;
    taxPrice: string;
    totalPrice: string;
}

import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export const OrderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  orderItem: [
    {
      book: { type: String, required: true },
      name: {type: String, required: true},
      countInStock: { type: String, required: true },
      image: { type: String, required: true },
      price: { type: String, required: true },
      qty: { type: String, required: true },
    },
  ],
  shippingAddress: {
    address: { type: String },
    city: { type: String },
    country: { type: String },
    postalCode: { type: String },
  },
  shippingLocation: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
  },
  paymentMethod: { type: String, required: true },
  itemsPrice: { type: String, required: true },
  shippingPrice: { type: String, required: true },
  taxPrice: { type: String, required: true },
  totalPrice: { type: String, required: true },
});

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

// "book": "60408e10ec62803138ec3f7b",
//         "countInStock": "5",
// "image": "/images/TheArtOfPsychological.jpg",
// "name": "The Art Of Psychological",
// "price":" 30",
// "qty": 1"

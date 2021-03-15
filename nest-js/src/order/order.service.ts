import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Order } from './order.model';
import { Model } from 'mongoose';
@Injectable()
export class OrderService {
  private orders: Order[] = [];

  constructor(
    @InjectModel('Order') private readonly orderModel: Model<Order>,
  ) {}
  async insertOrder(
    user: object,
    orderItem: object,
    shippingAddress: object,
    shippingLocation: object,
    paymentMethod: string,
    itemsPrice: string,
    shippingPrice: string,
    taxPrice: string,
    totalPrice: string,
  ) {
    try {
      const newOrder = new this.orderModel({
        user,
        orderItem,
        shippingAddress,
        shippingLocation,
        paymentMethod,
        itemsPrice,
        shippingPrice,
        taxPrice,
        totalPrice,
      });
      console.log('shippingLocation', shippingLocation);
      const result = await newOrder.save();
      console.log(result);
      return result.id as string;
    } catch (error) {
      console.error('this is error ->', error);
    }
  }

  async getUserOrder(orderId: string) {
    const order = await this.findOrder(orderId);
    return{
      id: order.id,
      user: order.user,
      name: order.name,
      orderItem: order.orderItem,
      shippingAddress: order.shippingAddress,
      shippingLocation: order.shippingLocation,
      paymentMethod: order.paymentMethod,
      itemsPrice: order.itemsPrice,
      shippingPrice: order.shippingPrice,
      taxPrice: order.taxPrice,
      totalPrice: order.totalPrice,
    }
  }  


  private async findOrder(id: string): Promise<any> {
    let order;
    try {
    order= await this.orderModel.findById(id);
    } catch (error) {
      if (!order) {
        throw new NotFoundException('Could Not Find Product.');
      }
    }
    // const productIndex = this.products.findIndex((prod) => prod.id == id);
    // const product = this.products[productIndex];
    return order;
  }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './product.model';
@Injectable()
export class ProductsService {
  private products: Product[] = [];

  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}

  async insertProduct(title: string, desc: string, price: number) {
    // const prodId = Math.random().toString();
    const newProduct = new this.productModel({
      title,
      description: desc,
      price,
    });
    // this.products.push(newProduct);
    const result = await newProduct.save();
    console.log(result);
    return result.id as string;
  }

  async getProducts() {
    const products = await this.productModel.find().exec();
    // console.log(result);
    return products.map((prod) => ({
      id: prod.id,
      title: prod.title,
      description: prod.description,
      price: prod.price,
    }));
  }
  async getSingleProduct(productId: string) {
    const product = await this.findProduct(productId);
    return {
      // product,
            id: product.id,
      title: product.title,
      description: product.description,  
      price: product.price,
    };
  }

  async updateProduct(
    productId: string,
    title: string,
    desc: string,
    price: number,
  ) {
    const updatedProduct = await this.findProduct(productId);
    // const [product, index] = this.findProduct(productId);

    // const updateProduct = { ...product };
    if (title) {
      updatedProduct.title = title;
    }
    if (desc) {
      updatedProduct.description = desc;
    }
    if (price) {
      updatedProduct.price = price;
    }
    updatedProduct.save();
  }
  async deleteProduct(prodId: string) {
    const result = await this.productModel.deleteOne({_id: prodId}).exec();
    // console.log(result)
    if(result.n === 0 ) {
      throw new NotFoundException('Could Not Find Product.');
    }
    // const index = this.findProduct(prodId)[1];
    // await this.products.splice(index, 1);
  }

  private async findProduct(id: string): Promise<any> {
    let product;
    try {
      product = await this.productModel.findById(id);
    } catch (error) {
      if (!product) {
        throw new NotFoundException('Could Not Find Product.');
      }
    }
    // const productIndex = this.products.findIndex((prod) => prod.id == id);
    // const product = this.products[productIndex];
    return product;
  }
}

import { Model } from 'mongoose';
import { Product } from './product.model';
export declare class ProductsService {
    private readonly productModel;
    private products;
    constructor(productModel: Model<Product>);
    insertProduct(title: string, desc: string, price: number): Promise<string>;
    getProducts(): Promise<{
        id: string;
        title: string;
        description: string;
        price: number;
    }[]>;
    getSingleProduct(productId: string): Promise<{
        id: any;
        title: any;
        description: any;
        price: any;
    }>;
    updateProduct(productId: string, title: string, desc: string, price: number): Promise<void>;
    deleteProduct(prodId: string): Promise<void>;
    private findProduct;
}

import { Model } from 'mongoose';
import { Books } from './books.model';
export declare class BooksService {
    private readonly bookModel;
    private book;
    constructor(bookModel: Model<Books>);
    insertBooks(bookName: string, image: string, writter: string, category: string, description: string, price: Number, rating: Number, countInStock: Number, numReviewa: Number, pages: Number): Promise<string>;
}

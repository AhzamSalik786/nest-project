import { Model } from 'mongoose';
import { Books } from './books.model';
export declare class BooksService {
    private readonly bookModel;
    private book;
    constructor(bookModel: Model<Books>);
    insertBooks(bookName: string, image: string, writter: string, category: string, description: string, price: Number, rating: Number, countInStock: Number, numReviews: Number, pages: Number): Promise<string>;
    getBooks(): Promise<{
        id: any;
        bookName: string;
        image: string;
        writter: string;
        category: string;
        description: string;
        price: Number;
        rating: Number;
        countInStock: Number;
        numReviews: Number;
        pages: Number;
    }[]>;
    getSingleBook(bookId: string): Promise<{
        id: any;
        bookName: any;
        image: any;
        writter: any;
        category: any;
        description: any;
        price: any;
        rating: any;
        countInStock: any;
        numReviews: any;
        pages: any;
    }>;
    private findBook;
}

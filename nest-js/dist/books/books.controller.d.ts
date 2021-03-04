import { BooksService } from './books.service';
export declare class BooksController {
    private readonly booksServices;
    constructor(booksServices: BooksService);
    addBook(bookBookName: string, bookImage: string, bookWritter: string, bookCategory: string, bookDescription: string, bookPrice: Number, bookRating: Number, bookCountInStock: Number, bookNumReviews: Number, bookPages: Number): Promise<{
        id: string;
    }>;
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
}

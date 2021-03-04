import { BooksService } from './books.service';
export declare class BooksController {
    private readonly booksServices;
    constructor(booksServices: BooksService);
    addBook(bookBookName: string, bookImage: string, bookWritter: string, bookCategory: string, bookDescription: string, bookPrice: Number, bookRating: Number, bookCountInStock: Number, bookNumReviews: Number, bookPages: Number): Promise<{
        id: string;
    }>;
}

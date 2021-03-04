import * as mongoose from 'mongoose';
export declare const BooksSchema: mongoose.Schema<mongoose.Document<any>, mongoose.Model<mongoose.Document<any>>, undefined>;
export interface Books extends mongoose.Document {
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
}

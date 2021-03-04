import * as mongoose from 'mongoose';
import { Document } from 'mongoose';


export const BooksSchema = new mongoose.Schema({
  bookName: { type: String, required: true },
  image: { type: String},
  writter: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  rating: { type: Number, required: true },
  countInStock: { type: Number, required: true },
  numReviews: { type: Number, required: true },
  pages: { type: Number, required: true },

});

export interface Books extends mongoose.Document {
  
    bookName: string,
    image: string,
    writter: string,
    category: string,
    description: string,
    price: Number,
    rating: Number,
    countInStock: Number,
    numReviews: Number,
    pages: Number,

}
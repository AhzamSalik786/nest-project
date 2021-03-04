import { Injectable , NotFoundException} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Books } from './books.model';
@Injectable()
export class BooksService {
  private book: Books[] = [];
  constructor(
      @InjectModel('Books') private readonly bookModel : Model<Books>,
   ){}
   async insertBooks(
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
   ){
    const newBook = new this.bookModel({
        bookName,
        image,
        writter,
        category,
        description,
        price,
        rating,
        countInStock,
        numReviews,
        pages,
    });
    const result = await newBook.save();
    return result.id as string;
   }


   async getBooks() {
    const books = await this.bookModel.find().exec();
    // console.log(result);
    return books.map((book) => ({
      id: book.id,
      bookName:book.bookName ,
      image:book.image ,
      writter:book.writter ,
      category: book.category,
      description: book.description,
      price:book.price,
      rating:book.rating,
      countInStock:book.countInStock,
      numReviews:book.numReviews,
      pages:book.pages,
    }));
  }
  async getSingleBook(bookId: string) {
    const book = await this.findBook(bookId);
    return {
      // product,
      id: book.id,
      bookName:book.bookName ,
      image:book.image ,
      writter:book.writter ,
      category: book.category,
      description: book.description,
      price:book.price,
      rating:book.rating,
      countInStock:book.countInStock,
      numReviews:book.numReviews,
      pages:book.pages,
    };
  }

  private async findBook(id: string): Promise<any> {
    let book;
    try {
      book = await this.bookModel.findById(id);
    } catch (error) {
      if (!book) {
        throw new NotFoundException('Could Not Find Book.');
      }
    }
    // const bookIndex = this.books.findIndex((prod) => prod.id == id);
    // const book = this.books[bookIndex];
    return book;
  }
  
}

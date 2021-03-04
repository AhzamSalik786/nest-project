import { Controller, Post, Body, Get , Param} from '@nestjs/common';
import { BooksService } from './books.service';
@Controller('books')
export class BooksController {
  constructor(private readonly booksServices: BooksService) {}
  @Post()
  async addBook(
    @Body('bookName') bookBookName: string,
    @Body('image') bookImage: string,
    @Body('writter') bookWritter: string,
    @Body('category') bookCategory: string,
    @Body('description') bookDescription: string,
    @Body('price') bookPrice: Number,
    @Body('rating') bookRating: Number,
    @Body('countInStock') bookCountInStock: Number,
    @Body('numReviews') bookNumReviews: Number,
    @Body('pages') bookPages: Number,
  ) {
    const generatedId = await this.booksServices.insertBooks(
      bookBookName,
      bookImage,
      bookWritter,
      bookCategory,
      bookDescription,
      bookPrice,
      bookRating,
      bookCountInStock,
      bookNumReviews,
      bookPages,
    );
    return { id: generatedId };
  }
  @Get()
  async getBooks() {
    const books = await this.booksServices.getBooks();
    return books;
  }
  @Get(':id')
  getSingleBook(@Param('id') bookId: string) {
    return this.booksServices.getSingleBook(bookId);
  }

}

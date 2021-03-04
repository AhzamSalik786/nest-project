import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksSchema } from './books.model'
import { BooksController } from './books.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Books', schema: BooksSchema }]),
  ],
  providers: [BooksService],
  controllers: [BooksController]
})
export class BooksModule {}

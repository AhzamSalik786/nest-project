import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.modules';
// import { ProductsController } from './products/products.controller';
// import { ProductsService} from './products/products.service';
import { UserModule } from './user/user.module';
// import { UserController } from './user/user.controller';
// import { UserService} from './user/user.service';
import { GmailUserModule } from './gmail-user/gmail-user.module';
// import { GmailUserController } from './gmail-user/gmail-user.controller';
// import { GmailUserService } from './gmail-user/gmail-user.service';
import { BooksModule } from './books/books.module';
// import { BooksModule } from './books/books.module';
import { OrderModule } from './order/order.module'
@Module({
  imports: [
    ProductsModule,
    UserModule,
    GmailUserModule,
    BooksModule,
    OrderModule,
    MongooseModule.forRoot(
      'mongodb+srv://nest:nest2@cluster0.yu7ce.mongodb.net/nestjs-demo?retryWrites=true&w=majority',
      // 'mongodb+srv://nest:nest@cluster0.yu7ce.mongodb.net/nestjs-demo?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

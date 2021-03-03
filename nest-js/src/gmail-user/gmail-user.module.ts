import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GmailUserController} from './gmail-user.controller';
import { GmailUserService } from './gmail-user.service';
import { GmailUserSchema } from './gmail-user.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'GmailUser', schema: GmailUserSchema }]),
  ],
  controllers: [ GmailUserController],
  providers: [GmailUserService ],
})
export class GmailUserModule {}

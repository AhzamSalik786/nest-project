import { Controller , Post,
    Body,
    Get,
    Param,
    Patch,
    Delete,} from '@nestjs/common';
// import {GmailUserService } from './gmail-user.service';

// @Controller('gmail-user')
// export class GmailUserController {}



import {  GmailUserService } from './gmail-user.service';
@Controller('gmailUser' )
export class GmailUserController {
  constructor(private readonly gmailUserService: GmailUserService) {}

  @Post('/loginWithGmail')
  async addGmailUser(
@Body('gmail') userGmail : string,
  ) {
    const generatedId = await this.gmailUserService.matchGmailUser(
      userGmail,
    );
    return {
      user: 'Gmail user is valid ',
      id :generatedId
      // token: userEmail.token
    };
  }

}
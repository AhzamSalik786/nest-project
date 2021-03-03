// import { Injectable } from '@nestjs/common';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GmailUser } from './gmail-user.model';
import * as bcrypt from 'bcrypt';
// import generateToken from './generateToken';

@Injectable()
export class GmailUserService {
    private gmailUser: GmailUser[] = [];
    constructor(
      @InjectModel('GmailUser') private readonly gmailUserModel: Model<GmailUser>,
    ) {}
  
    async matchGmailUser( gmail:string) {
        
      const userGmail = new  this.gmailUserModel({ gmail });
      const gmailResult = await userGmail.save();
      console.log(gmailResult);
      return gmailResult.id as string;
    }
  
  }

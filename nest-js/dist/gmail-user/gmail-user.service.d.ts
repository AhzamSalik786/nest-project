import { Model } from 'mongoose';
import { GmailUser } from './gmail-user.model';
export declare class GmailUserService {
    private readonly gmailUserModel;
    private gmailUser;
    constructor(gmailUserModel: Model<GmailUser>);
    matchGmailUser(gmail: string): Promise<string>;
}

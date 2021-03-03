import { GmailUserService } from './gmail-user.service';
export declare class GmailUserController {
    private readonly gmailUserService;
    constructor(gmailUserService: GmailUserService);
    addGmailUser(userGmail: string): Promise<{
        user: string;
        id: string;
    }>;
}

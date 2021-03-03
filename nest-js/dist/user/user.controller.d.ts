import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    addUser(userName: string, userEmail: string, userpassword: string): Promise<{
        id: string;
    }>;
    checkUser(userEmail: string, userpassword: string): Promise<{
        user: string;
    }>;
}

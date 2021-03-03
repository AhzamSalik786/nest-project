import { Model } from 'mongoose';
import { User } from './user.model';
export declare class UserService {
    private readonly userModel;
    private user;
    constructor(userModel: Model<User>);
    matchUser(email: string, password: string): Promise<{
        _id: any;
        name: string;
        email: string;
        token: any;
    }>;
    insertUser(name: string, email: string, password: string): Promise<string>;
}

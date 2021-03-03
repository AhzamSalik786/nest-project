import * as mongoose from 'mongoose';
export declare const UserSchema: mongoose.Schema<mongoose.Document<any>, mongoose.Model<mongoose.Document<any>>, undefined>;
export interface User extends mongoose.Document {
    id: string;
    name: string;
    email: string;
    password: string;
}

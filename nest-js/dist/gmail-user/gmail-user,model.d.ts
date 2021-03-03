import * as mongoose from 'mongoose';
export declare const GmailUserSchema: mongoose.Schema<mongoose.Document<any>, mongoose.Model<mongoose.Document<any>>, undefined>;
export interface GmailUser extends mongoose.Document {
    gmail: string;
}

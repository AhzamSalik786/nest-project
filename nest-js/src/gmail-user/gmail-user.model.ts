import * as mongoose from 'mongoose';
import { Document } from 'mongoose';


export const GmailUserSchema = new mongoose.Schema({
  gmail: { type: String },
  
});

export interface GmailUser extends mongoose.Document {
  
    
    gmail: string;
 
}
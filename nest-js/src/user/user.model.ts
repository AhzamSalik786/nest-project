import * as mongoose from 'mongoose';
import { Document } from 'mongoose';


export const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  // gmail: { type: String, required: true },
  
});

export interface User extends mongoose.Document {
  
    id: string;
    name: string;
    email: string;
    password: string;
    // gmail: string;
 
}
// export const GmailUserSchema = new mongoose.Schema({
//   gmail: { type: String, required: true },
  
// });

// export interface GmailUser extends mongoose.Document {
  
    
//     gmail: string;
 
// }
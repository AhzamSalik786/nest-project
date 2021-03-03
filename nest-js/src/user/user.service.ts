import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.model';
import * as bcrypt from 'bcrypt';
import generateToken from './generateToken';
@Injectable()

export class UserService {
  private user: User[] = [];

  constructor(
    @InjectModel('User') private readonly userModel: Model<User>,
  ) {}
//////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////
  async matchUser( email: string, password: string) {
      
    const user = await this.userModel.findOne({ email })
    console.log("user data", this.userModel)
    console.log("user datapass", user.password)
    if(user && ( await bcrypt.compareSync(password,user.password))  ){
        console.log("login complete", user)
        console.log("Token",  generateToken(user.email))
        return {
            _id: user._id,
                name: user.name,
                email: user.email,
                token: generateToken(user.email),
              }
            }
      return null

    // } else {
    //         //   res.status(401)
    //           // throw new Error('Invalid email or password')
    //         }

   

  }
 

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  async insertUser(name: string, email: string, password: string) {
    
var hash =  await bcrypt.hashSync(password,10);
console.log("hash", hash)
    const newUser = new this.userModel({
      name,
      email,
      password:hash,
    });
    const result = await newUser.save();
    console.log(result);
    return result.id as string;
  }



//   async getProducts() {
//     const products = await this.productModel.find().exec();
//     // console.log(result);
//     return products.map((prod) => ({
//       id: prod.id,
//       title: prod.title,
//       description: prod.description,
//       price: prod.price,
//     }));
//   }
//   async getSingleProduct(productId: string) {
//     const product = await this.findProduct(productId);
//     return {
//       // product,
//             id: product.id,
//       title: product.title,
//       description: product.description,  
//       price: product.price,
//     };
//   }

//   async updateProduct(
//     productId: string,
//     title: string,
//     desc: string,
//     price: number,
//   ) {
//     const updatedProduct = await this.findProduct(productId);
//     // const [product, index] = this.findProduct(productId);

//     // const updateProduct = { ...product };
//     if (title) {
//       updatedProduct.title = title;
//     }
//     if (desc) {
//       updatedProduct.description = desc;
//     }
//     if (price) {
//       updatedProduct.price = price;
//     }
//     updatedProduct.save();
//   }
//   async deleteProduct(prodId: string) {
//     const result = await this.productModel.deleteOne({_id: prodId}).exec();
//     // console.log(result)
//     if(result.n === 0 ) {
//       throw new NotFoundException('Could Not Find Product.');
//     }
//     // const index = this.findProduct(prodId)[1];
//     // await this.products.splice(index, 1);
//   }

//   private async findProduct(id: string): Promise<any> {
//     let product;
//     try {
//       product = await this.productModel.findById(id);
//     } catch (error) {
//       if (!product) {
//         throw new NotFoundException('Could Not Find Product.');
//       }
//     }
//     // const productIndex = this.products.findIndex((prod) => prod.id == id);
//     // const product = this.products[productIndex];
//     return product;
//   }
}

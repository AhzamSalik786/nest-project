import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { generate } from 'rxjs';
// import { get } from 'http';
// import { generate } from 'rxjs';

import { UserService } from './user.service';

@Controller('user' )

export class UserController {
  constructor(private readonly userService: UserService) {}
  //Regeiter a new user
  //@route  POST /user/register
  //@access  public
  @Post('/register')
  async addUser(
    @Body('name') userName: string,
    @Body('email') userEmail: string,
    @Body('password') userpassword: string,
  ) {
    const generatedId = await this.userService.insertUser(
      userName,
      userEmail,
      userpassword,
    );
    return { id: generatedId };
  }
  //  Auth user & get token
  //@route  POST /user/login
  //@access  public

  @Post('/login')
  async checkUser(
    @Body('email') userEmail: string,
    @Body('password') userpassword: string,
  ) {
    const generatedId = await this.userService.matchUser(
      userEmail,
      userpassword,
    );
    return {
      user: 'user is valid ',
      userData:  generatedId,
      // _id: user._id,
      // name: user.name,
      // email: user.email,
      // isAdmin: user.isAdmin,
      // token: generateToken(user._id),
      // token: userEmail.token
    };
  }
 
  // const authUser = asyncHandler(async (req, res) => {
  //     const { email, password } = req.body

  //     const user = await User.findOne({ email })

  //     if (user && (await user.matchPassword(password))) {
  //       res.json({
  //         _id: user._id,
  //         name: user.name,
  //         email: user.email,
  //         isAdmin: user.isAdmin,
  //         token: generateToken(user._id),
  //       })
  //     } else {
  //       res.status(401)
  //       throw new Error('Invalid email or password')
  //     }
  //   })

  // @Get()
  // async getAllProducts() {
  //   const products = await this.productsService.getProducts();
  //   return products;
  // }
  // @Get(':id')
  // getProduct(@Param('id') prodId: string) {
  //   return this.productsService.getSingleProduct(prodId);
  // }
  // @Patch(':id')
  // async updateProduct(
  //   @Param('id') prodId: string,
  //   @Body('title') prodTitle: string,
  //   @Body('description') prodDesc: string,
  //   @Body('price') prodPrice: number,
  // ) {
  //   await this.productsService.updateProduct(prodId, prodTitle, prodDesc, prodPrice);
  //   return null;
  // }

  // @Delete(':id')
  // async removeProduct(@Param('id') prodId: string) {
  //   await this.productsService.deleteProduct(prodId);
  //   return null;
  // }
}

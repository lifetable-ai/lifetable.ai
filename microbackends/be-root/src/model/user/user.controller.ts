import { Controller, Post, Body } from '@nestjs/common';
import { User as UserModel } from '@prisma/client';
import { UserService } from './user.service';

@Controller('fakeauth')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async signupUser(
    @Body()
    userData: {
      username: string;
      email: string;
      password: string;
      rePassword: string;
    },
  ) {
    if (userData.password !== userData.rePassword) {
      return {
        success: false,
        message: 'password & rePassword not equal',
      };
    }
    return this.userService.createUser(userData);
  }

  @Post('check')
  async checkUser(
    @Body()
    userData: {
      email: string;
      password: string;
    },
  ) {
    return this.userService.checkUser(userData);
  }
}

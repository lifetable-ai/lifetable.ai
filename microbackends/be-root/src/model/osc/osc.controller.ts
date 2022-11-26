import {
  Controller,
  Get,
  Body,
  Post,
  Headers,
  // UseGuards,
} from '@nestjs/common';
import { OscService } from './osc.service';
import { UserService } from '../user/user.service';
// import { JwtAuthGuard } from 'src/util/auth/guards/jwt-auth.guard';

@Controller('app/osc')
export class OscController {
  constructor(
    private readonly userService: UserService,
    private readonly oscService: OscService,
  ) {}

  // @UseGuards(JwtAuthGuard)
  @Get()
  async getAllOscByEmail(
    @Headers('email') email: string,
    @Headers('password') password: string,
  ) {
    const { success } = await this.userService.checkUser({ email, password });
    if (!success) {
      return { success: false };
    }
    return this.oscService.getAllOscByEmail(email);
  }

  // @UseGuards(JwtAuthGuard)
  @Post()
  async createOsc(
    @Body() oscData: { name: string },
    @Headers('email') email: string,
    @Headers('password') password: string,
  ) {
    const { name } = oscData;
    const { success } = await this.userService.checkUser({ email, password });
    if (!success) {
      return { success: false };
    }
    return this.oscService.createOsc({
      name: name,
      email: email,
      created_time: new Date().toISOString(),
      updated_time: new Date().toISOString(),
      // user: {
      //   connect: { username: username },
      // },
    });
  }
}

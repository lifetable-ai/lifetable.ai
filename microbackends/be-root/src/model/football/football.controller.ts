import {
  Controller,
  Get,
  Body,
  Post,
  Headers,
  // UseGuards,
} from '@nestjs/common';
import { FootballService } from './football.service';
import { UserService } from '../user/user.service';
// import { JwtAuthGuard } from 'src/util/auth/guards/jwt-auth.guard';

@Controller('app/football')
export class FootballController {
  constructor(
    private readonly userService: UserService,
    private readonly footballService: FootballService,
  ) {}

  // @UseGuards(JwtAuthGuard)
  @Get()
  async getAllFootballByEmail(
    @Headers('email') email: string,
    @Headers('password') password: string,
  ) {
    const { success } = await this.userService.checkUser({ email, password });
    if (!success) {
      return { success: false };
    }
    return this.footballService.getAllFootballByEmail(email);
  }

  // @UseGuards(JwtAuthGuard)
  @Post()
  async createFootball(
    @Body() footballData: { name: string },
    @Headers('email') email: string,
    @Headers('password') password: string,
  ) {
    const { name } = footballData;
    const { success } = await this.userService.checkUser({ email, password });
    if (!success) {
      return { success: false };
    }
    return this.footballService.createFootball({
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

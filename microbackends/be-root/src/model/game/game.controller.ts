import {
  Controller,
  Get,
  Body,
  Post,
  Headers,
  // UseGuards,
} from '@nestjs/common';
import { GameService } from './game.service';
import { UserService } from '../user/user.service';
// import { JwtAuthGuard } from 'src/util/auth/guards/jwt-auth.guard';

@Controller('app/game')
export class GameController {
  constructor(
    private readonly userService: UserService,
    private readonly gameService: GameService,
  ) {}

  // @UseGuards(JwtAuthGuard)
  @Get()
  async getAllGameByEmail(
    @Headers('email') email: string,
    @Headers('password') password: string,
  ) {
    const { success } = await this.userService.checkUser({ email, password });
    if (!success) {
      return { success: false };
    }
    return this.gameService.getAllGameByEmail(email);
  }

  // @UseGuards(JwtAuthGuard)
  @Post()
  async createGame(
    @Body() gameData: { name: string },
    @Headers('email') email: string,
    @Headers('password') password: string,
  ) {
    const { name } = gameData;
    const { success } = await this.userService.checkUser({ email, password });
    if (!success) {
      return { success: false };
    }
    return this.gameService.createGame({
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

import {
  Controller,
  Get,
  Body,
  Post,
  Headers,
  // UseGuards,
} from '@nestjs/common';
import { FilmService } from './film.service';
import { UserService } from '../user/user.service';
// import { JwtAuthGuard } from 'src/util/auth/guards/jwt-auth.guard';

@Controller('app/film')
export class FilmController {
  constructor(
    private readonly userService: UserService,
    private readonly filmService: FilmService,
  ) {}

  // @UseGuards(JwtAuthGuard)
  @Get()
  async getAllFilmByEmail(
    @Headers('email') email: string,
    @Headers('password') password: string,
  ) {
    const { success } = await this.userService.checkUser({ email, password });
    if (!success) {
      return { success: false };
    }
    return this.filmService.getAllFilmByEmail(email);
  }

  // @UseGuards(JwtAuthGuard)
  @Post()
  async createFilm(
    @Body() filmData: { name: string },
    @Headers('email') email: string,
    @Headers('password') password: string,
  ) {
    const { name } = filmData;
    const { success } = await this.userService.checkUser({ email, password });
    if (!success) {
      return { success: false };
    }
    return this.filmService.createFilm({
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

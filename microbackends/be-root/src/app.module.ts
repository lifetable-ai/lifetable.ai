import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FilmController } from './model/film/film.controller';
import { FilmService } from './model/film/film.service';
import { FootballController } from './model/football/football.controller';
import { FootballService } from './model/football/football.service';
import { GameController } from './model/game/game.controller';
import { GameService } from './model/game/game.service';
import { OscController } from './model/osc/osc.controller';
import { OscService } from './model/osc/osc.service';
import { TimelineController } from './model/timeline/timeline.controller';
import { TimelineService } from './model/timeline/timeline.service';
import { UserController } from './model/user/user.controller';
import { UserService } from './model/user/user.service';
import { PrismaService } from './util/prisma/prisma.service';
// import { AuthService } from './util/auth/auth.service';
// import { AuthModule } from './util/auth/auth.module';
// import { AuthController } from './util/auth/auth.controller';

@Module({
  // imports: [AuthModule],
  imports: [],
  controllers: [
    // AuthController,
    AppController,
    UserController,
    GameController,
    FilmController,
    OscController,
    FootballController,
    TimelineController,
  ],
  providers: [
    AppService,
    UserService,
    GameService,
    FilmService,
    OscService,
    FootballService,
    TimelineService,
    PrismaService,
    // AuthService,
  ],
})
export class AppModule {}

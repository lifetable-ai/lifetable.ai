import { Module } from '@nestjs/common';
import { PrismaService } from 'src/util/prisma/prisma.service';
import { UserController } from '../user/user.controller';
import { UserService } from '../user/user.service';
import { FilmService } from './film.service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService, FilmService, PrismaService],
})
export class FilmModule {}

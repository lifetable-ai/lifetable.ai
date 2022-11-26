import { Body, Injectable } from '@nestjs/common';
import { PrismaService } from '../../util/prisma/prisma.service';
import { Film, Prisma } from '@prisma/client';

@Injectable()
export class FilmService {
  constructor(private prisma: PrismaService) {}

  async getAllFilmByEmail(email) {
    return await this.prisma.film.findMany({
      where: { email },
    });
  }

  async createFilm(@Body() data) {
    return this.prisma.film.create({
      data,
    });
  }
}

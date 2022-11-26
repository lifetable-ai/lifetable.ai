import { Body, Injectable } from '@nestjs/common';
import { PrismaService } from '../../util/prisma/prisma.service';
import { Game, Prisma } from '@prisma/client';

@Injectable()
export class GameService {
  constructor(private prisma: PrismaService) {}

  async getAllGameByEmail(email) {
    return await this.prisma.game.findMany({
      where: { email },
    });
  }

  async createGame(@Body() data) {
    return this.prisma.game.create({
      data,
    });
  }
}

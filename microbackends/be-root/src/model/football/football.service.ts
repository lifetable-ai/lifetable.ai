import { Body, Injectable } from '@nestjs/common';
import { PrismaService } from '../../util/prisma/prisma.service';
import { Football, Prisma } from '@prisma/client';

@Injectable()
export class FootballService {
  constructor(private prisma: PrismaService) {}

  async getAllFootballByEmail(email) {
    return await this.prisma.football.findMany({
      where: { email },
    });
  }

  async createFootball(@Body() data) {
    return this.prisma.football.create({
      data,
    });
  }
}

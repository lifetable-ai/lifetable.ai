import { Body, Injectable } from '@nestjs/common';
import { PrismaService } from '../../util/prisma/prisma.service';

@Injectable()
export class OscService {
  constructor(private prisma: PrismaService) {}

  async getAllOscByEmail(email) {
    return await this.prisma.osc.findMany({
      where: { email },
    });
  }

  async createOsc(@Body() data) {
    return this.prisma.osc.create({
      data,
    });
  }
}

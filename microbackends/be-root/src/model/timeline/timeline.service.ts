import { Body, Injectable } from '@nestjs/common';
import { PrismaService } from '../../util/prisma/prisma.service';
import { Timeline, Prisma } from '@prisma/client';

@Injectable()
export class TimelineService {
  constructor(private prisma: PrismaService) {}

  async getAllTimelineByEmail(email) {
    return await this.prisma.timeline.findMany({
      where: { email },
    });
  }

  async createTimeline(
    @Body() data: Prisma.TimelineCreateInput,
  ): Promise<Timeline> {
    return this.prisma.timeline.create({
      data,
    });
  }
}

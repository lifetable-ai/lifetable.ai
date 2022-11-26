import {
  Controller,
  Get,
  Body,
  Post,
  Headers,
  // UseGuards,
} from '@nestjs/common';
import { TimelineService } from './timeline.service';
import { UserService } from '../user/user.service';
// import { JwtAuthGuard } from 'src/util/auth/guards/jwt-auth.guard';

@Controller('app/timeline')
export class TimelineController {
  constructor(
    private readonly userService: UserService,
    private readonly timelineService: TimelineService
  ) {}

  // @UseGuards(JwtAuthGuard)
  @Get()
  async getAllTimelineByEmail(
    @Headers('email') email: string,
    @Headers('password') password: string,
  ) {
    const { success } = await this.userService.checkUser({ email, password });
    if (!success) {
      return { success: false };
    }
    return this.timelineService.getAllTimelineByEmail(email);
  }

  // @UseGuards(JwtAuthGuard)
  @Post()
  async createTimeline(
    @Body() timelineData: { start_time: string },
    @Headers('email') email: string,
    @Headers('password') password: string,
  ) {
    const { start_time } = timelineData;
    const { success } = await this.userService.checkUser({ email, password });
    if (!success) {
      return { success: false };
    }
    return this.timelineService.createTimeline({
      start_time: start_time,
      email: email,
      created_time: new Date().toISOString(),
      updated_time: new Date().toISOString(),
      // user: {
      //   connect: { username: username },
      // },
    });
  }
}

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../util/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createUser({ email, username, password }) {
    const user = await this.prisma.user.create({
      data: {
        email,
        username,
        password,
        created_time: new Date().toISOString(),
        updated_time: new Date().toISOString(),
      },
    });
    if (user && user.id) {
      return { success: true };
    } else {
      return { success: false };
    }
  }

  async checkUser({ email, password }) {
    const user = await this.prisma.user.findFirstOrThrow({
      where: { email },
    });
    if (user && user.password === password) {
      await this.prisma.user.update({
        data: { last_login_time: new Date().toISOString() },
        where: { email },
      });
      return { success: true };
    } else {
      return {
        success: false,
        data: 'Auth Info ERROR',
      };
    }
  }
}

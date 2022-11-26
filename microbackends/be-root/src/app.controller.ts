import { Controller } from '@nestjs/common';
import { UserService } from './model/user/user.service';

@Controller()
export class AppController {
  constructor(private readonly userService: UserService) {}
}

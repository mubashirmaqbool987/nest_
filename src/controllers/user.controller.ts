import { databaseProviders } from './../database/database.provider';
import { UserService } from './../providers/user.service';
import { Controller, Get } from '@nestjs/common';


@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUserInfo(): any {
    return this.userService.getHello();
  }
}

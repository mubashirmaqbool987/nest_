import { UserService } from './../providers/user.service';
import { Controller, Get } from '@nestjs/common';


@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getHello(): string {
    return "user get service";
  }
}

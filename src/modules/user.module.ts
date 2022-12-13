import { UserService } from './../providers/user.service';
import { UserController } from './../controllers/user.controller';

import { Module } from '@nestjs/common';


@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}

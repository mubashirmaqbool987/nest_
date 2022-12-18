import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';
import * as constant from '../shared/constant';
import * as models from '../models/index';

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    UserRepository,
    {
      provide: constant.USER_REPOSITORY,
      useValue: models.User
    }
  ]
})
export class UserModule { }

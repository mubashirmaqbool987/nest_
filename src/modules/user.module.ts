import { UserRepo } from './../repositories/user.repo';
import { InfoModule } from './info.module';
import { UserService } from './../providers/user.service';
import { UserController } from './../controllers/user.controller';

import { Module } from '@nestjs/common';


@Module({
  imports: [InfoModule],
  controllers: [UserController],
  providers: [UserService,UserRepo],
})
export class UserModule {}

import { UserRepo } from './../repositories/user.repo';
import { InfoModule } from './info.module';
import { UserService } from './../providers/user.service';
import { UserController } from './../controllers/user.controller';

import { Module } from '@nestjs/common';
import { usersRepositoryProviders } from 'src/repositories/user.repository.provider';


@Module({
  imports: [InfoModule],
  controllers: [UserController],
  providers: [UserService,UserRepo,...usersRepositoryProviders],
})
export class UserModule {}

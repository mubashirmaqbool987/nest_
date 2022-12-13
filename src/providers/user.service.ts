import { UserRepo } from './../repositories/user.repo';
import { InfoService } from './info.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(
    private readonly infoService: InfoService,
    private readonly userRepo : UserRepo
    ) {
  }
  getHello(): any {
   return this.userRepo.getFilter();
  }
}

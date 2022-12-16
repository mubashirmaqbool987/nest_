import { USER_REPOSITORY } from '../shared/constant';
import { Inject, Injectable } from "@nestjs/common";
import { User } from 'src/models/user.model';
@Injectable()
export class UserRepo{
    constructor(
        @Inject('USER_REPOSITORY')
        private userModelRepository: typeof User
    ){}

    public getFilter(){
        
      return this.userModelRepository.findAll();
    }
}
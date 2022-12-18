import { Injectable } from '@nestjs/common';
import { UserDto } from 'src/dtos/user.dto';
import { UserRepository } from './user.repository';
@Injectable()
export class UserService {
    constructor(
        readonly __userRepository : UserRepository
    ){}

    createUser(data:UserDto){
        try {
            return this.__userRepository.createUser(data);
        } catch (error) {
            throw error;
        }
    }

    async getUserList(data:any){
        try {
            const userList = await this.__userRepository.filterUsers();
            return userList;
        } catch (error) {
            throw error;   
        }
    }
}

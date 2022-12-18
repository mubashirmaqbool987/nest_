import { Inject, Injectable } from '@nestjs/common';
import * as constant from '../shared/constant';
import * as models from '../models/index';
import * as typings from '../shared/interfaces';
import { UserDto } from 'src/dtos/user.dto';
@Injectable()
export class UserRepository {
    joinsCluse = {};
    constructor(
        @Inject(constant.USER_REPOSITORY)
        private __userModel: typeof models.User
    ) { }

    public async createUser(data: UserDto, __trasactions?: typings.SequelizeTrasactions): Promise<models.User> {
        return this.__userModel.create<models.User>({ ...data }, { transaction: __trasactions })
    }

    public async filterUsers(whereClause?: typings.ANY, options?: typings.ANY) {
        return this.__userModel.findAll(
            {
                where: { ...whereClause },
                ...options
            }
        );
    }

    public async filterUser(whereClause?: typings.ANY, options?: typings.ANY): Promise<typings.ANY> {
        return this.__userModel.findOne(
            {
                where: { ...whereClause },
                ...options
            }
        );
    }

    public async updateUserById(whereFields: typings.ANY, toBeUpdatedFields: typings.ANY, __transaction: typings.SequelizeTrasactions): Promise<typings.ANY> {
        return this.__userModel.update(
            {
                ...toBeUpdatedFields
            },
            {
                where: { ...whereFields },
                transaction: __transaction
            }
        )
    }
}
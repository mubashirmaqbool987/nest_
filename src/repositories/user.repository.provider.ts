import { User } from "../models/user.model";
import { USER_REPOSITORY } from "../shared/constant";

export const usersRepositoryProviders = [{
    provide: USER_REPOSITORY,
    useValue: User,
}];
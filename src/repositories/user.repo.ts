import { Injectable } from "@nestjs/common";

@Injectable()
export class UserRepo{
    constructor(){}

    public getFilter(){
        return { filter : "true" }
    }
}
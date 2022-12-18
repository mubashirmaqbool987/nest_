import { Controller, Post, Req, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { Request, Response, RequestHandler, response } from 'express';
import { Get } from '@nestjs/common/decorators';
import * as typings from '../shared/interfaces';

@Controller('user')
export class UserController {
    constructor(
        readonly __userService: UserService
    ) { }

    @Post()
    createUser(@Req() req: Request, @Res() res: Response): Promise<RequestHandler> {
        try {
            const { body } = req;
            const reponse: any = this.__userService.createUser(body);
            res.status(200).json({ result: { data: {}, message: 'SUCCESS' } });
            return undefined;
        } catch (error) {
            res.status(400).json({ error: error });
        }
    }

    @Get()
    async getUserList(@Req() req: Request, @Res() res: Response):Promise<typings.ANY> {
        try {
            const { body } = req;
            const response: any = await this.__userService.getUserList(body);
            console.log(response);
            res.status(200).json({ result: { data: response }, message: "SUCCESS" });
        } catch (error) {

        }
    }
}

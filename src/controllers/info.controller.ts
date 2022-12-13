import { Controller, Get } from '@nestjs/common';


@Controller('info')
export class InfoController {
  constructor() {}

  @Get()
  getHello(): any {
    return { msg: "info get service" };
  }
}

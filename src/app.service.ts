import { Injectable } from '@nestjs/common';
import sequelize from 'sequelize';
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

import { InfoService } from './../providers/info.service';
import { InfoController } from './../controllers/info.controller';
import { Module } from '@nestjs/common';


@Module({
  imports: [],
  controllers: [InfoController],
  providers: [InfoService],
  exports:[InfoService]
})
export class InfoModule {}

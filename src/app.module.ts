import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BodyBase } from './until/body.xml.base';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService,BodyBase],
})
export class AppModule {}

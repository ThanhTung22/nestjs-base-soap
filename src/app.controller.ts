import { Controller, Get, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { BodyBase } from './config/body.xml.base';
import * as dotenv from "dotenv";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly bodyBase: BodyBase) {
    dotenv.config();
  };

  @Post()
  postXmlRequest(@Req() req): any {
    const data = this.bodyBase.bodyXml(req.body.field);
    const result = this.appService.sendHttpRequest('POST', process.env.URL, data);
    return result;
  };
}

import { Controller, Get, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { BodyBase } from './until/body.xml.base';
import * as dotenv from "dotenv";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    private readonly bodyBase: BodyBase) {
    dotenv.config();
  };

  @Post()
  postXmlRequest(@Req() req): any {
    const number = req.body.data.number;
    const tag = req.body.data.tag;
    const data = this.bodyBase.bodyXml(number, tag);
    const result = this.appService.sendHttpRequest('POST', process.env.URL, data);
    return result;
    ;
  };
}

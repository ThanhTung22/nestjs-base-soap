import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post()
  postXmlRequest(): any {
    const data = `<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
    <soap:Body>
      <NumberToWords xmlns="http://www.dataaccess.com/webservicesserver/">
        <ubiNum>2000</ubiNum>
      </NumberToWords>
    </soap:Body>
  </soap:Envelope>`;
    const result = this.appService.sendHttpRequest('POST','https://www.dataaccess.com/webservicesserver/NumberConversion.wso',data);
    return result;
  };
}

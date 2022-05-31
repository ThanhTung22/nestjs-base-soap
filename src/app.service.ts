import { Injectable } from '@nestjs/common';
import { Req, Res } from '@nestjs/common';
import { rejects } from 'assert';
import { resolve } from 'path';
const XMLHttpRequest = require('xhr2');

@Injectable()
export class AppService {
  sendHttpRequest(method, url, data) {
    const promise = new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.open(method, url);

      if (data) {
        xhr.setRequestHeader('Content-Type', 'text/xml; charset=utf-8');
      };

      xhr.onload = () => {
        if (xhr.status >= 400) {
          reject(xhr.response);
        } else {
          resolve(xhr.response);
        }
      };

      xhr.onerror = () => {
        reject('Something went wrong!');
      };

      xhr.send(data);
    });
    return promise;
  }
}

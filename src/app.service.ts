import { Injectable } from '@nestjs/common';
import * as XMLHttpRequest from 'xhr2';
import { parseString } from "xml2js";

@Injectable()
export class AppService {
  sendHttpRequest(method, url, data) {
    const promise = new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.open(method, url);

      if (data) {
        xhr.setRequestHeader('Content-Type', 'text/xml; charset=utf-8');
      };

      xhr.send(data);

      xhr.onload = () => {
        if (xhr.status >= 400) {
          reject(xhr.response);
        } else {
          const data = xhr.response;
          parseString(data, { mergeAttrs: true }, (err, jsonData) => {
            resolve(jsonData);
          });
          // resolve(data);
        }
      };

      xhr.onerror = () => {
        reject('Something went wrong!');
      };
    });
    return promise;
  };
}

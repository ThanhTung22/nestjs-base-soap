import { AxiosRequestConfig } from 'axios'
import { parseString } from 'xml2js';


export interface CustomResponse {
    data : any
}

export const requestConfig: AxiosRequestConfig = {
    headers: {
      'Content-Type': 'application/xml',
      'Authorization': 'Qk9PU1R8MjAyMi0wNi0wMiAxMToyMzowMHx3YVA2Rzh2dVBwOTM2ZGpiZFNlcWgrNC9yNTR3V01wN1dhVGZiUlBKNC9VPQ=='
    }
  };


  export const testData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ws="http://integrasistg.ssm.com.my/BusinessServices/2/WS">
  <soapenv:Header/>
  <soapenv:Body>
      <ws:findBusinessByBrNo>
          <header>
              <customerId>BOOST</customerId>
              <customerReferenceNo>MBDDtest</customerReferenceNo>
              <customerRequestDate>2022-06-02T00:00:00.00</customerRequestDate>
          </header>
          <request>
              <param>
                  <agencyBranchCode>KL</agencyBranchCode>
                  <brNo>MA0242661</brNo>
              </param>
          </request>
      </ws:findBusinessByBrNo>
  </soapenv:Body>
</soapenv:Envelope>`


export const xmlStringToObject = async (data) => parseString(testData, function (err, result) {
    console.log('jjjj# ' + JSON.stringify(result))
    return result;
})


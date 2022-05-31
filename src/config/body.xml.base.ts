export class BodyBase {
    bodyXml(field): String {
        const data = `<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
                        <soap:Body>
                          <NumberToWords xmlns="http://www.dataaccess.com/webservicesserver/">
                            <ubiNum>${field}</ubiNum>
                          </NumberToWords>
                        </soap:Body>
                      </soap:Envelope>`;
        return data;
    };
}
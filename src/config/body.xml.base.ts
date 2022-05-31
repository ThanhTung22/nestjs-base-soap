export class BodyBase {
    bodyXml(field,tag): String {
        const data = `<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
                        <soap:Body>
                          <NumberToWords xmlns="http://www.dataaccess.com/webservicesserver/">
                            <${tag}>${field}</${tag}>
                          </NumberToWords>
                        </soap:Body>
                      </soap:Envelope>`;
        return data;
    };
}
const chromium = require("chrome-aws-lambda");
const Handlebars = require('handlebars');

exports.create = (html, data) => {
    return new Promise(async (resolve, reject) => {
        let browser = await chromium.puppeteer.launch({
            args: chromium.args,
            defaultViewport: chromium.defaultViewport,
            executablePath: await chromium.executablePath,
            headless: chromium.headless,
            ignoreHTTPSErrors: true,
        });
        /**
         * 
         */
        const template = Handlebars.compile(html);
        const templateFinally = template(data);
        const page = await browser.newPage();
        await page.setContent(templateFinally);
        /**
         *
         */
        const buffer = await page.pdf({
            format: "letter",
            printBackground: true,
            margin: "0.5cm",
        });
        if (!buffer) {
            reject('A failure occurred and the pdf could not be generated.');
        }
        /**
         * 
         */
        resolve(buffer);
    });
}

